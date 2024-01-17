# Transitioning from a REST API to GraphQL

## What is GraphQL?

GraphQL stands for Graph Query Language used by API consumers to request the exact data needed from an API provider. 

## Benefits

1. Eliminates over-fetching and under-fetching
2. Single, flexible endpoint that fit a variety of API consumers' needs
3. Legacy compatible by adding fields to the Graph
4. Fast iteration for API Consumers and providers 

## Code Demo

Rather then demoing a GraphQL server, we'll look at building a GraphQL Layer on top of a legacy REST API.

`/api/films` => `query {
                   films
                 }`
`/api/films/1` => `query{
                    film (id: 1)
                }`

## Feature Building

## Summary and Value Proposition

#### When not to use GraphQL
