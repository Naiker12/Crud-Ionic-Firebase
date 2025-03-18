import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Task } from 'src/app/interface/task';
import { AddTaskModalComponent } from '../add-task-modal/add-task-modal.component';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss'],
  standalone : false
})
export class TaskTableComponent  implements OnInit {

 @Input() tasks: Task[] = [];


  constructor(
    private taskService: TaskService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
    
  ) { }

  async editTask(task: Task) {
    const modal = await this.modalCtrl.create({
      component: AddTaskModalComponent,
      componentProps: { task }
    });

    await modal.present();
  }

  async deleteTask(taskId: string) {
    await this.taskService.deleteTask(taskId);
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
  

  async confirmDelete(taskId: string) {
    const alert = await this.alertCtrl.create({
      header: '¿Eliminar tarea?',
      message: 'Esta acción no se puede deshacer.',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Eliminar',
          handler: async () => {
            await this.deleteTask(taskId);
          }
        }
      ]
    });
  
    await alert.present();
  }
  
  ngOnInit() {}

}
