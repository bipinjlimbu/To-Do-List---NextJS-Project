import { getTodoById, updateTodo, deleteTodo } from "@/services/ToDoServices";

export async function GET(request: Request, ctx: RouteContext<"/api/todos/[id]">) {
    const { id } = await ctx.params;
    try {
        const todo = await getTodoById(Number(id));
        return Response.json(todo);
    } catch (error) {
        return Response.json({ error: "Failed to fetch todo" }, { status: 500 });
    }
}

export async function PUT(request: Request, ctx: RouteContext<"/api/todos/[id]">) {
    const { id } = await ctx.params;
    const updatedFields = await request.json();

    try {
        const updatedTodo = await updateTodo(Number(id), updatedFields);
        return Response.json(updatedTodo);
    } catch (error) {
        return Response.json({ error: "Failed to update todo" }, { status: 500 });
    }
}

export async function DELETE(request: Request, ctx: RouteContext<"/api/todos/[id]">) {
    const { id } = await ctx.params;
    try {
        await deleteTodo(Number(id));
        return Response.json({ message: "Todo deleted successfully" });
    } catch (error) {
        return Response.json({ error: "Failed to delete todo" }, { status: 500 });
    }
}