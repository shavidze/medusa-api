dev-build:
	@docker compose -f dev/docker-compose.yml down
	rm -rf ../node_modules
	@docker volume rm store-api_postgres_data > /dev/null 2>&1 || true
	@docker volume rm store-api-node_modules > /dev/null 2>&1 || true
	@docker compose -f dev/docker-compose.yml build

dev-up:
	@docker compose -f dev/docker-compose.yml up -d

dev-down:
	@docker compose -f dev/docker-compose.yml down -v

dev-postgres-build:
	@docker stop store-api_db || true
	@docker rm store-api_db || true
	@docker volume rm store-api_db_data || true
	@docker compose -f dev/docker-compose.yml up --build db -d
