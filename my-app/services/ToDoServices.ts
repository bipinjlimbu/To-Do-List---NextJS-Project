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

export async function getTodoById(id: number) {
    try {
        const [data] = await db.query('SELECT * FROM todos WHERE id = ?', [id]);
        return data;
    } catch (error) {
        console.error('Error fetching todo by ID:', error);
        throw error;
    }
}

export async function updateTodo(id: number, updatedFields: TypeToDo) {
    try {
        const [data] = await db.query('UPDATE todos SET title = ?, completed = ? WHERE id = ?', [
            updatedFields.title,
            updatedFields.completed,
            id
        ]);
        return data;
    } catch (error) {
        console.error('Error updating todo:', error);
        throw error;
    }
}

export async function statusUpdate(id: number, completed: boolean) {
    try {
        const [data] = await db.query('UPDATE todos SET completed = ? WHERE id = ?', [completed, id]);
        return data;
    } catch (error) {
        console.error('Error updating todo status:', error);
        throw error;
    }
}

export async function deleteTodo(id: number) {
    try {
        const [data] = await db.query('DELETE FROM todos WHERE id = ?', [id]);
        return data;
    } catch (error) {
        console.error('Error deleting todo:', error);
        throw error;
    }
}