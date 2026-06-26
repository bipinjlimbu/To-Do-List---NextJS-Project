import { NextRequest, NextResponse } from "next/server";
import { getTodos, addTodo } from "@/services/ToDoServices";

export async function GET(req: NextRequest) {
    try {
        const todos = await getTodos();
        return NextResponse.json(todos);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch todos" }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const { title } = await req.json();
        const newTodo = await addTodo(title);
        return NextResponse.json(newTodo);
    } catch (error) {
        return NextResponse.json({ error: "Failed to add todo" }, { status: 500 });
    }
}