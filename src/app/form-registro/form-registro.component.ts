import { Component, inject } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldAppearance, MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { SeleccionIngredientesComponent } from '../seleccion-ingredientes/seleccion-ingredientes.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-registro',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    SeleccionIngredientesComponent
  ],
  templateUrl: './form-registro.component.html',
  styleUrl: './form-registro.component.scss'
})
export class FormRegistroComponent {

  appearance: MatFormFieldAppearance = 'outline';
  router: Router = inject(Router)

  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    edad: ['', Validators.required],
    peso: ['', Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    email: ['', Validators.required],
    telefono: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  });
  thirdFormGroup = this._formBuilder.group({
    ingredientes: ['', Validators.required],
    alergias: ['']
  });
  isLinear = false;


  navigate() {
    this.router.navigate(['/'])
  }
}
