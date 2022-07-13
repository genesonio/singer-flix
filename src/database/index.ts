import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'singerflix_database',
  username: 'singerflix',
  password: 'singerflix',
  define: {
    underscored: true // snake_case on db to camelCase on JS
  }
})