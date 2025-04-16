import { Task } from "../types/Task";
import { useEffect, useRef, useState } from "react";
import { getElapsedTime, getDurationBetween } from "../utils/time";
import { useTasks } from "../context/TaskContext";

export default function TaskCard({ task }: { task: Task }) {
  const [time, setTime] = useState("");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { deleteTask } = useTasks();

  useEffect(() => {
    if (task.status === "in-progress" && task.startedAt) {
      const updateTime = () => {
        setTime(getElapsedTime(task.startedAt!));
      };
      updateTime();
      intervalRef.current = setInterval(updateTime, 1000);
      return () => clearInterval(intervalRef.current!);
    }
    return () => clearInterval(intervalRef.current!);
  }, [task.status, task.startedAt]);

  const handleClick = () => {
    if (task.status === "done") {
      const confirmDelete = window.confirm("آیا از حذف این تسک مطمئنی؟");
      if (confirmDelete) deleteTask(task.id);
    }
  };

  return (
    <div
      className="border p-4 rounded-xl bg-white shadow-md cursor-move hover:shadow-lg transition-all duration-300"
      draggable={task.status !== "done"}
      onDragStart={(e) => e.dataTransfer.setData("text/plain", task.id)}
      onClick={handleClick}
    >
      <h3 className="font-semibold text-lg text-gray-800 mb-1">{task.title}</h3>
      {task.status === "in-progress" && task.startedAt && (
        <p className="text-sm text-blue-600">⏱ {time}</p>
      )}
      {task.status === "done" && task.doneAt && task.startedAt && (
        <div className="text-sm text-green-600 space-y-1">
          <p>✅ Done at: {new Date(task.doneAt).toLocaleTimeString()}</p>
          <p>🕒 Duration: {getDurationBetween(task.startedAt , task.doneAt)}</p>
        </div>
      )}
    </div>
  );
}
