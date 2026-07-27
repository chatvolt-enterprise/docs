start:
	docker compose up --build

dev:
	mintlify dev

install:
	npm i -g mintlify

.PHONY: start dev install
