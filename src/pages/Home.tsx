import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';
import { StyleSheet, View } from "react-native";

interface Task {
    id: number;
    title: string;
    done: boolean;
}

export function Home() {
    const [ tasks, setTasks ] = useState<Task[]>([]);
    const [ darkTheme, setDarkTheme ] = useState(false);

    function changeTheme() {
        setDarkTheme(!darkTheme);
    }

    function handleAddTask(newTaskTitle: string) {
        if (newTaskTitle) {

            const task: Task = {
                id: new Date().getTime(),
                title: newTaskTitle,
                done: false
            }

            setTasks(oldState => [ ...oldState, task ]);
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
        <View style={ !darkTheme ? styles.container : styles.containerDark }>
            <Header darkTheme={ darkTheme } changeTheme={ changeTheme }/>

            <TodoInput addTask={ handleAddTask } darkTheme={ darkTheme }/>

            <MyTasksList
                tasks={ tasks }
                onPress={ handleMarkTaskAsDone }
                onLongPress={ handleRemoveTask }
                darkTheme={ darkTheme }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    containerDark: {
        flex: 1,
        backgroundColor: '#1F1F1F'
    }
})
