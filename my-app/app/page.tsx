import { dummyData } from "@/lib/DummyData";

export default function Home() {
  const todos = dummyData;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to ToDo App</h1>
      <ul className="mt-8 space-y-4">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center space-x-4">
            <input
              type="checkbox"
              checked={todo.completed}
              readOnly
              className="w-6 h-6"
            />
            <span className={todo.completed ? "line-through" : ""}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}