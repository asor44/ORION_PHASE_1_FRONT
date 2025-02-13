import { Component } from '@angular/core';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss'],
    standalone: false
})
export class AdminComponent {
  activeTab: string = 'utilisateurs'; // Onglet actif par défaut dans l'application
  searchTerm: string = ''; // Barre de recherche
  selectedUser: any = null; // Utilisateur sélectionné pour la modale
  modalTab: string = 'informations'; // Onglet actif par défaut dans la modale

  users = [
    { id: 1, name: 'Alice Dupont', email: 'alice@example.com', role: 'Admin' },
    { id: 2, name: 'Bob Martin', email: 'bob@example.com', role: 'User' },
    { id: 3, name: 'Charlie Durand', email: 'charlie@example.com', role: 'Moderator' },
  ];

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  get filteredUsers() {
    return this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  openModal(user: any): void {
    this.selectedUser = user;
    this.modalTab = 'informations';
  }

  closeModal(): void {
    this.selectedUser = null;
  }

  setModalTab(tab: string): void {
    this.modalTab = tab;
  }
}
