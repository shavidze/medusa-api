start_db: 
	docker-compose up --build -d
stop_db:
	docker-compose down

delete_db:
	docker-compose down -v
