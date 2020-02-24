import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

// Services
import { DataCompromisosService } from '../../services/data-compromisos.service';

// Models
import { ModelCompromisos } from '../../models/model-compromisos';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.css']
})
export class ListTableComponent implements OnInit {

  compromisos: ModelCompromisos[] = [];

  // Método para manejar el Drag And Drop
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.compromisos, event.previousIndex, event.currentIndex);
  }

  constructor(private services: DataCompromisosService, private router: Router) { }

  ngOnInit() {

    // Nos subscribimos al servicio para obtener los datos
    this.services.getCompromisos().subscribe((resp: any) => {
      this.compromisos = resp.body.data;
    })

  }

  // Evento para crear un nuevo documento 'Compromiso'
  create() {
    this.router.navigate(['/create'])
  }

  // Método para obtener la fecha
  getDate(fecha) {
    const date = new Date(fecha);
    return date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate();
  }

}
