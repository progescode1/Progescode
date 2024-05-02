import { Component, OnInit } from '@angular/core';
import { Cabinet } from 'src/app/demo/api/Cabinet';

@Component({
  selector: 'app-cabinet',

  templateUrl: './cabinet.component.html',
  styleUrl: './cabinet.component.scss'
})
export class CabinetComponent implements OnInit {
  newCabinet: Cabinet = {
    id: null,
    nom: '',
    email: '',
    telephone: '',
    adresse: '',
    siteWeb: '',
    mcnss: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Logique pour soumettre le nouveau cabinet, par exemple, envoyer à un service ou stocker localement
    console.log('Nouveau cabinet créé :', this.newCabinet);
    // Réinitialiser le formulaire après soumission
    this.resetForm();
  }

  resetForm(): void {
    // Réinitialiser les valeurs du formulaire
    this.newCabinet = {
      id: null,
      nom: '',
      email: '',
      telephone: '',
      adresse: '',
      siteWeb: '',
      mcnss: ''
    };
  }
}