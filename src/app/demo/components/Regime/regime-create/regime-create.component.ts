import { Component } from '@angular/core';
import { Regime } from 'src/app/demo/api/Regime';

@Component({
  selector: 'app-regime-create',

  templateUrl: './regime-create.component.html',
  styleUrl: './regime-create.component.scss'
})
export class RegimeCreateComponent {
  
    newRegime: Regime = {
      id: 0,
      regime: '',
      statut: '' // Vous pouvez initialiser le statut avec une valeur par défaut si nécessaire
    };
  
    statusOptions: any[] = [
      { name: 'actif', code: 'active' },
      { name: 'inactif', code: 'inactive' }
    ];
  
    constructor() { }
  
    createRegime() {
      // Logique pour créer un nouveau régime ici
      console.log('Nouveau régime créé : ', this.newRegime);
      // Réinitialiser le nouveau régime après la création
      this.resetNewRegime();
    }
  
    resetNewRegime() {
      // Réinitialiser les valeurs du nouveau régime
      this.newRegime = {
        id: 0,
        regime: '',
        statut: '' // Réinitialiser le statut au besoin
      };
    }
  }


