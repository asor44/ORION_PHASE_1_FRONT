import { Component } from '@angular/core';

type Grade = {
  name: string;

  appelation: string;

  image: string;

  image_hv: string;

  image_bv: string;
};

type Category = {
  title: string;
  grades: Grade[];
};

type Armee = {
  name: string;
  categories: Category[];
};

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})

export class GradesComponent {
  selectedArmy: string = 'default';

  armeeType = [
    { name: 'Terre' },
    { name: 'Marine' },
    { name: 'Air' },
    { name: 'Gendarmerie' }];

  armees: any = [
    {
      name: "Terre",
      categories: [
        {
          title: "Hommes du rang",
          grades: [
            {
              name: "Seconde classe",
              appelation: "Seconde classe / soldat",
              image: "../../../assets/grades/terre/SDT",
              image_hv: "../../../assets/grades/terre/SDT_HV",
              image_bv: "../../../assets/grades/terre/SDT_BV"
            },
            {
              name: "Première classe",
              appelation: "Première classe / soldat",
              image: "../../../assets/grades/terre/1CL",
              image_hv: "../../../assets/grades/terre/1CL_HV",
              image_bv: "../../../assets/grades/terre/1CL_BV"
            },
            {
              name: "Caporal / Brigadier",
              appelation: "Caporal / Brigadier",
              image: "../../../assets/grades/terre/CPL",
              image_hv: "../../../assets/grades/terre/CPL_HV",
              image_bv: "../../../assets/grades/terre/CPL_BV"
            },
            {
              name: "Caporal-chef / Brigadier-chef",
              appelation: "Caporal-chef / Brigadier-chef",
              image: "../../../assets/grades/terre/CCH",
              image_hv: "../../../assets/grades/terre/CCH_HV",
              image_bv: "../../../assets/grades/terre/CCH_BV"
            },
            {
              name: "Caporal-chef de première classe",
              appelation: "Caporal-chef",
              image: "../../../assets/grades/terre/CC1",
              image_hv: "../../../assets/grades/terre/CC1_HV",
              image_bv: "../../../assets/grades/terre/CC1_BV"
            }
          ]
        },
        {
          title: "Sous-officiers subalternes",
          grades: [
            {
              name: "Sergent / Maréchal des logis",
              appelation: "Sergent / Maréchal des logis",
              image: "../../../assets/grades/terre/SGT",
              image_hv: "../../../assets/grades/terre/SGT_HV",
              image_bv: "../../../assets/grades/terre/SGT_BV"
            },
            {
              name: "Sergent-chef / Maréchal des logis-chef",
              appelation: "Chef",
              image: "../../../assets/grades/terre/SCH",
              image_hv: "../../../assets/grades/terre/SCH_HV",
              image_bv: "../../../assets/grades/terre/SCH_BV"
            },
            {
              name: "Sergent-chef BM2",
              appelation: "Chef",
              image: "../../../assets/grades/terre/SC1",
              image_hv: "../../../assets/grades/terre/SC1_HV",
              image_bv: "../../../assets/grades/terre/SC1_BV"
            }
          ]
        },
        {
          title: "Sous-officiers",
          grades: [
            {
              name: "Adjudant",
              appelation: "Mon adjudant ou adjudant (féminin)",
              image: "../../../assets/grades/terre/ADJ",
              image_hv: "../../../assets/grades/terre/ADJ_HV",
              image_bv: "../../../assets/grades/terre/ADJ_BV"
            },
            {
              name: "Adjudant-chef",
              appelation: "Mon adjudant-chef ou adjudant-chef (féminin)",
              image: "../../../assets/grades/terre/ADC",
              image_hv: "../../../assets/grades/terre/ADC_HV",
              image_bv: "../../../assets/grades/terre/ADC_BV"
            },
            {
              name: "Major",
              appelation: "Major",
              image: "../../../assets/grades/terre/MAJ",
              image_hv: "../../../assets/grades/terre/MAJ_HV",
              image_bv: "../../../assets/grades/terre/MAJ_BV"
            }
          ]
        },
        {
          title: "Officiers subalternes",
          grades: [
            {
              name: "Aspirant",
              appelation: "Mon lieutenant ou lieutenant (féminin)",
              image: "../../../assets/grades/terre/ASP",
              image_hv: "../../../assets/grades/terre/ASP_HV",
              image_bv: "../../../assets/grades/terre/ASP_BV"
            },
            {
              name: "Sous-lieutenant",
              appelation: "Mon lieutenant ou lieutenant (féminin)",
              image: "../../../assets/grades/terre/SLT",
              image_hv: "../../../assets/grades/terre/SLT_HV",
              image_bv: "../../../assets/grades/terre/SLT_BV"
            },
            {
              name: "Lieutenant",
              appelation: "Mon lieutenant ou lieutenant (féminin)",
              image: "../../../assets/grades/terre/LTN",
              image_hv: "../../../assets/grades/terre/LTN_HV",
              image_bv: "../../../assets/grades/terre/LTN_BV"
            },
            {
              name: "Capitaine",
              appelation: "Mon capitaine ou capitaine (féminin)",
              image: "../../../assets/grades/terre/CNE",
              image_hv: "../../../assets/grades/terre/CNE_HV",
              image_bv: "../../../assets/grades/terre/CNE_BV"
            }
          ]
        },
        {
          title: "Officiers supérieurs",
          grades: [
            {
              name: "Commandant",
              appelation: "Mon commandant ou commandant (féminin)",
              image: "../../../assets/grades/terre/CDT",
              image_hv: "../../../assets/grades/terre/CDT_HV",
              image_bv: "../../../assets/grades/terre/CDT_BV"
            },
            {
              name: "Lieutenant-colonel",
              appelation: "Mon colonel ou colonel (féminin)",
              image: "../../../assets/grades/terre/LCL",
              image_hv: "../../../assets/grades/terre/LCL_HV",
              image_bv: "../../../assets/grades/terre/LCL_BV"
            },
            {
              name: "Colonel",
              appelation: "Mon colonel ou colonel (féminin)",
              image: "../../../assets/grades/terre/COL",
              image_hv: "../../../assets/grades/terre/COL_HV",
              image_bv: "../../../assets/grades/terre/COL_BV"
            }
          ]
        },
        {
          title: "Officiers généraux",
          grades: [
            {
              name: "Général de brigade",
              appelation: "Mon général ou général (féminin)",
              image: "../../../assets/grades/terre/GBI",
              image_hv: "../../../assets/grades/terre/GBI_HV",
              image_bv: "../../../assets/grades/terre/GBI_BV"
            },
            {
              name: "Général de division",
              appelation: "Mon général ou général (féminin)",
              image: "../../../assets/grades/terre/GDI",
              image_hv: "../../../assets/grades/terre/GDI_HV",
              image_bv: "../../../assets/grades/terre/GDI_BV"
            },
            {
              name: "Général de corps d'armée",
              appelation: "Mon général ou général (féminin)",
              image: "../../../assets/grades/terre/GCA",
              image_hv: "../../../assets/grades/terre/GCA_HV",
              image_bv: "../../../assets/grades/terre/GCA_BV"
            },
            {
              name: "Général d'armée",
              appelation: "Mon général ou général (féminin)",
              image: "../../../assets/grades/terre/GA",
              image_hv: "../../../assets/grades/terre/GA_HV",
              image_bv: "../../../assets/grades/terre/GA_BV"
            }
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
            {
              name: "Matelot",
              appelation: "Mousse",
              image: "../../../assets/grades/marine/MO",
              image_hv: "../../../assets/grades/marine/MO_HV",
              image_bv: "../../../assets/grades/marine/MO_BV"
            },
            {
              name: "Matelot breveté",
              appelation: "Matelot",
              image: "../../../assets/grades/marine/MO1",
              image_hv: "../../../assets/grades/marine/MO1_HV",
              image_bv: "../../../assets/grades/marine/MO1_BV"
            },
            {
              name: "Quartier-Maître de 2e classe",
              appelation: "Quartier-Maître",
              image: "../../../assets/grades/marine/QM2",
              image_hv: "../../../assets/grades/marine/QM2_HV",
              image_bv: "../../../assets/grades/marine/QM2_BV"
            },
            {
              name: "Quartier-Maître de 1re classe",
              appelation: "Quartier-Maître",
              image: "../../../assets/grades/marine/QM1",
              image_hv: "../../../assets/grades/marine/QM1_HV",
              image_bv: "../../../assets/grades/marine/QM1_BV"
            },
          ]
        },
        {
          title: "Sous-officiers subalternes",
          grades: [
            {
              name: "Second maître",
              appelation: "Second maître",
              image: "../../../assets/grades/marine/SM",
              image_hv: "../../../assets/grades/marine/SM_HV",
              image_bv: "../../../assets/grades/marine/SM_BV"
            },
            {
              name: "Maître",
              appelation: "Maître",
              image: "../../../assets/grades/marine/MT",
              image_hv: "../../../assets/grades/marine/MT_HV",
              image_bv: "../../../assets/grades/marine/MT_BV"
            }
          ]
        },
        {
          title: "Sous-officiers",
          grades: [
            {
              name: "Premier maître",
              appelation: "Premier maître",
              image: "../../../assets/grades/marine/PM",
              image_hv: "../../../assets/grades/marine/PM_HV",
              image_bv: "../../../assets/grades/marine/PM_BV"
            },
            {
              name: "Maître principal	",
              appelation: "Maître principal	",
              image: "../../../assets/grades/marine/MP",
              image_hv: "../../../assets/grades/marine/MP_HV",
              image_bv: "../../../assets/grades/marine/MP_BV"
            },
            {
              name: "Major",
              appelation: "Major",
              image: "../../../assets/grades/marine/MAJ",
              image_hv: "../../../assets/grades/marine/MAJ_HV",
              image_bv: "../../../assets/grades/marine/MAJ_BV"
            }
          ]
        },
        {
          title: "Officiers subalternes",
          grades: [
            {
              name: "Aspirant",
              appelation: "Mon lieutenant ou lieutenant (féminin)",
              image: "../../../assets/grades/marine/ASP",
              image_hv: "../../../assets/grades/marine/ASP_HV",
              image_bv: "../../../assets/grades/marine/ASP_BV"
            },
            {
              name: "Enseigne de vaisseau de 2e classe",
              appelation: "Mon lieutenant ou lieutenant (féminin)",
              image: "../../../assets/grades/marine/EV2",
              image_hv: "../../../assets/grades/marine/EV2_HV",
              image_bv: "../../../assets/grades/marine/EV2_BV"
            },
            {
              name: "Enseigne de vaisseau de 1re classe",
              appelation: "Mon lieutenant ou lieutenant (féminin)",
              image: "../../../assets/grades/marine/EV1",
              image_hv: "../../../assets/grades/marine/EV1_HV",
              image_bv: "../../../assets/grades/marine/EV1_BV"
            },
            {
              name: "Lieutenant de vaisseau",
              appelation: "Mon capitaine ou capitaine (féminin)",
              image: "../../../assets/grades/marine/LV",
              image_hv: "../../../assets/grades/marine/LV_HV",
              image_bv: "../../../assets/grades/marine/LV_BV"
            }
          ]
        },
        {
          title: "Officiers supérieurs",
          grades: [
            {
              name: "Capitaine de corvette",
              appelation: "Mon capitaine ou capitaine (féminin)",
              image: "../../../assets/grades/marine/CC",
              image_hv: "../../../assets/grades/marine/CC_HV",
              image_bv: "../../../assets/grades/marine/CC_BV"
            },
            {
              name: "Capitaine de frégate",
              appelation: "Mon capitaine ou capitaine (féminin)",
              image: "../../../assets/grades/marine/CF",
              image_hv: "../../../assets/grades/marine/CF_HV",
              image_bv: "../../../assets/grades/marine/CF_BV"
            },
            {
              name: "Capitaine de vaisseau",
              appelation: "Mon capitaine ou capitaine (féminin)",
              image: "../../../assets/grades/marine/CV",
              image_hv: "../../../assets/grades/marine/CV_HV",
              image_bv: "../../../assets/grades/marine/CV_BV"
            }
          ]
        },
        {
          title: "Officiers généraux",
          grades: [
            {
              name: "Contre amiral",
              appelation: "Mon amiral ou amiral (féminin)",
              image: "../../../assets/grades/marine/CA",
              image_hv: "../../../assets/grades/marine/CA_HV",
              image_bv: "../../../assets/grades/marine/CA_BV"
            },
            {
              name: "Vice-amiral",
              appelation: "Mon amiral ou amiral (féminin)",
              image: "../../../assets/grades/marine/VA",
              image_hv: "../../../assets/grades/marine/VA_HV",
              image_bv: "../../../assets/grades/marine/VA_BV"
            },
            {
              name: "Vice amiral d'escadre",
              appelation: "Mon amiral ou amiral (féminin)",
              image: "../../../assets/grades/marine/VAE",
              image_hv: "../../../assets/grades/marine/VAE_HV",
              image_bv: "../../../assets/grades/marine/VAE_BV"
            },
            {
              name: "Amiral",
              appelation: "Mon amiral ou amiral (féminin)",
              image: "../../../assets/grades/marine/AL",
              image_hv: "../../../assets/grades/marine/AL_HV",
              image_bv: "../../../assets/grades/marine/AL_BV"
            }
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
            {
              name: "Seconde classe",
              appelation: "Seconde classe / soldat",
              image: "../../../assets/grades/air/AVT",
              image_hv: "../../../assets/grades/air/SDT_HV",
              image_bv: "../../../assets/grades/air/SDT_BV"
            },
            {
              name: "Première classe",
              appelation: "Première classe / soldat",
              image: "../../../assets/grades/air/AV1",
              image_hv: "../../../assets/grades/air/1CL_HV",
              image_bv: "../../../assets/grades/air/1CL_BV"
            },
            {
              name: "Caporal / Brigadier",
              appelation: "Caporal / Brigadier",
              image: "../../../assets/grades/air/CAL",
              image_hv: "../../../assets/grades/air/CPL_HV",
              image_bv: "../../../assets/grades/air/CPL_BV"
            },
            {
              name: "Caporal-chef / Brigadier-chef",
              appelation: "Caporal-chef / Brigadier-chef",
              image: "../../../assets/grades/air/CLC",
              image_hv: "../../../assets/grades/air/CCH_HV",
              image_bv: "../../../assets/grades/air/CCH_BV"
            }
          ]
        },
        {
          title: "Sous-officiers subalternes",
          grades: [
            {
              name: "Sergent / Maréchal des logis",
              appelation: "Sergent / Maréchal des logis",
              image: "../../../assets/grades/air/SGT",
              image_hv: "../../../assets/grades/air/SGT_HV",
              image_bv: "../../../assets/grades/air/SGT_BV"
            },
            {
              name: "Sergent-chef / Maréchal des logis-chef",
              appelation: "Chef",
              image: "../../../assets/grades/air/SGC",
              image_hv: "../../../assets/grades/air/SCH_HV",
              image_bv: "../../../assets/grades/air/SCH_BV"
            }
          ]
        },
        {
          title: "Sous-officiers",
          grades: [
            {
              name: "Adjudant",
              appelation: "Mon adjudant ou adjudant (féminin)",
              image: "../../../assets/grades/air/ADJ",
              image_hv: "../../../assets/grades/air/ADJ_HV",
              image_bv: "../../../assets/grades/air/ADJ_BV"
            },
            {
              name: "Adjudant-chef",
              appelation: "Mon adjudant-chef ou adjudant-chef (féminin)",
              image: "../../../assets/grades/air/ADC",
              image_hv: "../../../assets/grades/air/ADC_HV",
              image_bv: "../../../assets/grades/air/ADC_BV"
            },
            {
              name: "Major",
              appelation: "Major",
              image: "../../../assets/grades/air/MAJ",
              image_hv: "../../../assets/grades/air/MAJ_HV",
              image_bv: "../../../assets/grades/air/MAJ_BV"
            }
          ]
        },
        {
          title: "Officiers subalternes",
          grades: [
            {
              name: "Aspirant",
              appelation: "Mon lieutenant ou lieutenant (féminin)",
              image: "../../../assets/grades/air/ASP",
              image_hv: "../../../assets/grades/air/ASP_HV",
              image_bv: "../../../assets/grades/air/ASP_BV"
            },
            {
              name: "Sous-lieutenant",
              appelation: "Mon lieutenant ou lieutenant (féminin)",
              image: "../../../assets/grades/air/SLT",
              image_hv: "../../../assets/grades/air/SLT_HV",
              image_bv: "../../../assets/grades/air/SLT_BV"
            },
            {
              name: "Lieutenant",
              appelation: "Mon lieutenant ou lieutenant (féminin)",
              image: "../../../assets/grades/air/LTT",
              image_hv: "../../../assets/grades/air/LTN_HV",
              image_bv: "../../../assets/grades/air/LTN_BV"
            },
            {
              name: "Capitaine",
              appelation: "Mon capitaine ou capitaine (féminin)",
              image: "../../../assets/grades/air/CNE",
              image_hv: "../../../assets/grades/air/CNE_HV",
              image_bv: "../../../assets/grades/air/CNE_BV"
            }
          ]
        },
        {
          title: "Officiers supérieurs",
          grades: [
            {
              name: "Commandant",
              appelation: "Mon commandant ou commandant (féminin)",
              image: "../../../assets/grades/air/CDT",
              image_hv: "../../../assets/grades/air/CDT_HV",
              image_bv: "../../../assets/grades/air/CDT_BV"
            },
            {
              name: "Lieutenant-colonel",
              appelation: "Mon colonel ou colonel (féminin)",
              image: "../../../assets/grades/air/LCL",
              image_hv: "../../../assets/grades/air/LCL_HV",
              image_bv: "../../../assets/grades/air/LCL_BV"
            },
            {
              name: "Colonel",
              appelation: "Mon colonel ou colonel (féminin)",
              image: "../../../assets/grades/air/COL",
              image_hv: "../../../assets/grades/air/COL_HV",
              image_bv: "../../../assets/grades/air/COL_BV"
            }
          ]
        },
        {
          title: "Officiers généraux",
          grades: [
            {
              name: "Général de brigade aérienne",
              appelation: "Mon général ou général (féminin)",
              image: "../../../assets/grades/air/GBA",
              image_hv: "../../../assets/grades/air/GBI_HV",
              image_bv: "../../../assets/grades/air/GBI_BV"
            },
            {
              name: "Général de division aérienne",
              appelation: "Mon général ou général (féminin)",
              image: "../../../assets/grades/air/GDA",
              image_hv: "../../../assets/grades/air/GDI_HV",
              image_bv: "../../../assets/grades/air/GDI_BV"
            },
            {
              name: "Général de corps d'armée aérien",
              appelation: "Mon général ou général (féminin)",
              image: "../../../assets/grades/air/GCA",
              image_hv: "../../../assets/grades/air/GCA_HV",
              image_bv: "../../../assets/grades/air/GCA_BV"
            },
            {
              name: "Général d'armée",
              appelation: "Mon général ou général (féminin)",
              image: "../../../assets/grades/air/GAA",
              image_hv: "../../../assets/grades/air/GA_HV",
              image_bv: "../../../assets/grades/air/GA_BV"
            }
          ]
        }

      ]
    },
    {
      name: "Gendarmerie",
      categories: [
        {
          title: "Hommes du rang",
          grades: [
            {
              name: "Seconde classe",
              appelation: "Seconde classe / soldat",
              image: "../../../assets/grades/gendarmerie/GA2",
              image_hv: "../../../assets/grades/gendarmerie/SDT_HV",
              image_bv: "../../../assets/grades/gendarmerie/SDT_BV"
            },
            {
              name: "Première classe",
              appelation: "Première classe / soldat",
              image: "../../../assets/grades/gendarmerie/GA1",
              image_hv: "../../../assets/grades/gendarmerie/1CL_HV",
              image_bv: "../../../assets/grades/gendarmerie/1CL_BV"
            },
            {
              name: "Caporal / Brigadier",
              appelation: "Caporal / Brigadier",
              image: "../../../assets/grades/gendarmerie/BRI",
              image_hv: "../../../assets/grades/gendarmerie/CPL_HV",
              image_bv: "../../../assets/grades/gendarmerie/CPL_BV"
            },
            {
              name: "Caporal-chef / Brigadier-chef",
              appelation: "Caporal-chef / Brigadier-chef",
              image: "../../../assets/grades/gendarmerie/BRC",
              image_hv: "../../../assets/grades/gendarmerie/CCH_HV",
              image_bv: "../../../assets/grades/gendarmerie/CCH_BV"
            },
          ]
        },
        {
          title: "Sous-officiers subalternes",
          grades: [
            {
              name: "Gendarme",
              appelation: "Gendarme ou garde",
              image: "../../../assets/grades/gendarmerie/GRD",
              image_hv: "../../../assets/grades/gendarmerie/SGT_HV",
              image_bv: "../../../assets/grades/gendarmerie/SGT_BV"
            },
            {
              name: "Sergent-chef / Maréchal des logis-chef",
              appelation: "Sergent-chef / Maréchal des logis-chef",
              image: "../../../assets/grades/gendarmerie/MDC",
              image_hv: "../../../assets/grades/gendarmerie/SGH_HV",
              image_bv: "../../../assets/grades/gendarmerie/SGH_BV"
            },
          ]
        },
        {
          title: "Sous-officiers",
          grades: [
            {
              name: "Adjudant",
              appelation: "Adjudant",
              image: "../../../assets/grades/gendarmerie/ADJ",
              image_hv: "../../../assets/grades/gendarmerie/ADJ_HV",
              image_bv: "../../../assets/grades/gendarmerie/ADJ_BV"
            },
            {
              name: "Adjudant-chef",
              appelation: "Adjudant-chef",
              image: "../../../assets/grades/gendarmerie/ADC",
              image_hv: "../../../assets/grades/gendarmerie/ADC_HV",
              image_bv: "../../../assets/grades/gendarmerie/ADC_BV"
            },
            {
              name: "Major",
              appelation: "Major",
              image: "../../../assets/grades/gendarmerie/MAJ",
              image_hv: "../../../assets/grades/gendarmerie/MAJ_HV",
              image_bv: "../../../assets/grades/gendarmerie/MAJ_BV"
            }
          ]
        },
        {
          title: "Officiers subalternes",
          grades: [
            {
              name: "Aspirant",
              appelation: "Aspirant",
              image: "../../../assets/grades/gendarmerie/ASP",
              image_hv: "../../../assets/grades/gendarmerie/ASP_HV",
              image_bv: "../../../assets/grades/gendarmerie/ASP_BV"
            },
            {
              name: "Sous-lieutenant",
              appelation: "Sous-lieutenant",
              image: "../../../assets/grades/gendarmerie/SLT",
              image_hv: "../../../assets/grades/gendarmerie/SLT_HV",
              image_bv: "../../../assets/grades/gendarmerie/SLT_BV"
            },
            {
              name: "Lieutenant",
              appelation: "Lieutenant",
              image: "../../../assets/grades/gendarmerie/LTN",
              image_hv: "../../../assets/grades/gendarmerie/LTN_HV",
              image_bv: "../../../assets/grades/gendarmerie/LTN_BV"
            },
            {
              name: "Capitaine",
              appelation: "Capitaine",
              image: "../../../assets/grades/gendarmerie/CNE",
              image_hv: "../../../assets/grades/gendarmerie/CNE_HV",
              image_bv: "../../../assets/grades/gendarmerie/CNE_BV"
            }
          ]
        },
        {
          title: "Officiers supérieurs",
          grades: [
            {
              name: "Commandant",
              appelation: "Commandant",
              image: "../../../assets/grades/gendarmerie/CDT",
              image_hv: "../../../assets/grades/gendarmerie/CDT_HV",
              image_bv: "../../../assets/grades/gendarmerie/CDT_BV"
            },
            {
              name: "Lieutenant-colonel",
              appelation: "Lieutenant-colonel",
              image: "../../../assets/grades/gendarmerie/LCL",
              image_hv: "../../../assets/grades/gendarmerie/LCL_HV",
              image_bv: "../../../assets/grades/gendarmerie/LCL_BV"
            },
            {
              name: "Colonel",
              appelation: "Colonel",
              image: "../../../assets/grades/gendarmerie/COL",
              image_hv: "../../../assets/grades/gendarmerie/COL_HV",
              image_bv: "../../../assets/grades/gendarmerie/COL_BV"
            }
          ]
        },
        {
          title: "Officiers généraux",
          grades: [
            {
              name: "Général de brigade",
              appelation: "Général de brigade",
              image: "../../../assets/grades/gendarmerie/GBI",
              image_hv: "../../../assets/grades/gendarmerie/GBI_HV",
              image_bv: "../../../assets/grades/gendarmerie/GBI_BV"
            },
            {
              name: "Général de division",
              appelation: "Général de division",
              image: "../../../assets/grades/gendarmerie/GDI",
              image_hv: "../../../assets/grades/gendarmerie/GDI_HV",
              image_bv: "../../../assets/grades/gendarmerie/GDI_BV"
            },
            {
              name: "Général de corps d'armée",
              appelation: "Général de corps d'armée",
              image: "../../../assets/grades/gendarmerie/GCA",
              image_hv: "../../../assets/grades/gendarmerie/GCA_HV",
              image_bv: "../../../assets/grades/gendarmerie/GCA_BV"
            },
            {
              name: "Général d'armée",
              appelation: "Général d'armée",
              image: "../../../assets/grades/gendarmerie/GA",
              image_hv: "../../../assets/grades/gendarmerie/GA_HV",
              image_bv: "../../../assets/grades/gendarmerie/GA_BV"
            }
          ]
        }
      ]
    }
  ];

  get filteredArmy(): Armee | undefined {
    console.log(this.selectedArmy);
    return this.armees.find((a: Armee) => a.name === this.selectedArmy);
  }

  selectArmy(armyName: string) {
    this.selectedArmy = armyName;
  }
}
