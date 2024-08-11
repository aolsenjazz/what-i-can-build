# Overview
The intent of this monorepo is to show prospective employers (hopefully you) how I write code, and my capabilities as a full stack engineer. This repo will be a constant WIP, but will always be ready-to-build and running in a production environment.

I'm pretty good with a number of other technologies/patterns (like [Electron](github.com/aolsenjazz/super-controller) or [WebAudio](github.com/aolsenjazz/libsamplerate-js)), so please note that this project doesn't represent _all_ of my skills - just the most broad, foundational ones!

## Run the local development environment
Every application in this repo is completely containerized; even the development environment runs in its own docker container. In addition, we run 2 more docker containers for MySQL. They can all be stopped/started using `docker compose up` and `docker compose down`

```
# Assuming docker compose v2. If using v1, use docker-compose
git clone https://github.com/aolsenjazz/what-i-can-build
cd what-i-can-build
docker compose up -d # build all service containers
docker compose exec api_server npm run seed # seed the API database
```

## Architecture, structure and technologies
This project uses Github actions for CI/CD. It's secured using intelligent AWS security settings and making use of environment variables at every layer of the application.

### Frontend
- Typescript, React, Redux (modern redux-toolkit), MaterialUI
- Leverages modern features of all of those libraries
- Performance optimizations as time goes on

### Backend
- Microservices architecture (API/auth/websocket servers)
- Node, Express, TypeORM, JWT
- Deployed via AWS (EC2, RDS, Route53, Amazon MQ, Amazon Parameter Store)

If you have any questions about anything here, please reach out!
