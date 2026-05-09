import Todo from "../Model/Todo.js";

export const createtodo = async (req,res)=> {
try {
    const {text} = req.body
    const newtodo = await Todo.create({
        text,
    })
    res.status(201).json(newtodo)
} catch (error) {
    res.json("error")
}
}
export const gettodos = async (req,res)=>{
    try {
        const todos = await Todo.find().sort({createdAt: -1});
        res.status(200).json(todos)
    } catch (error) {
        res.json("error")
    }
}
export const updateTodo = async (req,res)=>{
    try {
        const {id} = req.params;
        const updateTodos = await Todo.findByIdAndUpdate(
            id,
            req.body,
            {new: true}
        )
        if (!updateTodos) {
            res.json("not found")
        }
        res.json(updateTodos)
    } catch (error) {
        res.json("error")
    }
}
export const deleteTodo = async (req,res)=>{
    try {
        const {id} = req.params
        const deleteTodos = await Todo.findByIdAndDelete(id)
        if (!deleteTodos) {
            res.json("Not Deleted")
        }
    } catch (error) {
        res.json("error")
    }
}