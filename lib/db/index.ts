import {neon, neonConfig} from "@neondatabase/serverless"
import {drizzle} from "drizzle-orm/neon-http"

neonConfig.fetchConnectionCache = true

if(!process.env.NEON_DB_URL) {
    throw new Error("NEON_DB_URL is not set")
}

const sql=neon(process.env.NEON_DB_URL)

export const db=drizzle(sql);