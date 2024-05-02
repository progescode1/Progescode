import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Avantage } from 'src/app/demo/api/Avantage';
import { AvantageService } from 'src/app/demo/service/avantage.service';

@Component({
  selector: 'app-avantage-list',
 
  templateUrl: './avantage-list.component.html',
  styleUrl: './avantage-list.component.scss'
})
export class AvantageListComponent implements OnInit {
  avantages: Avantage[] = []; // Initialisez la liste des avantages avec des données

  constructor(private avantageService:AvantageService,private router :Router,private confirmationService:ConfirmationService) { }

  ngOnInit(): void {
    // Simulez l'obtention des avantages à partir d'une source de données (service, API, etc.)
    this.getAvantages();
  }

  getAvantages(): void {
    this.avantageService.getAvantages()
    .subscribe(avantages => this.avantages = avantages);
  }
updateAvantage(avantage:Avantage){

  this.confirmationService.confirm({
    key: 'confirm1',
    message: 'Etes-vous sûr d\'effectuer cette action ?', // Corrected message and escaped single quote
    accept: () => {
        console.log(avantage);
    }
});
}
deleteAvantage(avantage:Avantage){

  this.confirmationService.confirm({
    key: 'confirm1',
    message: 'Etes-vous sûr d\'effectuer cette action ?', // Corrected message and escaped single quote
    accept: () => {
        console.log(avantage);
    }
});
}
  navigateToCreateAvantage(): void {
    this.router.navigate(['avantage/create']);
  }

  changerStatut(avantage: Avantage): void {
    
  this.confirmationService.confirm({
    key: 'confirm1',
    message: 'Etes-vous sûr d\'effectuer cette action ?', // Corrected message and escaped single quote
    accept: () => {
       // Ajoutez la logique pour changer le statut de l'avantage
    console.log(`Changing status of avantage with ID ${avantage.id}...`);
    }
});
    
  }

  onGlobalFilter(dt: any, event: any): void {
    // Ajoutez la logique pour filtrer globalement les données
    console.log('Global filter event:', event.target.value);
    dt.filterGlobal(event.target.value, 'contains');
  }
}
