import { Component } from '@angular/core';
import { Facture } from 'src/app/demo/api/Facture';

@Component({
  selector: 'app-facture-create',

  templateUrl: './facture-create.component.html',
  styleUrl: './facture-create.component.scss'
})
export class FactureCreateComponent  {
  newFacture: Facture = {
    id: 0,
    numFacture: '',
    idClient: '',
    dateFacture: new Date(),
    datePaiement: new Date(),
    nomProduit: '',
    nomService: '',
    quantite: 0,
    prix: 0,
    total: 0,
    tva: 0,
    totalTTC: 0
  };

  constructor() { }

  createFacture() {
    // Logique pour créer une nouvelle facture ici
    console.log('Nouvelle facture créée : ', this.newFacture);
    // Réinitialiser la nouvelle facture après la création
    this.resetNewFacture();
  }

  resetNewFacture() {
    // Réinitialiser les valeurs de la nouvelle facture
    this.newFacture = {
      id: 0,
      numFacture: '',
      idClient: '',
      dateFacture: new Date(),
      datePaiement: new Date(),
      nomProduit: '',
      nomService: '',
      quantite: 0,
      prix: 0,
      total: 0,
      tva: 0,
      totalTTC: 0
    };
  }
}
