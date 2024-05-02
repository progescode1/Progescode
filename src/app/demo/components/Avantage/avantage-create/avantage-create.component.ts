import { Component } from '@angular/core';
import { Avantage } from 'src/app/demo/api/Avantage';

@Component({
  selector: 'app-avantage-create',

  templateUrl: './avantage-create.component.html',
  styleUrl: './avantage-create.component.scss'
})
export class AvantageCreateComponent {
selectedStatus!:any[]
status :any[]=[
  { name: "actif", code: "MB" },
  { name: "inactif", code: "FB" },
 
]


  newAvantage: Avantage = {
    id: 0,
    avantage: '',
    statut: 'active' // Par défaut, le statut est défini sur 'actif'
  };

  constructor() { }

  createAvantage() {
    // Logique pour créer un nouvel avantage ici
    console.log('Nouvel avantage créé : ', this.newAvantage);
    // Réinitialiser le nouvel avantage après la création
    this.resetNewAvantage();
  }

  resetNewAvantage() {
    // Réinitialiser les valeurs de nouvel avantage
    this.newAvantage = {
      id: 0,
      avantage: '',
      statut: 'active' // Réinitialiser le statut à 'actif'
    };
  }}
