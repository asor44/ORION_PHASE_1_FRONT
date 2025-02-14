import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MaterialService } from "../services/material.service";
import { UserService } from "../services/user.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-profile',
    templateUrl: './profil.component.html',
    styleUrls: ['./profil.component.scss'],
    standalone: false
})
export class ProfilComponent implements OnInit {
  profilForm: FormGroup | undefined;
  materials: any[] = []

  constructor(private router: Router, private fb: FormBuilder, private materialService: MaterialService, private userService: UserService) { }

  async ngOnInit(): Promise<void> {
    this.profilForm = this.fb.group({
      lastname: [''],
      firstname: [''],
      birthdate: [''],
      address: [''],
      city: [''],
      postalCode: [''],
      country: [''],
      nid: [''],
      reserve: [false],
      army: [''],
      grade: [''],
      cotisation: [false],
      member: [false],
      poste: [''],
      phonenumber: [''],
      email: [''],
      password: ['']
    });

    this.materials = this.materialService.getAllMaterials()
    const requestProfile: any = await this.userService.me();
    console.log("requestProfile", requestProfile.status);
    if (requestProfile.status === 200) {
      console.log("Profile not found");
      this.profilForm.patchValue(requestProfile.data);
      console.log("Profile found", requestProfile.data);
    }else{
      this.router.navigate(['/login']);
    }
  }

  getValueOfField(fieldName: string) {
    if(!this.profilForm) return;
    return this.profilForm.get(fieldName)?.value;
  }

  onSubmit() {
    if (this.profilForm) {
      console.log(this.profilForm.value);
    }
    // ici vous pouvez ajouter le code pour traiter le formulaire, par exemple l'envoyer à un serveur
  }
}
