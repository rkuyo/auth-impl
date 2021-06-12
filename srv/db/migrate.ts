import { db } from "./client"
import { resolve } from "path"

export async function migrate() {
  try {
    await latest()
    process.exit(0)
  } catch (err) {
    console.error({ err }, `failed to migrate`)
    process.exit(-1)
  }
}

async function latest() {
  await db().migrate.latest({
    directory: resolve(__dirname, "migrations"),
    extension: "js",
  })

  const curVer = await db().migrate.currentVersion()
  console.log(`migrated to ${curVer}`)
}

migrate()
