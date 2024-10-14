import { Component } from '@angular/core';
import { FormRegistroComponent } from '../../form-registro/form-registro.component';

@Component({
  selector: 'app-registro-page',
  standalone: true,
  imports: [FormRegistroComponent],
  templateUrl: './registro-page.component.html',
  styleUrl: './registro-page.component.scss'
})
export class RegistroPageComponent {

}
