import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Service } from 'src/app/demo/api/Service';
import { ServiceService } from 'src/app/demo/service/service.service';

@Component({
  selector: 'app-service-list',

  templateUrl: './service-list.component.html',
  styleUrl: './service-list.component.scss'
})
export class ServiceListComponent implements OnInit{
  services: Service[] = []; // Assurez-vous de remplir ce tableau avec les données des services

  constructor(private serviceService:ServiceService,private router:Router,private confirmationService :ConfirmationService) { }
  ngOnInit(): void {
  this.getServices();
  }

  getServices(): void {
    this.serviceService.getServices().subscribe((services: Service[]) => this.services = services);
  }
  navigateToCreateService() {
   this.router.navigate(['service/create']);
  }

  onGlobalFilter(dt: any, event: any) {
    // Logique pour filtrer les données globalement
  }

  updateService(service: Service) {
    this.confirmationService.confirm({
      key: 'confirm1',
      message: 'Etes-vous sûr d\'effectuer cette action ?', // Corrected message and escaped single quote
      accept: () => {
    
      console.log(service);
      }
  });
  }

  deleteService(service: Service) {
    this.confirmationService.confirm({
      key: 'confirm1',
      message: 'Etes-vous sûr d\'effectuer cette action ?', // Corrected message and escaped single quote
      accept: () => {
    
      console.log(service);
      }
  });
  }
}