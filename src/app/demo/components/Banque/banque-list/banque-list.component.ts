import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Banque } from 'src/app/demo/api/Banque';
import { BanqueService } from 'src/app/demo/service/banque.service';

@Component({
  selector: 'app-banque-list',

  templateUrl: './banque-list.component.html',
  styleUrl: './banque-list.component.scss'
})
export class BanqueListComponent  implements OnInit {
  banques: Banque[] = []; // Initialisation du tableau de banques

  constructor(private banqueService:BanqueService,private router:Router,private confirmationService:ConfirmationService) { }

  ngOnInit(): void {
    this.getBanques();
  }
  getBanques(): void {
    this.banqueService.getBanques().subscribe((banques: Banque[]) => this.banques = banques);
  }
  // Méthode pour naviguer vers la page de création d'une nouvelle banque
  navigateToCreateBanque() {
    this.router.navigate(['banque/create']);
  }

  // Méthode pour mettre à jour une banque
  updateBanque(banque: Banque) {
    this.confirmationService.confirm({
      key: 'confirm1',
      message: 'Etes-vous sûr d\'effectuer cette action ?', // Corrected message and escaped single quote
      accept: () => {
    
      console.log(banque);
      }
  });
  }

  // Méthode pour supprimer une banque
  deleteBanque(banque: Banque) {
    this.confirmationService.confirm({
      key: 'confirm1',
      message: 'Etes-vous sûr d\'effectuer cette action ?', // Corrected message and escaped single quote
      accept: () => {
    
      console.log(banque);
      }
  });
  }
// Fonction pour filtrer les associés globalement
onGlobalFilter(dataTable: any, event: Event) {
  const value = (event.target as HTMLInputElement).value;
  dataTable.filterGlobal(value, 'contains');
}



}
