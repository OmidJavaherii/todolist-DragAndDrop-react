import { Task } from '../types/Task';

const STORAGE_KEY = 'kanban-tasks';

export const loadTasks = (): Task[] => {
  try {
    const json = localStorage.getItem(STORAGE_KEY);
    console.log('Loaded from localStorage:', json); // Debug log
    
    if (!json) {
      console.log('No tasks found in localStorage, returning empty array');
      return [];
    }
    
    const parsed = JSON.parse(json);
    console.log('Parsed tasks:', parsed); // Debug log
    
    if (!Array.isArray(parsed)) {
      console.error('Invalid data in localStorage, expected array');
      return [];
    }
    
    // Validate each task
    const validTasks = parsed.filter((task: any) => {
      const isValid = task && 
        typeof task.id === 'string' && 
        typeof task.title === 'string' && 
        ['todo', 'in-progress', 'done'].includes(task.status);
      
      if (!isValid) {
        console.warn('Invalid task found:', task);
      }
      return isValid;
    });
    
    console.log('Valid tasks:', validTasks); // Debug log
    return validTasks;
  } catch (error) {
    console.error('Error loading tasks:', error);
    return [];
  }
};

export const saveTasks = (tasks: Task[]) => {
  try {
    console.log('Saving tasks:', tasks); // Debug log
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error('Error saving tasks:', error);
  }
};