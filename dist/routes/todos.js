"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
let todos = [];
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/', (req, res, next) => {
    const todo = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
    todos.push(todo);
    res.status(201).json({ message: "todo successfully created!" });
});
router.put('/:todoId', (req, res, next) => {
    const todoId = req.params.todoId;
    const todoIndex = todos.findIndex(todo => { todo.id == todoId; });
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todoId, text: req.body.text };
        res.status(200).json({ message: "todo successfully updated!" });
    }
    res.status(404).json({ message: "todo to update not found!" });
});
router.delete('/:todoId', (req, res, next) => {
    const todoId = req.params.todoId;
    todos = todos.filter(todo => { todo.id == todoId; });
    res.status(200).json({ message: "todo successfully deleted!" });
});
exports.default = router;
