clean_docker_db:
	docker compose -f docker/docker-compose.yml down --volumes

start_docker_db:
	docker compose -f docker/docker-compose.yml up -d 2someone-db

clean_db_migrations:
	rm -rf ./prisma/migrations

generate_db_client:
	rm -rf ./prisma/client_twosomeone
	./prisma/generate.sh

create_db_migration:
	./prisma/migrate.sh "init"

reinit_db_migration:
	rm -rf ./prisma/migrations
	./prisma/migrate.sh "init"

dev_deploy_db:
	./prisma/migrate_deploy_dev.sh

dbdev: generate_db_client dev_deploy_db

init_db: 
	./prisma/generate.sh
	./prisma/migrate.sh "init"

dev: clean_docker_db start_docker_db wait_for_db dev_deploy_db

wait_for_db:
	sleep 3

clean_dev: clean_db_migrations clean_docker_db start_docker_db wait_for_db init_db
