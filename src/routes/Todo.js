import express from "express";
import { getTodoById } from "../middleware/getTodoById";
import {
    createTodo,
    getTodo,
    deleteTodo,
    getAllTodos,
    updateTodo,
    getUserTodos
} from "controllers/Todo";
const router = express.Router();

// it will fetch the value from the url
router.param("todoId", getTodoById);

router.get("/todos/", getAllTodos);
router.get("/todos/:userId/", getUserTodos);

router.get("/todo/:todoId/", getTodo);
router.post("/todo/create/", createTodo);
router.put("/todo/:todoId/update/", updateTodo);
router.delete("/todo/:todoId/delete/", deleteTodo);

export default router;
