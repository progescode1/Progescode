import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Cabinet } from 'src/app/demo/api/Cabinet';
import { Customer } from 'src/app/demo/api/customer';
import { CabinetService } from 'src/app/demo/service/cabinet.service';
import { CustomerService } from 'src/app/demo/service/customer.service';

@Component({
  selector: 'app-cabinet-list',
 
  templateUrl: './cabinet-list.component.html',
  styleUrl: './cabinet-list.component.scss'
})
export class CabinetListComponent implements OnInit {
  cabinets: Cabinet[] = []; // Liste des cabinets
  constructor(private cabinetService :CabinetService,private router:Router,private confirmationService:ConfirmationService) { }
  ngOnInit(): void {
    this.cabinetService.getCabinets()
    .subscribe(cabinets => this.cabinets = cabinets);
    


  }
  
 


  navigateToCreateCabinet() {
      // Logique de navigation vers la création d'un nouveau cabinet
     this.router.navigate(['cabinet/create']);
  }

  onGlobalFilter(table: any, event: Event) {
      // Logique de filtrage global
      // Par exemple, table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
  updateCabinet(cabinet: Cabinet) {
   
    this.confirmationService.confirm({
      key: 'confirm1',
      message: 'Etes-vous sûr d\'effectuer cette action ?', // Corrected message and escaped single quote
      accept: () => {
    
      console.log(cabinet);
      }
  });
  }

  deleteCabinet(cabinet: Cabinet) {
    this.confirmationService.confirm({
      key: 'confirm1',
      message: 'Etes-vous sûr d\'effectuer cette action ?', // Corrected message and escaped single quote
      accept: () => {
    
      console.log(cabinet);
      }
  });
  }
}

