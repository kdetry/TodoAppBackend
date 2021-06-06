import Todo from "/models/Todo";

export const createTodo = (req, res) => {
    const todo = new Todo(req.body);

    todo.save((err, task) => {
        if (err || !task) {
            return res.status(400).json({
                error: err ? err : "something went wrong while creating",
            });
        }

        res.json({ task });
    });
};
