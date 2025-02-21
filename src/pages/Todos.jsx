import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <Card className="w-[750px]">
        <CardHeader>
          <CardTitle>To-Do List</CardTitle>
          <CardDescription>Manage your daily tasks efficiently.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={addTodo}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="task"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  placeholder="Enter a new task"
                />
              </div>
              <Button type="submit">Add Task</Button>
            </div>
          </form>
          <ul className="mt-4 space-y-2">
            {todos.map((todo, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-2 bg-gray-100 rounded-md shadow"
              >
                {todo}
                <Button
                  variant="outline"
                  onClick={() => removeTodo(index)}
                >
                  Remove
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="outline" onClick={() => setTodos([])}>Clear All</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Todos;