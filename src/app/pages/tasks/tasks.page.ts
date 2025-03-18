import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TaskService } from 'src/app/core/services/task.service';
import { Task } from 'src/app/interface/task'
import { AddTaskModalComponent } from 'src/app/task/components/add-task-modal/add-task-modal.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
  standalone : false
})
export class TasksPage implements OnInit {

  tasks!: Task[];
  filteredTasks: Task[] = [];

  constructor(
    private taskService: TaskService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
      console.log(this.tasks);
    });
    this.loadTasks();
  }

  async openAddTaskModal() {
    const modal = await this.modalCtrl.create({
      component: AddTaskModalComponent
    });
    await modal.present();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
      this.filteredTasks = [...this.tasks]; 
    });
  }
  
  
  filterTasks(searchTerm: string) {
  
    if (!searchTerm.trim()) {
      this.filteredTasks = [...this.tasks];
      return;
    }
  
    this.filteredTasks = this.tasks.filter(task =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  
  
  

}
