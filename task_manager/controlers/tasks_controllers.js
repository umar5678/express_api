const getAllTasks = (req, res) => {
res.send("All taks are here ")
}

const createTask = (req, res) => {
    res.json(req.body)
}

const getSingleTask = (req, res) => {
  res.send(`get single task of id: ${req.params.id}`);
};

const UpdateTask = (req, res) => {
  res.send(`update single task of id: ${req.params.id}`);
};

const deleteSingleTask = (req, res) => {
  res.send(`delete single task of id: ${req.params.id}`);
};

export {getAllTasks, createTask, getSingleTask,UpdateTask , deleteSingleTask}