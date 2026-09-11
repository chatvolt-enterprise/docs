start:
	docker compose up --build

dev:
	npx mint dev

install:
	npm install

lint:
	npx mint validate

broken-links:
	npx mint broken-links

.PHONY: start dev install lint broken-links
