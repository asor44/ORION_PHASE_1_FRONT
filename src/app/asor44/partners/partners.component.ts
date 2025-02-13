import { Component } from '@angular/core';

@Component({
    selector: 'app-partners',
    templateUrl: './partners.component.html',
    standalone: false
})
export class PartnersComponent {
  partners = [
    {
      name: 'La Métropole de Nantes',
      description: 'La métropole de Nantes est une collectivité territoriale régionale.',
      image: 'assets/1280px-Nantes_logo.png',
      url: 'https://metropole.nantes.fr/'
    },
    {
      name: 'Fédération Maginot',
      description: 'Association des anciens combattants et défenseurs de la France.',
      image: 'assets/logo-FNAM-1.png',
      url: 'https://www.federation-maginot.com/'
    },
    {
      name: 'Défense Ouest',
      description: 'Page officielle de la Défense Ouest pour les activités et clubs régionaux.',
      image: 'assets/Logo-ZDSO.jpg',
      url: 'https://www.facebook.com/DefenseOuest/'
    },
    {
      name: 'Académie de Nantes',
      description: 'L\'académie de Nantes assure la gestion des établissements scolaires dans la région.',
      image: 'assets/logo_academie_pays_loire.png',
      url: 'https://www.ac-nantes.fr/'
    },
    {
      name: 'Conseil Général de Loire-Atlantique',
      description: 'Autorité locale en charge du département de la Loire-Atlantique.',
      image: 'assets/Logo_cg_44.png',
      url: 'https://www.lafcd.fr/'
    },
    {
      name: 'La France Mutualiste',
      description: 'Mutuelle française qui propose des services pour les militaires et leurs familles.',
      image: 'assets/Logo_FCD.png',
      url: 'https://www.la-france-mutualiste.fr/'
    },
    {
      name: 'La France Mutualiste',
      description: 'Mutuelle française qui propose des services pour les militaires et leurs familles.',
      image: 'assets/logo_lfm.png',
      url: 'https://www.la-france-mutualiste.fr/'
    },
    {
      name: 'Région Pays-de-la-Loire',
      description: 'Site officiel de la région Pays-de-la-Loire pour la gestion des affaires publiques.',
      image: 'assets/Logo_Région_Pays-de-la-Loire.png',
      url: 'https://www.paysdelaloire.fr/'
    },
    {
      name: 'SMLH',
      description: 'Société des Membres de la Légion d\'Honneur, promotion des valeurs de la République.',
      image: 'assets/logo_smlh.jpg',
      url: 'https://www.smlh.fr/'
    },
    {
      name: 'Vendée',
      description: 'Le site officiel du département de la Vendée, informations et services publics.',
      image: 'assets/logo_vendee_h.png',
      url: 'https://www.vendee.fr/'
    },
    {
      name: 'Ligue Ouest - FCD',
      description: 'Organisation des clubs de défense de la région Ouest.',
      image: 'assets/LigueOuestClubsDefense.jpg',
      url: 'https://www.ligueouest-fcd.fr/les-clubs.php'
    },
    {
      name: 'Union Fédérale',
      description: 'Association des anciens combattants et patriotes français.',
      image: 'assets/Union-Federale.png',
      url: 'https://www.union-federale.com/'
    }
  ];
}
