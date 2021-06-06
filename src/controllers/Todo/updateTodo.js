export const updateTodo = (req, res) => {
    let todo = req.todo;
    todo.deadline = req.body.deadline;
    todo.task = req.body.task;
    todo.category = req.body.category;
    todo.status = req.body.status;

    todo.save((err, t) => {
        if (err || !t) {
            return res.status(400).json({
                error: "something went wrong while updating",
            });
        }
        res.json(t);
    });
};
