import { Sequelize } from "sequelize"

const DB_NAME = "dvdrental"
const DB_USER = "postgres"
const DB_PASSWORD = ""

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: "localhost",
  dialect: "postgres",
  define: {
    freezeTableName: true
  }
})

export default sequelize
