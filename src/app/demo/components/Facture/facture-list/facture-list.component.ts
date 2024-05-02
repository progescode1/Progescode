import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Facture } from 'src/app/demo/api/Facture';
import { FactureService } from 'src/app/demo/service/facture.service';

@Component({
  selector: 'app-facture-list',

  templateUrl: './facture-list.component.html',
  styleUrl: './facture-list.component.scss'
})
export class FactureListComponent implements OnInit {
  factures: Facture[] = []; // Tableau de factures

  constructor(private factureService:FactureService,private router:Router,private confirmationService:ConfirmationService) { }

  ngOnInit(): void {
   this.getFactures();
  }
  getFactures(): void {
    this.factureService.getFactures().subscribe((facures: Facture[]) => this.factures = facures);
  }
 

  // Méthode pour naviguer vers la page de création d'une nouvelle facture
  navigateToCreateFacture() {
   this.router.navigate(['facture/create']);
  }

  // Méthode pour mettre à jour une facture existante
  updateFacture(facture: Facture) {
    this.confirmationService.confirm({
      key: 'confirm1',
      message: 'Etes-vous sûr d\'effectuer cette action ?', // Corrected message and escaped single quote
      accept: () => {
    
      console.log(facture);
      }
  });
  }

  // Méthode pour supprimer une facture existante
  deleteFacture(facture: Facture) {
    this.confirmationService.confirm({
      key: 'confirm1',
      message: 'Etes-vous sûr d\'effectuer cette action ?', // Corrected message and escaped single quote
      accept: () => {
    
      console.log(facture);
      }
  });
  }
  onGlobalFilter(dt: any, event: any): void {
    // Ajoutez la logique pour filtrer globalement les données
    console.log('Global filter event:', event.target.value);
    dt.filterGlobal(event.target.value, 'contains');
  }
}
