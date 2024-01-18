## Set Up Steps

1. This demo app uses the [Pagila database](https://github.com/devrimgunduz/pagila). Download a copy of the database to your local Postgres.
2. Clone down the repo.
3. Update the file `src/db/sequelize.js` with your local database information.
2. Run `npm install`.
3. Run `npm run dev` to start the API.

## Endpoints

REST API Endpoints

- `/api/films`
- `/api/films/:id`
- `/api/languages`
- `/api/languages/:id`
- `/api/categories`
- `/api/categories/:id`
- `/api/actors`
- `/api/actors/:id`

GraphQL Endpoint

- `/graphql`
