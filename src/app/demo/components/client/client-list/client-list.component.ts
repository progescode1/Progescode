import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Client } from 'src/app/demo/api/Client';
import { Customer } from 'src/app/demo/api/customer';
import { ClientService } from 'src/app/demo/service/client.service';
import { CustomerService } from 'src/app/demo/service/customer.service';

@Component({
  selector: 'app-client-list',

  
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.scss'
})
export class ClientListComponent implements OnInit {
  clients: Client[] = [];

  constructor(private clientService: ClientService, private router: Router,private confirmationService:ConfirmationService) { }

  ngOnInit() {
      this.clientService.getClients().subscribe((clients: Client[]) => this.clients = clients);
  }

  onGlobalFilter(table: any, event: Event) {
      table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  navigateToCreateClient() {
      this.router.navigate(['client/create']);
  }
  updateClient(client:Client){
    this.confirmationService.confirm({
      key: 'confirm1',
      message: 'Etes-vous sûr d\'effectuer cette action ?', // Corrected message and escaped single quote
      accept: () => {
    
      console.log(client);
      }
  });
  }
  deleteClient(client:Client){
    this.confirmationService.confirm({
      key: 'confirm1',
      message: 'Etes-vous sûr d\'effectuer cette action ?', // Corrected message and escaped single quote
      accept: () => {
    
      console.log(client);
      }
  });
  }
}
