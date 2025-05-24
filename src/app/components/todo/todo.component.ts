import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { firstValueFrom, map, tap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnInit {
  api = inject(ApiService);
  data: any = {};

  async ngOnInit() {
    this.data = await firstValueFrom(
      this.api.get().pipe(map((data: any) => data.todos))
    );

    console.log(this.data);
  }

  markAsDone(id: number) {}
}
