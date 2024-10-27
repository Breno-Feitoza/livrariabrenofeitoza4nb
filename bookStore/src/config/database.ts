import { Pool } from "pg";

const connectionString =
  "postgresql://postgres:JphtLLBaZPmRLxVPuNcSnwqQJNLoWcSU@junction.proxy.rlwy.net:36200/railway";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;
