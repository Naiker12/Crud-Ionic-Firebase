import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TaskTableComponent } from './components/task-table/task-table.component';
import { AddTaskModalComponent } from './components/add-task-modal/add-task-modal.component';
import { TaskSearchComponent } from './components/task-search/task-search.component';


const COMPONENTS = [TaskTableComponent , AddTaskModalComponent , TaskSearchComponent]

const MODULO = [SharedModule]


@NgModule({
  declarations: [...COMPONENTS],
  imports: [
     ...MODULO
  ],
  exports: [...COMPONENTS],
})
export class TaskModule { }
