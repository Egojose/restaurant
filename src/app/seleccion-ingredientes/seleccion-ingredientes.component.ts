import { Component, Output, EventEmitter } from '@angular/core';
import ingredientes from '../ingredientes';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldAppearance, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-seleccion-ingredientes',
  standalone: true,
  imports: [MatSelectModule,MatFormFieldModule, FormsModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './seleccion-ingredientes.component.html',
  styleUrl: './seleccion-ingredientes.component.scss'
})
export class SeleccionIngredientesComponent {

  appearance: MatFormFieldAppearance = 'outline';

  @Output() seleccionados: EventEmitter<any> = new EventEmitter()

  ingredientes = new FormControl('');
  ingredientesList: string[] = ingredientes;

}
