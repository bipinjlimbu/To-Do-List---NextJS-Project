import { db } from "@/db/index";

export async function getTodos() {
    try {
        const [data] = await db.query('SELECT * FROM todos');
        return data;
    } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
    }
}

export async function addTodo(title: string) {
    try {
        const [data] = await db.query('INSERT INTO todos (title, completed) VALUES (?, ?)', [title, false]);
        return data;
    } catch (error) {
        console.error('Error adding todo:', error);
        throw error;
    }
}