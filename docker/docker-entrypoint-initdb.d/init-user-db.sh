#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
	CREATE USER dummy WITH PASSWORD 'dummy';
	GRANT ALL PRIVILEGES ON DATABASE dummydb TO dummy;
EOSQL
