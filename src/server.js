import express from 'express'
import rootRouter from './routers/index.js'
import { graphqlHTTP } from 'express-graphql'
import schema from './graphql/schema.js'

const app = express()
const port = process.env.PORT || 5003

app.use('/api', rootRouter)

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema: schema,
}))

app.get('/', async (req, res) => {
  res.send('Sample Movies API')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})