import { DataSource } from "typeorm";
import "dotenv/config"

export const AppDataSource = new DataSource(
  process.env.NODE_ENV === "test" ?
  {
    type: "sqlite",
    database: ":memory:",
    synchronize: true,
    entities: ["src/entities/*.ts"]
  }
  :
  {
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRESS_DB,
    synchronize: false,
    logging: true,
    entities: ["src/entities/*.ts"],
    migrations: ["src/migrations/*.ts"],
  }
);
