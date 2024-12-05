/*
* File: app.component.ts
* Author: Farkas Richárd
* Copyright: 2024, Farkas Richárd
* Group: Szoft II/2/E
* Date: 2024-12-05
* Github: https://github.com/FRProjects
* Licenc: GNU GPL
*/

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HengerComponent } from "./henger/henger.component";

@Component({
  selector: 'app-root',
  imports: [HengerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hengfel';
}
