import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  profilForm: FormGroup | undefined;
  profilFields = [
    { name: 'nom', label: 'Nom' },
    { name: 'prenom', label: 'Prénom' },
    { name: 'dateNaissance', label: 'Date de naissance' },
    { name: 'adresse', label: 'Adresse' },
    { name: 'ville', label: 'Ville' },
    { name: 'codePostal', label: 'Code postal' },
    { name: 'pays', label: 'Pays' },
    { name: 'nid', label: 'NID' },
    { name: 'reserve', label: 'Réserve', isBoolean: true },
    { name: 'armees', label: 'Armées', isSelect: true, options: ['Terre', 'Marine', 'Air', 'Gendarmerie'] },
    { name: 'grade', label: 'Grade' },
    { name: 'cotisation', label: 'Cotisation', isBoolean: true },
    { name: 'membre', label: 'Membre', isBoolean: true },
    { name: 'poste', label: 'Poste' },
    { name: 'tel', label: 'Téléphone' },
    { name: 'mail', label: 'E-mail' },
    { name: 'mdp', label: 'Mot de passe' }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.profilForm = this.fb.group({
      nom: [''],
      prenom: [''],
      dateNaissance: [''],
      adresse: [''],
      ville: [''],
      codePostal: [''],
      pays: [''],
      nid: [''],
      reserve: [false],
      armees: [''],
      grade: [''],
      cotisation: [false],
      membre: [false],
      poste: [''],
      tel: [''],
      mail: [''],
      mdp: ['']
    });
  }

  onSubmit() {
    // @ts-ignore
    console.log(this.profilForm.value);
    // ici vous pouvez ajouter le code pour traiter le formulaire, par exemple l'envoyer à un serveur
  }
}
