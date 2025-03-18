import { NgModule } from '@angular/core';
import { TasksPageRoutingModule } from './tasks-routing.module';

import { TasksPage } from './tasks.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { TaskModule } from 'src/app/task/task.module';

@NgModule({
  imports: [
    TasksPageRoutingModule,
    SharedModule,
    TaskModule
  ],
  declarations: [TasksPage]
})
export class TasksPageModule {}
