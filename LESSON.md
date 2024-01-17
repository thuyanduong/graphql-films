# Transitioning from a REST API to GraphQL

## What is GraphQL?

GraphQL (Graph Query Language) is a syntax used by API consumers to request or mutate data from an API provider.

Can be thought of as an alternative to REST APIs OR as an add-on to provide API Consumers more flexibilty and control over the data fetched. 

## Example REST API

`/api/films`      => returns basic info for 100 most recent films
`/api/films/:id`  => returns in-depth info for a single film



## Benefits

1. Eliminates over-fetching and under-fetching
2. Single, flexible endpoint that fit a variety of API consumers' needs
3. Allows APIs to evole faster, quicker experimental features
4. Legacy compatible by adding fields to the Graph

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
