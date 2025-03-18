import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/app/core/services/task.service';
import { Task } from 'src/app/interface/task';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.scss'],
  standalone : false
})
export class AddTaskModalComponent {

  @Input() task!: Task | null;
  taskForm: FormGroup;

  constructor(

    private fb: FormBuilder,
    private taskService: TaskService,
    private modalCtrl: ModalController

  ) {

    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      done: [false],
    });

  }

  ngOnInit() {

    if (this.task) {
      this.taskForm.patchValue(this.task);
    }

  }

  async saveTask() {
    if (this.taskForm.invalid) return;

    const taskData: Task = {
      ...this.task,
      ...this.taskForm.value
    };

    if (this.task) {

      await this.taskService.updateTask(taskData);
      
    } else {

      await this.taskService.addTask(taskData);
    }

    this.modalCtrl.dismiss();
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
