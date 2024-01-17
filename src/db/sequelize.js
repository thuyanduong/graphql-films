import { Sequelize } from "sequelize"

const sequelize = new Sequelize("dvdrental", "postgres", "", {
  host: "localhost",
  dialect: "postgres",
  define: {
    freezeTableName: true,
  },
})

export default sequelize
