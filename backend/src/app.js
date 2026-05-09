import express from "express";
import cors from 'cors'
import router from "./Routes/TodoRoutes.js";

const app = express()
router.route('/route',router)

app.use(cors())
app.use(express.json())
app.use('/api/todos', router)
export default app