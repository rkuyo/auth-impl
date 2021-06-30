# node-auth
JWT authentication server implementation with Node. 

Includes a React demo.

### Inclusions
- Docker
- Postgres
- Node
- Express
- jsonwebtoken
- Knex.js
- React (demo)
- Redux (demo)

### Scripts 
*Run these in order on initial setup.*
- Create the Postgres instance in Docker: `yarn db`
- Migrate the database to the latest schema: `yarn migrate`
- Start the server: `yarn start`
- Serve the demo app: `yarn serve`
