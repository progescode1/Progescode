import { Component, OnInit } from '@angular/core';
import { Banque } from 'src/app/demo/api/Banque';

@Component({
  selector: 'app-banque-create',

  templateUrl: './banque-create.component.html',
  styleUrl: './banque-create.component.scss'
})
export class BanqueCreateComponent implements OnInit {
  selectedService: string[] = [];
  Service:any[]=[];
  newBanque: Banque = {
    id: 0, // Vous pouvez initialiser id à 0 ou à null, selon la logique de votre application
    nom: '',
    adresse: '',
    contacts: '',
    servicesOfferts: ''
  };

  constructor() { }
  ngOnInit(): void {
    this.Service =[
      { name: "Audit", code: "AUD" },
      { name: "Gestion des finances", code: "GF" },
      { name: "Comptabilité générale", code: "CG" },
      { name: "Contrôle de gestion", code: "CGE" },
      { name: "Analyse financière", code: "AF" }
    ]
  }

  // Méthode pour créer une nouvelle banque
  createBanque() {
    // Ici, vous pouvez implémenter la logique pour créer une nouvelle banque en utilisant this.newBanque
    console.log('Nouvelle banque:', this.newBanque);
    // Réinitialisez newBanque pour effacer les champs après la création
    this.newBanque = {
      id: 0, // Réinitialisez l'id si nécessaire
      nom: '',
      adresse: '',
      contacts: '',
      servicesOfferts: ''
    };
  }}