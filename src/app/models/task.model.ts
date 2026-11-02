export type TaskPriority = 'alta' | 'media' | 'baja';
export type TaskCategory = 'Estudio' | 'Proyecto' | 'Rutina';

export interface Task {
  id: string;
  title: string;
  description?: string;
  category: TaskCategory;
  priority: TaskPriority;
  completed: boolean;
  dueDate: string; // Formato ISO
}