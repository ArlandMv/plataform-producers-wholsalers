import {Pool} from 'pg' 
import dotenv from 'dotenv'    
dotenv.config()

export const pool = new Pool({
    user: process.env.PG_USER,
    host: 'localhost',
    password: process.env.PG_PASS,
    database: 'perndb',
    port: 5432
})

//psql -h localhost -p 5432 -U postgres perndb 
 