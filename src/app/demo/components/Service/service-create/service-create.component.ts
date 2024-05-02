import { Component } from '@angular/core';
import { Service } from 'src/app/demo/api/Service';

@Component({
  selector: 'app-service-create',

  templateUrl: './service-create.component.html',
  styleUrl: './service-create.component.scss'
})
export class ServiceCreateComponent {
newService: Service = {
  id: 0,
  nomService: '',
  description: ''
};

statusOptions: any[] = [
  { name: 'Actif', code: 'actif' },
  { name: 'Inactif', code: 'inactif' }
];

constructor() { }

createService() {
  // Logique pour créer un nouveau service ici
  console.log('Nouveau service créé : ', this.newService);
  // Réinitialiser le nouveau service après la création
  this.resetNewService();
}

resetNewService() {
  // Réinitialiser les valeurs du nouveau service
  this.newService = {
    id: 0,
    nomService: '',
    description: ''
  };
}}
