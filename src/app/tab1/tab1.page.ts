import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalController, IonItemOptions, IonItemOption, IonIcon, IonFab, IonFabButton, IonItem, IonItemSliding, IonList, IonContent, IonSegmentButton, IonLabel, IonToolbar, IonSegment, IonTitle, IonHeader, IonBadge, IonCheckbox } from '@ionic/angular';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';
import { AddTaskModalComponent } from '../components/add-task-modal/add-task-modal.component';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [CommonModule, FormsModule, IonItemOptions, IonItemOption, IonIcon, IonFab, IonFabButton, IonItem, IonItemSliding, IonList, IonContent, IonSegmentButton, IonLabel, IonToolbar, IonSegment, IonTitle, IonHeader, IonBadge, IonCheckbox]
})
export class Tab1Page {
  selectedFilter: string = 'todas';

  constructor(
    private taskService: TaskService,
    private modalCtrl: ModalController
  ) {}

  get filteredTasks(): Task[] {
    const tasks = this.taskService.getTasks();
    if (this.selectedFilter === 'pendientes') {
      return tasks.filter(t => !t.completed);
    }
    if (this.selectedFilter === 'completadas') {
      return tasks.filter(t => t.completed);
    }
    return tasks;
  }

  toggleTask(id: string): void {
    this.taskService.toggleTaskStatus(id);
  }

  removeTask(id: string): void {
    this.taskService.deleteTask(id);
  }

  async openAddTaskModal(): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: AddTaskModalComponent
    });

    await modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm' && data) {
      this.taskService.addTask(data);
    }
  }
}
