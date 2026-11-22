-- 押された回数の記録。1日、種類、入口、押された箇所、送り先、区や市の組み合わせごとに1行。
CREATE TABLE IF NOT EXISTS counts (
  day TEXT NOT NULL, ev TEXT NOT NULL, tab TEXT NOT NULL DEFAULT '', place TEXT NOT NULL DEFAULT '',
  dest TEXT NOT NULL DEFAULT '', muni TEXT NOT NULL DEFAULT '', n INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (day, ev, tab, place, dest, muni)
);
