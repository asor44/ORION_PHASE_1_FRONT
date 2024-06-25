import { Component } from '@angular/core';

const medals = [
  {
    name: "La légion d'honneur",
    categorie: "legion_honneur",
    img_link: "../../../assets/medailles/legion_honneur-115x300.png"
  },
  {
    name: "Croix de la libération",
    categorie: "liberation",
    img_link: "../../../assets/medailles/ordredelaliberation-144x300.png"
  },
  {
    name: "Médaille de la résistance",
    categorie: "liberation",
    img_link: "../../../assets/medailles/Medaille-resistance-136x300.png "
  },
  {
    name: "L'ordre national du mérite",
    categorie: "merite",
    img_link: "../../../assets/medailles/ordrenationaldumerite-122x300.png"
  },

  {
    name: "La médaille militaire",
    categorie: "decomili",
    img_link: "../../../assets/medailles/medaillemilitaire-125x300.png"
  },

  {
    name: "14-18",
    categorie: "croix",
    img_link: "../../../assets/medailles/Croix_de_Guerre_1914_1918-113x300.png"
  },

  {
    name: "39-45",
    categorie: "croix",
    img_link: "../../../assets/medailles/Croix_de_Guerre_1939_1945-121x300.png"
  },

  {
    name: "T.O.E",
    categorie: "croix",
    img_link: "../../../assets/medailles/Croix_de_Guerre_TOE_France_2_citations-123x300.png"
  },

  {
    name: "Valeur militaire",
    categorie: "croix",
    img_link: "../../../assets/medailles/Croix_de_la_Valeur_Militaire_France-127x300.png"
  },

  {
    name: "Volontaire 14-18",
    categorie: "croix_comb",
    img_link: "../../../assets/medailles/Croix_du_combattant_volontaire_1914_18-133x300.png"
  },

  {
    name: "Volontaire de la résistance",
    categorie: "croix_comb",
    img_link: "../../../assets/medailles/Croix_du_combattant_de_la_resistance_FRANCE-127x300.png"
  },

  {
    name: "Volontaire",
    categorie: "croix_comb",
    img_link: "../../../assets/medailles/Croix_du_combattant_volontaire_France-140x300.png"
  },

  {
    name: "Croix du combattant",
    categorie: "croix_comb",
    img_link: "../../../assets/medailles/Croix_du_combattant_FRANCE-129x300.png"
  },
  {
    name: "Médaille des évadés",
    categorie: "medailles",
    img_link: "../../../assets/medailles/Médaille_des_Évadés-147x300.png"
  },
  {
    name: "Médaille de la gendarmerie",
    categorie: "medailles",
    img_link: "../../../assets/medailles/medaillegendarmerie-138x300.png"
  },
  {
    name: "Médaille de l'aéronautique",
    categorie: "medailles",
    img_link: "../../../assets/medailles/Medaille_de_l_Aeronautique_francaise-136x300.png"
  },
  {
    name: "Médaille des bléssés de guerre",
    categorie: "medailles",
    img_link: "../../../assets/medailles/Medaille_des_blesses_2eme_type.jpg"
  },
  {
    name: "Médaille des réservistes volontaires de défense et de sécurité intérieure",
    categorie: "medailles",
    img_link: "../../../assets/medailles/Médaille_des_réservistes_volontaires_de_défense_et_de_sécurité_intérieure_-_Bronze_-_Avers.jpg"

  },
  {
    name: "Médaille de reconnaissance de la Nation",
    categorie: "medailles",
    img_link: "../../../assets/medailles/Medaille_de_la_Reconnaissance_de_la_Nation_France_AVERS.jpg"

  },
  {
    name: "",
    categorie: "",
    img_mink: ""
  },
  



]

@Component({
  selector: 'app-medals',
  templateUrl: './medals.component.html',
  styleUrls: ['./medals.component.scss']
})
export class MedalsComponent {

}
