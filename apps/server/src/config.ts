const port = +(process.env.PORT || 4500);
const dbHost = process.env.DB_HOST
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const dbPort = process.env.DB_PORT
const dbName = process.env.DB_NAME

export default {
  port,
  dbHost,
  dbPort,
  dbUser,
  dbPass,
  dbName,
}
