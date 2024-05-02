import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Regime } from 'src/app/demo/api/Regime';
import { RegimeService } from 'src/app/demo/service/regime.service';

@Component({
  selector: 'app-regime-list',

  templateUrl: './regime-list.component.html',
  styleUrl: './regime-list.component.scss'
})
export class RegimeListComponent implements OnInit {
  regimes: Regime[] = []; // Tableau pour stocker les régimes

  constructor(private regimeService:RegimeService,private router :Router,private confirmationService:ConfirmationService) { }

  ngOnInit(): void {
     this.getRegimes();
  }
  getRegimes(): void {
    this.regimeService.getRegimes().subscribe((regimes: Regime[]) => this.regimes = regimes);
  }
 

  // Méthode pour mettre à jour un régime
  updateRegime(regime: Regime) {
    this.confirmationService.confirm({
      key: 'confirm1',
      message: 'Etes-vous sûr d\'effectuer cette action ?', // Corrected message and escaped single quote
      accept: () => {
    
      console.log(regime);
      }
  });
  }

  // Méthode pour supprimer un régime
  deleteRegime(regime: Regime) {
    this.confirmationService.confirm({
      key: 'confirm1',
      message: 'Etes-vous sûr d\'effectuer cette action ?', // Corrected message and escaped single quote
      accept: () => {
    
      console.log(regime);
      }
  });
  }

  // Méthode pour changer le statut d'un régime
  changerStatut(regime: Regime) {
    this.confirmationService.confirm({
      key: 'confirm1',
      message: 'Etes-vous sûr d\'effectuer cette action ?', // Corrected message and escaped single quote
      accept: () => {
    
      console.log(regime);
      }
  });
  }

  // Méthode pour naviguer vers la page de création d'un nouveau régime
  navigateToCreateRegime() {
      this.router.navigate(['regime/create']);
  }
  onGlobalFilter(dt: any, event: any): void {
    // Ajoutez la logique pour filtrer globalement les données
    console.log('Global filter event:', event.target.value);
    dt.filterGlobal(event.target.value, 'contains');
  }
}
