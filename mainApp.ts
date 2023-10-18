import express, { Application, Request, Response } from "express";
import cors from "cors";




export const mainApp = (app: Application) => {
    app.use(express.json())
    .use(cors({
        origin: "*",
        methods: ["GET", "POST", "PATCH", "DELETE"],
    }))

    .get("/", (req:Request, res:Response) => {
          try {
            return res.json({
                message: "Welcome!!!"
            })
          } catch (error) {
            console.log(error)
          }
    })

    //  .use("/api/v1/"auth)
}