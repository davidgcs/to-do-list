import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { firstValueFrom, map, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ToDo } from '../../models/todo.model';

@Component({
  selector: 'app-todo',
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnInit {
  api = inject(ApiService);
  data!: ToDo[];

  async ngOnInit() {
    this.data = await firstValueFrom(
      this.api.get()
    );
  }

  changeStatus(id: number) {
    let found = this.data.find(i => i.id == id);
    if(found) found.completed = !found.completed;
    this.data.sort((a,b)=>Number(a.completed)-Number(b.completed))
  }
}
