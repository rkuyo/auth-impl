import { db } from "./client"

export namespace Schema {
  export interface User {
    user_id: string
    created_at: Date
    username: string
    hash: string
  }
}

export const tables = {
  users: "users",
}

export const table = {
  raw: db().raw.bind(db),
  users: <T = Schema.User>() => db().table<Schema.User, T>(tables.users),
}
