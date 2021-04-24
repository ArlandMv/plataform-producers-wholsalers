//funciones para manipular users aka CRUD 
import {RequestHandler,Request,Response} from 'express'  
import User from '../models/User'
import {QueryResult} from 'pg'
import { pool } from '../database'


//CREATE POST
export const createUser: RequestHandler = async (req:Request, res:Response):Promise<Response>  =>{
    try {
        //verify req.body
        const {rut,dv,nombre,apellidopno,apellidomno,email,contrasena,cell} = req.body; 
        const resp = await pool.query('INSERT INTO USERS (rut,dv,nombre,apellidopno,apellidomno,email,contrasena,cell) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)',[rut,dv,nombre,apellidopno,apellidomno,email,contrasena,cell])
        
        return res.status(200).json('user created')
    } catch (error) { return res.status(500).json(error) }
}
//LIST GET
export const getUsers: RequestHandler = async (req:Request, res:Response):Promise<Response> =>{
    try {
        const results:QueryResult = await pool.query('SELECT * FROM users')
        return res.status(200).json(results.rows)
        
    } catch (error) {
        console.log('getUsers ERROR:');
        console.log(error)
        return res.status(500).json('Internal Server '+error)
    }
}
//LIST ONE GET
export const getUser: RequestHandler = async (req:Request, res:Response):Promise<Response> =>{
    try {
        const rut:String = (req.params.id)
        const userByRut = await pool.query(`SELECT * FROM users WHERE rut = ${rut}`) //

        if ((userByRut.rows).length===0) {
            return res.status(204).json('No user found')
        }
        return res.json(userByRut) 
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}
//HARD-DELETE DELLETE
export const hardDeleteUser: RequestHandler = async (req, res) =>{
    try {
        const rut:String = (req.params.id)
        const result = await pool.query(`DELETE FROM users WHERE rut = ${rut}`) 
        if (result.rowCount===1){ return res.json(`rut ${rut} deleted`) } 
        return res.json('no user with that rut') 
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

//UPDATE PUT
export const updateUser: RequestHandler = async (req, res) =>{
    try {
        //verify req.body
        const {rut,nombre,apellidopno,apellidomno,email,contrasena,cell} = req.body; 
        const resp = await pool.query('UPDATE users nombre=$1,apellidopno=$2, apellidomno=$3, email=$4, contrasena=$5, cell=$6 WHERE rut = $7',[nombre,apellidopno,apellidomno,email,contrasena,cell,rut])
        
        return res.status(200).json('user created')
    } catch (error) { return res.status(500).json(error) }
}