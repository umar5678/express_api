import express from "express";
import tasks from "./routes/tasks_routes.js"

const app = express();
const PORT = 3000;

// middlewares
app.use(express.json())


// routes

app.use("/api/v1/tasks", tasks)

app.get("/", (req, res) => {
    res.send("Helo")
})



// app.get("/api/v1/tasks")         - get all tasks
// app.post("/api/v1/tasks")        - create a new task
// app.get("/api/v1/tasks/:id")     - get single task
// app.patch("/api/v1/tasks/:id")   - update single task
// app.delete("/api/v1/tasks/:id")  - delete single task

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}...`);
});
