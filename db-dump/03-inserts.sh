#!/bin/sh

set -e

"${psql[@]}" <<- 'EOSQL'
INSERT INTO "public"."question"("id","createdAt","updatedAt","type","primary","secondary")
VALUES
(2,NULL,NULL,E'Math',NULL,NULL);

INSERT INTO "public"."answer"("id","questionId","answerText","correct","percentCorrect")
VALUES
(1,2,E'10',FALSE,0.48),
(2,2,E'11',FALSE,0.2),
(3,2,E'12',TRUE,0.15),
(4,2,E'13',FALSE,0.1);

EOSQL
