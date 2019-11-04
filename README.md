# Practicing new libraries & frameworks, particularly react and graphql + apollo

This is a full stack app with a client, server and postgres database run in docker

## Tech Stack Notables

Frontend
- create-react-app (react + webpack bundle)
- emotion.js (css in js)
- apollo client (state management and api)
- framer (animation)

Backend
- apollo server
- sequelize
- postgres

## Installation

To run the app, run these commands from the root. Make sure to run the server and client in two separate terminal windows

```bash
docker-compose up -d
```

```bash
cd demo/server && yarn && yarn start
```

```bash
cd demo/client && yarn && yarn start
```
