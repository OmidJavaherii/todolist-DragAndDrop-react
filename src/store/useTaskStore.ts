import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Task } from '../types/Task';
import { v4 as uuidv4 } from 'uuid';

interface TaskStore {
  tasks: Task[];
  addTask: (title: string) => void;
  moveTask: (id: string, status: Task['status']) => void;
  setTasks: (tasks: Task[]) => void;
}

export const useTaskStore = create<TaskStore>()(
  persist(
    (set, get) => ({
      tasks: [],

      addTask: (title) => {
        const newTask: Task = {
          id: uuidv4(),
          title,
          status: 'todo',
          createdAt: new Date().toISOString(),
        };
        set({ tasks: [...get().tasks, newTask] });
      },

      moveTask: (id, newStatus) => {
        set({
          tasks: get().tasks.map((task) => {
            if (task.id === id) {
              return {
                ...task,
                status: newStatus,
                startedAt:
                  newStatus === 'in-progress' && !task.startedAt
                    ? new Date().toISOString()
                    : task.startedAt,
              };
            }
            return task;
          }),
        });
      },

      setTasks: (tasks) => set({ tasks }),
    }),
    {
      name: 'task-storage',
      version: 1,
      partialize: (state) => ({ tasks: state.tasks }),
    }
  )
);
