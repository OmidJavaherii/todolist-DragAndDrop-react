
```js
export type TaskStatus = 'todo' | 'in-progress' | 'done';

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  startedAt?: number; // timestamp when moved to in-progress
}


```