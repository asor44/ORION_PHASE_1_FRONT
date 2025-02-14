import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor() { }

  materials: any[] = [
    { image: '../../../assets/materiels/musette.jpg', name: 'Sac coyotte 45L', quantity: 1, startDate: '23/10/2024', endDate: '01/01/2025' },
    { image: '../../../assets/materiels/pantalon-tng.jpg', name: 'Pantalon TNG CE', quantity: 1, startDate: '23/10/2024', endDate: '01/12/2024' },
    { image: '../../../assets/materiels/rangers-noir.jpg', name: 'Rangers', quantity: 1, startDate: '23/10/2024', endDate: '01/11/2024' },
    { image: '../../../assets/materiels/t-shirt.jpg', name: 'T-shirt coyotte', quantity: 1, startDate: '23/10/2024', endDate: '15/10/2024' },
    { image: '../../../assets/materiels/musette.jpg', name: 'Sac 30L', quantity: 2, startDate: '01/11/2024', endDate: '01/02/2025' },
    { image: '../../../assets/materiels/pantalon-tng.jpg', name: 'Pantalon de travail', quantity: 3, startDate: '01/11/2024', endDate: '01/12/2024' },
    { image: '../../../assets/materiels/rangers-noir.jpg', name: 'Rangers Tactiques', quantity: 1, startDate: '01/11/2024', endDate: '01/12/2024' },
    { image: '../../../assets/materiels/t-shirt.jpg', name: 'T-shirt tactique', quantity: 1, startDate: '01/11/2024', endDate: '15/12/2024' },
    { image: '../../../assets/materiels/musette.jpg', name: 'Sac Molle', quantity: 4, startDate: '01/12/2024', endDate: '01/02/2025' },
    { image: '../../../assets/materiels/pantalon-tng.jpg', name: 'Pantalon Camo', quantity: 2, startDate: '01/12/2024', endDate: '01/01/2025' },
    { image: '../../../assets/materiels/rangers-noir.jpg', name: 'Rangers Camo', quantity: 1, startDate: '01/12/2024', endDate: '01/02/2025' },
    { image: '../../../assets/materiels/t-shirt.jpg', name: 'T-shirt Camo', quantity: 1, startDate: '01/12/2024', endDate: '15/01/2025' },
    { image: '../../../assets/materiels/musette.jpg', name: 'Sac tactique', quantity: 2, startDate: '01/01/2025', endDate: '01/03/2025' },
    { image: '../../../assets/materiels/pantalon-tng.jpg', name: 'Pantalon Tactique', quantity: 3, startDate: '01/01/2025', endDate: '01/02/2025' },
    { image: '../../../assets/materiels/rangers-noir.jpg', name: 'Rangers Deluxe', quantity: 1, startDate: '01/01/2025', endDate: '01/03/2025' },
    { image: '../../../assets/materiels/t-shirt.jpg', name: 'T-shirt Deluxe', quantity: 1, startDate: '01/01/2025', endDate: '15/02/2025' },
    { image: '../../../assets/materiels/musette.jpg', name: 'Sac multifonction', quantity: 3, startDate: '01/02/2025', endDate: '01/04/2025' },
    { image: '../../../assets/materiels/pantalon-tng.jpg', name: 'Pantalon imperméable', quantity: 1, startDate: '01/02/2025', endDate: '01/03/2025' },
    { image: '../../../assets/materiels/rangers-noir.jpg', name: 'Rangers imperméables', quantity: 2, startDate: '01/02/2025', endDate: '01/04/2025' },
    { image: '../../../assets/materiels/t-shirt.jpg', name: 'T-shirt pluie', quantity: 1, startDate: '01/02/2025', endDate: '15/03/2025' },
    { image: '../../../assets/materiels/musette.jpg', name: 'Sac haute capacité', quantity: 2, startDate: '01/03/2025', endDate: '01/05/2025' },
    { image: '../../../assets/materiels/pantalon-tng.jpg', name: 'Pantalon renforcé', quantity: 1, startDate: '01/03/2025', endDate: '01/04/2025' },
    { image: '../../../assets/materiels/rangers-noir.jpg', name: 'Rangers renforcées', quantity: 2, startDate: '01/03/2025', endDate: '01/05/2025' },
    { image: '../../../assets/materiels/t-shirt.jpg', name: 'T-shirt renforcé', quantity: 1, startDate: '01/03/2025', endDate: '15/04/2025' }
  ];

  getAllMaterials(){
    return this.materials;
  }
}
