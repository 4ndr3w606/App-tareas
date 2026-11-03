import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private storageKey = 'ionic_tasks_db';
  private tasks: Task[] = [];

  constructor() {
    this.loadTasks();
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Omit<Task, 'id'>): void {
    const newTask: Task = {
      ...task,
      id: Date.now().toString()
    };
    this.tasks.unshift(newTask);
    this.saveTasks();
  }

  toggleTaskStatus(id: string): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.saveTasks();
    }
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.saveTasks();
  }

  private saveTasks(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.tasks));
  }

  private loadTasks(): void {
    const data = localStorage.getItem(this.storageKey);
    if (data) {
      this.tasks = JSON.parse(data);
    } else {
      // Datos iniciales de prueba
      this.tasks = [
        {
          id: '1',
          title: 'Preparar informe de calidad de software',
          category: 'Proyecto',
          priority: 'alta',
          completed: false,
          dueDate: new Date().toISOString()
        },
        {
          id: '2',
          title: 'Revisar compilación del APK en Android Studio',
          category: 'Estudio',
          priority: 'media',
          completed: true,
          dueDate: new Date().toISOString()
        }
      ];
      this.saveTasks();
    }
  }
}