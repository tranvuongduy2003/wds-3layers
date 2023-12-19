import { config } from 'dotenv'

config({ path: `.env` })

// eslint-disable-next-line no-undef
export const { NODE_ENV, PORT, HOST_NAME } = process.env
// eslint-disable-next-line no-undef
export const { DB_DATABASE, DB_USER, DB_PASS, DB_HOST, DB_PORT } = process.env
