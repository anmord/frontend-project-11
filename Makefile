develop:
	npx vite --port 3000

install:
	npm ci

build:
	NODE_ENV=production npm run build

test:
	npm test

lint:
	npx eslint .

.PHONY: 
	test

versel:
	npm run build
