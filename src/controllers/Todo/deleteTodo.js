export const deleteTodo = (req, res) => {

    const todo = req.todo;

    todo.remove((err, task) => {
        if (err || !task) {
            return res.status(400).json({
                error: "something went wrong while deleting the category",
            });
        }
        // send deleted todo and success message as a json response
        res.json({
            task_deleted: task,
            message: "Todo deleted successfully!",
        });
    });
};
