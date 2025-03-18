import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { TaskService } from './services/task.service';

@NgModule({
  imports: [
      CommonModule,
  ],
  providers : [TaskService]
})
export class CoreModule {
  constructor() {}
}
