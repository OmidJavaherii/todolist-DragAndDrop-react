import { useTasks } from '../context/TaskContext';
import TaskCard from './TaskCard';
import { Task } from '../types/Task';
import { useState } from 'react';

const columns: { key: Task['status']; label: string; color: string }[] = [
  { key: 'todo', label: 'To Do', color: 'bg-red-100' },
  { key: 'in-progress', label: 'In Progress', color: 'bg-yellow-100' },
  { key: 'done', label: 'Done', color: 'bg-green-100' },
];

export default function TaskBoard() {
  const { tasks, addTask, moveTask } = useTasks();
  const [input, setInput] = useState('');

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: Task['status']) => {
    const id = e.dataTransfer.getData('text');
    const task = tasks.find((t) => t.id === id);
    if (!task) return;
    if (task.status === 'done') return;
    if (task.status !== status) moveTask(id, status);
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (input.trim()) addTask(input.trim());
          setInput('');
        }}
        className="flex gap-2 justify-center"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add new task"
          className="border p-2 rounded-lg w-2/3 shadow"
        />
        <button type="submit" className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700">
          Add
        </button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map(({ key, label, color }) => (
          <div
            key={key}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, key)}
            className={`${color} p-4 rounded-xl min-h-[350px] space-y-3 shadow-inner`}
          >
            <h2 className="font-bold text-xl mb-2 text-gray-700">{label}</h2>
            {tasks.filter((t) => t.status === key).map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
