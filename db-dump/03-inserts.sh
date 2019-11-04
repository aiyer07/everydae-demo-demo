#!/bin/sh

set -e

"${psql[@]}" <<- 'EOSQL'
INSERT INTO "public"."question"("id","createdAt","updatedAt","type","primary","secondary")
VALUES
(1,NULL,NULL,E'Math',NULL,NULL);

INSERT INTO "public"."answer"("id","questionId","answerText")
VALUES
(1,1,E'10'),
(2,1,E'11'),
(3,1,E'12'),
(4,1,E'13');
EOSQL
