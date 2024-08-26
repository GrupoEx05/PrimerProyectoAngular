import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from './pages/components/shared/footer/footer.component';
import { HeaderComponent } from './pages/components/shared/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'UtnApp';
  nombre='Yadrick'; // ESTE ES UN EJEMPLO CREADO EN CLASE
  edad:number=50;
}
