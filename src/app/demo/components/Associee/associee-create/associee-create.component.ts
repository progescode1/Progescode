import { Component } from '@angular/core';
import { Associe } from 'src/app/demo/api/Associe';

@Component({
  selector: 'app-associee-create',

  templateUrl: './associee-create.component.html',
  styleUrl: './associee-create.component.scss'
})
export class AssocieeCreateComponent {
  newAssocie: Associe = {
      id: 0,
      nom: '',
      prenom: '',
      email: '',
      telephone: ''
  };

  constructor() {}

  // Fonction pour créer un nouvel associé
  createAssocie() {
      // Logique de création ici
      console.log('Nouvel associé :', this.newAssocie);
  }}