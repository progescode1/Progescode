import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/demo/api/Client';
import { Option } from 'src/app/demo/api/Option';

@Component({
  selector: 'app-client',

 
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent implements OnInit {
  selectedAssigner: string[] = [];
  selectedRegime: string[] = []; // Variable pour stocker les valeurs sélectionnées pour Regime
  selectedService: string[] = []; // Variable pour stocker les valeurs sélectionnées pour Service
  selectedBanque:string[]=[]
  Assigner:any[]=[];
  Regime:any[]=[];
  Banque:any[]=[];
Associee: any[]|undefined;
Avantage: any[]|undefined;
selectedAvantage: any;
rib:any[]=[];
ngOnInit(): void {
    this.Assigner = [
      { name: "Mohamed Benali", code: "MB" },
      { name: "Fatima Bouazza", code: "FB" },
      { name: "Ali Cherif", code: "AC" },
      { name: "Amina Khadraoui", code: "AK" },
      { name: "Youssef Haddad", code: "YH" }
    ]
    
    this.Regime = [
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" }
    ];

    
    this.Banque = [
      { name: "Banque de Tunisie", code: "BT" },
      { name: "Banque de l'Habitat", code: "BH" },
      { name: "Banque Internationale Arabe de Tunisie", code: "BIAT" },
      { name: "Banque Nationale Agricole", code: "BNA" },
      { name: "Attijari Bank", code: "AB" }
    ]
    // Assuming you need to declare a specific RIB



 
  }
  newClient: Client = {
    id: '',
    clientName: '',
    email: '',
    phone: '',
    address: '',
    avantage: '',
    assigned: [],
    regime: '',
    banque: [],
    rib: [],
  };

  createClient() {
      // Ici, vous pouvez ajouter la logique pour créer le client, par exemple :
      console.log('New Client:', this.newClient);
      // Une fois que vous avez les données, vous pouvez les envoyer à votre service pour traitement
      // this.clientService.createClient(this.newClient).subscribe((response) => {
      //     console.log('Client created successfully:', response);
      // });
  }}
