import { Component, OnInit } from '@angular/core';
import { Debour } from 'src/app/demo/api/Debour';

@Component({
  selector: 'app-debour-create',
 
  templateUrl: './debour-create.component.html',
  styleUrl: './debour-create.component.scss'
})
export class DebourCreateComponent implements OnInit {
  newDebour: Debour = { id: '', date: new Date(), libelle: '', entreeTND: 0, sortieTND: 0, disponibleTND: 0 }; // Initialisation de newDebour avec les propriétés de l'interface Debour

  constructor() { }

  ngOnInit(): void {
  }

  // Méthode pour créer un nouveau débour
  createDebour() {
    // Implémentez votre logique ici pour créer un nouveau débour en utilisant les données dans newDebour
    console.log('Nouveau débour créé : ', this.newDebour);
  }
}
