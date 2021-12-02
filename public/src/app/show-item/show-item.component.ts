import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../tasks/task.service';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.css']
})
export class ShowItemComponent implements OnInit {
  @Input() showItem: any;

  constructor( private _taskService: TaskService ) { }

  ngOnInit(): void {
  }

}
