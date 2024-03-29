# Should You Transition Your REST API to GraphQL?

## What is GraphQL?

GraphQL (Graph Query Language) is a syntax used by API consumers to request or mutate data from an API provider.

Can be thought of as an alternative to REST APIs 

OR can be an added layer to provide API consumers more flexibility and control over fetching data.

## Example REST API

REST APIs are fantastic! They offer a reliable and intuitive structure for API consumers.

`/api/films` => returns basic info for the most recent films (default is 100 most recent films)

`/api/films/:id` => returns in-depth info for a single film (such as the film's categories and actors)

But there are some drawbacks to REST as (1) your data grows and/or gets more complicated, (2) the number of API consumers and their varying needs grow.

##### Discussion!
One of you API consumers wants in-depth info for the 10 most recent films. What are your options?

## Demo

GraphQL provides a solution. It meets all the requirements of a typical REST API but allows for field selection and custom nested relationships.

## Benefits and Value Proposition

1. Single, flexible endpoint that fits a variety of API consumers' needs
2. Eliminates over-fetching and under-fetching
3. Allows the API to evolve faster to meet the ever-growing needs of your API consumers
4. Can be built on top of a REST API

## If Time Permits: Code Exploration

Rather than demoing a GraphQL-only server, we'll look at a GraphQL Layer built on top of an existing REST API.

## When not to use GraphQL
- GraphQL does not use status codes (always returns 200, even when there are errors)
- If you have a simple REST API, GraphQL will overcomplicate it
- Your API has a small number of consumers and providers

#### Resources
- [Code](https://github.com/thuyanduong/graphql-films)
- Demo API Endpoints
  - `/api/films`
  - `/api/films/:id`
  - `/api/languages`
  - `/api/languages/:id`
  - `/api/categories`
  - `/api/categories/:id`
  - `/api/actors`
  - `/api/actors/:id`