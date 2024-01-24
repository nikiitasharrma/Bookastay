import jwt from "jsonwebtoken"
import { createError } from "./error.js"

export const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token
    if(!token){
        return next(createError(401,"You're not authenticated!"))
    }

    jwt.verify(token, process.env.JWT,(err,user)=>{ //returns either err or information(user)
        if(err) return next(createError(403,"Token is not valid!"))

        req.user = user 
        next()
    })
}

export const verifyUser = (req,res,next)=>{
    verifyToken(req,res,()=>{
        //id passed within jwt token === id passed in the get request
        if((req.user.id === req.params.id) || req.user.isAdmin){
            next()
        }else{
            return next(createError(403,"You are not authorized"))
        }
    })
}

export const verifyAdmin = (req,res,next)=>{
    verifyToken(req,res,()=>{
        //if the info passed in the jwt token contains an admin 
        if(req.user.isAdmin){
            next()
        }else{
            return next(createError(403,"You are not authorized"))
        }
    })
}