// 押された回数と結果の表示回数を受け取る。DB（D1）がつながっていないときは何もせずに返す。
// 個人を特定する情報は保存しない（IPアドレス、端末の情報は記録しない）。
const EV = new Set(["view", "out", "rent"]);
const clip = (v, n) => (typeof v === "string" ? v.slice(0, n).replace(/[^\w\-]/g, "") : "");

export async function onRequestPost({ request, env }) {
  try {
    if (!env.DB) return new Response(null, { status: 204 });
    const d = JSON.parse((await request.text()).slice(0, 500));
    if (!EV.has(d.ev)) return new Response(null, { status: 204 });
    const day = new Date(Date.now() + 9 * 3600 * 1000).toISOString().slice(0, 10); // 日本時間の日付
    await env.DB.prepare(
      "INSERT INTO counts (day, ev, tab, place, dest, muni, n) VALUES (?1, ?2, ?3, ?4, ?5, ?6, 1) " +
      "ON CONFLICT(day, ev, tab, place, dest, muni) DO UPDATE SET n = n + 1"
    ).bind(day, d.ev, clip(d.tab, 20), clip(d.place, 20), clip(d.dest, 20), clip(d.muni, 20)).run();
  } catch (e) {}
  return new Response(null, { status: 204 });
}
