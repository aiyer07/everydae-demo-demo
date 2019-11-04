#!/bin/sh

set -e

"${psql[@]}" <<- 'EOSQL'
CREATE ROLE admin LOGIN;
CREATE ROLE arjun LOGIN;
EOSQL
