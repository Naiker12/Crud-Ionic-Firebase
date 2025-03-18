import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-search',
  templateUrl: './task-search.component.html',
  styleUrls: ['./task-search.component.scss'],
  standalone : false
})
export class TaskSearchComponent  implements OnInit {
  searchTerm: string = '';

  @Output() searchEvent = new EventEmitter<string>();

  onSearch() {
    this.searchEvent.emit(this.searchTerm.trim());
  }
  

  constructor() { }

  ngOnInit() {}

}
