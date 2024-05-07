import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Debour } from 'src/app/demo/api/Debour';
import { DebourService } from 'src/app/demo/service/debour.service';

@Component({
  selector: 'app-debour-list',

  templateUrl: './debour-list.component.html',
  styleUrl: './debour-list.component.scss'
})
export class DebourListComponent implements OnInit {
  debours: Debour[] = []; // Initialisez la liste des debours avec des données

  constructor(private debourService:DebourService,private router:Router,private confirmationService:ConfirmationService) { 

  }

  ngOnInit(): void {
    // Simulez l'obtention des debours à partir d'une source de données (service, API, etc.)
    this.getDebours();
  }

  getDebours(): void {
    this.debourService.getDebours().subscribe((debours: Debour[]) => this.debours = debours);
  }

  navigateToCreateDebour(): void {
 this.router.navigate(['debour/create']);
  }

  updateDebour(debour: Debour): void {
    this.confirmationService.confirm({
      key: 'confirm1',
      message: 'Etes-vous sûr d\'effectuer cette action ?', // Corrected message and escaped single quote
      accept: () => {
    
      console.log(debour);
      }
  });
  }

  deleteDebour(debour: Debour): void {
    this.confirmationService.confirm({
      key: 'confirm1',
      message: 'Etes-vous sûr d\'effectuer cette action ?', // Corrected message and escaped single quote
      accept: () => {
    
      console.log(debour);
      }
  });
  }

  onGlobalFilter(dt: any, event: any): void {
    // Ajoutez la logique pour filtrer globalement les données
    console.log('Global filter event:', event.target.value);
    dt.filterGlobal(event.target.value, 'contains');
  }
}