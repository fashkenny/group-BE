import express, { Application } from "express"

const port: number = 4500

const app: Application = express()

const server = app.listen(port, () => {
    console.log("")
    console.log("server listening on port", port)
});


process.on("uncaughtException", (error: any) => {
    console.log("uncaught exception", error)

    process.exit(1)
});


process.on("unhandledRejection", (reason: any) => {
    console.log("unhandled rejection", reason)
    server.close(() => {
        process.exit(1)
    });
}); 