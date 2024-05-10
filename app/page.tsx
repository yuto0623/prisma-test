"use client";
import { useState } from "react";

type Todo = {
	id: number;
	title: string;
	completed: boolean;
};

const todos: Todo[] = [
	{ id: 1, title: "todo1", completed: false },
	{ id: 2, title: "todo2", completed: false },
	{ id: 3, title: "todo3", completed: true },
];

export default function Home() {
	const [inputValue, setInputValue] = useState<string | null>(null);

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-3xl font-bold mb-4">Todo</h1>
			{todos.map((todo) => (
				<div
					key={todo.id}
					className="flex items-center justify-between bg-gray-200 p-2 rounded mb-2"
				>
					<div className="flex items-center">
						<input
							type="checkbox"
							checked={todo.completed}
							onChange={() => console.log("completedを更新する処理")}
							className="mr-2"
						/>
						<p className={`text-black ${todo.completed ? "line-through" : ""}`}>
							{todo.title}
						</p>
					</div>
					<button
						onClick={() => console.log("削除する処理")}
						className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
						type="button"
					>
						削除
					</button>
				</div>
			))}
			<form
				onSubmit={() => console.log("追加する処理")}
				className="flex items-center mt-4"
			>
				<input
					type="text"
					className="border border-gray-400 px-4 py-2 mr-2 rounded text-black"
					value={inputValue || ""}
					onChange={(e) => setInputValue(e.target.value)}
					placeholder="Todoを入力してください"
				/>
				<button
					type="submit"
					className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
				>
					追加
				</button>
			</form>
		</div>
	);
}
