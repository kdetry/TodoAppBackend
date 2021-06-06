import Todo from "/models/Todo";

export const getUserTodos = (req, res) => {
    Todo.find({
        userId: req.params.userId
    })
        .sort("-createdAt")
        .exec((err, todos) => {
            // error checking
            if (err || !todos) {
                return res.status(400).json({
                    error: "Something went wrong in finding all todos",
                });
            }
            res.json(todos);
        });
};
