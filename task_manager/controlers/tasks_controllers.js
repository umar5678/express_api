const getAllTasks = (req, res) => {
res.send("All taks are here ")
}

const createTask = (req, res) => {
    res.send("This will create a new task")
}

const getSingleTask = (req, res) => {
  res.send("This will get a single task");
};

const UpdateTask = (req, res) => {
  res.send("it will update a task");
};

const deleteSingleTask = (req, res) => {
  res.send("This will delete a single task");
};

export {getAllTasks, createTask, getSingleTask,UpdateTask , deleteSingleTask}