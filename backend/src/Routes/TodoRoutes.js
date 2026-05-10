import express from "express";
import {
    createtodo,
    gettodos,
    updateTodo,
    deleteTodo
} from '../Controllers/TodoController.js'

const router = express.Router()

router.post("/",createtodo)
router.get("/",gettodos)
router.put("/:id",updateTodo)
router.delete("/:id",deleteTodo)

export default router