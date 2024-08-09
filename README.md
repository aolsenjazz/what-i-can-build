# Overview
The intent of this monorepo is to show prospective employers (hopefully you) how I write code, and my capabilities as a full stack engineer. This repo will be a constant WIP, but will always be ready-to-build and running in a production environment.

I'm pretty good with a number of other technologies/patterns (like [Electron](github.com/aolsenjazz/super-controller) or [WebAudio](github.com/aolsenjazz/libsamplerate-js)), so please note that this project doesn't represent _all_ of my skills - just the most broad, foundational ones!

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
