import express from "express"
import rootRouter from "./routers/index.js"
import { graphqlHTTP } from "express-graphql"
import schema from "./graphql/schema.js"

const app = express()
const port = process.env.PORT || 5005

app.use("/api", rootRouter)

// Create a GraphQL endpoint using the express-graphql module.
// The IDE we'll use to query our server is called graphiql.
// The schema describes the shape of our available data.
app.use("/graphql", graphqlHTTP({ graphiql: true, schema: schema }))

app.get("/", async (req, res) => {
  res.send("Sample Movies API")
})

app.listen(port, () => {
  console.log(`Example app running on http://localhost:${port}`)
})
