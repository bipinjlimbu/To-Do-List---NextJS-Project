import { getTodoById } from "@/services/ToDoServices";

export async function GET(request: Request, ctx: RouteContext<"/api/todos/[id]">) {
    const { id } = await ctx.params;
    try {
        const todo = await getTodoById(Number(id));
        return Response.json(todo);
    } catch (error) {
        return Response.json({ error: "Failed to fetch todo" }, { status: 500 });
    }
}