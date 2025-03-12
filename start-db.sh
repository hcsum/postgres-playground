# Load environment variables from .env file
if [ -f .env ]; then
  export $(cat .env | xargs)
fi

docker run --name postgres-playground-db \
  -e POSTGRES_PASSWORD=$DB_PASSWORD \
  -e POSTGRES_USER=$DB_USER \
  -e POSTGRES_DB=$DB_NAME \
  -p $DB_PORT:5432 \
  --rm \
  -d postgres
