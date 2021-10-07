// Update with your config settings.
const { knexSnakeCaseMappers } = require("objection");

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "objection_tutorial",
      user: "postgres",
      password: "N@tForgotten",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "Knex_migrations",
    },
    seeds: {
      directory: "./seeds ",
    },
    ...knexSnakeCaseMappers,
  },
};
