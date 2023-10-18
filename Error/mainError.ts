import express, { NextFunction, Request, Response } from "express";
import { mainError, HTTP } from "./ErrorBuilder";



 const errorFile = (err: mainError, res: Response) => {
    res.status(HTTP.BAD_REQUEST).json({
        name: err.name,
        message: err.message,
        status: err.status,
        success: err.success,
        stack: err.stack
    });
};

export const errorHandler = (err: mainError, req:Request,res: Response, next:NextFunction) => {
    errorFile(err, res)
}