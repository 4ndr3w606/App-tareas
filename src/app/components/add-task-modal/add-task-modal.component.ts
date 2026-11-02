import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, 
  IonContent, IonItem, IonLabel, IonInput, IonSelect, 
  IonSelectOption, IonDatetime, IonDatetimeButton, IonModal 
} from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { TaskCategory, TaskPriority } from '../../models/task.model';

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader, IonToolbar, IonTitle, IonButtons, IonButton,
    IonContent, IonItem, IonLabel, IonInput, IonSelect,
    IonSelectOption, IonDatetime, IonDatetimeButton, IonModal
  ]
})
export class AddTaskModalComponent {
  title: string = '';
  category: TaskCategory = 'Estudio';
  priority: TaskPriority = 'media';
  dueDate: string = new Date().toISOString();

  constructor(private modalCtrl: ModalController) {}

  cancel(): Promise<boolean> {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm(): Promise<boolean> {
    if (!this.title.trim()) {
      return Promise.resolve(false);
    }

    const newTaskData = {
      title: this.title.trim(),
      category: this.category,
      priority: this.priority,
      completed: false,
      dueDate: this.dueDate
    };

    return this.modalCtrl.dismiss(newTaskData, 'confirm');
  }
}