import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Associe } from 'src/app/demo/api/Associe';
import { AssocieService } from 'src/app/demo/service/associe.service';

@Component({
  selector: 'app-associee-list',
 
  templateUrl: './associee-list.component.html',
  styleUrl: './associee-list.component.scss'
})
export class AssocieeListComponent implements OnInit {
  associates: Associe[] = [];

  constructor(private associatesService: AssocieService,private router:Router,private confirmationService:ConfirmationService) { }

  ngOnInit(): void {
    this.getAssociates();
  }

  getAssociates(): void {
    this.associatesService.getAssocies()
      .subscribe(associates => this.associates = associates);
  }

  // Fonction pour naviguer vers la page de création d'un nouvel associé
  navigateToCreateAssociate() {
    this.router.navigate(['associee/create']);
  }

  // Fonction pour mettre à jour un associé
  updateAssociate(associate: Associe) {
  
    this.confirmationService.confirm({
      key: 'confirm1',
      message: 'Etes-vous sûr d\'effectuer cette action ?', // Corrected message and escaped single quote
      accept: () => {
          console.log(associate);
      }
  });
  
   //  window.location.reload();
     


}
  
  // Fonction pour supprimer un associé
  deleteAssociate(associate: Associe) {
    this.confirmationService.confirm({
      key: 'confirm1',
      message: 'Etes-vous sûr d\'effectuer cette action ?', // Corrected message and escaped single quote
      accept: () => {
          console.log(associate);
      }
  });
  }

  // Fonction pour filtrer les associés globalement
  onGlobalFilter(dataTable: any, event: Event) {
    const value = (event.target as HTMLInputElement).value;
    dataTable.filterGlobal(value, 'contains');
  }
}
