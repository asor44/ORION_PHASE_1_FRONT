import { Component } from '@angular/core';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})

export class GradesComponent {
  selectedArmy: string = 'Default';
  
  armeeType = [
    { name: 'Terre' },
    { name: 'Marine' },
    { name: 'Air' }];

  get filteredArmy() {
    console.log(this.selectedArmy)
    return this.armeeType ? this.armees[this.selectedArmy] : [];
  }

  selectArmy(army: { name: string }) {
    this.selectedArmy = army.name;
  }

  armees: any = [
    {
      name: "Terre",
      categories: [
        {
          title: "Hommes du rang",
          grades: [
            { name: "Seconde classe", appelation: "Seconde classe / soldat", image: "../../../assets/grades/terre/SDT" },
            { name: "Première classe", appelation: "Première classe / soldat", image: "../../../assets/grades/terre/1CL" },
            { name: "Caporal / Brigadier", appelation: "Caporal / Brigadier", image: "../../../assets/grades/terre/CPL" },
            { name: "Caporal-chef / Brigadier-chef", appelation: "Caporal-chef / Brigadier-chef", image: "../../../assets/grades/terre/CCH" },
            { name: "Caporal-chef de première classe", appelation: "Caporal-chef de première classe", image: "../../../assets/grades/terre/CC1" }
          ]
        },
        {
          title: "Sous-officiers subalternes",
          grades: [
            { name: "Sergent / Maréchal des logis", appelation: "Sergent / Maréchal des logis", image: "../../../assets/grades/terre/SGT" },
            { name: "Sergent-chef / Maréchal des logis-chef", appelation: "Sergent-chef / Maréchal des logis-chef", image: "../../../assets/grades/terre/SCH" },
            { name: "Sergent-chef BM2", appelation: "Sergent-chef BM2", image: "../../../assets/grades/terre/SCHBM2" }
          ]
        },
        {
          title: "Sous-officiers",
          grades: [
            { name: "Adjudant", appelation: "Adjudant", image: "../../../assets/grades/terre/ADJ" },
            { name: "Adjudant-chef", appelation: "Adjudant-chef", image: "../../../assets/grades/terre/ADC" },
            { name: "Major", appelation: "Major", image: "../../../assets/grades/terre/MJR" }
          ]
        },
        {
          title: "Officiers subalternes",
          grades: [
            { name: "Aspirant", appelation: "Aspirant", image: "../../../assets/grades/terre/ASP" },
            { name: "Sous-lieutenant", appelation: "Sous-lieutenant", image: "../../../assets/grades/terre/SLT" },
            { name: "Lieutenant", appelation: "Lieutenant", image: "../../../assets/grades/terre/LTN" },
            { name: "Capitaine", appelation: "Capitaine", image: "../../../assets/grades/terre/CNE" }
          ]
        },
        {
          title: "Officiers supérieurs",
          grades: [
            { name: "Commandant", appelation: "Commandant", image: "../../../assets/grades/terre/CDT" },
            { name: "Lieutenant-colonel", appelation: "Lieutenant-colonel", image: "../../../assets/grades/terre/LCL" },
            { name: "Colonel", appelation: "Colonel", image: "../../../assets/grades/terre/COL" }
          ]
        },
        {
          title: "Officiers généraux",
          grades: [
            { name: "Général de brigade", appelation: "Général de brigade", image: "../../../assets/grades/terre/GBR" },
            { name: "Général de division", appelation: "Général de division", image: "../../../assets/grades/terre/GDI" },
            { name: "Général de corps d'armée", appelation: "Général de corps d'armée", image: "../../../assets/grades/terre/GCA" },
            { name: "Général d'armée", appelation: "Général d'armée", image: "../../../assets/grades/terre/GA" }
          ]
        }
      ]
    },
    {
      name: "Marine",
      categories: [
        {
          title: "Hommes du rang",
          grades: [
            { name: "Seconde classe", appelation: "Seconde classe / soldat", image: "../../../assets/grades/marine/SDT" },
            { name: "Première classe", appelation: "Première classe / soldat", image: "../../../assets/grades/marine/1CL" },
            { name: "Caporal / Brigadier", appelation: "Caporal / Brigadier", image: "../../../assets/grades/marine/CPL" },
            { name: "Caporal-chef / Brigadier-chef", appelation: "Caporal-chef / Brigadier-chef", image: "../../../assets/grades/marine/CCH" },
            { name: "Caporal-chef de première classe", appelation: "Caporal-chef de première classe", image: "../../../assets/grades/marine/CC1" }
          ]
        },
        {
          title: "Sous-officiers subalternes",
          grades: [
            { name: "Sergent / Maréchal des logis", appelation: "Sergent / Maréchal des logis", image: "../../../assets/grades/marine/SGT" },
            { name: "Sergent-chef / Maréchal des logis-chef", appelation: "Sergent-chef / Maréchal des logis-chef", image: "../../../assets/grades/marine/SCH" },
            { name: "Sergent-chef BM2", appelation: "Sergent-chef BM2", image: "../../../assets/grades/marine/SCHBM2" }
          ]
        },
        {
          title: "Sous-officiers",
          grades: [
            { name: "Adjudant", appelation: "Adjudant", image: "../../../assets/grades/marine/ADJ" },
            { name: "Adjudant-chef", appelation: "Adjudant-chef", image: "../../../assets/grades/marine/ADC" },
            { name: "Major", appelation: "Major", image: "../../../assets/grades/marine/MJR" }
          ]
        },
        {
          title: "Officiers subalternes",
          grades: [
            { name: "Aspirant", appelation: "Aspirant", image: "../../../assets/grades/marine/ASP" },
            { name: "Sous-lieutenant", appelation: "Sous-lieutenant", image: "../../../assets/grades/marine/SLT" },
            { name: "Lieutenant", appelation: "Lieutenant", image: "../../../assets/grades/marine/LTN" },
            { name: "Capitaine", appelation: "Capitaine", image: "../../../assets/grades/marine/CNE" }
          ]
        },
        {
          title: "Officiers supérieurs",
          grades: [
            { name: "Commandant", appelation: "Commandant", image: "../../../assets/grades/marine/CDT" },
            { name: "Lieutenant-colonel", appelation: "Lieutenant-colonel", image: "../../../assets/grades/marine/LCL" },
            { name: "Colonel", appelation: "Colonel", image: "../../../assets/grades/marine/COL" }
          ]
        },
        {
          title: "Officiers généraux",
          grades: [
            { name: "Général de brigade", appelation: "Général de brigade", image: "../../../assets/grades/marine/GBR" },
            { name: "Général de division", appelation: "Général de division", image: "../../../assets/grades/marine/GDI" },
            { name: "Général de corps d'armée", appelation: "Général de corps d'armée", image: "../../../assets/grades/marine/GCA" },
            { name: "Général d'armée", appelation: "Général d'armée", image: "../../../assets/grades/marine/GA" }
          ]
        }
      ]
    },
    {
      name: "Air",
      categories: [
        {
          title: "Hommes du rang",
          grades: [
            { name: "Seconde classe", appelation: "Seconde classe / soldat", image: "../../../assets/grades/air/SDT" },
            { name: "Première classe", appelation: "Première classe / soldat", image: "../../../assets/grades/air/1CL" },
            { name: "Caporal / Brigadier", appelation: "Caporal / Brigadier", image: "../../../assets/grades/air/CPL" },
            { name: "Caporal-chef / Brigadier-chef", appelation: "Caporal-chef / Brigadier-chef", image: "../../../assets/grades/air/CCH" },
            { name: "Caporal-chef de première classe", appelation: "Caporal-chef de première classe", image: "../../../assets/grades/air/CC1" }
          ]
        },
        {
          title: "Sous-officiers subalternes",
          grades: [
            { name: "Sergent / Maréchal des logis", appelation: "Sergent / Maréchal des logis", image: "../../../assets/grades/air/SGT" },
            { name: "Sergent-chef / Maréchal des logis-chef", appelation: "Sergent-chef / Maréchal des logis-chef", image: "../../../assets/grades/air/SCH" },
            { name: "Sergent-chef BM2", appelation: "Sergent-chef BM2", image: "../../../assets/grades/air/SCHBM2" }
          ]
        },
        {
          title: "Sous-officiers",
          grades: [
            { name: "Adjudant", appelation: "Adjudant", image: "../../../assets/grades/air/ADJ" },
            { name: "Adjudant-chef", appelation: "Adjudant-chef", image: "../../../assets/grades/air/ADC" },
            { name: "Major", appelation: "Major", image: "../../../assets/grades/air/MJR" }
          ]
        },
        {
          title: "Officiers subalternes",
          grades: [
            { name: "Aspirant", appelation: "Aspirant", image: "../../../assets/grades/air/ASP" },
            { name: "Sous-lieutenant", appelation: "Sous-lieutenant", image: "../../../assets/grades/air/SLT" },
            { name: "Lieutenant", appelation: "Lieutenant", image: "../../../assets/grades/air/LTN" },
            { name: "Capitaine", appelation: "Capitaine", image: "../../../assets/grades/air/CNE" }
          ]
        },
        {
          title: "Officiers supérieurs",
          grades: [
            { name: "Commandant", appelation: "Commandant", image: "../../../assets/grades/air/CDT" },
            { name: "Lieutenant-colonel", appelation: "Lieutenant-colonel", image: "../../../assets/grades/air/LCL" },
            { name: "Colonel", appelation: "Colonel", image: "../../../assets/grades/air/COL" }
          ]
        },
        {
          title: "Officiers généraux",
          grades: [
            { name: "Général de brigade", appelation: "Général de brigade", image: "../../../assets/grades/air/GBR" },
            { name: "Général de division", appelation: "Général de division", image: "../../../assets/grades/air/GDI" },
            { name: "Général de corps d'armée", appelation: "Général de corps d'armée", image: "../../../assets/grades/air/GCA" },
            { name: "Général d'armée", appelation: "Général d'armée", image: "../../../assets/grades/air/GA" }
          ]
        }
      ]
    }
  ];
}
