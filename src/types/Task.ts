export interface Task {
  id: string;
  title: string;
  status: 'todo' | 'in-progress' | 'done';
  createdAt: string;
  startedAt?: string;
  doneAt?: string;
}