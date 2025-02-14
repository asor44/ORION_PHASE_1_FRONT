import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ArticleService} from "../services/article.service";
import {MaterialService} from "../services/material.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss'],
    standalone: false
})
export class AdminComponent implements OnInit{
  activeTab: string = 'utilisateurs';
  searchTerm: string = '';
  selectedUser: any = null;
  modalTab: string = 'informations';
  articles: any[] = [];
  materials: any[] = [];

  users: any[] = [];
  profilForm: FormGroup = this.fb.group({
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
    email: ['']
  });

  constructor(private router: Router, private materialService: MaterialService, private userService: UserService, private fb: FormBuilder, private articleService: ArticleService) {}

  async ngOnInit() {
    const allUsersRequest: any = await this.userService.getAllUsers();
    if (allUsersRequest.status === 200) {
      this.users = allUsersRequest.data;
    }
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
    if(tab === 'articles'){
      this.articles = [];
      this.getArticles();
    }else{
      this.materials = this.materialService.getAllMaterials();
    }
  }

  get filteredUsers() {
    return this.users.filter(user =>
      user.firstname.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.lastname.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  get filteredArticles() {
    return this.articles.filter(article =>
      article.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  async updateUser(): Promise<void> {
    if (this.profilForm) {
      const updatedData = this.profilForm.value;
      const updatedRequest: any = await this.userService.updateProfile(updatedData, this.selectedUser.id);
      if(updatedRequest.status === 200){
        this.selectedUser = updatedRequest.data;
      }
    }

  }

  openModal(user: any): void {
    this.profilForm?.patchValue(user);
    this.selectedUser = user;
    this.modalTab = 'informations';
    this.materials = this.materialService.getAllMaterials();
  }

  openModalArticle(article: any): void {
    this.router.navigate(['/article', article.id]);
  }

  reformatName(type: string, string: string){
    if(type === 'firstname') {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }else{
      return string.toUpperCase();
    }
  }

  closeModal(): void {
    this.selectedUser = null;
  }

  setModalTab(tab: string): void {
    this.modalTab = tab;
  }

  private async getArticles() {
    const request: any = await this.articleService.getAllArticles()
    if (request.status === 200) {
      this.articles = request.data;
    }
  }

  increaseQuantity(material: any) {
    material.quantity++;
  }

  decreaseQuantity(material: any) {
    if (material.quantity > 0) {
      material.quantity--;
    }
  }
}
