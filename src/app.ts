import express, { Application, json } from "express"
import "express-async-errors"
import middlewares from "./middlewares"
import { movieRouter } from "./routers"

const app: Application = express()
app.use(json())

app.use("/movies", movieRouter)
app.use(middlewares.handleError)
export default app
