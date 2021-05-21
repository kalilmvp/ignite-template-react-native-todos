import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
      if (newTaskTitle) {

        const task: Task = {
            id: new Date().getTime(),
            title: newTaskTitle,
            done: false
        }

        setTasks(oldState => [...oldState, task]);
      }
  }

  function handleMarkTaskAsDone(id: number) {
      // make a copy so you dont change the state directly
      const tasksCopy = tasks.slice();
      let taskToBeEdited: Task = tasksCopy.find(task => task.id === id)!;
      taskToBeEdited.done = !taskToBeEdited.done;

      setTasks(tasksCopy);
  }

  function handleRemoveTask(id: number) {
    setTasks(oldState => oldState.filter(task => task.id !== id));
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  )
}
