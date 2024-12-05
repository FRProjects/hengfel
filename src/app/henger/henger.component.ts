/*
* File: henger.component.ts
* Author: Farkas Richárd
* Copyright: 2024, Farkas Richárd
* Group: Szoft II/2/E
* Date: 2024-12-05
* Github: https://github.com/FRProjects
* Licenc: GNU GPL
*/

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-henger',
  imports: [FormsModule],
  templateUrl: './henger.component.html',
  styleUrl: './henger.component.css'
})
export class HengerComponent {
  radius !: number;
  lenght !: number;
  surface !: number;

  startCalc() {
   this.surface =(2 * Math.PI * this.radius) * (this.radius + this.lenght)
  }
}
