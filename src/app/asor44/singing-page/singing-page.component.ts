import { Component } from '@angular/core';

@Component({
  selector: 'app-singing-page',
  templateUrl: './singing-page.component.html',
  styleUrls: ['./singing-page.component.scss']
})
export class SingingPageComponent {
  selectedChantType: string = 'default';
  selectedChant: any = undefined;
  chantTypes = [
    { name: 'Patriotiques' },
    { name: 'Tradition' },
    { name: 'France' },
    { name: 'Légions étrangères' },
    { name: 'Parachutistes' },
    { name: 'Troupes de marine' },
    { name: 'Bivouac' },
    { name: 'Cadets' },
  ];

  get filteredChants() {
    console.log(this.selectedChantType)
    return this.selectedChantType ? this.chants[this.selectedChantType] : [];
  }

  chants: any = {
    "Patriotiques": [
      {
        "nom": "La Marseillaise",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Allons enfants de la Patrie",
              "Le jour de gloire est arrivé!",
              "Contre nous de la tyrannie",
              "L’étendard sanglant est levé. (bis)",
              "Entendez-vous dans nos campagnes",
              "Mugir ces féroces soldats?",
              "Ils viennent jusque dans vos bras",
              "Egorger vos fils, vos compagnes"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Aux armes, citoyens!",
              "Formez vos bataillons,",
              "Marchons, marchons,",
              "Qu’un sang impur",
              "Abreuve nos sillons!"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Que veut cette horde d’esclaves,",
              "De traîtres, de rois conjurés?",
              "Pour qui ces ignobles entraves,",
              "Ces fers dès longtemps préparés? (bis)",
              "Français, pour nous, ah! Quel outrage!",
              "Quels transports il doit exciter!",
              "C’est nous qu’on ose méditer",
              "De rendre à l’antique esclavage!"
            ]
          },
          // Répéter ce motif pour les autres couplets et refrains
          {
            "type": "couplet",
            "texte": [
              "Quoi! Des cohortes étrangères",
              "Feraient la loi dans nos foyers!",
              "Quoi! Ces phalanges mercenaires",
              "Terrasseraient nos fiers guerriers! (bis)",
              "Grand Dieu!… Par des mains enchaînées",
              "Nos fronts sous le joug se ploieraient!",
              "De vils despotes deviendraient",
              "Les maîtres de nos destinées!"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Tremblez, tyrans! Et vous perfides,",
              "L’opprobre de tous les partis,",
              "Tremblez!… Vos projets parricides",
              "Vont enfin recevoir leurs prix! (bis)",
              "Tout est soldat pour vous combattre.",
              "S’ils tombent, nos jeunes héros,",
              "La terre en produit de nouveaux,",
              "Contre vous, tous prêts à se battre."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Français, en guerriers magnanimes,",
              "Portez ou retenez vos coups!",
              "Épargnez ces tristes victimes,",
              "À regret s’armant contre nous! (bis)",
              "Mais ces despotes sanguinaires,",
              "Mais ces complices de Bouillé,",
              "Tous ces tigres qui, sans pitié,",
              "Déchirent le sein de leur mère!"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Amour sacré de la Patrie,",
              "Conduis, soutiens nos bras vengeurs!",
              "Liberté, liberté chérie,",
              "Combats avec tes défenseurs! (bis)",
              "Sous nos drapeaux, que la victoire",
              "Accoure à tes mâles accents!",
              "Que tes ennemis expirants",
              "Voient ton triomphe et notre gloire!"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Nous entrerons dans la carrière",
              "Quand nos aînés n’y seront plus;",
              "Nous y trouverons leurs poussières",
              "Et l’exemple de leurs vertus! (bis)",
              "Bien moins jaloux de leur survivre",
              "Que de partager leur cercueil,",
              "Nous aurons le sublime orgueil",
              "De les venger ou de les suivre."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/La_Marseillaise.mp3"
      },
      {
        "nom": "Le Chant des Partisans",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Ami, entends-tu le vol noir des corbeaux sur nos plaines?",
              "Ami, entends-tu les cris sourds du pays qu’on enchaîne?",
              "Ohé! Partisans, ouvriers et paysans, c’est l’alarme,",
              "Ce soir, l’ennemi connaîtra le prix du sang et des larmes."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Montez de la mine, descendez des collines, camarades!",
              "Sortez de la paille les fusils, la mitraille, les grenades.",
              "Ohé! Les tueurs à la balle et au couteau, tirez vite!",
              "Ohé! Saboteurs attention à ton fardeau, dynamite!"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "C’est nous qui brisons les barreaux des prisons pour nos frères!",
              "La haine à nos trousses et la faim qui nous pousse, la misère!",
              "Il est des pays où les gens au creux des lits font des rêves!",
              "Ici, nous vois-tu, nous on marche, nous on tue, nous on crève."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ici chacun sait ce qu’il veut, ce qu’il fait, quand il passe.",
              "Ami, si tu tombes, un ami sort de l’ombre à ta place.",
              "Demain du sang noir séchera au grand soleil sur les routes.",
              "Chantez compagnons dans la nuit la liberté vous écoute."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Le_chant_des_partisans.mp3"
      },
      {
        "nom": "La Madelon",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Pour le repos le plaisir du militaire",
              "Il est là bas à deux pas de la forêt",
              "Une maison au mur tout couvert de lierres",
              "« Aux TOURLOUROUX » c’est le nom du cabaret",
              "La servante est jeune et gentille",
              "Légère comme un papillon",
              "Comme son vin son œil pétille",
              "Nous l’appelons la Madelon",
              "Nous en rêvons la nuit, nous y pensons le jour",
              "Ce n’est que Madelon mais pour nous c’est l’amour"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Quand Madelon vient nous servir à boire",
              "Sous la tonnelle on frôle son jupon",
              "Et chacun lui raconte une histoire",
              "Une histoire à sa façon",
              "La Madelon pour nous n’est pas sévère",
              "Quand on lui prend la taille ou le menton",
              "Elle rit, c’est tout le mal qu’elle sait faire",
              "Madelon! Madelon! Madelon!"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Nous avons tous au pays une promise",
              "Qui nous attend et que l’on retrouvera",
              "Mais elle est loin, bien trop loin pour qu’on lui dise",
              "Ce qu’on fera quand la classe rentrera",
              "En comptant les jours on soupire",
              "Et quand le temps nous semble long",
              "Tout ce qu’on ne peut pas lui dire",
              "On va le dire à Madelon",
              "On l’embrasse dans les coins",
              "Elle dit « veux-tu finir »",
              "On s’figure que c’est l’autre ça nous fait bien plaisir"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Un caporal en képi de fantaisie",
              "S’en vint trouver Madelon un beau matin",
              "Et fou d’amour lui dit qu’elle était jolie",
              "Et qu’il venait pour lui demander sa main",
              "La Madelon pas bête en somme",
              "Lui répondit en souriant",
              "Pourquoi n’épouserais-je qu’un seul homme",
              "Quand j’aime tout un régiment",
              "Tes amis vont venir, tu n’auras pas ma main",
              "J’en ai bien trop besoin pour leur servir du vin"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/La_Madelon.mp3"
      },
      {
        "nom": "Le Chant du Départ",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "La victoire en chantant, nous ouvre la barrière",
              "La liberté guide nos pas",
              "Et du nord au midi, la trompette guerrière",
              "A sonné l’heure des combats",
              "Tremblez ennemis de la France",
              "Rois ivres de sang et d’orgueil",
              "Le peuple souverain s’avance",
              "Tyrans, descendez au cercueil"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "La République nous appelle",
              "Sachons vaincre ou sachons périr",
              "Un français doit vivre pour elle (bis)",
              "Pour elle un français doit mourir (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Que le fer paternel arme la main des braves",
              "Songez à nous au Champ de Mars",
              "Consacrez dans le sang des rois et des esclaves",
              "Le fer béni par nos vieillards",
              "Et, rapportant sous la chaumière",
              "Des blessures et des vertus",
              "Venez fermer notre paupière",
              "Quand les tyrans n’y seront plus"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Le_Chant_Du_Depart.mp3"
      },
      {
        "nom": "Le Régiment de Sambre et Meuse",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Tous ces fiers enfants de la Gaule",
              "Allaient sans trêve et sans repos",
              "Avec leurs fusils sur l’épaule",
              "Courage au cœur et sac à dos",
              "La gloire était leur nourriture",
              "Ils étaient sans pains sans souliers",
              "Là, ils couchaient sur la dure",
              "Avec leurs sacs comme oreillers"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Le régiment de Sambre et Meuse",
              "Marchait toujours au cri de liberté",
              "Cherchant la route glorieuse",
              "Qui l’a conduit à l’immortalité"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Pour nous battre ils étaient cent mille",
              "A leur tête ils avaient des rois",
              "Le général, vieillard débile",
              "Faiblit pour la première fois",
              "Voyant certaine la défaite",
              "Il réunit tous ses soldats",
              "Puis il fit battre la retraite",
              "Mais eux ne l’écoutèrent pas"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Le choc fut semblable à la foudre",
              "Ce fut un combat de géant",
              "Ivre de gloire, ivre de poudre",
              "Pour mourir ils serraient les rangs",
              "Le régiment par la mitraille",
              "Etait assailli de partout",
              "Pourtant la vivante muraille",
              "Impassible, restait debout"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Le nombre eut raison du courage",
              "Un soldat restait, le dernier",
              "Il se défendit avec rage",
              "Mais bientôt fut fait prisonnier",
              "En voyant ce héros farouche",
              "L’ennemi pleura sur son sort",
              "Le héros prit une cartouche",
              "Jura puis se donna la mort"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Le régiment de Sambre et Meuse",
              "Reçu la mort au cri de liberté",
              "Mais son histoire glorieuse",
              "Lui donne droit à l’immortalité"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Le_regiment_de_Sambre_et_Meuse.mp3"
      },
      {
        "nom": "L’Alsace et la Lorraine",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "France à bientôt ! Car la sainte espérance",
              "Emplit nos coeurs en te disant : adieu,",
              "En attendant l’heure de la délivrance,",
              "Pour l’avenir… Nous allons prier Dieu.",
              "Nos monuments où flotte leur bannière",
              "Semblent porter le deuil de ton drapeau.",
              "France entends-tu la dernière prière",
              "De tes enfants couchés dans leur tombeau ?"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Vous n’aurez pas l’Alsace et la Lorraine,",
              "Et, malgré vous, nous resterons français,",
              "Vous avez pu germaniser la plaine,",
              "Mais notre coeur vous ne l’aurez jamais !"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Eh quoi ! Nos fils quitteraient leur chaumière",
              "Et s’en iraient grossir vos régiments !",
              "Pour égorger la France, notre mère,",
              "Vous armeriez le bras de ses enfants !",
              "Ah ! Vous pouvez leur confier des armes,",
              "C’est contre vous qu’elles serviront,",
              "Le jour où, las de voir couler nos larmes,",
              "Pour nous venger leurs bras se lèveront !"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ah ! Jusqu’au jour où, drapeau tricolore,",
              "Tu flotteras sur nos murs exilés,",
              "Frères, étouffons la haine qui dévore",
              "Et fait bondir nos coeurs inconsolés.",
              "Mais le grand jour où la France meurtrie",
              "Reformera ses nouveaux bataillons,",
              "Au cri sauveur jeté par la patrie,",
              "Hommes, enfants, femmes, nous répondrons !"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Alsace_et_Lorraine.mp3"
      },
      {
        "nom": "Les Allobroges",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Je te salue ô terre hospitalière",
              "Où le malheur trouva protection",
              "D’un peuple libre arborant la bannière",
              "Je viens fêter la constitution",
              "Je t’ai quitté berceau de mon enfance",
              "Pour m’abriter sous un climat plus doux",
              "Mais au foyer, j’ai laissé l’espérance",
              "En attendant je m’arrête chez vous"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Allobroges vaillant, dans vos vertes campagnes",
              "Accordez-moi toujours asile et sûreté",
              "Car j’aime à respirer, l’air pur de vos montagnes",
              "Je suis la liberté, la liberté"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Au cri d’appel des peuples en alarmes",
              "J’ai répondu par un cri de réveil",
              "Sourds à ma voix, ces esclaves sans armes",
              "Restèrent tous dans un profond sommeil",
              "Relève-toi ô ma France héroïque",
              "Car pour t’aider je m’avance à grand pas",
              "Secoue enfin ton sommeil léthargique",
              "Et sois en sure, tu ne périras pas"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Un mot d’espoir à la belle Italie",
              "Courage à vous Lombards, je reviendrais",
              "Que chaque peuple à mon cri se rallie",
              "Forte avec tous je triompherai",
              "En attendant le jour de délivrance",
              "Priant les Dieux d’écarter leur courroux",
              "Pour faire luire un rayon d’espérance",
              "Bons Savoisiens, je resterai chez vous"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Les_Allobroges.mp3"
      },
      {
        "nom": "Pour Nos Morts",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Heureux ceux qui sont morts",
              "Pour la terre charnelle",
              "Mais pourvu que ce fut",
              "Dans une juste guerre.",
              "Heureux ceux qui sont morts",
              "Pour quatre coins de terre",
              "Heureux ceux qui sont morts",
              "D’une mort solennelle."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Heureux ceux qui sont morts",
              "Dans les grandes batailles,",
              "Couchés dessus le sol",
              "A la face de Dieu.",
              "Heureux ceux qui sont morts",
              "Dans un dernier haut-lieu",
              "Parmi tout l’appareil",
              "Des grandes funérailles."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Heureux ceux qui sont morts",
              "Car ils sont retournés",
              "Dans la première argile",
              "Et la première terre.",
              "Heureux ceux qui sont morts",
              "Dans une juste guerre,",
              "Heureux les épis mûrs",
              "Et les blés moissonnés."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Pour_Nos_Morts.mp3"
      }

    ],
    "Cadets": [
      {
        "nom": "Le Chant des Cadets",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Regardez-nous belle jeunesse de France",
              "Nous defillons fierement",
              "Nous sommes les cadets de la defense",
              "La nation comme ralliement",
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "France ho ma France trés belle",
              "Pour toi je ferais bataille",
              "Je quitterais père et mère",
              "Sans espoir de les revoir jamais"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Le_Chant_des_Cadets.mp3"
      }
    ],

    "Tradition": [
      {
        "nom": "La Galette",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Noble galette que ton nom,",
              "Soit immortel dans notre histoire,",
              "Qu’il soit ennobli par la gloire",
              "D’une vaillante promotion,",
              "Et si dans l’avenir",
              "Ton nom vient à paraître",
              "On y joindra peut être",
              "Nôtre grand souvenir",
              "On dira qu’à Saint-Cyr",
              "Où tu parus si belle",
              "La promotion nouvelle",
              "Vient pour t’ensevelir."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Toi qui toujours dans nos malheurs,",
              "Fus une compagne assidue,",
              "Toi, qu’hélas nous avons perdue,",
              "Reçoit le tribut de nos pleurs.",
              "Nous ferons un cercueil",
              "Où sera déposée",
              "Ta dépouille sacrée",
              "Nous porterons ton deuil.",
              "Et si quelqu’un de nous",
              "Vient à s’offrir en gage",
              "L’officier en hommage",
              "Fléchira le genou."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Amis il faut nous réunir",
              "Autour de la galette sainte",
              "Et qu’à jamais dans cette enceinte",
              "Règne son noble souvenir.",
              "Que ton nom tout puissant",
              "S’il vient un jour d’alarme",
              "A cinq cents frères d’armes",
              "Serve de ralliement.",
              "Qu’au jour de la conquête",
              "A défaut d’étendard",
              "Nous ayons la galette",
              "Pour fixer nos regards."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Soit que le souffle du malheur",
              "Sur notre tête se déchaîne",
              "Soit que sur la terre africaine",
              "Nous allions périr pour l’honneur,",
              "Ou soit qu’un ciel plus pur",
              "Reluise sur nos têtes",
              "Et que loin des tempêtes",
              "Nos jours soient tous d’azur",
              "Oui tu seras encore",
              "Oh galette sacrée",
              "La mère vénérée",
              "De l’épaulette d’or."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/La_galette.mp3"
      },
      {
        "nom": "La Prière",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Mon Dieu, mon Dieu, donne-moi la tourmente,",
              "Donne-moi la souffrance,",
              "Donne-moi l’ardeur au combat.",
              "Mon Dieu, mon Dieu, donne-moi la tourmente,",
              "Donne-moi la souffrance,",
              "Et puis la gloire au combat,",
              "Et puis la gloire au combat.",
              "Mon Dieu, mon Dieu, donne-moi la tourmente,",
              "Donne-moi la souffrance,",
              "Donne-moi l’ardeur au combat.",
              "Mon Dieu, mon Dieu, donne-moi la tourmente,",
              "Donne-moi la souffrance,",
              "Et puis la gloire au combat,",
              "Et puis la gloire au combat."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ce dont les autres ne veulent pas,",
              "Ce que l’on te refuse,",
              "Donne-moi tout cela, oui, tout cela.",
              "Je ne veux ni repos, ni même la santé",
              "Tout ça, mon Dieu, t’est assez demandé."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Mais donnes-moi, mais donnes-moi,",
              "Mais donnes-moi la foi",
              "Donne-moi force et courage,",
              "Mais donnes-moi la foi, donnes moi force et courage,",
              "Mais donnes-moi la foi",
              "Pour que je sois sûr de moi !"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/la_priere.mp3"
      },

      {
        "nom": "Le Dolo Cornu",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Dans les forêts sauvages encore,",
              "Brutaux et sales, hommes et femmes nus,",
              "Plus que les loups ou les dinosaures,",
              "Craignaient tremblant les Dolos Cornus."
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Quelle émotions, quel transport de joie :",
              "J’entends les bœufs de l’EMIA.",
              "Quelle émotion, quel transport de joie :",
              "J’entends les bœufs de l’EMIA."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Saxons et Huns, Maures et Germains,",
              "Fuyaient leurs tartes et leurs coups de boule,",
              "Terreurs dans tout l’Empire romain,",
              "Depuis Quimper jusqu’à Istanbul."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Napoléon, le cœur plein d’effroi,",
              "Presque vaincu, les pieds dans la boue,",
              "Pria en pleurs, mon Dieu donne moi,",
              "Quelques Dolos pour piller Moscou."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Adieu tueries, délicieux carnages,",
              "Alors pour rire ils passent leur temps,",
              "A traquer les rats malgré leur âge,",
              "Dans les couloir de Coëtquidan."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Adieu déjà, et sous le ciel froid,",
              "La corne triste et la sabot lourd,",
              "Ils partiront armés de leur foi,",
              "Fiers officiers et Dolos toujours."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Sachez Cadets que comme des frères,",
              "Veillent sur vous les anges bovins,",
              "Ils porteront au feu de la guerre,",
              "L’idéal pur de vos grands Anciens."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Dans la tourmente l’espoir renaîtra,",
              "Vaincront les Bœufs de l’EMIA.",
              "Dans la tourmente l’espoir renaîtra,",
              "Vaincront les Bœufs de l’EMIA."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Le_Dolo_Cornu.mp3"
      },
      {
        "nom": "Le Grand Bossu",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Un soir dans la tourmente, il a pris le chemin",
              "Qui dans le camp serpente des « bosses » jusqu’au moulin.",
              "Il a par une « perche » enfin atteint le but,",
              "Que tout I.A. recherche : devenir un « bossu »."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Le voraçon est rosse, pour calmer son courroux",
              "Tout en haut de la bosse, il lui donne rendez-vous.",
              "Là trempé jusqu’aux os, mais rempli de fierté,",
              "Le Bossu fait calot et se met à chanter :"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Lame de mon sabre, tu me montres le chemin",
              "La « pompe » et les palabres, n’y changeront jamais rien.",
              "Ma seule espérance, porte le nom d’un régiment",
              "Je garde patience, je reviens dans un an."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Un soir dans la tourmente, à force de courir,",
              "Sous les trombes battantes, le Bossu va mourir.",
              "Des innocents en deuil, de blanc étant vêtus,",
              "Porteront le cercueil du plus grand des Bossus."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Le_Grand_Bossu.mp3"
      },

      {
        "nom": "Le Pékin de Bahut",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Trois Saint-Cyriens sont sortis de l’enfer",
              "Un soir, par la fenêtre",
              "Et l’on dit, que Monsieur Lucifer",
              "N’en est plus le maître",
              "La sentinelle qui les gardait",
              "En les voyant paraître",
              "Par trois fois s’écria",
              "Halte-là! Qui va là! Qui vive!",
              "Et les trois bougres ont répondu",
              "Ce sont trois Saint-Cyriens qui sont Pékin de Bahut"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Ô Pékin de Bahut",
              "Viens nous t’attendons tous",
              "Nous leur ferons tant de chahut",
              "Qu’à la pompe, ils en seront foüs!"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Un soir, dans une turne immense",
              "Six cents martyres étaient assis",
              "Les uns disaient « Ah! Quelle chance!",
              "Dans six mois nous serons partis! »",
              "Les autres d’un air lamentable",
              "Contemplant leurs anciens avachis",
              "Disaient « Dans six mois pauvre diable,",
              "Comme eux nous seront abrutis! »"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Vous qui, dans l’espoir de Saint-Cyr",
              "Pâlissez sur de noirs bouquins",
              "Puissiez-vous ne jamais réussir",
              "C’est le vœux de vos grands Anciens",
              "Si vous connaissiez les horreurs",
              "De la pompe et du bataillon",
              "Vous préféreriez les douceurs",
              "De la vie que les Pékins ont"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Le_Pekin_de_Bahut.mp3"
      },

      {
        "nom": "Les Casos",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Quand les Cyrards quittant l’Ecole",
              "A Paris débarquent gaiement",
              "Les Casos frisés par le vent",
              "Se répandent en bandes folles",
              "Ils flottent, ils flottent gentiment",
              "Les Casoars rouges et blancs.",
              "Ils flottent, ils flottent gentiment",
              "Les Casoars rouges et blancs."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ils font l’objet des rêveries",
              "Des mamans berçant leur bébé",
              "Les potaches à l’air blasés",
              "Leur jettent des regards d’envie",
              "Ils fuient rapides et légers",
              "Comme des rêves ébauchés",
              "Ils fuient rapides et légers",
              "Comme des rêves ébauchés"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ils vont là où le cœur les mène",
              "Au nid d’amour pour s’y griser",
              "De caresses et de baisers",
              "Dont-ils sont privés en semaine",
              "Ils frôlent des minois charmants",
              "Les Casoars rouges et blancs",
              "Ils frôlent des minois charmants",
              "Les Casoars rouges et blancs"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Mais quand là-bas à la frontière",
              "Le canon les a appelé",
              "Ils vont combattre en rangs serrés",
              "Pas un ne regarde en arrière",
              "Ils sont les premiers à l’assaut",
              "Les valeureux petit Casos",
              "Ils sont les premiers à l’assaut",
              "Les valeureux petit Casos"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Rouges et blancs ils sont l’emblème",
              "Des amours noyées dans le sang",
              "D’adieux que le Cyrard mourant",
              "Fait porter à celle qu’il aime",
              "Ceux-là font couler bien des pleurs",
              "Qui sont tombés au Champ d’Honneur",
              "Ceux-là font couler bien des pleurs",
              "Qui sont tombés au Champ d’Honneur"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Tantôt les caresses des femmes",
              "Tantôt les balles et les boulets",
              "Aime, mourir, c’est leur métier",
              "De servir la France et les dames",
              "Voilà ce que disent en mourant",
              "Les Casoars rouges et blancs",
              "Voilà ce que disent en mourant",
              "Les Casoars rouges et blancs"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Les_casos.mp3"
      },

      {
        "nom": "Les Fines",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Ils est d’un usage constant",
              "Quand tout pays et quand tout temps",
              "Il soit au monde de bons enfants",
              "Que l’on débine",
              "On les appelle de noms d’oiseaux",
              "De j’ m’en foutistes, de rigolos",
              "Mais à Saint-Cyr pour eux repos",
              "Ce sont les Fines"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Pourquoi les appelle-t-on ainsi",
              "Nul encore ne l’a jamais dit",
              "C’est qu’avec eux tout se finit",
              "Tout se termine",
              "Insoucieux de leur destin",
              "Toujours joyeux et pleins d’entrain",
              "Ils pompent seulement le Pékin",
              "Ce sont les Fines"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "S’ils ont les calots bahutés",
              "C’est sûrement pas par méchanceté",
              "Ni pour braver l’autorité",
              "Qui les taquine",
              "Mais c’est qu’à tire-larigot",
              "Qu’ils sortent ou qu’ils aillent au cachot",
              "Ils font partout toujours calot",
              "Ce sont les Fines"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Si leur tunique n’a pas de cornard",
              "Ils disent que ça viendra plus tard",
              "Ça fait tout de même de bon Cyrard",
              "Que l’on estime",
              "Et qu’on attend impatiemment",
              "Car voyant Paris moins souvent",
              "Ils ont plus de nerf et plus d’argent",
              "Ce sont les Fines"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "S’ils terminent les listes de classement",
              "C’est qu’à Saint-Cyr pendant deux ans",
              "A faire la pompe éperdument",
              "Nul ne s’échine",
              "Mais allez dans les salles de jeux",
              "Sur les marbres blancs glorieux",
              "Parmi tant de noms valeureux",
              "Y a bien des Fines"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Les_Fines.mp3"
      },

      {
        "nom": "Marche de la 2° D.B.",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Après le Tchad, l’Angleterre et la France",
              "Le grand chemin qui mène vers Paris,",
              "Le coeur joyeux tout gonflé d’espérance",
              "Ils ont suivi la gloire qui les conduit.",
              "Sur une France, une croix de Lorraine,",
              "Ecusson d’or qu’on porte fièrement,",
              "C’est le joyau que veulent nos marraines,",
              "C’est le flambeau de tous nos régiments."
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Division de fer",
              "Toujours en avant",
              "Les gars de Leclerc",
              "Passent en chantant,",
              "Jamais ils ne s’attardent",
              "La victoire n’attend pas,",
              "Et chacun les regarde",
              "Saluant chapeau bas.",
              "Division de fer,",
              "Toujours souriants",
              "Les gars de Leclerc",
              "Passent en chantant",
              "D.B vive la deuxième D.B."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ils ont vécu des heures merveilleuses",
              "Depuis Koufra, Rhadamès et Cherbourg.",
              "Pour eux Paris fut l’entrée glorieuse",
              "Mais ils voulaient la Lorraine et Strasbourg.",
              "Et tout là-haut, dans le beau ciel d’Alsace",
              "Faire flotter notre drapeau vainqueur",
              "C’est le serment magnifique et tenace",
              "Qu’ils avaient fait dans les heures de douleur."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ils ont connu des brunes et des blondes",
              "Dans les pays qui les ont vu passer,",
              "Mais dans leur coeur un seul amour au monde",
              "Notre pays qu’ils viennent délivrer.",
              "C’est pour eux tous dans un doux coin de France",
              "La fiancée qui attend le retour,",
              "Elle oubliera tous les jours de souffrance",
              "Quand la victoire lui rendra son amour."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Au coin du feu dans la paix radieuse,",
              "Très fièrement auprès de leurs enfants",
              "Ils conteront l’histoire merveilleuse",
              "Des bataillons de notre régiment.",
              "Gars de Leclerc sera le mot de passe",
              "Qui groupera la poignée de français",
              "Disant «malgré» quand la défaite passe",
              "«Restant debout, ne se rendant jamais»."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Marche_de_la_2eme_DB.mp3"
      },

      {
        "nom": "Officiers de France",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Le dimanche à Versailles, les Saint-Cyriens guerriers",
              "Se rangent en bataille, se mettant à chanter :"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Ohé ! Ohé vivent les Officiers de France",
              "Ohé ! Ohé vivent les Officiers français,"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Sur le pont de Montrouge, les canons sont braqués,",
              "Et si les Pékins bougent, on les fera chanter :"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Ohé ! Ohé vivent les Officiers de France",
              "Ohé ! Ohé vivent les Officiers français,"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Si le Pékin rouspète, il se fera cirer",
              "Cirer sur les roupettes jusqu’au jugement dernier"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Ohé ! Ohé vivent les Officiers de France",
              "Ohé ! Ohé vivent les Officiers français,"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Si ta femme est gentille, et bien fais la passer,",
              "Sinon gare à ta fille, elle pourrait bien chanter :"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Ohé ! Ohé vivent les Officiers de France",
              "Ohé ! Ohé vivent les Officiers français,"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "La France est notre mère, c’est Elle qui nous nourrit",
              "Avec des pommes de terres et des fayots pourris"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Ohé ! Ohé vivent les Officiers de France",
              "Ohé ! Ohé vivent les Officiers français,"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "L’Alsace et la Lorraine ne veulent pas plier",
              "Sous la botte prussienne, on les entend chanter :"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Ohé ! Ohé vivent les Officiers de France",
              "Ohé ! Ohé vivent les Officiers français,"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Dans la lande bretonne le grand vent a soufflé,",
              "Et le monde s’étonne quand on l’entend chanter :"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Ohé ! Ohé vivent les Officiers de France",
              "Ohé ! Ohé vivent les Officiers français,"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Officiers_de_France.mp3"
      },

      {
        "nom": "Oh! Douce France",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Oh! Douce France.",
              "Mon beau pays",
              "Lieu de mon enfance,",
              "Du bonheur, des chansons et des rires",
              "Ta souvenance berce ma dolence",
              "D’un chant d’espérance."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Hélas sur cette terre",
              "Où je suis exilé,",
              "Mon âme est solitaire",
              "Et mon cœur désolé.",
              "J’attends chaque jour",
              "Le moment du retour."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ici ton cher visage",
              "Eclaire nos destins",
              "Pour garder bon courage",
              "On pense aux clairs matins",
              "Qui chassaient toujours",
              "L’ombre des mauvais jours."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Oh_douce_France.mp3"
      },

      {
        "nom": "Chant de Fidélité",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Des hommes à l’âme vile,",
              "Chassant le sceptre et la croix,",
              "Ont imposé dans nos villes",
              "Le reniement de la loi",
              "Mais pour que toujours sur terre",
              "Reste un point de ralliement",
              "D’âge en âge sont fidèles",
              "Les hommes de notre sang."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Fidèles aux voix de l’âme,",
              "Des bois, du roc et du sang",
              "Fidèles à la vraie flamme,",
              "Fidèles à leurs enfants",
              "Lorsqu’a chanté la chouette,",
              "A l’ombre de nos halliers",
              "Ils sont partis pour la quête",
              "Du Graal et du chevalier."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Les ennemis de la Messe",
              "Ont bafoué la raison",
              "Semé le doute, la détresse",
              "Au cœur de nos maisons",
              "Ils ont traqué les bons Pères,",
              "Voulu souiller nos enfants,",
              "Mais le cœur des âmes fières,",
              "Triomphera dans le vent."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Quand les autres trahiront,",
              "Camarades soyons fidèles",
              "Défendons la Tradition,",
              "Luttons pour l’Europe nouvelle",
              "Vrais héritiers des nobles Francs,",
              "Fidèles à Dieu et au roy",
              "La lutte de nos descendants",
              "Emplit nos esprits de joie."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Chant_de_fidelite.mp3"
      }
    ],
    "France": [
      {
        "nom": "ALLELUIA",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Nous sommes partis de bon matin avant le jour (ter)",
              "La nuit était comme un four",
              "Glory, glory alléluia (ter)",
              "Bon voyage pour les paras"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Longue est la route qui serpente devant nous (ter)",
              "Mais nous irons jusqu’au bout",
              "Glory, glory alléluia (ter)",
              "Bon voyage pour les paras"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Oui nous irons nous faire casser la gueule en cœur (ter)",
              "Mais nous reviendrons vainqueurs",
              "Glory, glory alléluia (ter)",
              "Bon voyage pour les paras"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Alleluia.mp3"
      },
      {
        "nom": "CHANT DE L’INFANTERIE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Du levant au couchant de notre beau pays",
              "Les gens de pied toujours gardent le même esprit",
              "Qu’ils descendent du ciel ou de leurs chars brûlants",
              "Qu’ils portent l’ancre d’or ou bien le képi blanc",
              "La grenade de ligne ou bien le cor d’argent",
              "Leur cri de ralliement restera en avant."
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Soldat d’infanterie comme les anciens preux",
              "Servons France chérie sous la voûte des cieux",
              "Maintenons cette flamme qui à Verdun brûlait",
              "Trempons d’acier notre âme de fantassin Français"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "S’il faut des exemples, regardons le passé",
              "Les combats courageux dont nous sommes héritiers",
              "Sous le soleil de feu la froidure et le vent",
              "Voyant sous le harnais tenant le premier rang",
              "Comme à Sidi-Brahim, Camérone et Bazeille",
              "L’infanterie partout a su faire merveille"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Quand les chars gronderont sur le sol ennemi",
              "Le temps viendra pour moi de dire adieux à ma mie",
              "Au fracas des combats je suivrais mes aînés",
              "Sans craindre de la mort qui épie le guerrier",
              "Et si un dur matin elle me prend pour amant",
              "Que se soit la victoire qui vienne par mon sang"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Chant_de_l_infanterie.mp3"
      },

      {
        "nom": "CHANTONS POUR PASSER LE TEMPS",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Chantons pour passer le temps",
              "Les amours jolies d’une belle fille,",
              "Chantons pour passer le temps",
              "Les amours jolies d’une fille de quinze ans.",
              "Aussitôt qu’elle fut promise,",
              "Aussitôt elle changea de mise",
              "Et pris l’habit de matelot,",
              "Et vint s’embarquer à bord du navire",
              "Et pris l’habit de matelot,",
              "Et vint s’embarquer à bord du vaisseau."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Le capitaine du bâtiment",
              "Etait enchanté d’un si beau jeune homme",
              "Le capitaine du bâtiment",
              "Le fit appeler sur le gaillard d’avant :",
              "Tes beaux yeux, ton joli visage,",
              "Ta tournure et ton joli corsage",
              "Me font toujours me rappeler",
              "A une beauté qui m’était promise",
              "Me font toujours me rappeler",
              "A une beauté que j’ai tant aimée."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Monsieur, vous vous moquez de moi,",
              "Vous me badinez, vous me faites rire,",
              "Monsieur, vous vous moquez de moi :",
              "Je suis embarqué au port de Lorient;",
              "Je suis né à la Martinique,",
              "Et même je suis enfant unique;",
              "Et c’est un navire hollandais",
              "Qui m’a débarqué au port de Boulogne,",
              "Et c’est un navire hollandais",
              "Qui m’a débarqué au port de Calais."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ils ont ainsi vécu sept ans",
              "Sur le même bateau sans se reconnaître,",
              "Ils ont ainsi vécu sept ans",
              "Se sont reconnus au débarquement.",
              "Puisqu’enfin l’amour nous rassemble,",
              "Nous allons nous marier ensemble;",
              "L’argent que nous avons gagné,",
              "Ils nous servira dans notre ménage,",
              "L’argent que nous avons gagné,",
              "Ils nous servira pour nous marier."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "C’ui’la qu’a écrit la chanson",
              "C’est le gars Camut, gabier de misaine",
              "C’ui’la qu’a écrit la chanson",
              "C’est le gars Camut, gabier d’artimon",
              "O matelot, faut hisser la toile",
              "Au cabestan il faut que tout le monde y aille",
              "Et tire, tire tire donc",
              "Sinon t’auras rien dedans ta gamelle",
              "Et tire, tire tire donc",
              "Sinon t’auras rien dedans ton bidon"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Chantons_pour_passer_le_temps.mp3"
      },

      {
        "nom": "CHANTONS POUR PASSER LE TEMPS",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Chantons pour passer le temps",
              "Les amours jolies d’une belle fille,",
              "Chantons pour passer le temps",
              "Les amours jolies d’une fille de quinze ans.",
              "Aussitôt qu’elle fut promise,",
              "Aussitôt elle changea de mise",
              "Et pris l’habit de matelot,",
              "Et vint s’embarquer à bord du navire",
              "Et pris l’habit de matelot,",
              "Et vint s’embarquer à bord du vaisseau."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Le capitaine du bâtiment",
              "Etait enchanté d’un si beau jeune homme",
              "Le capitaine du bâtiment",
              "Le fit appeler sur le gaillard d’avant :",
              "Tes beaux yeux, ton joli visage,",
              "Ta tournure et ton joli corsage",
              "Me font toujours me rappeler",
              "A une beauté qui m’était promise",
              "Me font toujours me rappeler",
              "A une beauté que j’ai tant aimée."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Monsieur, vous vous moquez de moi,",
              "Vous me badinez, vous me faites rire,",
              "Monsieur, vous vous moquez de moi :",
              "Je suis embarqué au port de Lorient;",
              "Je suis né à la Martinique,",
              "Et même je suis enfant unique;",
              "Et c’est un navire hollandais",
              "Qui m’a débarqué au port de Boulogne,",
              "Et c’est un navire hollandais",
              "Qui m’a débarqué au port de Calais."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ils ont ainsi vécu sept ans",
              "Sur le même bateau sans se reconnaître,",
              "Ils ont ainsi vécu sept ans",
              "Se sont reconnus au débarquement.",
              "Puisqu’enfin l’amour nous rassemble,",
              "Nous allons nous marier ensemble;",
              "L’argent que nous avons gagné,",
              "Ils nous servira dans notre ménage,",
              "L’argent que nous avons gagné,",
              "Ils nous servira pour nous marier."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "C’ui’la qu’a écrit la chanson",
              "C’est le gars Camut, gabier de misaine",
              "C’ui’la qu’a écrit la chanson",
              "C’est le gars Camut, gabier d’artimon",
              "O matelot, faut hisser la toile",
              "Au cabestan il faut que tout le monde y aille",
              "Et tire, tire tire donc",
              "Sinon t’auras rien dedans ta gamelle",
              "Et tire, tire tire donc",
              "Sinon t’auras rien dedans ton bidon"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Chantons_pour_passer_le_temps.mp3"
      },
      {
        "nom": "EN AVANT PARCOURANT LE MONDE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "En avant parcourant le monde",
              "Adieu! adieu! adieu!",
              "Le ciel est bleu, le soleil brille",
              "Adieu! adieu! adieu!"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Mon cœur est las, mon cœur est las",
              "De tant souffrir, de tant souffrir",
              "Pour oublier il faut partir"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ô belle ville, ô toi que j’aime",
              "Adieu! adieu! adieu!",
              "Au vieux beffroi, clocher fidèle",
              "Adieu! adieu! adieu!"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Adieu maison, adieu maison",
              "Chère à mon cœur, chère à mon cœur",
              "Ou j’ai connu le vrai bonheur"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ô toi qui fus toute ma vie",
              "Adieu! adieu! adieu!",
              "Faut-il te quitter ma mie",
              "Adieu! adieu! adieu!"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/En_avant_parcourant_le_monde.mp3"
      },

      {
        "nom": "KYRIE DES GUEUX",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Holà marchons les gueux",
              "Errant sans feu ni lieu",
              "Bissac et ventre creux",
              "Marchons les gueux"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Kyrie eleïson, miserere nobis (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Bissac et ventre creux",
              "Aux jours calamiteux",
              "Bannis et malchanceux",
              "Marchons les gueux"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Bannis et malchanceux",
              "Maudits comme lépreux",
              "En quête d’autres cieux",
              "Marchons les gueux"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "En quête d’autres cieux",
              "Rouleurs aux pieds poudreux",
              "Ce soir chez le bon Dieu",
              "Frappez les gueux"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ce soir chez le bon Dieu",
              "Errant sans feu ni lieu",
              "Bissac et ventre creux",
              "Entrez les gueux"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Kirie_des_gueux.mp3"
      },

      {
        "nom": "LA MORT",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "La mort chevauche à travers le pays",
              "Frappant sans choix les héros les bannis",
              "Fuyez ennemis sinon vous mourrez",
              "Nous autres face à elle n’avons de regret",
              "Fai la la la , fai la la la"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Tremble devant toi les lâches et les impurs",
              "Car bientôt ils deviendront ta pâture",
              "Nous les chargerons sans crainte o mort",
              "Car tu es notre amie et nous vaincrons encore",
              "Fai la la la , fai la la la"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "La mort fauchant rasant et dévastant",
              "Décime nos rangs frappant les survivants",
              "Mais le soir venu , nous la chanterons",
              "Sans aucune craintes c’ est un vieux compagnon",
              "Fai la la la , fai la la la"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/La_mort.mp3"
      },

      {
        "nom": "LA BOURGOGNE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Au sein d’une vigne, j’ai reçu le jour.",
              "Ma mère était digne de tout mon amour.",
              "Depuis ma naissance, elle m’a nourri,",
              "En reconnaissance, mon cœur la chérit."
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Joyeux enfant de la bourgogne,",
              "Je n’ai jamais eu de guignon.",
              "Quand je vois rougir ma trogne,",
              "Je suis fier d’être bourguignon",
              "Et je suis fier (ter) d’être bourguignon",
              "Et je suis fier (ter) d’être bourguignon"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Toujours la bouteille à côté de moi",
              "Buvant sous la treille, plus heureux qu’un roi",
              "Jamais ne m’embrouille car chaque matin,",
              "Je me débarbouille dans un verre de vin."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Madère et Champagne approchez un peu!",
              "Et vous vins d’Espagne, malgré tous vos feux",
              "Amis de l’ivrogne, réclamez vos droits",
              "Devant le Bourgogne, saluez trois fois !"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Puisque tout succombe, un jour je mourrai",
              "Jusque dans la tombe toujours je boirai",
              "Je veux qu’en la cave où sera mon corps,",
              "On y mette un verre rempli jusqu’au bord."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/La_Bourgogne.mp3"
      },



      {
        "nom": "LA CAVALCADE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Un jour dans la fusillade",
              "Chevauchant à l’inconnu",
              "Nous allions en cavalcade",
              "Tu étais mon camarade",
              "Celui que j’aimais le plus (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Un cavalier par bravade",
              "Des siens le plus résolu",
              "Me porta son estocade",
              "Ce fut toi mon camarade",
              "Ce fut toi qui la reçut (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "J’ai vengé l’estafilade",
              "Que ce coup t’avait valu",
              "Mais très tard dans la nuit froide",
              "J’ai pleuré mon camarade",
              "Près de son corps étendu (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Je suis ma route maussade",
              "Et je chevauche sans but",
              "Au hasard d’une embuscade",
              "J’ai perdu mon camarade",
              "Je ne rirai jamais plus (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Prince, écoute ma ballade",
              "Et mon appel éperdu",
              "Prie le dieu des cavalcades",
              "De placer mon camarade",
              "À la droite de Jésus (bis)"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/La_cavalcade.mp3"
      },

      {
        "nom": "LE CHANT DES MARAIS",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Loin vers l’infini s’étendent",
              "De grands prés marécageux",
              "Et là-bas nul oiseau ne chante",
              "Sur les arbres secs et creux"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Ô terre de détresse!",
              "Où nous devons sans cesse",
              "Piocher, piocher, piocher!"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Dans ce camp morne et sauvage",
              "Entouré de mur de fer",
              "Il nous semble vivre en cage",
              "Au milieu d’un grand désert"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Bruit de pas et bruit des armes",
              "Sentinelles jour et nuit",
              "Et du sang, et des cris, des larmes",
              "La mort pour celui qui fuit"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Mais un jour dans notre vie",
              "Le printemps refleurira",
              "Liberté, liberté chérie",
              "Je dirai tu es à moi"
            ]
          },
          {
            "type": "dernier refrain",
            "texte": [
              "Ô terre d’allégresse!",
              "Où nous pourrons sans cesse",
              "Aimer, aimer, aimer!"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Le_chant_des_Marais.mp3"
      },

      {
        "nom": "L’ARTILLEUR DE METZ",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Quand l’artilleur de Metz",
              "Arrive en garnison",
              "Toutes les femmes de Metz",
              "Soulèvent leur cotillon",
              "Pour préparer l’chemin",
              "De l’artilleur malin",
              "Qui les troussera demain",
              "Vite fait sur un tas d’foin."
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Artilleurs mes chers frères",
              "A sa santé buvons un verre",
              "Et chantons tous ce gai refrain",
              "Vivent les artilleurs les femmes et le bon vin",
              "Et chantons tous et chantons tous",
              "Ce gai refrain, ce gai refrain",
              "Vivent les artilleurs les femmes et le bon vin"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Quand l’artilleur de Metz",
              "Quitte sa garnison",
              "Toutes les femmes de Metz",
              "Se mettent à leur balcon",
              "Pour saluer l’départ",
              "De l’artilleur fétard",
              "Qui s’est tant fourvoyé",
              "Dans leur intimité."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Imitons les vertus",
              "De ceux qui sont ne plus",
              "Qui près de leurs affûts",
              "Ont fait tant de prouesses",
              "De nos aînés surtout",
              "Qui roulèrent partout",
              "De Madrid à Moscou",
              "De Rome à Tombouctou"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Saint’Barbe notre patronne",
              "En ce beau jour de liesse",
              "Bénit notre allégresse",
              "Protège l’artillerie",
              "Les braves canonniers",
              "La France notre patrie",
              "Et ses vaillants troupiers"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/L_Artilleur_de_Metz.mp3"
      },


      {
        "nom": "LA PIÉMONTAISE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Ah oui ! J’ai le coeur à mon aise",
              "Quand j’ai ma mie auprès de moi,",
              "De temps en temps je la regarde",
              "Et je lui dis : embrasse-moi ! (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Comment veux-tu que je t’embrasse",
              "Quand on me dit du mal de toi ?",
              "On dit que tu pars pour la guerre",
              "Dans le Piémont, servir le Roy. (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ceux qui t’ont dit cela, ma belle,",
              "Ils t’ont bien dit la vérité.",
              "Mon cheval est à l’écurie,",
              "Sellé, bridé, prêt à partir. (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Quand tu seras dans ces campagnes,",
              "Tu n’y penseras plus à moi.",
              "Tu n’penseras qu’aux Piémontaises",
              "Qui sont cent fois plus belles que moi. (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Si fait, si fait, si fait, ma belle,",
              "Je penserai toujours à toi.",
              "Je ferai faire une belle image",
              "Toute à la semblance de toi. (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Quand je serai z’à table à boire,",
              "À mes camarades je dirai :",
              "Chers camarades, venez voir",
              "Celle que mon cœur a tant aimée. (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Je l’ai z’aimée, je l’aime encore,",
              "Je l’aimerai tant qu’je vivrai.",
              "Je l’aimerai quand je serai mort,",
              "Si c’est donné aux trépassés. (bis)"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/La_Piemontaise.mp3"
      },

      {
        "nom": "LA PROTESTATION",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Nous sommes 30000 braves",
              "Au képi sombre, au manteau bleu,",
              "Et nous voyons même les zouaves",
              "Derrière nous courir au feu.",
              "Vous qui voulez qu’on vous supprime,",
              "Qu’avez-vous à nous reprocher?",
              "En guerre, en paix, notre seul crime",
              "C’est d’avoir pu trop bien marché.",
              "Ne touchez pas au corps d’élite,",
              "Chasseurs, chasseurs, pressons le pas,",
              "Qu’on nous fasse marcher plus vite",
              "Mais qu’on ne nous supprime pas."
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Encore un carreau qui casse,",
              "V’l’a l’vitrier qui passe;",
              "Encore un carreau d’cassé,",
              "V’l’a l’vitrier qui passe;",
              "V’l’a l’vitrier, v’l’a l’vitrier",
              "V’l’a l’vitrier, v’l’a l’vitrier",
              "V’l’a l’vitrier passé."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Voyez un peu notre démarche,",
              "Essayez de nous suivre au pas,",
              "C’est notre bataillon qui passe.",
              "Allons ne nous essoufflez,",
              "C’est le clairon, c’est notre amour.",
              "Fi du biffin qui lent se traîne,",
              "Trébuchant derrière un tambour,",
              "Place aux chasseurs, la route est large,",
              "La route qui mène aux combats;",
              "Vous les verrez pousser la charge,",
              "Si vous ne les supprimez pas."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/La_Protestation.mp3"
      },

      {
        "nom": "LES OIES SAUVAGES",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Les oies sauvages vont vers le nord",
              "Leurs cris dans la nuit montent",
              "Gare au voyage car la mort (bis)",
              "Nous guette par le monde (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Au bout de la nuit qui descend",
              "Voyage grise escadre",
              "L’orage gronde et l’on entend (bis)",
              "La rumeur des batailles (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "En avant vole grise armée",
              "Et cingle aux mers lointaines",
              "Tu reviendras, mais nous qui sait (bis)",
              "Où le destin nous mène (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Comme toi toujours nous allons",
              "Grise armée dans la guerre",
              "Murmure nous, si nous tombons (bis)",
              "La dernière prière (bis)"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Les_Oies_sauvages.mp3"
      },

      {
        "nom": "LA STRASBOURGEOISE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Petit papa c’est donc la mi-Carême,",
              "Car te voici déguisé en soldat.",
              "Petit papa, dis moi si c’est pour rire,",
              "Ou pour faire peur aux tous petits enfants. (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Non non ma fille, je pars pour la Patrie,",
              "C’est un devoir où tous les papas s’en vont.",
              "Embrasse moi petite fille chérie,",
              "Je rentrerais bien vite à la maison. (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Dis moi maman, quelle est cette médaille,",
              "Et cette lettre qu’apporte le facteur ?",
              "Dis moi maman, tu pleures et tu défailles,",
              "Ils ont tué petit père adoré. (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Oui mon enfant, ils ont tué ton père,",
              "Pleure avec moi, car nous les haïssons.",
              "Quelle guerre atroce qui fait pleurer les mères,",
              "Et tue les pères des petits anges blonds. (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "La neige tombe aux portes de la ville,",
              "Là est assise une enfant de Strasbourg.",
              "Elle reste là malgré le froid, la bise,",
              "Elle reste là malgré le froid du jour. (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Un homme passe, à la fillette donne,",
              "Elle reconnaît l’uniforme allemand.",
              "Elle refuse l’aumône qu’on lui donne,",
              "A l’ennemi elle dit bien fièrement : (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Gardez votre or, je garde ma puissance,",
              "Soldat prussien, passez votre chemin.",
              "Moi je ne suis qu’une enfant de la France,",
              "A l’ennemi je ne tends pas la main. (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Tout en priant sous cette cathédrale,",
              "Ma mère est morte sous ce porche écroulé.",
              "Frappée à mort par l’une de vos balles,",
              "Frappée à mort par l’un de vos boulets. (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Mon père est mort sur vos champs de batailles,",
              "Je n’ai pas vu l’ombre de son cercueil.",
              "Frappé à mort par l’une de vos balles,",
              "C’est la raison de ma robe de deuil. (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Vous avez eu l’Alsace et la Lorraine,",
              "Vous avez eu des millions d’étrangers.",
              "Vous avez eu Germanie et Bohème,",
              "Mais mon p’tit coeur vous ne l’aurez jamais,",
              "Mais mon p’tit coeur il restera français."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/La_Strasbourgeoise.mp3"
      },

      {
        "nom": "LE COR",
        "couplets": [
          {
            "type": "refrain",
            "texte": [
              "Dans le soir d’or résonne, résonne",
              "Dans le soir d’or résonne le cor",
              "Résonne, résonne, résonne le cor ( bis )",
              "Dans le soir d’or résonne, résonne",
              "Dans le soir d’or résonne le cor"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "C’est le cor du grand Roland",
              "Qui sonne affolant",
              "Sous le ciel sanglant",
              "C’est le cor du roi Saint Louis",
              "Sonnant l’hallali",
              "Des païens maudits."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "C’est le cor du gai Duguesclin",
              "Harcelant sans frein",
              "L’Anglais qui le craint",
              "C’est le cor de Jeanne Lorraine",
              "Qui sonne et s’égrène",
              "Dans la nuit sereine"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "C’est le cor du preux Bayard",
              "Qui dans le brouillard",
              "Rallie les fuyards",
              "C’est le cor de Hoche et Marceau",
              "Des gars en sabots",
              "Sauvant nos drapeaux"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "C’est le cor du vieil Empereur",
              "Qui sonne et se meurt",
              "Dans l’île des pleurs",
              "C’est le cor des chasseurs de fer",
              "Tenant quatre hivers",
              "Des Vosges à l’Yser"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Le_Cor.mp3"
      },

      {
        "nom": "LES DRAGONS DE NOAILLES",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Ils ont décoré Paris",
              "Les fiers dragons de Noailles",
              "Avec les drapeaux ennemis",
              "Ils ont décoré Paris"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Lon, lon, la",
              "Laissez les passer",
              "Les français reprennent la lorraine",
              "Lon, lon, la",
              "Laissez les passer",
              "Ils ont eu du mal assez"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ils ont traversé le Rhin",
              "Avec monsieur de Turenne",
              "Au son des fifres et tambourins",
              "Ils ont traversé le Rhin"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ils ont incendié Coblence",
              "Les fiers dragons de Noailles",
              "Et pillé le Palatinat",
              "Ils ont incendié Coblence"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Les_Dragons_de_Noailles.mp3"
      },

      {
        "nom": "LES PLAISIRS SONT DOUX",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Les plaisirs sont doux",
              "D’être au-près de vous, la belle.",
              "Je soupire à vos genoux",
              "Et je brûle d’amour pour vous.",
              "Les plaisirs sont doux, demoiselle",
              "D’être auprès de vous."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Peut-on voir vos yeux",
              "Sans être amoureux, la belle,",
              "Ils sont doux et gracieux,",
              "Ils sont tout rempli de feu",
              "Peut-on voir vos yeux, demoiselle,",
              "Sans être amoureux."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Profitez du temps,",
              "De vos dix-huit ans, la belle,",
              "Car le temps viendra aussi,",
              "Que vous aurez un mari",
              "Profitez du temps, demoiselle,",
              "De vos dix-huit ans."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Plus d’un seul galant,",
              "C’est compromettant, la belle,",
              "Il faut choisir l’un d’entre eux,",
              "Faire aux autres vos adieux,",
              "Plus d’un seul galant, demoiselle",
              "C’est compromettant."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Les_plaisirs_sont_doux.mp3"
      },

      {
        "nom": "LE JOUR LE PLUS LONG",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Nous irons au cœur du monde",
              "Par la poudre et le canon",
              "En comptant chaque seconde",
              "Car ce jour est le plus long"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Sous le fer et la mitraille",
              "Des milliers se coucheront",
              "Et le soir de la bataille",
              "Des milliers se compteront"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Le jour est long, le jour est long",
              "Et la peur est tout au long",
              "Et l’espoir est tout au fond",
              "Et les cris sont des millions"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Nous irons vers la victoire",
              "Par le sang des compagnons",
              "Qui ont fait marcher l’histoire",
              "En courant pour le jour le plus long"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Le jour est long, le jour est long",
              "Et l’espoir est tout au fond",
              "Et la peur est tout au long",
              "Et les cris sont des millions"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Nous irons vers la victoire",
              "Par le sang des compagnons",
              "Qui ont fait marcher l’histoire",
              "En mourant pour le jour le plus long."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Le_Jour_le_plus_long.mp3"
      },
      {
        "nom": "LE RÊVE PASSE",
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Le_reve_passe.mp3",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Les soldats sont là-bas endormis sur la plaine",
              "Où le souffle du soir chante pour les bercer,",
              "La terre aux blés rasés parfume son haleine,",
              "La sentinelle au loin va d’un pas cadencé."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Les voyez-vous, Les hussards, les dragons, la Garde,",
              "Glorieux fous d’Austerlitz que l’Aigle regarde,",
              "Ceux de Kléber, de Marceau chantant la victoire,",
              "Géants de fer s’en vont chevaucher la gloire."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Mais le petit soldat voit s’assombrir le Rêve,",
              "Il lui semble là-bas qu’un orage se lève,",
              "L’hydre au casque pointu sournoisement s’avance ;",
              "L’enfant s’éveille, ému, mais tout dort en silence",
              "Et dans son cœur le songe est revenu.",
              "Les canons ! Les clairons ! Ecoutez ! Regardez !",
              "Les voyez-vous, Les hussards, les dragons, la Garde,",
              "Ils saluent tous l’Empereur qui les regarde."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Et dans un pays clair où la moisson se dore,",
              "L’âme du petit bleu revoit un vieux clocher.",
              "Voici la maisonnette où celle qu’il adore",
              "Attendant le retour, tient son regard penché."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Mais tout à coup… Douleur ! Il la voit plus lointaine,",
              "Un voile de terreur a couvert ses yeux bleus.",
              "Encore les casques noirs, l’incendie et la haine,",
              "Les voilà ce sont eux !"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Les voyez-vous, leurs hussards, leurs dragons, leur Garde,",
              "Sombres hiboux entraînant la vierge hagarde.",
              "Le vieux Strasbourg frémit sous ses cheveux de neige.",
              "Mourez tambours, voici le sanglant cortège ;",
              "Bientôt le jour vermeil à l’horizon se lève",
              "On sonne le réveil et c’est encore le Rêve.",
              "Les Géants de l’An deux sont remplacés par d’autres.",
              "Et ces soldats joyeux, France … ce sont les nôtres."
            ]
          }
        ]
      },
      {
        "nom": "HONNEUR ET FIDÉLITÉ",
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Honneur_et_Fidelite.mp3",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Levons dans la brume et la rocaille,",
              "Les drapeaux de nos espoirs fervents.",
              "Que nos coeurs tout prêts à la bataille",
              "Bondissent au soleil levant."
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Honneur, Fidélité, Honneur, Fidélité, (bis)",
              "Sauront nous donner des jours plus beaux. (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Par les routes innondées de lumière,",
              "Nous marcherons dans le jour nouveau.",
              "Au matin claqueront nos bannières",
              "Notre foi vit dans nos drapeaux."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Croix d’argent, croix d’or ou lion de sable,",
              "Croix perlée, bâtons des ducs hardis,",
              "Gwenn-ha-du, sang et or admirables;",
              "Vous volerez au Grand Midi."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Aujourd’hui nous voulons l’aventure.",
              "Nous voulons le soleil éclatant.",
              "Nous voulons former une âme dure,",
              "Aux jeunes que l’Europe attend!"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Hier, amis, c’était l’aventure,",
              "La guerre, les routes, les combats sanglants.",
              "Nous avons acquis une âme dure!",
              "Amis, la France nous attend!"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Partout, la misère nous tenaille,",
              "Notre peuple souffre mille maux,",
              "Mais nos coeurs tout prêts à la bataille",
              "Feront naître des temps nouveaux!"
            ]
          }
        ]
      },
      {
        "nom": "LES AIGLES TRIOMPHALES",
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Les_aigles_triomphales.mp3",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Aigles de bronze, emblèmes des victoires",
              "Qui sommeille aux hampes des drapeaux",
              "Réveillez vous pour de futures gloires",
              "La France est prête à des combats nouveaux",
              "Sous le soleil où les rêves cheminent",
              "Quand certains jours le clairon sonne « Aux champs »",
              "Ne dit-on pas que nos yeux s’illuminent",
              "Et que votre aile a des tressaillements?"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Aigles des épopées, Aigles des étendards",
              "Lorsque de toutes parts surgissent les épées",
              "Vous réveillerez-vous de votre léthargie?",
              "Viendrez-vous avec nous défendre la Patrie?",
              "Aigles de bronze, entendez-vous sonner le garde à vous?"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Toujours vivants au sang chaud de la race",
              "Dont les Marceau, les Kléber l’ont doté",
              "Le coeur Français garde à jamais vivace",
              "Son sentiment de fière dignité",
              "Et le grand jour où tambours et fanfares",
              "Signalant le sombre envahisseur",
              "Barrant la route à ces hordes barbares",
              "Nous serons tous Aigles au champ d’honneur"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Mais dans la plaine où murissent les seigles",
              "Sur la montagne et sur les océans",
              "La mort bat l’air comme d’immenses Aigles",
              "Voici que trace à vol d’oiseau géant",
              "C’est le réveil des Aigles triomphales",
              "L’acte héroïque, ô France, à ton appel",
              "Toujours présente et bravant les rafales",
              "Nos trois couleurs ont pavoisé le ciel"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Aigles des épopées, Aigles des étendards",
              "Sous d’autres avatars, vous voici réveillées",
              "Vous avez prié le sort jusque dans les nuées",
              "Et c’est vous qui là-haut sonnez aux drapeaux"
            ]
          }
        ]
      },
      {
        "nom": "LES CORSAIRES",
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Les_Corsaires.mp3",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Sont des hommes de grand courage,",
              "Ceux qui partiront avec nous",
              "Ils ne craindront point les coups",
              "Ni les naufrages ni l’abordage",
              "Du péril seront jaloux",
              "Tous ceux qui partiront avec nous."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ce seront de hardis pilotes,",
              "Les gars que nous embarquerons.",
              "Fins gabiers et francs lurons",
              "Je t’escamote toute une flotte",
              "Bras solide et coup d’œil prompt",
              "Tous les gars que nous embarquerons."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ils seront de fiers camarades,",
              "Ceux qui navigueront à bord,",
              "Faisant feu bâbord, tribord,",
              "Dans la tornade des canonnades",
              "Vainqueurs rentreront au port",
              "Tous ceux qui navigueront à bord."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Et des prises de tous tonnages",
              "Nous ramènerons avec nous.",
              "Et la gloire et les gros sous",
              "Feront voyage dans nos sillages.",
              "Vent arrière ou vent debout",
              "Nous les ramènerons avec nous."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Car c’est le plus vaillant corsaire",
              "Qui donna l’ordre du départ.",
              "Vite en mer et sans retard,",
              "Faisons la guerre à l’Angleterre.",
              "Car c’est le fameux Jean Bart",
              "Qui nous commandera le départ."
            ]
          }
        ]
      },
      {
        "nom": "LES COSAQUES",
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Les_Cosaques.mp3",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Nous aimons vivre au fond des bois",
              "Aller coucher sur la dure",
              "La forêt nous dit de ses mille voix (bis)",
              "Lances-toi dans la grande aventure (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Nous aimons vivre sur nos chevaux",
              "Dans les plaines du Caucase",
              "Emporté par le rapide galop (bis)",
              "Nous allons plus vite que pégase (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Nous aimons vivre auprès du feu",
              "Et chanter sous les étoiles",
              "La nuit claire nous dit de ses mille feux (bis)",
              "Sois gai lorsque le ciel est sans voile (bis)"
            ]
          }
        ]
      },
      {
        "nom": "LES TROMPETTES D’AIDA",
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Les_trompettes_d_Aida.mp3",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "C’est nous, c’est nous les descendants des régiments d’Afrique,",
              "Les chasseurs, les spahis, les goumiers,",
              "Gardiens, gardiens et défenseurs d’empires magnifiques",
              "Sous l’ardent soleil, chevauchant sans répit leurs fiers coursiers."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Toujours prêts à servir",
              "A vaincre ou à mourir",
              "Nos cœurs se sont unis",
              "Pour la Patrie. la la la"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Trompettes au garde-à-vous sonnez, sonnez à l’étendard",
              "Et que fièrement dans le ciel montent nos trois couleurs,",
              "Le souffle, le souffle de la France anime la fanfare,",
              "Et met à chacun un peu d’air du pays au fond du cœur."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "C’est notre volonté",
              "De vaincre ou de lutter",
              "De consacrer nos vies",
              "A la Patrie. la la la"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "La piste est difficile et toujours nous appelle",
              "Par les monts pelés de Taza, de Ksar’souk de Midelt",
              "L’élan de Bournazel vers le Tafilalet",
              "Sur les Ksours ralliés plantera fièrement nos trois couleurs."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ensemble nous referons gaiement flotter nos étendards",
              "Et suivrons partout hardiment l’éclat des trois couleurs",
              "Ensemble nous reprendrons demain le chemin du départ",
              "Et pour le pays serons prêts à lutter sans nulle peur."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Soldats, soldats toujours devant, toujours la tête haute,",
              "Nous serons présents sous la pluie, dans le vent, en avant!",
              "L’ennemi, l’ennemi nous trouvera plein de courage",
              "Et dans ce combat glorieux revivront tous nos héros."
            ]
          }
        ]
      },
      {
        "nom": "MARCHE DU 1° ZOUAVES",
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Marche_du_1er_Zouaves.mp3",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Sous le soleil brûlant de l’Algérie",
              "Notre Etendard flottait calme et vainqueur",
              "Au cri d’appel de la mer Patrie",
              "Du nord il vole affronter la rigueur",
              "Va déployer au vent de la Crimée",
              "Tes plis sacrés, ô mon noble drapeau",
              "Déjà noirci de poudre et de fumée",
              "Au premier rang tu seras le plus beau"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "<i>Hourra! Hourra! mon noble régiment!",
              "Le canon résonne et le clairon sonne!",
              "Hourra! Hourra! Zouaves en avant!",
              "Hourra! Hourra! En avant! En avant!",
              "Pan! pan! l’arbi!",
              "Les chacals sont par ici",
              "Les chacals, ces vaillants guerriers",
              "Qui ne laissaient pas les colons nu-pieds",
              "Cinquant’ sous la paire de souliers",
              "Approchez, v’nez prés des quartiers",
              "Vous y trouverez aussi des sous-pieds",
              "Qui sont payés</i>"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Sans crainte, amis, on peut fouler la terre",
              "Qui, tôt ou tard doit recouvrir nos corps",
              "Lorsqu’on sent là, seul bien du militaire,",
              "Un corps royal, une âme sans remords",
              "Heureux celui qui meurt dans les batailles",
              "Sous son drapeau, près de ses vieux amis",
              "Il a du moins de nobles funérailles",
              "Et Dieu bénit qui meurt pour son pays"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Jeunes soldats espoir de la Patrie",
              "Que les vertus de ceux qui sont tombés",
              "Pour conquérir la terre d’Algérie",
              "Servent d’exemples à vos jeunes fiertés",
              "Et quand viendra le grand jour pour la France",
              "Puissiez-vous tous, en vous en inspirant",
              "Aller au feu le cœur plein d’espérance",
              "Et conserver toujours le premier rang"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Jeunes beautés qu’à l’hiver le ciel donne",
              "Comme au printemps il a donné les fleurs",
              "De vos plaisirs effeuillez la couronne",
              "Dansez gaiement grâce à vos défenseurs",
              "Mais si soudain survient dans une fête",
              "Un vieux chacal au front cicatrisé",
              "Qu’un doux sourire acquittant votre dette",
              "Lui paye, enfants, le sang qu’il a versé"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ainsi qu’on voit des flancs noirs d’un nuage",
              "Jaillir soudain la foudre et les autans",
              "Tels des vaisseaux s’élançant sur la plage",
              "De nos zouaves les flots impatients",
              "Comme un torrent de laves bouillonnantes",
              "Leurs bataillons fondent sur l’ennemi",
              "Et font monter leurs vagues triomphantes",
              "Jusqu’au sommet des remparts de granit"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Plus tard on vit revenir d’Italie",
              "Nos chers drapeaux sous son aigle vainqueur",
              "Comme autrefois de l’Autriche envahie",
              "L’un d’eux, tout fier, portait la croix d’honneur",
              "Tous trois étaient troués par la mitraille",
              "Resplendissant à l’horizon vermeil",
              "Chacun portait le nom d’une bataille",
              "Dont l’or brillait sous l’éclat du soleil"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Par tous pays, sur l’ordre qu’on nous donne",
              "Du fier drapeau nous portons les couleurs",
              "Et nous savons le prix d’une couronne",
              "Quand devant nous on prodigue les fleurs",
              "Le seul récit d’une bataille",
              "Fait au retour et par tous admirer",
              "Un bout d’étoffe où pend une médaille",
              "Paient au chacal le sang qu’il a versé"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Que le conscrit tout bas se désespère",
              "S’il est un jour sans vivres et sans abri",
              "Le vieux chacal sait dormir sur la terre",
              "Le sol suffit à son corps endurci",
              "Le vieux chacal pour chasser la famine",
              "A des moyens qu’en Afrique il apprit",
              "Les maraudeurs fournissent les cuisines",
              "On vit toujours au frais de l’ennemi"
            ]
          }
        ]
      },
      {
        "nom": "REVEILLEZ VOUS PICARDS",
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Reveillez_vous_Picards.mp3",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Réveillez vous Picards, Picards et Bourguignons",
              "Apprenez la manière d’avoir de bons bâtons",
              "Car vecy le printemps et aussy la saison",
              "Pour aller à la guerre donner des horions"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Tel parle de la guerre Qui ne sait que c’est",
              "Je vous jure sur mon âme que c’est un piteux faict",
              "Et que maint homme d’armes et gentil compaignon",
              "Y ont perdu la vie et robbe et chaperon"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Où est ce duc d’Autriche? Il est au Pais-Bas",
              "Il est en basse Flandre avec ses Piccars",
              "Qui nuyct et jour le prient qu’il les veuille mener",
              "En la haulte Bourgogne pour la lui contester"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Quand serons en Bourgogne et en Franche-Comté",
              "Ce sera qui qu’en grogne le temps de festoyer",
              "Boultrons le roy de France dehors de ces costeaux",
              "Et mettrons en nos panses la vin de leur tonneaux"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Adieu, adieu Salins, Salins et Besançon",
              "Et la ville de Beaulne, là où les bons vins sont",
              "Les Piccars les ont beuz, les Flamans les paierons",
              "Quatre pastars la pinte, ou bien bastuz seront"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Nous lansquenets et reitres et souldars si marchons",
              "Sans finir de connaître ou nous arriverons",
              "Aidons Dame Fortune et Destin que suivons",
              "A prêter longue vie aux soldats Bourguignons"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Quand mourrons de malheur, la Hacquebutte au poing",
              "Le duc nostre seigneur digne notre tombeau nous doint",
              "Et que dedans la terre où tous nous dormirons",
              "Fasse le repos guerre aux braves Bourguignons"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Et quand viendra le temps où trompes sonneront",
              "Au dernier ralliement, quand nos tambours battrons",
              "Nous lèverons bannière aux fusils Bourguignons",
              "Pour aller en la guerre donner des horions"
            ]
          }
        ]
      },
      {
        "nom": "ROYAL SOISSONNAIS",
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Royal_Soissonnais.mp3",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Je veux au bout d’une campagne",
              "Te voir déjà joli garçon",
              "Des héros que l’on accompagne",
              "On saisit l’air, on prend le ton",
              "Des ennemis ainsi que des belles",
              "On est vainqueur, en s’imitant",
              "Et r’li et r’lan",
              "On prend d’assaut les citadelles",
              "Relantanplan tambour battant"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Braves garçons que l’honneur mène",
              "Prenez parti dans Orléans",
              "No’t colonel grand capitaine",
              "Est le patron des bons vivants",
              "Damme il fallait le voir en plaine",
              "Où le danger était l’plus grand",
              "Et r’li et r’lan",
              "Lui seul en vaut une douzaine",
              "Relantanplan tambour battant"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Nos officiers dans la bataille",
              "sont pêle-mêle avec nous tous",
              "Il n’en est point qui ne nous vaille",
              "Et les premiers ils sont aux coups",
              "Un général, fut-il un prince",
              "Les grenadiers se mettent en rang",
              "Et r’li et r’lan",
              "Fond sur l’ennemi et vous l’évince",
              "Relantanplan tambour battant"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Vaillant et fier sans arrogance",
              "Et respecter ses ennemis",
              "Brutal pour qui fait résistance",
              "Honnête à ceux qui sont soumis",
              "Servir le Roi, servir les dames",
              "Voilà l’esprit du régiment",
              "Et r’li et r’lan",
              "Nos grenadiers sont bonnes lames",
              "Et vont toujours tambour battant"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Viens vite prendre la cocarde",
              "Du régiment quand tu seras",
              "Avec respect j’veux qu’on t’regarde",
              "Le prince et l’chef z’on les bras",
              "Par le courage on se ressemble",
              "J’on même coeur et sentiment",
              "Et r’li et r’lan",
              "Droit à l’honneur j’allons ensemble",
              "Relantanplan tambour battant"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "La jeune Agnès devint ma femme",
              "J’étais le maître à la maison",
              "Au bout d’un mois changeant la gamme",
              "Elle fut pire qu’un dragon",
              "Heureux époux voyez ma peine",
              "Si je m’echappe un seul instant",
              "Et r’li et r’lan",
              "Relantanplan elle me mène",
              "Relantanplan tambour battant"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Quand un mari fait bon ménage",
              "Que de sa femme il est l’amant",
              "Prôner ses droits est un outrage",
              "Que l’on excuse rarement",
              "S’il va courir la prétentaine",
              "Ne peut-on pas en faire autant ?",
              "Et r’li et r’lan",
              "Relantanplan on vous le mène",
              "Relantanplan tambour battant"
            ]
          }
        ]
      },
      {
        "nom": "VERDUN ! ON NE PASSE PAS",
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Verdun_on_ne_passe_pas.mp3",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Un aigle noir a plané sur la ville,",
              "Il a juré d’être victorieux,",
              "De tous côtés, les corbeaux se faufilent",
              "Dans les sillons et dans les chemins creux.",
              "Mais tout à coup, le coq gaulois claironne :",
              "Cocorico, debout petits soldats !",
              "Le soleil luit, partout le canon tonne,",
              "Jeunes héros, voici le grand combat."
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Et Verdun, la victorieuse,",
              "Pousse un cri que porte là-bas",
              "Les échos des bords de la Meuse,",
              "Halte là ! on ne passe pas…",
              "Plus de morgue, plus d’arrogance,",
              "Fuyez barbares et laquais,",
              "C’est ici la porte de France,",
              "Et vous ne passerez jamais."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Les ennemis s’avancent avec rage,",
              "Énorme flot d’un vivant océan,",
              "Semant la mort partout sur son passage,",
              "Ivres de bruit, de carnage et de sang;",
              "Ils vont passer… quand relevant la tête,",
              "Un officier dans un suprême effort,",
              "Quoique mourant, crie : A la baïonnette",
              "Hardi les gars, debout, debout les morts !"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Mais nos enfants, dans un élan sublime,",
              "Se sont dressés; et bientôt l’aigle noir,",
              "La rage au cœur impuissant en son crime,",
              "Vit disparaître son suprême espoir.",
              "Les vils corbeaux devant l’âme française",
              "Tombent sanglants, c’est le dernier combat",
              "Pendant que nous chantons la Marseillaise,",
              "Les assassins fuient devant les soldats."
            ]
          }
        ]
      },

      {
        "nom": "LES AFRICAINS",
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Les_Africains.mp3",
        "refrain": {
          "texte": [
            "C’est nous les africains qui revenons de loin",
            "Nous venons des colonies pour sauver la Patrie",
            "Nous avons tout quitté, parents, gourbis, foyers",
            "Et nous gardons au cœur une invincible ardeur",
            "Car nous voulons porter haut et fier",
            "Ce beau drapeau de notre France entière",
            "Et si quelqu’un venait à y toucher",
            "Nous serions là pour mourir à ses pieds",
            "Battez tambours",
            "A nos amours",
            "Pour le pays",
            "Pour la Patrie",
            "Mourir au loin",
            "C’est nous les africains"
          ]
        },
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Nous étions au cœur de l’Afrique",
              "Gardiens jaloux de nos couleurs",
              "Quand, sous un soleil magnifique",
              "Retentissaient ces cris vainqueurs",
              "En avant! en avant! en avant!"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Pour le salut de notre empire",
              "Nous combattons tous les vautours",
              "La faim, la mort nous font sourire",
              "Quand nous luttons pour nos amours",
              "En avant! en avant! en avant!"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "De tous les horizons de France",
              "Groupés sur le sol africain",
              "Nous venons pour la délivrance",
              "Qui, par nous se fera demain",
              "En avant! en avant! en avant!"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Et lorsque finira la guerre",
              "Nous reviendrons à nos gourbis",
              "Le cœur joyeux et l’âme fière",
              "D’avoir libéré le Pays",
              "En criant, en chantant, en avant!"
            ]
          }
        ]
      }
    ],
    'Légions étrangères': [
      {
        "nom": "ADIEU MADRAS",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Adieu madras, adieu foulard",
              "Adieu rob’soie, adieu collier choux",
              "Doudou en moins li ka pati",
              "Hélas, hélas ! cé pou toujou ! (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Bonjou Missié le gouvêneur,",
              "Moin vini té oune pétition",
              "Pou mande ou autoisation",
              "Afin laissé Doudou moin ici. (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Non, non, non, non, déjà top tard,",
              "Bâtiment a déjà sur la bouée.",
              "Non, non, non, non, déjà top tard,",
              "Bientôt il va appareiller. (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Adieu madras, adieu foulard,",
              "Adieu grains d’or, adieu collier choux,",
              "Doudou en moins li ka pati",
              "Hélas, hélas ! cé pou toujou ! (bis)"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Adieu_Madras.mp3"
      },
      {
        "nom": "ADIEU VIEILLE EUROPE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Adieu vieille Europe",
              "Que le diable t’emporte",
              "Adieu vieux pays",
              "Pour le ciel si brûlant de l’Algérie",
              "Adieu souvenir, notre vie va finir",
              "Il nous faut du soleil, de l’espace",
              "Pour redorer nos carcasses"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Nous les damnés de la terre entière",
              "Nous les blessés de toutes les guerres",
              "Nous ne pouvons pas oublier",
              "Un malheur, une honte, une femme qu’on adorait",
              "Nous qu’avons le sang chaud dans les veines",
              "Cafard en tête, au cœur les peines",
              "Pour recevoir, donner des gnons, crénon de nom",
              "Sans peur en route pour la Légion"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Salut camarades",
              "Donnons-nous l’accolade",
              "Nous allons, sac au dos, flingue en main",
              "Faire ensemble le même chemin.",
              "A nous le désert",
              "Comme au marin la mer.",
              "Il nous faut du soleil, de l’espace",
              "Pour redorer nos carcasses"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Adieu_Vieille_Europe.mp3"
      },
      {
        "nom": "ADIEU, ADIEU",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Adieu, adieu,",
              "O Bel-Abbès, lieu vénéré de nos aïeux,",
              "Nous garderons,",
              "La tradition et combattrons pour la gloire du fanion."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "En marchant dans le soleil levant,",
              "Tête haute et les cheveux dans le vent,",
              "Légionnaire, sois fier de ton bataillon,",
              "Le premier de la légion."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Soleil de plomb,",
              "Pas de souliers, mais plein d’ardeur, nous travaillons,",
              "Et sous la tente,",
              "Malgré la faim et la fatigue tous les légionnaires chantent."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Et le jour vient",
              "De commencer le grand périple de nos anciens,",
              "Arrière, ennemis,",
              "Place au premier régiment étranger d’infanterie."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Adieu_adieu.mp3"
      },
      {
        "nom": "ADIEU SUISSES",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Nous étions trop heureux mon amie",
              "Nous avions trop d’espoir et d’amour",
              "Nous croyions nous aimer pour la vie (bis)",
              "Mais hélas, les beaux jours sont si courts (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Le bonheur dure peu sur la terre",
              "Entends-tu tout là-bas, le tambour",
              "Mon doux coeur je m’en vais à la guerre (bis)",
              "Ne crains rien jusqu’au jour du retour (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "L’ennemi a franchi nos frontières",
              "Il a pris nos maisons et nos champs",
              "Pour reprendre le pays de nos pères (bis)",
              "Il faut vaincre et mourir bravement (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Tes baisers étaient doux à mes lèvres",
              "Ton sourire était doux à mes yeux",
              "Aujourd’hui tes larmes sont amères (bis)",
              "Donne-moi le baiser de l’adieu (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Compagnons si l’sort veut que je meure",
              "Retirez cet anneau de mon doigt",
              "Mon amie est là-bas qui me pleure (bis)",
              "Dites-lui cette bague est à toi (bis)"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Adieux_Suisses.mp3"
      },
      {
        "nom": "En Afrique Malgré le Vent la Pluie",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "En Afrique, malgré le vent, la pluie,",
              "Guette la sentinelle sur le piton,",
              "Mais son cœur est au pays chéri",
              "Quitté pour voir les horizons lointains",
              "Ses yeux ont aperçu l’ennemi qui s’approche",
              "Qui s’approche",
              "L’alerte est sonnée, les souvenirs s’envolent",
              "Maintenant au combat"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Dans le ciel brillent l’étoile qui lui rappelle son enfance",
              "Adieu mon pays,",
              "Adieu mon pays, jamais je ne t’oublierai",
              "Heili, Heilo Heili Heilo, Hei tralalalala la la",
              "Heili, Heilo Heili Heilo, Hei tralalalala",
              "Dans le ciel brillent l’étoile qui lui rappelle son enfance",
              "Adieu mon pays,",
              "Adieu mon pays, jamais je ne t’oublierai"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Dans le ciel brillent l’étoile qui lui rappelle son enfance",
              "Adieu mon pays,",
              "Adieu mon pays, jamais je ne t’oublierai"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/En_Afrique_malgre_le_vent_la_pluie.mp3"
      },
      {
        "nom": "Anne-Marie",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Anne-Marie, où nous conduit la route (bis)",
              "Elle nous mène dans une petite ville",
              "Où se trouvent les soldats",
              "Eh! Oh! Eh!",
              "Jeune, jeune, jeune Anne-Marie."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Anne-Marie, aujourd’hui nous voulons être heureux (bis)",
              "Nous voulons danser",
              "Et faire une ronde",
              "Eh! Oh! Eh!",
              "Jeune, jeune, jeune Anne-Marie."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Anne_Marie.mp3"
      },
      {
        "nom": "CHANT DU 1er R.E.C",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Une colonne de la Légion Etrangère",
              "S’avance dans le bled en Syrie,",
              "La tête de la colonne est formée",
              "Par le premier étranger de Cavalerie."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Les druses s’avancent à la bataille",
              "En avant, Légionnaires à l’ennemi",
              "Le plus brave au combat comme toujours",
              "C’est le premier étranger de Cavalerie."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Un légionnaire tombe, frappé d’une balle",
              "Adieu mes parents, mes amis",
              "Toutes mes fautes je les ai expiées",
              "Au premier étranger de Cavalerie."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Sur sa tombe une simple croix s’élève",
              "Sur laquelle ces seuls mots sont inscrits",
              "Il a servi honnête et fidèle",
              "Au premier étranger de Cavalerie."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Chant_du_Premier_REC-1.mp3"
      },
      {
        "nom": "CHANT DU 4eme ESCADRON",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Dans les Djebels ou sur les routes",
              "Va le quatrième escadron",
              "Qui est, vous l’savez sans doute,",
              "L’escadron de tradition (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Des anciens il a la devise :",
              "Courage, honneur, fidélité.",
              "Le danger il le méprise,",
              "Comme jadis à Messifré (bis)."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Algérie, Syrie, Indochine,",
              "Druzes, Viets ou bien Fellaghas,",
              "L’escadron leur brise l’échine,",
              "Il la fait à Rachaya (bis)."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Légionnaire du quatrième,",
              "Sois donc fier de ton escadron,",
              "Reste digne de son emblème,",
              "Pour la gloire de la Légion (bis)."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Chant_du_quatrieme_escadron.mp3"
      },
      {
        "nom": "CONNAISSEZ-VOUS CES HOMMES",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Connaissez-vous ces hommes qui marchent là-bas",
              "Écoutez un peu la chanson de leurs pas",
              "Elle vous dit qu’ils ont martelé bien des routes",
              "Et ça c’est vrai, il n’y a aucun doute",
              "Du Tonkin à Dakar",
              "D’Afrique en Norvège",
              "Dans les sables, le vent et la neige",
              "Gloire à la Légion Étrangère.",
              "Légionnaire de l’Afrique suis tes anciens.",
              "De ton allure magnifique va ton chemin",
              "Tête haute sans tourner les yeux,",
              "L’âme légère et le coeur joyeux",
              "Suis ta route sans peur de tomber",
              "Avec Honneur et Fidélité."
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Ai O – Ai O – Ai O – OO"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Connaissez_vous_ces_hommes.mp3"
      },
      {
        "nom": "CONTRE LES VIETS",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Contre les viets, contre l’ennemi",
              "Partout où le devoir fait signe",
              "Soldats de France, soldats du pays",
              "Nous remonterons vers les lignes"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ô légionnaire, le combat qui commence",
              "Met dans nos âmes, enthousiasme et vaillance",
              "Peuvent pleuvoir, grenades et gravats",
              "Notre victoire en aura plus d’éclats"
            ],
            "italic": true
          },
          {
            "type": "couplet",
            "texte": [
              "Et si la mort nous frappe en chemin",
              "Si nos doigts sanglants se crispent au sol",
              "Un dernier rêve, adieu à demain",
              "Nous souhaiterons faire école"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Malgré les balles, malgré les obus",
              "Sous les rafales et sous les bombes",
              "Nous avançons vers le même but",
              "Dédaignant l’appel de la tombe"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Contre_les_Viets.mp3"
      },
      {
        "nom": "CRAVATE VERTE ET KEPI BLANC",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Cravate verte et képi blanc",
              "Où t’en vas-tu gai légionnaire.",
              "Je vais où le plaisir m’attend,",
              "Le ciel est pur, la lune éclaire",
              "Bel-Abbès de reflets d’argent.",
              "Et le vin rougeoie dans mon verre",
              "Comme une joue d’adolescent.",
              "Loin des locaux disciplinaires,",
              "Des gardes, des rassemblements,",
              "Buvant sec, faisant bonne chère",
              "Il s’en va le gai légionnaire",
              "Cravate verte et képi blanc"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Cravate verte et képi blanc",
              "Où vas-tu beau légionnaire.",
              "Je vais où ma belle m’attend,",
              "Elle est fidèle, elle est sincère,",
              "Elle est ma joie et mon tourment.",
              "Lorsque dans mes bras je la serre,",
              "Je suis heureux tout bêtement.",
              "Mon amour n’est pas un mystère,",
              "Et son coeur tout neuf me le rend.",
              "Plus heureux qu’en bon milliardaire,",
              "Il s’en va le beau légionnaire."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Cravate_Verte_et_Kepi_Blanc.mp3"
      },
      {
        "nom": "DANS LA BRUME LA ROCAILLE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Dans la brume la rocaille",
              "Légionnaire tu combats",
              "Malgré l’ennemi, la mitraille",
              "Légionnaire tu vaincras"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Tu lutteras pour la France",
              "Et pour sa délivrance",
              "Tu tomberas un beau matin",
              "Sur l’un de ses chemins"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Loin de tous ces chacals",
              "Qui portent les cheveux longs",
              "Tu garderas ton idéal",
              "Et toutes nos traditions"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ancien, toi qui repose",
              "Regarde et souviens-toi",
              "Nous sommes toujours, je suppose",
              "Le creuset de ces Rois"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Dans_la_brume_la_rocaille.mp3"
      },
      {
        "nom": "EUGÉNIE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Eugénie les larmes aux yeux",
              "Nous venons te dire adieu",
              "Nous partons de bon matin",
              "Par un ciel des plus serein"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Nous partons pour le Mexique",
              "Nous partons la voile au vent",
              "Adieu donc belle Eugènie",
              "Nous reviendrons dans un an"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ça n’est pas commun du tout",
              "Que de penser à l’amour",
              "Surtout quand il fait grand vent",
              "Par-dessus l’ gaillard avant"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Eugenie.mp3"
      },
      {
        "nom": "FRÉDÉRIE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Trois jolies demoiselles, ô Frédérie (bis)",
              "S’en allaient promener",
              "Sur la berge sur la barque",
              "Sur laquelle on ne sait pas (bis)",
              "Frédérie lon-la"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "La plus jeune d’entre elles, ô Frédérie (bis)",
              "Sur la berge pleurait",
              "Sur la berge sur la barque",
              "Sur laquelle on ne sait pas (bis)",
              "Frédérie lon-la"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Qu’avez-vous donc la belle, ô Frédérie (bis)",
              "Qu’avez-vous à pleurer",
              "Sur la berge sur la barque",
              "Sur laquelle on ne sait pas (bis)",
              "Frédérie lon-la"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Mon anneau d’or dit-elle, ô Frédérie (bis)",
              "Dans le lac est tombé",
              "Sur la berge sur la barque",
              "Sur laquelle on ne sait pas (bis)",
              "Frédérie lon-la"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ne pleurez pas la belle, ô Frédérie (bis)",
              "On va le retrouver",
              "Sur la berge sur la barque",
              "Sur laquelle on ne sait pas (bis)",
              "Frédérie lon-la"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Frederi.mp3"
      },
      {
        "nom": "IL EST UN MOULIN",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Il est un moulin au fond de la vallée",
              "Qui tourne et qui craque sans cesser (Bis)",
              "Partout où je m’en vais",
              "Où je m’en vais,",
              "Par montagnes et forêts, et forêts."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Le moulin enchanté, je le vois toujours",
              "Qui tourne et qui craque sans cesser",
              "Partout où je m’en vais",
              "Où je m’en vais,",
              "Par montagnes et forêts, et forêts."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Le moulin enchanté, je le vois toujours,",
              "Ses murs, sa vallée, ses forêts."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Il_est_un_moulin.mp3"
      },
      {
        "nom": "J’AVAIS UN CAMARADE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "J’avais un camarade",
              "De meilleur il n’en est pas",
              "Dans la paix et dans la guerre",
              "Nous allions comme des frères",
              "Marchant d’un même pas (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Un cavalier par bravade",
              "Des siens le plus résolu",
              "Me porta son estocade",
              "Ce fut toi mon camarade",
              "Ce fut toi qui la reçu (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "J’ai vengé l’estafilade",
              "Que ce coup t’avais valu",
              "Mais très tard dans la nuit froide",
              "J’ai pleuré mon camarade",
              "Près de son corps étendu (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ainsi courte est ma ballade",
              "Et je chevauche sans but",
              "Prie le Dieu des cavalcades",
              "De placer mon camarade",
              "À la droite de Jésus (bis)"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/J_avais_un_camarade.mp3"
      },
      {
        "nom": "JEUNE CHEF",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Le clairon nous réveille,",
              "Le canon nous appelle,",
              "Le fracas des combats",
              "Nous ensorcelle.",
              "Ainsi chantait l’ancien",
              "Vibrant au souvenir",
              "De l’épopée que tous admirent."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "De ses charges épiques,",
              "Ses combats héroïques",
              "Qui rappelaient la furie fantastique.",
              "Il faudra comme lui,",
              "Brandissant nos drapeaux,",
              "Un jour sans lui,",
              "Mener la troupe d’assaut."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "L’école te formera",
              "Dans un creuset d’acier,",
              "Mais toi seul trouveras",
              "L’esprit guerrier,",
              "Le souffle de la gloire,",
              "L’ivresse de la victoire",
              "Pour te jeter au choc d’un bloc."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Tu dois dans la mitraille",
              "Devenir la muraille",
              "Fièrement dressée contre les invasions",
              "Et creuser tes sillons",
              "Dans les noirs tourbillons,",
              "Mourir s’il faut",
              "Pour la Patrie meurtrie."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Jeune_Chef.mp3"
      },
      {
        "nom": "LA LÉGION MARCHE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "La Légion marche vers le front",
              "En chantant nous suivons,",
              "Héritiers de ses traditions",
              "Nous sommes avec elles."
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Nous sommes les hommes des troupes d’assaut,",
              "Soldats de la vieille Légion",
              "Demain brandissant nos Drapeaux",
              "En vainqueurs nous défilerons",
              "Nous n’avons pas seulement des armes",
              "Mais le diable marche avec nous.",
              "Ha, ha, ha, ha, ha, ha, Car nos aînés de la Légion",
              "Se battant là-bas, nous emboîtons le pas."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Pour ce destin de chevalier,",
              "Honneur, Fidélité,",
              "Nous sommes fiers d’appartenir",
              "Au 2ème REP."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/La_Legion_Marche.mp3"
      },
      {
        "nom": "LA LUNE EST CLAIRE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "La lune est claire",
              "La ville dort",
              "J’ai rendez-vous avec",
              "Celle que j’adore",
              "Mais la Légion s’en va",
              "Oui s’en va",
              "Part au baroud, baroud"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Jeanine, je reviendrais",
              "Sans aucun doute"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Et la mitraille",
              "Autour de moi",
              "Elle ne respecte",
              "Pas la loi",
              "Les légionnaires",
              "Les plus vaillants",
              "Tombent sous le feu, le feu",
              "Mais ton amour, Jeanine",
              "M’a protégé"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/La_lune_est_claire.mp3"
      },
      {
        "nom": "La Petite Piste",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Combien d’fois l’a-t-on parcouru",
              "Cette petite piste",
              "En traversant la lande herbue",
              "Lorsque le jour se lève",
              "En écoutant le rythme",
              "De la chanson intime",
              "Ô porteurs et ascaris haïlo",
              "Haïlo west safari",
              "Ô porteurs et ascaris haïlo",
              "Haïlo west safari"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Et quand un jour nous partirons",
              "Pour le dernier voyage",
              "Chantez nous cette chanson",
              "Comme un dernier hommage",
              "Et s’il ne pleure personne",
              "Que Dieu nous le pardonne",
              "Ô porteurs et ascaris haïlo",
              "Haïlo west safari",
              "Ô porteurs et ascaris haïlo",
              "Haïlo west safari"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/La_petite_piste.mp3"
      },
      {
        "nom": "Le Boudin",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Tiens, voilà du boudin",
              "Voilà du boudin, voilà du boudin",
              "Pour les alsaciens, les suisses et les lorrains",
              "Pour les belges, y’en a plus }",
              "Pour les belges, y’en a plus } bis",
              "Ce sont des tireurs au cul. }"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Nous sommes des dégourdis,",
              "Nous sommes des lascars",
              "Des types pas ordinaires,",
              "Nous avons souvent notre cafard",
              "Nous sommes des légionnaires."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Au Tonkin, la Légion Immortelle,",
              "A Tuyen-Quang illustra notre drapeau,",
              "Héros de Camérone et frères modèles",
              "Dormez en paix dans vos tombeaux."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Nos anciens ont su mourir",
              "Pour la gloire de la Légion,",
              "Nous saurons bien tous périr",
              "Suivant la tradition."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Au cours de nos campagnes lointaines",
              "Affrontant la fièvre et le feu",
              "Oublions avec nos peines",
              "La mort qui nous oublie si peu."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Tiens, voilà du boudin",
              "Voilà du boudin, voilà du boudin",
              "Pour les alsaciens, les suisses et les lorrains",
              "Pour les belges, y’en a plus }",
              "Pour les belges, y’en a plus } bis",
              "Ce sont des tireurs au cul. }"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Le_Boudin.mp3"
      },
      {
        "nom": "Le Fanion de la Légion",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "As-tu vu le fanion du légionnaire,",
              "As-tu vu le fanion de la Légion.",
              "On nous appelle les fortes têtes,",
              "On a mauvaise réputation,",
              "Mais on s’en fout comme d’une musette,",
              "On est fier d’être à la Légion, à la Légion,",
              "Et ce qu’ignore le vulgaire,",
              "C’est que du soldat au colon,",
              "Ils ont une âme de mousquetaire",
              "Les légionnaires."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Du Tonkin à Casa,",
              "De Beyrouth à Dakar,",
              "De Sidi-bel-Abbès aux sables brûlants de Meknès,",
              "La grenade au képi, sans peur et sans répit,",
              "Lorsque l’un de nous meurt,",
              "Nous reprenons avec ardeur:"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Quand dégoûté, lassé,",
              "Honteux de son passé,",
              "On rencontre un p’tit gars",
              "Mourant des rigueurs d’ici-bas,",
              "On lui dit « viens petit",
              "Chez nous chercher l’oubli »,",
              "Sous un soleil de plomb",
              "Chanter notre plus belle chanson."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Le_Fanion_de_la_Legion.mp3"
      },
      {
        "nom": "Le Front Haut et l'Âme Fière",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Vaillants guerriers de ce Régiment",
              "Vous qui luttiez si superbement",
              "En maintenant dans la tourmente",
              "L’Honneur et la Fidélité",
              "Vos successeurs ont serré les rangs",
              "Donné leur cœur et versé leur sang",
              "En combattant sans épouvante",
              "Pour le 5ème Étranger"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Le front haut et l’âme fière",
              "Marchant du pas de nos anciens",
              "Nous suivons dans la poussière",
              "Un glorieux chemin",
              "La boue sombre des rizières",
              "Scella notre destin",
              "Donnant ce nom qui sonne clair",
              "Régiment du Tonkin"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Toujours plus haut flotte fièrement",
              "Le beau drapeau de ce Régiment",
              "Jetant au vent notre devise",
              "D’Honneur et de Fidélité",
              "Et sans l’écrin des plis glorieux",
              "Tout le Tonkin revit à nos yeux",
              "En le voyant que chacun dise",
              "C’est le 5ème Étranger"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Le_front_haut_et_l_ame_fiere.mp3"
      },
      {
        "nom": "Le Soleil Brille",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Le soleil brille, préparez-vous,",
              "Qui sait si demain, pour nous autres il luira",
              "Déjà les moteurs tournent,",
              "Vite équipez-vous!",
              "Nous volons, nous volons",
              "Aujourd’hui vers l’ennemi."
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "De la bataille, de la bataille,",
              "Légionnaires nous ne reviendrons pas,",
              "Là-bas les ennemis t’attendent,",
              "Sois fier, nous allons au combat!"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Sautons ensembles, sautons ensemble,",
              "Légionnaires nous ne reviendrons pas,",
              "Là-bas les ennemis t’attendent,",
              "Sois fier, nous allons au combat!"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Dans le tonnerre de nos moteurs,",
              "Vite une pensée pour ceux qui nous sont chers,",
              "Debout légionnaire, c’est le signal du saut,",
              "La porte est ouverte, serre les dents et va-t-en."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Le_soleil_brille.mp3"
      },
      {
        "nom": "LE VOLONTAIRE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Qu’est-ce que je suis sur cette terre",
              "Un homme prêt à mourir, prêt à mourir",
              "Un volontaire, qui sait servir",
              "Que m'importe cette vie",
              "Pourvu qu’elle serve à mon idée",
              "Que m'importent toutes ces filles",
              "Que je n’ai jamais su aimer"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Écoutez ce chant et réfléchissez",
              "Ne brisez pas un amour vrai",
              "Pensez à ce pauvre volontaire",
              "Mort pour se libérer, se libérer"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Elle était blonde, elle était belle",
              "Et puis un jour elle est partie",
              "En emportant tout derrière elle",
              "Mon cœur, mon chagrin et ma vie",
              "Et quand je partirai en guerre",
              "Le cœur triste toujours devant",
              "Je penserai encore à elle"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Écoutez ce chant et réfléchissez",
              "Ne brisez pas un amour vrai",
              "Pensez à ce pauvre volontaire",
              "Mort pour se libérer, se libérer"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "O femme qui est restée fidèle",
              "Ne brisez pas un amour vrai",
              "Pensez à ce pauvre volontaire",
              "Mort pour se libérer, se libérer"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Écoutez ce chant et réfléchissez",
              "Ne brisez pas un amour vrai",
              "Pensez à ce pauvre volontaire",
              "Mort pour se libérer, se libérer"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Le_Volontaire.mp3"
      },
      {
        "nom": "L’ÉDELWEISS",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "L’air pur de la montagne",
              "Nous rend fiers et joyeux",
              "Gravissant la rocaille nous grimpons jusqu’aux cieux",
              "Il s’agit de savoir si l’ennemi dangereux",
              "N’a pas bien avant nous déjà",
              "Pris le point précieux"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Oui Oui Oui,",
              "C’était un edelweiss, un gentil Edelweiss",
              "Qui nous guidait là-haut",
              "Pour un dernier assaut"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Grâce à notre courage nous sommes arrivés",
              "De l’ennemi plus de trace nous sommes victorieux",
              "Mais avant de partir ne serait-ce pas plus gai",
              "D’orner de ce joli bouquet nos lourds casques d’acier."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/L_edelweiss.mp3"
      },
      {
        "nom": "LÉGIONNAIRE DE L’AFRIQUE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Le sac au dos, la gourde bien remplie,",
              "Le grand képi rabattu sur les yeux,",
              "Nous martelons le sol de l’Algérie,",
              "Où sont tombés tous nos communs aïeux.",
              "Quand nos chansons font tressaillir l’espace,",
              "Chacun se dit, tous ces joyeux garçons,",
              "C’est l’avenir, la fleur de notre race,",
              "C’est le froment de nos futures moissons."
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "En avant, légionnaire de l’Afrique,",
              "Dédaigneux de la pluie et du vent,",
              "Batailleur et pourtant pacifique,",
              "En avant, légionnaire, en avant,",
              "En avant, en avant"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Par les sentiers escaladant les pentes,",
              "Le coeur joyeux où lève une chanson,",
              "Nous combattons l’âme toujours vaillante,",
              "Par le renom de notre vieille Légion",
              "Ceux qui sont morts, guidant nos randonnées,",
              "De les venger nous avons fait serment,",
              "Et nous ferons que notre renommée,",
              "Restera ce qu’elle fut de tout temps."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Legionnaire_de_l_Afrique.mp3"
      },
      {
        "nom": "LES BATS D’AF",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Il est sur la terre africaine",
              "Un bataillon dont les soldats",
              "Sont tous des gars qu’ont pas eu de veine.",
              "C’est les Bats d’Af et nous voilà, et nous voilà",
              "Pour être joyeux, chose spéciale,",
              "Il faut sortir de Biribi, de Biribi,",
              "Ou bien alors d’une centrale,",
              "C’est d’ailleurs là qu’on nous choisit, qu’on nous choisit",
              "Mais après tout qu’est-ce que ça fout,",
              "Et on s’en fout!"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "En marchant sur la grande route,",
              "Souviens-toi, oui souviens-toi, oui souviens-toi",
              "Les anciens l’ont fait sans doute,",
              "Avant toi, oui avant toi, oui avant toi",
              "De Gafsa à Médinine,",
              "De Casa à Tatouine,",
              "Sac au dos dans la poussière,",
              "Marchons bataillonnaires."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "J’ai vu mourir un pauvre gosse,",
              "Un pauvre gosse de 18 ans, de 18 ans,",
              "Frappé par le destin féroce,.",
              "Il est mort en criant Maman, criant Maman.",
              "C’est moi qu’ai fermé ses paupières,",
              "Recueilli son dernier soupir, dernier soupir,",
              "Qu’ai écrit à sa pauvre mère",
              "Un vrai soldat vient de mourir, vient de mourir",
              "Mais après tout qu’est-ce que ça fout,",
              "Et on s’en fout!"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Et comme on n’a jamais eu d’veine,",
              "Bien sûr qu’un jour on y crèvera, on y crèvera",
              "Sur cette putain d’terre africaine.",
              "Dans le sable on nous enterrera, nous enterrera",
              "Avec pour croix une baïonnette,",
              "A l’endroit où l’on est tombé, l’on est tombé.",
              "Qui voulez-vous qui nous regrette,",
              "Puisque nous sommes des réprouvés.",
              "Mais après tout, qu’est-ce que ça fout,",
              "Et on s’en fout."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Les_Bats_d_Af.mp3"
      },
      {
        "nom": "LES BÉRETS VERTS",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Dans le ciel couleur d’acier",
              "Ils descendent par millier",
              "Ceux qui vont sur cette terre",
              "Lutter pour le béret vert"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Il faut croire ce que l’on dit",
              "Ne dire que si l’on agit",
              "Etre brave et être fier",
              "Pour gagner son béret vert"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ils sont parmi les meilleurs",
              "Qui combattent et qui meurent",
              "Pour l’occident qui espère",
              "Rester grâce aux bérets verts"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Il a laissé en mourant",
              "Avec ses ailes d’argents",
              "Une lettre pour sa femme",
              "Une lettre du Vietnam"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Donne les ailes d’argents",
              "Mon fils quand il sera grand",
              "Qu’il soit brave et qu’il soit fier",
              "Pour gagner le béret vert"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Les_berets_verts.mp3"
      },
      {
        "nom": "CAVALERIE D’AFRIQUE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "C’est nous les descendants des régiments d’Afrique",
              "Les chasseurs, les spahis, les goumiers",
              "Gardiens et défenseurs d’empires magnifiques",
              "Sous l’ardent soleil chevauchant sans répit nos fiers coursiers",
              "Toujours prêts à servir",
              "A vaincre ou à mourir",
              "Nos coeurs se sont unis",
              "Pour la Patrie !"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Trompette au garde à vous, sonnez à l’étendard",
              "Et que fièrement dans le ciel montent nos trois couleurs",
              "Le souffle de la France anime la fanfare",
              "Et met à chacun, un peu d’air du pays au fond du coeur",
              "C’est notre volonté",
              "De vaincre ou de lutter",
              "De consacrer nos vies",
              "A la Patrie !"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "La piste est difficile et toujours nous appelle",
              "Par les Monts pelés de Taza, de Ksar’s Souk, de Midelt",
              "L’élan de Bournazel vers le Tafilalet",
              "Sur les Ksour ralliés plantera fièrement nos trois couleurs !",
              "Toujours prêts à servir",
              "A vaincre ou à mourir",
              "Nos coeurs se sont unis",
              "Pour la Patrie !"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ensemble nous referons gaiement flotter nos étendards",
              "Et suivrons partout hardiment l’éclat des trois couleurs",
              "Ensemble nous reprendrons demain le chemin du départ",
              "Et pour le pays seront prêts à lutter sans nulle peur !",
              "C’est notre volonté",
              "De vaincre ou de lutter",
              "De consacrer nos vies",
              "A la Patrie !"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Soldats, toujours devant, toujours la tête haute,",
              "Nous serons présents sous la pluie, dans le vent, en avant !",
              "L’ennemi nous trouvera le coeur plein de courage",
              "Et dans ce combat glorieux revivront tous nos héros !"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Cavalerie_d_Afrique.mp3"
      },
      {
        "nom": "Les Deux Compagnons",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Par les monts et par les plaines",
              "S’en allaient deux compagnons",
              "Ils chantaient à perdre haleine (bis)",
              "Trouvant que la vie a du bon"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "L’un jouait de la guitare",
              "L’autre ne jouait de rien",
              "Dans ce métier il est rare (bis)",
              "De manger quand on a faim"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Un soir d’été arrivèrent",
              "Près d’une vieille maison",
              "Devant la porte trouvèrent (bis)",
              "Une dame au corps mignon"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "« Hé! Bonjour dame l’hôtesse »",
              "Dirent nos deux compagnons",
              "Notre ventre crie détresse (bis)",
              "Depuis trois jours nous marchons"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Dame l’hôtesse toute aimable",
              "Fit entrer nos compagnons",
              "« Asseyez-vous à ma table » (bis)",
              "Vous paierez d’une chanson"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "« Grand merci dame l’hôtesse »",
              "Disent les deux compagnons",
              "Après toutes vos largesses (bis)",
              "Ecoutez notre chanson"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Quittant la belle créature",
              "Nos deux joyeux compagnons",
              "Repartirent à l’aventure (bis)",
              "En chantant une chanson"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Et la généreuse hôtesse",
              "Rêvant sur son corps mignon",
              "Regarda avec tristesse (bis)",
              "S’éloigner les compagnons"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Les_Deux_Compagnons.mp3"
      },
      {
        "nom": "Les Képis Blancs",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Puisqu’il nous faut vivre et lutter dans la souffrance",
              "Le jour est venu où nous imposerons au front",
              "La force de nos armes",
              "La force de nos cœurs et de nos bras"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Foulant la boue sombre",
              "Vont les képis blancs",
              "Foulant la boue sombre",
              "Vont les képis blancs"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "La rue appartient à celui qui y descend",
              "La rue appartient au drapeau des képis blancs",
              "Autour de nous la haine",
              "Autour de nous les dogmes que l’on abat"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Combien sont tombés au hasard d’un clair matin",
              "De nos camarades qui souriaient au destin",
              "Nous tomberons en route",
              "Nous tomberons ou vaincrons au combat"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "La vie ne sourit qu’aux plus forts, aux plus malins",
              "L’ardeur, la fierté, la jeunesse sont dans nos rangs",
              "Pour nos combats, nos luttes",
              "Honneur, fidélité sur nos drapeaux"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Puis le jour viendra de brandir notre flambeau",
              "Le peuple, la jeunesse s’uniront à nos drapeaux",
              "Nous sauverons la France",
              "Nous bâtirons l’Europe de demain"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Les_Kepis_Blancs-1.mp3"
      },
      {
        "nom": "Monica",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Monica ma chère compagne",
              "Nous partirons bientôt",
              "Le pays est en campagne",
              "Pour faire les temps nouveaux",
              "Nous serons victorieux (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Au revoir petite Monica",
              "Nous partons pour le combat",
              "Au revoir petite Monica",
              "Que tes yeux ne pleurent pas",
              "Fallerie, fallera, fallerie et fallala",
              "Je ne suis toujours qu’à toi",
              "Au revoir petite Monica",
              "En tous lieux je pense à toi"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Nous repousserons les rouges",
              "Au-delà de l’Oural",
              "Nous repousserons les rouges",
              "Sans faiblesse ni pitié",
              "Nous serons victorieux (bis)"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Monica.mp3"
      },
      {
        "nom": "En Algérie",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "En Algérie, dans le Djebel",
              "Un légionnaire monte la garde",
              "Auprès de son camarade",
              "Touché à mort par une balle rebelle.",
              "bis"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Camarade, toi mon Pays",
              "Je vous quitte sans regret",
              "Volontaire, j’ai bien servi",
              "Avec honneur et fidélité.",
              "bis"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Un légionnaire quand il tombe",
              "Quand il a fermé les yeux",
              "Il repose en Algérie",
              "Dans le Djebel une croix le dit.",
              "bis"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/En_Algerie.mp3"
      },
      {
        "nom": "Nous sommes de la Légion",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Nous sommes de la Légion",
              "Si loin de nos pays",
              "Vers le front nous marcherons",
              "Pour vaincre l’ennemi.",
              "Avec nos armes",
              "Nos coeurs et notre vie",
              "Nous défendrons la France",
              "Contre l’ennemi.",
              "bis"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "En tête de not’colonne",
              "Un drapeau claque au vent,",
              "C’est celui de la Légion,",
              "Qui flotte dans le vent,",
              "C’est pour la France,",
              "Pour notre vieille Légion,",
              "Tous les jours nous nous avancerons,",
              "Même si nous tombons.",
              "bis"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Nous_sommes_de_la_Legion.mp3"
      },
      {
        "nom": "Nous sommes tous des volontaires",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Nous marchons gaiement en cadence",
              "Malgré le vent, malgré la pluie,",
              "Les meilleurs soldats de France",
              "Sont là devant vous, les voici."
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Nous sommes tous des volontaires,",
              "Les gars du 1er Etranger,",
              "Notre devise est légendaire,",
              "Honneur, fidélité, fidélité,",
              "Marchons légionnaires,",
              "Dans la boue, le sable brûlant",
              "Marchons l’âme légère (bis)",
              "Et le coeur vaillant (bis)",
              "Marchons légionnaires. (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Partout où le combat fait rage,",
              "L’on voit le 1er Etranger",
              "Exemple d’héroïsme, de courage",
              "Se couvrir de glorieux lauriers."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Gardons dans le fond de nos âmes",
              "Le souvenir de nos aînés,",
              "Et pour la grenade à 7 flammes,",
              "Loyal, prêt à tout sacrifier."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Nous_sommes_tous_des_volontaires.mp3"
      },
      {
        "nom": "Pour faire un vrai légionnaire",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Chacun sait bien qu’un légionnaire",
              "Est le premier dans les combats,",
              "Que sa bravoure est légendaire,",
              "Et qu’au baroud il n’en craint pas.",
              "Or parmi ceux qui lui font fête,",
              "C’est le bistrot qui l’aime le mieux,",
              "Mais seulement pour sa galette,",
              "Et pas du tout pour ses beaux yeux."
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Pour faire un vrai légionnaire",
              "Il n’suffit pas de boire un coup,",
              "Ca tout le monde sait le faire,",
              "Mais il faut être premier partout."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Faut être premier dans les revues,",
              "Les prises d’armes, les défilés,",
              "Il faut en mettre plein la vue",
              "Aux généraux les plus calés.",
              "Il ne faut pas que la marsouille,",
              "Les tirailleurs ou les zouzous",
              "Nous fassent passer pour des nouilles",
              "En se montrant meilleurs que nous."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Quand nous allons voir les gonzesses",
              "Laisser tomber les fatimas,",
              "Et ne prenons que les caresses",
              "D’Anne-Marie et Susanna,",
              "Car ces femmes savent y faire",
              "On ne peut pas leur faire le coup,",
              "Ce sont des femmes de légionnaires",
              "Elles veulent qu’on soit premiers partout."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Pour_faire_un_vrai_legionnaire.mp3"
      },
      {
        "nom": "Quand on a une fille dans l’cuir",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Quand on a une fille dans l’cuir",
              "Et que la vie nous dégoûte",
              "On s’engage sous le fanion",
              "Vert et rouge de la Légion,",
              "Et sac au dos on prend la route;",
              "Quand on a une fille dans l’cuir.",
              "Mets du pinard dans ton bidon",
              "Et tes ennuis dans ta musette,",
              "C’est au cafard qu’on fait la guerre",
              "Quand on est de la Légion.",
              "Quand on a une fille dans l’cuir,",
              "Quand on a une fille dans l’cuir."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Quand_on_a_une_fille_dans_l_cuir.mp3"
      },
      {
        "nom": "Quand on a une fille dans l’cuir",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Quand on a une fille dans l’cuir",
              "Et que la vie nous dégoûte",
              "On s’engage sous le fanion",
              "Vert et rouge de la Légion,",
              "Et sac au dos on prend la route;",
              "Quand on a une fille dans l’cuir.",
              "Mets du pinard dans ton bidon",
              "Et tes ennuis dans ta musette,",
              "C’est au cafard qu’on fait la guerre",
              "Quand on est de la Légion.",
              "Quand on a une fille dans l’cuir,",
              "Quand on a une fille dans l’cuir."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Quand_on_a_une_fille_dans_l_cuir.mp3"
      },
      {
        "nom": "SARI MARES",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "O Sari Mares belle amie d’autrefois",
              "En moi tu demeures vive",
              "L’amour est plus fort",
              "Que la pluie et que le vent",
              "Qui peut arrêter son élan?"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Je veux revoir",
              "Dans mon vieux transvaal",
              "Ma ferme au toit de chaume",
              "Ou le parfum du miel",
              "Et des conifères embaument",
              "L’air pur et clair comme un cristal"
            ],
            "refrain": true
          },
          {
            "type": "couplet",
            "texte": [
              "Ma Sari Mares est bien loin de mon coeur",
              "Mais je crois en son amour",
              "Car c’est entre ses bras que j’ai connu le bonheur",
              "J’irai la revoir un jour"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Quand j’étais petit je croyais qu’un démon",
              "Venait me ravir ma maison",
              "Mais lorsque je fus grand ce fut une horrible guerre",
              "Qui m’emmena loin de mes terres"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Sari_Mares.mp3"
      },
      {
        "nom": "SI CALME ET SI TRANQUILLE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Si calme si tranquille",
              "Sur nous descend la nuit",
              "Les ombres se profilent",
              "Le jour au loin s’enfuit,",
              "La lune brille,",
              "Le jour au loin s’enfuit."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "C’est l’heure des chimères,",
              "Le temps du souvenir",
              "La vie se change en rêve",
              "Présent et avenir",
              "Font une trêve",
              "Le temps du souvenir."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "La terre se repose",
              "Tout rentre dans la paix",
              "Les êtres et les choses",
              "Retrouvent l’unité",
              "Paupières closes",
              "Tout rentre dans la paix."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Autour du feu qui danse",
              "Amis chantons encore",
              "Après ce grand silence",
              "Le monde, qui s’endort",
              "Dans l’espérance",
              "Reprendra son essor."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Si_calme_et_si_tranquille.mp3"
      },
      {
        "nom": "SOLDATS DE LA LÉGION ÉTRANGÈRE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Soldats de la Légion Étrangère",
              "Se sont battus",
              "Partout en Algérie",
              "Beaucoup sont tombés, de braves légionnaires",
              "Pour la Légion qui est notre Patrie."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Comme nos anciens",
              "Nous défendront l’Algérie",
              "Contre le diable",
              "Et les fellaghas,",
              "Avec nos drapeaux, Honneur, Fidélité",
              "Nous tomberons ou nous vaincrons au combat."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Soldat_de_la_legion_etrangere.mp3"
      },
      {
        "nom": "SOUS LE SOLEIL BRULANT D’AFRIQUE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Sous le soleil brûlant d’Afrique,",
              "Cochinchine, Madagascar,",
              "Une phalange magnifique",
              "A fait flotter nos étendards.",
              "Sa devise Honneur et Vaillance",
              "Forme des soldats valeureux,",
              "Son drapeau, celui de la France",
              "Est un emblème des plus glorieux."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Vive la Légion Étrangère",
              "Et quand défilent les képis blancs,",
              "Si leur allure n’est pas légère,",
              "Ils portent tous tête haute et fière,",
              "Et s’élançant dans la fournaise,",
              "Le coeur joyeux jamais tremblants",
              "Au son de notre Marseillaise",
              "Savent combattre les képis blancs."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "C’est une chose d’importance,",
              "La discipline à la Légion.",
              "L’amour du chef, l’obéissance,",
              "Sont de pure tradition,",
              "Et pour notre France chérie,",
              "Tous ces étrangers bravement",
              "Viennent défendre notre Patrie,",
              "Avec honneur et dévouement."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Sous_le_Soleil_brulant_d_Afrique.mp3"
      },
      {
        "nom": "SOUVENIR QUI PASSE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Souvenir qui passe",
              "La vielle caserne oubliée",
              "Le camp la remplace",
              "Avec ses feux à la veillée",
              "Dans la brume grise",
              "La sentinelle demeure",
              "Oui, oui, oui…",
              "La sentinelle demeure"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Amis il faut que nous marchions",
              "Plus loin, toujours plus loin",
              "Le soleil dore les moissons bercées",
              "Par le vent de juin, le vent de juin"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "En avant serrons les rangs",
              "Que retentisse un chant, oui",
              "Un chant de guerre et de victoire",
              "Qui monte plein d’espoir"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Avançons sans répit",
              "Dans le vent sous la pluie",
              "La chanson sur les lèvres",
              "Calme la fièvre"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Si le sac est trop lourd",
              "Si les membres sont gourds",
              "Serrons les dents les gars",
              "Et à Dieu va"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Après la bataille inhumaine",
              "Vient un long repos",
              "Secoue ta peine",
              "Pavillon haut"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Souvenir_qui_passe.mp3"
      },
      {
        "nom": "SUSANNA",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Ah! Les carottes. Ah! Les carottes",
              "Les carottes et les navets!",
              "Qui c’est qui s’les tape,",
              "Qui c’est qui s’les tape,",
              "C’est la compagnie montée.",
              "Oh Susanna, les carottes et les navets,",
              "Oh Susanna, compagnie montée."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ah! Les djébels. Ah! les djébels,",
              "Les djébels et les pitons.",
              "Qui c’est qui s’les tape,",
              "Qui c’est qui s’les tape,",
              "C’est la compagnie montée.",
              "Oh Susanna, les djébels et les pitons,",
              "Oh Susanna, compagnie montée."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ah! Les femmes. Ah! Les femmes,",
              "Les femmes et les fiancées!",
              "Qui c’est qui s’les tape,",
              "Qui c’est qui s’les tape,",
              "C’est la compagnie montée.",
              "Oh Susanna, les femmes et les fiancées,",
              "Oh Susanna, compagnie montée."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Suzanna.mp3"
      },
      {
        "nom": "VENU VOLONTAIRE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Venu volontaire recherchant la guerre",
              "Perdu dans la nuit",
              "Marchant on oublie,",
              "Nous combattrons",
              "Nous les légionnaires,",
              "Nous vaincrons",
              "Partout et sans recours.",
              "Sans attendre la mission remplie",
              "Nous partons",
              "Écoutant le tambour."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Septième compagnie toujours la première",
              "A bien combattu",
              "Et vient aujourd’hui",
              "Se préparer à une autre guerre",
              "Pour parer",
              "Les coups de l’ennemi."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Pour la gloire",
              "La Légion Étrangère",
              "Nous donnerons",
              "Aujourd’hui notre vie."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Venu_volontaire.mp3"
      },
    ],
    "Parachutistes": [
      {
        "nom": "ADIEU DU BATAILLON DE CHOC",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "La route vers l’inconnu est toujours bien venue,",
              "Le but est devant nous, braquant les armes.",
              "La défaillance exclue, plus rien ne compte plus,",
              "Pour nous c’est le devoir, pour vous les larmes"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "L’heure a sonné, adieu belle fille,",
              "Nous repartons vers notre destin.",
              "Loin du pays, loin de la famille,",
              "Nous nous en allons par les chemins.",
              "Le coeur léger avec un sourire,",
              "Les yeux fixés sur l’horizon.",
              "Les compagnies en marche s’entre-admirent,",
              "Chantons en choeur à pleins poumons :",
              "« En pointe toujours ! », ce cri nous appelle,",
              "Nous sommes ici taillés d’un bloc.",
              "Tous en avant, adieu à la belle,",
              "Adieu du bataillon de choc."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Debout les volontaires, chasseurs et légionnaires,",
              "Les parachutes sont prêts pour l’aventure.",
              "Le Dakota attend, ne perdons pas de temps,",
              "Restons unis et la victoire est sûre."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Adieu_du_Bataillon_de_Choc.mp3"
      },
      {
        "nom": "AU TERRAIN",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Au terrain qui rassemble dans l’ombre",
              "Les sticks bien alignés pour embarquer",
              "Dans la nuit murmurent des voix sans nombre",
              "Les hommes sont impatients d’être largués",
              "Le casque est lourd, ami",
              "Mais par la porte ouverte",
              "Claquer pépins",
              "Tu vas bondir, ami",
              "Haï di, haï do",
              "Tu vas bondir",
              "Le « go » t’arrache vers ton destin"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Dans la rosée des prés, des bois",
              "Doucement tu te poseras",
              "L’air du matin te grisera",
              "Et te rendra fana",
              "Haï di, haï do, Haï di, haï do",
              "Haï di, haï do, Haï di, haï do",
              "Haï di, haï do, Haï di, haï do",
              "Haï di, haï do, Haï do."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Si un soir le sort veut que tu tombes",
              "Les copains seront la pour te venger",
              "Les pistes qui sillonnent le monde",
              "Prendront ton sang comme celui des aînés",
              "Ta seule détente, ami",
              "N’est pas dans le retour",
              "Vers tes amours",
              "Mais pour la France, ami",
              "Haï di, haï do",
              "Il faut lutter",
              "Para sans trêve ni repos"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Si tu reviens dans ton pays",
              "N’oublie jamais tous ceux là-bas",
              "Qui pour défendre la Patrie",
              "Mènent de durs combat",
              "Haï di, haï do, Haï di, haï do",
              "Haï di, haï do, Haï di, haï do",
              "Haï di, haï do, Haï di, haï do",
              "Haï di, haï do, Haï do."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Au_terrain.mp3"
      },
      {
        "nom": "BERCHENY",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Pour libérer le pays qu’on enchaîne,",
              "Prêts au combat pour repousser ses ennemis",
              "Il faut des gars endurcis à la peine,",
              "Chacun pour tous et tous pour un réunis."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Voyez, braves gens, largués sur la plaine,",
              "Tombant du ciel et progressant dans la nuit,",
              "Ne craignant rien, ni la mort, ni la haine,",
              "Voyez ce sont les hussards de Bercheny."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Autour de nous la bataille fait rage,",
              "Si certains tombent sous les coups de l’ennemi,",
              "Pour eux la paix et à nous le courage",
              "De risquer tout pour secourir la Patrie."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ô parachutiste, voilà l’orage,",
              "Montrons nous fiers de nos anciens de Hongrie,",
              "Rien n’est trop dur pour un gars de notre âge,",
              "S’il est para de Bercheny Cavalerie."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Bercheny.mp3"
      },
      {
        "nom": "CEUX DU LIBAN",
        "description": "Chant récent écrit à la mémoire des 70 parachutistes français morts dans l’attentat de l’immeuble Drakkar à Beyrouth en 1983.",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Dans la boue les sillons",
              "Sous le ciel gris nous marchons",
              "Malgré la fatigue et la pluie",
              "Malgré la famine et l’ennui",
              "Nous veillons et nous attendons",
              "Que pour nous gronde le canon",
              "Si demain il nous appelait",
              "Nous partirions sans un regret."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "La France pleure ses enfants",
              "Tombés là-bas au Levant",
              "Nous garderons leur souvenir",
              "Comme nous voulons bien servir",
              "Nos Anciens du Liban",
              "Nous précèdent en avant",
              "Vivant pour le même horizon",
              "Pour la France nous servirons."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Sous le soleil brûlant",
              "Montaient nos rires et nos chants",
              "Notre sourire était la paix",
              "Pour tous ces enfants qui souffraient",
              "Sur nous des orages d’acier",
              "Sur terre se sont déchaînés",
              "Pour que sous un ciel bas et noir",
              "A jamais meurt tout espoir."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Ceux_du_Liban.mp3"
      },
      {
        "nom": "CHANT DU 6° RPIMa",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Tes anciens ont conquis des lettres de noblesse",
              "En des pays lointains baptisés TOE.",
              "Puis d’autres sont venus pour porter sans faiblesse",
              "Sur la terre africaine ton drapeau prestigieux."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Parachutiste partout on t’admire on te craint,",
              "Tes devanciers hier ne sont pas morts en vain. (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Tu luttas au Laos, combattis en Anam,",
              "Et ta guerre fut féroce aussi en terre d’Islam.",
              "La mort te vit bondir de rizières en deltas,",
              "De diguettes en murettes, de djebels en mechtas."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Âmes des chevaliers vous existez encore,",
              "Ronceveau n’est pas loin, j’entends sonner la cor.",
              "L’esprit survit quand même la race est au trépas.",
              "Cette armée silencieuse qui s’attache à nos pas,",
              "Qui s’avance avec nous au moment de l’effort,",
              "Qui fait croire et oser, est l’âme de nos morts."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Chant_du_6eme_RPIMa.mp3"
      },
      {
        "nom": "CHANT DU 8° RPIMa",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Nous sommes des volontaires au 8e RPIMa",
              "Entends nos clameurs guerrière, nos chants de combat",
              "Colonial parachutiste, viens, tu connaîtras le risque",
              "Ah, ah, ah, avec le 8e RPIMa (Bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Dans ce monde sans entrailles où l’on perd le nord",
              "Nous livrons une bataille jamais vue encore",
              "Il est dur d’être fidèle, mais SAINT MICHEL sous ses ailes",
              "Ah, ah, ah, a pris le 8e RPIMa (Bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Nous voulons demeurer dignes de nos grands anciens",
              "Héritiers de tant de gloire, nos drapeaux sont lourds d’histoire",
              "Colonial parachutiste, viens, tu connaîtras le risque",
              "Ah, ah, ah, c’est ça le 8e RPIMa (Bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Nous avons foi en la France, en son avenir",
              "Ses fils ont de la vaillance et savent souffrir,",
              "Et nous montrons nous-mêmes qu'on sait mourir quand on aime",
              "Ah, ah, ah, avec le 8e RPIMa (Bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Dans l’enfer de la bataille nous tombons du ciel",
              "Nos pépins dans la mitraille claquent au soleil",
              "Les sticks bondissent sans trêve pour l’assaut un chant s’élève",
              "Ah, ah, ah, celui du 8e RPIMa (Bis)"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Chant_du_8_RPIMa.mp3"
      },
      {
        "nom": "EN PASSANT PAR LA PORTIERE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Il est là-bas en Algérie",
              "Un régiment dont les soldats, dont les soldats",
              "A chaque instant risquaient leur vie",
              "Parachutiste souviens-toi, oui souviens-toi",
              "Pour faire partie de cette élite",
              "Il faut bien être un peu cinglé, un peu cinglé",
              "Il faut surtout pas s’ faire de bille",
              "Savoir bien boire et s’amuser, et s’amuser"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Et après tout qu’est ce que ça fout",
              "Et on s’en fout, la, la, la",
              "En passant par la portière",
              "Parachutiste souviens-toi, oui souviens-toi",
              "Qu’un jour il pourrait se faire",
              "Que malgré toi, oui malgré toi, la, la, la",
              "Qu’après une chute libre",
              "Tu auras cessé de vivre",
              "Entorché dans l’atmosphère",
              "Tu tomberas comme une pierre"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "J’ai vu mourir un pauvre gosse",
              "A peine âgé de dix-huit, de dix-huit ans",
              "Son pépin s’était mis en torche",
              "Il est mort en criant maman, criant maman",
              "Je lui ai fermé les paupières",
              "Recueilli son dernier soupir, dernier soupir",
              "Et j’ai écrit à sa pauvre mère",
              "Comme un para savait mourir, savait mourir"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Et comme on a jamais eu de veine",
              "Un jour l’ pépin s’ouvrira pas, s’ouvrira pas",
              "Sur cette putain d’ terre africaine",
              "A cent à l’heure tu t’écraseras",
              "On ramassera tes côtelettes",
              "Dans un vieux sac à effets chauds, à effets chauds",
              "On dira saperlipopette",
              "Ce gazier là n’a pas eu de pot, n’a pas eu de pot"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "On te mettra entre quat’ planches",
              "Entortillé dans ton pépin, dans ton pépin",
              "Au cimetière de maison blanche",
              "T’auras la gueule de tes copains, de tes copains",
              "T’auras les honneurs militaires",
              "Et l’on mettra sur ton tombeau, sur ton tombeau",
              "La croix de guerre réglementaire",
              "Et ce jour là sera le plus beau, oui le plus beau"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/En_passant_par_la_Portiere.mp3"
      },
      {
        "nom": "HYMNE A SAINT-MICHEL",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Ô Michel, Ange des Para,",
              "Trempe nos coeur de hardiesse",
              "Conduis nos pas joyeux",
              "Pour le devoir tout près de Dieu",
              "Guide nous dans les durs sentiers",
              "Et garde nous de nos détresses",
              "Ô Michel, Ange des Paras",
              "Trempe nos coeurs de hardiesse"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ô Michel, Ange chevalier",
              "Lave nos coeurs dans l’onde pure",
              "Fais-nous loyaux et droits",
              "Et valeureux en tes tournois",
              "Pour servir fais nous être prêts",
              "Et défend nous de tout parjure",
              "Ô Michel, Ange chevalier",
              "Lave nos coeurs dans l’onde pure"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ô Michel, Ange des guerriers",
              "Arme nos coeurs de sainte audace",
              "Ta main vengea les cieux",
              "Arrache nous des camps peureux",
              "Laisse nous résolus et fiers",
              "Sangle nos chairs dans les cuirasses",
              "Ô Michel, Ange des guerriers",
              "Arme nos coeurs de sainte audace"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Hymne_a_St_Michel.mp3"
      },
      {
        "nom": "LA PRIERE DU PARA",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Mon Dieu, mon Dieu donne-moi la tourmente,",
              "Donne-moi la souffrance,",
              "Donne-moi l’ardeur au combat.",
              "Mon Dieu, mon Dieu, donne-moi la tourmente,",
              "Donne-moi la souffrance,",
              "Et puis la gloire au combat, et puis la gloire au combat.",
              "Mon Dieu, mon Dieu donne-moi la tourmente,",
              "Donne-moi la souffrance,",
              "Donne-moi l’ardeur au combat.",
              "Mon Dieu, mon Dieu, donne-moi la tourmente,",
              "Donne-moi la souffrance,",
              "Et puis la gloire au combat, et puis la gloire au combat."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ce dont les autres ne veulent pas,",
              "Ce que l’on te refuse,",
              "Donne-moi tout cela, oui, tout cela.",
              "Je ne veux ni repos, ni même la santé",
              "Tout ça, mon Dieu, t’est assez demandé."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Mais donnes moi, mais donnes moi,",
              "Mais donne-moi la foi",
              "Donne-moi force et courage,",
              "Mais donne-moi la foi, donne-moi force et courage,",
              "Mais donne-moi la foi",
              "Pour que je sois sur de moi !",
              "Donne-moi la tourmente,",
              "Donne-moi la souffrance,",
              "Donne-moi l’ardeur au combat.",
              "Mon Dieu, mon Dieu, donne-moi la tourmente,",
              "Donne-moi la souffrance,",
              "Et puis la gloire au combat, et puis la gloire au combat."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/La_Priere_du_Para.mp3"
      },
      {
        "nom": "L’ANCIEN",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "La, la la la, la",
              "La, la la la, la, la",
              "Les hommes sont là groupés près de lui",
              "La la la la, la",
              "Le sang s’est répandu sur son treillis",
              "La la la la, la",
              "C’était un ancien, un grand alsacien",
              "Qui s’était battu, tant qu’il avait pu",
              "Mais il est mort",
              "Il ne nous reste que son corps (bis)",
              "La la la la, la",
              "La la la la, la la"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "On l’a mis bien au chaud dans son pépin",
              "La la la la, la",
              "Y avait de l’eau dans les yeux des copains",
              "La la la la, la",
              "Pourquoi ce gars là est-il mort pourquoi",
              "A t’il cet air là, serein et narquois",
              "On ne sait pas",
              "Mais c’est sur qu’on s’en souviendra (bis)",
              "La la la la, la la",
              "La la la la, la la"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Il n’était pas tout à fait comme nous",
              "La la la la, la",
              "Jamais de bar ni de machines à sous",
              "La la la la, la",
              "Il disait souvent les mots c’est du vent",
              "Quand y a rien à faire, il vaut mieux se taire",
              "D’où venait-il",
              "Ce sous-off qu’était pas facile (bis)",
              "La la la la, la la",
              "La la la la, la la"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Maintenant qu’il est à six pieds sous terre",
              "La la la la, la",
              "Ayant reçu les honneurs de la guerre",
              "La la la la, la",
              "On l’entendra plus dire « j’en ai plein le cul »",
              "Sans lui on est triste, on traîne sur la piste",
              "Ce vétéran",
              "Qui vit encore parmi nos rangs (bis)",
              "La la la la, la la",
              "La la la la, la la"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/l_Ancien.mp3"
      },
      {
        "nom": "LE COMBAT DE DEMAIN",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Était noire la nuit, était rouge le feu",
              "La nation semblait à l’agonie",
              "Plus de chef, plus de foi, un destin malheureux",
              "S’abattait sur la chère Patrie"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Les héros d’autrefois nous convient à leur foi",
              "Camarades, groupons-nous en avant",
              "Les héros d’autrefois nous convient à leur loi",
              "Chevaliers, tous ensembles à l’assaut"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Tous sont morts et leurs casques rouillés dans le vent",
              "Veillent sur mille tombes fleuries",
              "Dans la steppe au lointain nos chars rythment en grondant",
              "Le refrain de la grande Patrie"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Le cri de notre histoire et la terre et les morts",
              "Nous appellent au combat de demain",
              "Nous jurons d’être unis, nous jurons d’être forts",
              "Europe ton avenir est le mien"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Était noire la nuit, était rouge le feu",
              "C’était le moment du grand assaut",
              "Coude à coude en marchant ils chantaient parlant haut",
              "Le refrain de l’hymne des adieux"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Le_Combat_de_Demain.mp3"
      },
      {
        "nom": "LES COMMANDOS",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Les commandos partent pour l’aventure",
              "Soleil couchant les salue",
              "Chez l’ennemi la nuit sera très dure",
              "Pour ceux qui pillent et qui tuent"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "France, ô ma France très belle",
              "Pour toi je ferais bataille",
              "Je quitterai père et mère",
              "Sans espoir de les revoir jamais"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "En se larguant sur le terrain rebelle",
              "Ils songeront à leur vie",
              "Demain peut-être elle sera éternelle",
              "Ils tomberont dans l’oublie"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Si d’aventure la mort les refuse",
              "Ils reviennent jusqu’au port",
              "Ils boiront le champagne qui fuse",
              "À la santé de leurs morts"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Les_Commandos.mp3"
      },
      {
        "nom": "LES GREVES",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Nous marchons tout le long des grèves",
              "Pour plaire au coeur des paras",
              "En disant partout notre rêve",
              "À ceux qui en n’ont pas.",
              "En disant partout notre rêve",
              "À ceux qui en n’ont pas."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Nos chansons ont des mots bien tendres",
              "Qui plaisent au coeur des paras",
              "Mais il fait meilleur les entendre",
              "Au clair écho des bois.",
              "Mais il fait meilleur les entendre",
              "Au clair écho des bois."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Nos chansons ont des mots bien rudes",
              "Qui plaisent au coeur des paras",
              "Pour changer les vieilles habitudes",
              "Il faut des gars hardis.",
              "Pour changer les vieilles habitudes",
              "Il faut des gars hardis."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Nous marchons sous la pluie sans trêve",
              "Pour plaire au coeur des paras",
              "Et nos chants, nos cris, nos colères",
              "Ont fait aimer nos lois.",
              "Et nos chants, nos cris, nos colères",
              "Ont fait aimer nos lois."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Les_Greves.mp3"
      },
      {
        "nom": "CHANT DU 9e RCP",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Ami chantons ensemble",
              "C’est le refrain des paras",
              "La voix qui nous rassemble",
              "Dirige toujours nos pas",
              "Pour avoir la victoire",
              "Dans la voie que nous avons choisie"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Nous faisons le serment que rien au monde",
              "Ne pourra refroidir notre ardeur",
              "Sous la soie des trois couleurs",
              "Nous les enfants de la gloire"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Régiment de Normandie",
              "Tu te bats à Fontenoy",
              "En campagne d’Italie",
              "Courageusement tu guerroies",
              "Sous le 9ème RI",
              "En aucun cas tu ne décevras"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Héros de la grande guerre",
              "De Verdun au soissonnais",
              "Vous pouvez être fiers",
              "De ce que vous avez fait",
              "Vous êtes la lumière",
              "Qui marqua le pays à jamais"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Paras en Algérie",
              "Somalie, Yougoslavie",
              "Avez donné vos vies",
              "Comme ceux du 9ème RI",
              "Pour servir la patrie",
              "Dans la voie que vous avez choisie"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Debout la terre est sombre",
              "Le soleil est sans éclat",
              "Debout, sortant de l’ombre",
              "Sûrs d’eux même pour le combat",
              "Prêts à jaillir en nombre",
              "Tous ensemble au 9ème para."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Les_paras_du_neuvieme.mp3"
      },
      {
        "nom": "MARCHE DU PREMIER COMMANDO DE FRANCE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Quel est cet orage qui gronde",
              "Quel est ce signe dans le ciel",
              "Est-ce la fin de notre monde",
              "L’apocalypse qui nous réveille",
              "Ce sont nos frères, nos camarades",
              "Qui scandent ensemble et en cadence",
              "Le grand Requiem de parade",
              "Du Premier Commando de France"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "C’est la grande marche virile",
              "C’est la grande marche du sang",
              "C’est le grand rythme des coeurs d’hommes",
              "Oh Commando",
              "C’est la grande marche virile des Commandos",
              "C’est la grande marche du sang des Commandos",
              "C’est le grand rythme des coeurs d’hommes",
              "Que les femmes, ah les femmes",
              "N’entendent jamais, Commandos",
              "Que les femmes, ah les femmes n’entendent jamais",
              "C’est du sang nouveau comme du vin nouveau",
              "Mais pas pour des lèvres de femme"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Un jour on les verra combattre",
              "Ils auront chaud, ils seront purs",
              "Ainsi ils marchent volontaires",
              "Vers la mitraille sans murmure",
              "Et sans murmure dans la souffrance",
              "Pour mieux entendre au loin les cris",
              "Echo des morts des ennemis",
              "Du Premier Commando de France"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ils ont vaincu sous un ciel noir",
              "Et ils n’ont pas pleuré leurs morts",
              "Car dans l’amour de la Victoire",
              "Ils se sont relevés plus forts",
              "Ils ont servi sur leurs tombeaux",
              "Une Patrie que leur vaillance",
              "Fera plus nette que les couteaux",
              "Du Premier Commando de France"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Marche_du_1er_Commando.mp3"
      },
      {
        "nom": "MARCHE DU BATAILLON DE CHOC",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "La route vers l’inconnu est toujours bien venue,",
              "Le but est devant nous, braquons les armes,",
              "Plus rien ne compte plus, la défaillance exclue,",
              "Pour nous c’est le devoir, pour vous les larmes,"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "L’heure a sonné, adieu belle fille,",
              "Nous repartons vers notre destin.",
              "Loin du pays, loin de la famille,",
              "Nous nous en allons par les chemins.",
              "Le cœur léger avec un sourire,",
              "Les yeux fixés sur l’horizon,",
              "Les compagnies en marche sans faiblir,",
              "Chantons en cœur à pleins poumons,",
              "« En pointe toujours », ce cri nous appelle,",
              "Nous sommes ici taillés d’un bloc,",
              "Tous en avant, adieu ah ma belle,",
              "Adieu du bataillon de choc."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Debout les volontaires, chasseurs et légionnaires,",
              "Les parachutes sont prêts pour l’aventure.",
              "Debout para attend, ne perdons pas de temps,",
              "Restons unis et la victoire est sûre."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Marche_du_Bataillon_de_Choc.mp3"
      },
      {
        "nom": "OH LA FILLE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Oh! la fille, viens nous servir à boire",
              "Les paras sont là, perce un tonneau",
              "Car la route est longue et la nuit noire",
              "Et demain, nous ferons le grand saut"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Oh, oh, oh donne-moi la main",
              "Mets-la dans ma main",
              "Adieu, la fille, adieu",
              "Adieu, la fille, adieu",
              "Ton sourire, ton sourire,",
              "Ton sourire reste dans nos yeux",
              "Oui, dans nos yeux"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Dans le sable et la boue des rizières",
              "Nos aînés ont gravé à vingt ans",
              "Avec leur souffrance et leur misère",
              "La victoire écrite de leur sang"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Qu’il est bon qu’il est doux mais qu’il est triste",
              "Qu’il est bon de lutter à vingt ans",
              "Car l’avion qui roule sur la piste",
              "Nous emmène joyeux et triomphants"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Et nous autres jaloux de leur gloire",
              "Bientôt dans le ciel nous sauterons",
              "Vers tout ce qui coûte une victoire",
              "Les pépins mes frères s’ouvriront"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Oh_la_fille.mp3"
      },
      {
        "nom": "RIEN NE SAURAIT T'ÉMOUVOIR",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Tes anciens ont souffert sur la piste",
              "Comme des chevaliers et des preux",
              "Dans ton coeur, soit le parachutiste",
              "Toujours prêt à faire aussi bien qu’eux"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Car il faudra, para ( bis )",
              "En découdre",
              "Par le poignard et par la poudre",
              "Rien ne saurait t’émouvoir, para",
              "Rude parachutiste",
              "C’est ta loi",
              "Dans les dangers de la piste",
              "Rien ne saurait t’émouvoir"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ton chemin sera toujours la piste",
              "Dans la nuit, la chaleur ou le froid",
              "Sans un bruit tombe un parachutiste",
              "Piste sans fin toujours devant toi"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Si tu doit en finir sur la piste",
              "Que ce soit en beauté comme ceux",
              "Qui sont morts en vrais parachutistes",
              "Comme des chevaliers et des preux"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Rien_ne_saurait_t_emouvoir.mp3"
      },
      {
        "nom": "SI TU CROIS EN TON DESTIN",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Si tu crois en ton destin",
              "Si tu crois aux lendemains",
              "L’ami faut pas hésiter",
              "Prends ton sac et vient sauter",
              "Avec nous tu pourras marcher",
              "Tu pourras être et durer"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Pour aimer, et pour souffrir",
              "Y a pas deux moyens pour trouver tout ca",
              "Pour toi sans aucun doute",
              "Viens chez les paras"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Si tu retournes pays",
              "Si tu vas revoir ta mie",
              "Pour nous tu lui conteras",
              "Nos chants, nos cris, nos combats",
              "Mais qu’elle t’attende ou qu’elle t’oublie",
              "Pense à ceux qui sont là-bas"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Si tu as le goût du risque",
              "Si tu tombes sur la piste",
              "La piste garce et cruelle",
              "La piste sauvage et belle",
              "Mourant tu sauras l’aimer",
              "Car elle t’aura tout donné"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Si_tu_crois_en_ton_destin.mp3"
      },
      {
        "nom": "SOUS LES PINS DE LA B.A.",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Sous les pins de la B.A.",
              "Branle-bas de combat",
              "Toutes les casquettes sont là",
              "La 2 s’en va",
              "Crâne rasé et gueule de guerrier",
              "Fusil poignard grenades au coté",
              "Cette fois c’est du vrai",
              "Car le convoi démarre",
              "Salut les filles n’ayez pas le cafard",
              "Cette fois c’est du vrai",
              "Car le convoi démarre",
              "Salut les gars direction la bagarre"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Vous qui regardez passer",
              "Ces gars bronzés",
              "Sur les pistes et les sentiers",
              "L’œil aux aguets",
              "De Timimoun jusqu’à Tebessa",
              "Dans les coups durs ils sont toujours là",
              "Et les Fellagas ne pourront résister",
              "Devant l’assaut de la 2 au paquet",
              "Et les Fellagas ne pourront résister",
              "Devant l’assaut de la 2 au paquet"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Sous_les_pins_de_la_BA.mp3"
      },
      {
        "nom": "SUR LA ROUTE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Sur la route, près d’un vieux chêne",
              "Deux paras sont là postés,",
              "Ils écoutent sur la route",
              "Un coup part, l’un d’eux tombe frappé."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Mon village aux frais ombrages",
              "Où m’attend ma bien-aimée",
              "Où les roses fraîches éclosent,",
              "Elle attend le retour espéré."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Sur la route, près d’un vieux chêne",
              "Un para est là posté",
              "Il veut croire que la gloire",
              "Ne permet pas le moindre regret."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Dans l’orage,",
              "Malgré notre âge,",
              "Nous saurons nous imposer,",
              "Les rafales",
              "Et les balles",
              "Ne pourront jamais nous arrêter. (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Camarades,",
              "Vieux camarades",
              "Si la mort frappe en chemin",
              "La victoire",
              "Et la gloire",
              "Resteront toujours entre nos mains. (bis)"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/02/Sur_la_route.mp3"
      },
    ],
    'Troupes de marine': [
      {
        "nom": "CHANT DU 1er RIMa",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Flibustiers épris de liberté,",
              "Matelots, soldats aventuriers,",
              "Sous un même drapeau rassemblés,",
              "Les Troupes de Marines étaient nées.",
              "De la Chine aux plateaux du Mexique",
              "De Lybie aux îles de la Baltique,",
              "Sur les 5 continents ils vainquirent",
              "Et taillèrent à la France un empire."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Premier Régiment de Marine,",
              "Qui sait où le vent soufflera,",
              "Le monde et l’ancre sur nos poitrines,",
              "Seule la mort nous arrêtera."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Par trois fois sur son sol menacée,",
              "La France en péril a appelé.",
              "De toutes races, ils ont répondu",
              "En frères d’armes, ils ont combattu.",
              "Bazeilles, Rossignol et Crepey",
              "Ces trois noms, Marsouin n’oublie jamais,",
              "Jusqu’au sacrifice ils ont lutté",
              "Par trois fois le drapeau fut sauvé."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Refusant de déposer les armes",
              "Au coeur de la Seconde guerre Mondiale,",
              "Ils partirent dans les déserts d’Afrique,",
              "Aux côtés des alliés britanniques.",
              "Bir Hakein et Tobrouk en Lybie",
              "Garigliano en Italie,",
              "Jusqu’au bout, ils ont donné leur vie,",
              "Pour libérer notre mère patrie."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "A présent, forts de notre passé,",
              "Sur blindés nous oeuvrons pour la paix.",
              "Et toujours nous écrivons l’histoire,",
              "Des Balkans à la Côte d’Ivoire.",
              "Nos escadrons en Afghanistan,",
              "Fiers des couleurs du régiment,",
              "Ne conservent comme seul paquetage,",
              "Que fierté, traditions et courage."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Chant_du_1er_RIMa.mp3"
      },
      {
        "nom": "CHANT DU 2° RIMa",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Si quelqu’un doute de ta vaillance",
              "Sur ton drapeau, qu’il voit l’histoire de France",
              "Du Mexique à Verdun, d’El-Alamein au Tonkin",
              "Le Marsouin en avant s’élance",
              "Dans ses plis s’inscrit la victoire",
              "Dont les grands noms témoignent de ta victoire",
              "Car pour un Marsouin qu’est-il donc de plus beau",
              "Que de lutter partout pour son drapeau"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Marche beau régiment de France",
              "Crânement poursuis ton chemin",
              "Fais ton devoir sans défaillance",
              "C’est la loi de tous les Marsouins",
              "Partout où la France t’appelle",
              "Bravement tu vaincras pour elle",
              "En avant montre ta vaillance",
              "Deuxième Colonial de France"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Tes Anciens ont bravé la souffrance",
              "Et combattu sans peur ni défaillance",
              "A Bazeilles le front haut, à Rossignol en héros",
              "Ils se sacrifièrent en silence",
              "Par leur sang ils ont sauvé la flamme",
              "Des traditions qu’ils gardaient en leur âme",
              "Car pour un Marsouin qu’est-il donc de plus beau",
              "Que de savoir mourir pour son drapeau"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Toujours prêt quand la France t’appelle",
              "Jeune Marsouin au cœur toujours fidèle",
              "Tu sauras, s’il le faut, marcher pur, simple et beau",
              "Et vaillamment servir pour elle,",
              "Héritier d’un long passé de gloire",
              "Ton sacrifice sera une victoire",
              "Car pour un Marsouin qu’est-il donc de plus beau",
              "Que revenir vainqueur pour son drapeau"
            ]
          }
        ],
        "url": null
      },
      {
        "nom": "CHANT DU 3° RIMa",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Nos anciens en soixante dix",
              "Sont entrés dans la légende",
              "Repoussant seuls contre dix",
              "L’offensive des hordes allemandes."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Nous portons sur la poitrine",
              "Les emblèmes de Bazeilles.",
              "Le Troisième de Marine",
              "A toujours fait des merveilles."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Pour que partout à la ronde",
              "La France ait un meilleur sort",
              "Dans les cinq parties du monde",
              "Nous avons laissé des morts."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "De Champagne et de Lorraine",
              "Pour chasser les assaillants",
              "De leurs campagnes lointaines",
              "Ils rentraient la voile au vent."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Que demain sonne l’alerte",
              "Le Troisième, c’est bien certain",
              "Sans faiblir et l’arme prête",
              "Serait digne de ses anciens."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Chant_du_3eme_RIMa.mp3"
      },
      {
        "nom": "CHANT DU 21° RIMa",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Marsouin viens ton pays t’appelle",
              "Sur ton drapeau lettres d’or étincellent",
              "Si tu as pour lui que ta seule vie à donner",
              "Sache qu’il faut savoir la sacrifier",
              "Toujours fidèle à la Coloniale",
              "Tu es marsouin sache te faire respecter",
              "Croche et tient sera ta devise",
              "Tâche de ne jamais l’oublier"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "21 de Marine",
              "Dans la foi la sérénité",
              "21 de Marine",
              "Dans l’amitié d’unité",
              "21 de Marine",
              "Les Marsouins sont tous décidés",
              "21ème de Marine",
              "Ses Marsouins sont toujours prêts."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Cravate noire remplace tes larmes",
              "Éperons d’or que nos anciens ont gagnés",
              "Si le bleu et le rouge sont les couleurs de notre arme",
              "Le Drapeau les a bien conservées",
              "Que nous soyons Marsouins ou Bigors",
              "Pour même symbole nous avons l’Ancre d’Or",
              "Lors de nos combats, comme compagnons",
              "Nous avions nos vieilles traditions."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Chant_du_21e_RIMa.mp3"
      },
      {
        "nom": "CHANT DU RICM",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Mon régiment est le premier de France",
              "RICM dont le drapeau flottant",
              "Des grands aînés rappelle la vaillance",
              "Debout les gars et toujours en avant."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Les jours de défilé, de l’Arche à la grand place",
              "Depuis le Colonel jusqu’au moindre soldat",
              "Peuple regarde bien c’est une âme qui passe",
              "Dans tout le régiment c’est un seul cœur qui bat."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "De tous les régiments il en est un que j’aime",
              "Plus que tout autre corps de servir dans ses rangs",
              "C’est un honneur si grands que le plus grand lui même",
              "Plein d’un profond respect frissonne en y songeant."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Nous aimons posséder la gloire toute nue",
              "Il faut voir au combat monter nos escadrons",
              "Nos briscards chevronnés et nos jeunes recrues",
              "Dieu nous donna du cœur et nous le détaillons."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Garde à vous c’est la guerre le peuple nous regarde",
              "Montrons nous courageux et digne du passé",
              "Que partout où nos morts montent l’ultime garde",
              "On dise un jour de nous ils les ont égalés !"
            ]
          }
        ],
        "url": null
      },
      {
        "nom": "CHANT DU 9° RCS",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Depuis la création des trains des équipages",
              "Nos anciens nous ont montré la voie",
              "Ils nous ont légué leur prestigieux héritage",
              "Défendre la France, la liberté et le droit."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Appelés, professionnels",
              "Soldats du matériel",
              "Marsouins avec Tringlots",
              "Tous coloniaux"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "De tous les opprimés nous sommes les défenseurs",
              "Sentinelles au Service du droit",
              "Gardant au fond de nous une âme de bâtisseurs",
              "L’Ancre d’or nous unit et nous donne la même foi"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Le Cœur des Coloniaux,",
              "Anime les Tringlots,",
              "Les hommes du matériel,",
              "Tous fraternels."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "De Nantes jusqu’aux confins de la terre africaine,",
              "Animés par le même idéal,",
              "Servant sous tous les cieux sans compter notre peine",
              "Nous portons haut et fier le Fanion d’la coloniale"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Unis dans nos missions,",
              "Jamais ne faiblirons,",
              "Car notre devise est :",
              "» Je parviendrai «."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Chant_du_9e_RCS.mp3"
      },
      {
        "nom": "DANS LA COLONIALE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Quand à la colonie",
              "On apprit tout à coup",
              "Que la France Chérie",
              "Était cernée partout",
              "Les marsouins en masse",
              "Ont réclamé l’honneur",
              "De venir prendre place",
              "Contre l’envahisseur",
              "Et sur le grand paquebot",
              "En route vers Toulon",
              "Tous les coloniaux",
              "Chantent à l’unisson"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Dans la Coloniale",
              "On connaît le sifflement des balles",
              "Du Tonkin jusqu’au Maroc",
              "Nous avons supporté plus d’un choc",
              "Si parfois on nous traite",
              "De fort cailloux, de mauvaises têtes",
              "C’est à coup d’ pinard,",
              "Qu’on chasse la cafard,",
              "Car on sait bien",
              "Que les marsouins n’ont peur de rien"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Parfois dans la tranchée",
              "On boit, on chante, on rit",
              "On pense à la mousmée",
              "Aux parents, aux amis",
              "Soudain les boches avancent",
              "Mais loin d’être surpris",
              "En avant pour la France",
              "Repoussons l’ennemi"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Dans_la_coloniale.mp3"
      },
      {
        "nom": "HYMNE DE L’INFANTERIE DE MARINE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Dans la bataille ou la tempête",
              "Au refrain de mâles chansons",
              "Notre âme au danger toujours prête",
              "Brave la foudre et le canon.",
              "Homme de fer que rien ne lasse,",
              "Nous regardons la mort en face",
              "Dans l’orage qui gronde ou le rude combat"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "En avant!",
              "Pour faire un soldat de marine",
              "Il faut avoir dans la poitrine",
              "Le cœur d’un matelot ou celui d’un soldat"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Souvent dans la zone torride",
              "La dent du tigre ou du lion",
              "La fièvre ou la balle homicide",
              "Vient décimer nos bataillons",
              "Alors vers la mère Patrie",
              "On voit crispé par l’agonie,",
              "Dans un suprême effort notre front se retourner"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "En avant!",
              "Et notre regret unanime",
              "Chère France, ô pays sublime!",
              "C’est de n’avoir qu’une vie à donner"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Soit fier soldat de marine",
              "La victoire aima tes chansons",
              "Et ton front bruni qu’illumine",
              "L’éclat des grandes actions",
              "Du Bosphore à la Martinique",
              "Du Sénégal au pacifique",
              "On voit de ton drapeau resplendir les trois couleurs"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "En avant!",
              "La gloire t’a pris sous son aile",
              "Car à l’honneur toujours fidèle",
              "Tu meurs en combattant ou tu reviens vainqueur"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "En Crimée à chaque bataille",
              "Nous aussi nous avons pris part",
              "De Malakoff sous la mitraille",
              "Nous escaladions les remparts",
              "A l’aspect de notre uniforme",
              "L’ennemi palissant bien des fois recula"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "En avant!",
              "Et sur notre front qui rayonne",
              "On peut voir la triple couronne",
              "Des lauriers de Podor d’Inkermann et d’Alma"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Quand la Prusse inondant la France",
              "Sur nous déchaînait ses fureurs",
              "A ses balles comme à ses lances",
              "Nous avons opposé nos cœurs",
              "Et quand rugissait la bataille",
              "Nos fronts meurtris par la mitraille",
              "Sanglants mais indomptés défiaient les vainqueurs"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "En avant!",
              "A Bazeilles, la Cluze et Neuville",
              "En combattant cent contre mille",
              "Le succès nous trahit mais nous gardions l’honneur",
              "Sans cesse prêts à tout combattre",
              "Vaillants soldats de nos grands ports",
              "Non, rien ne saurait vous abattre",
              "Vous qui ne comptez point vos morts",
              "Vous réduisez chinois, canaques",
              "A vous Madagascar l’Anaux et le Tonkin"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "En avant!",
              "Aussi le ciel sous sa coupole",
              "Inscrit encore en auréole",
              "Sontay et Nouméa, Tamatave et Pékin"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Un jour viendra chère espérance",
              "Ou l’ardent appel des clairons",
              "Fera surgir pour notre France",
              "Des vengeurs et nous en serons",
              "Alors pour nous quelle fête",
              "Nous donnerons des sœurs cadettes",
              "Aux victoires d’Iéna, d’Auerstadt, de Stettin"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "En avant!",
              "Pour faire un soldat de marine",
              "Il faut avoir dans la poitrine",
              "Le cœur d’un matelot ou celui d’un soldat."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Hymne_de_Infanterie_de_Marine.mp3"
      },
      {
        "nom": "JE SUIS MARSOUIN",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Je suis marsouin que m’importe la gloire",
              "Fils de roi et de prostituée,",
              "Sur un cadavre je chante victoire",
              "Et dans un crâne je bois la liberté.",
              "Vivre d’orgies est ma seule espérance,",
              "Le seul bonheur que j’ai su conquérir.",
              "20 ans sur mer ont bercé mon enfance",
              "C’est sur les flots qu’un marsouin doit mourir."
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Vin qui pétille, femme gentille,",
              "Sous les baisers brûlants d’amour,",
              "Dans la bataille, mort aux canailles,",
              "Je ris, je chante et je bois tour à tour."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Bien que marsouin vivant dans la débine,",
              "Méprisant même les lois de la mort",
              "Bien que vivant de meurtres et de rapines",
              "Je bois mon vin dans une coupe d’or.",
              "Allons esclaves, allons debout mes braves,",
              "Et vous aussi, tous mes chers matelots,",
              "Aujourd’hui fête et puis demain peut-être",
              "Mon corps ira s’abimer dans les flots."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Peut-être un jour sur une yole étrangère",
              "Mon corps pendu servira d’étendard,",
              "Et tout mon sang rougira la galère.",
              "Aujourd’hui fête et demain le hasard.",
              "Vierge plaintive,ô toi chère captive,",
              "Ma bouche ira dévorer tes appâts,",
              "Encore brûlante du feu d’une autre amante,",
              "Ta vertu expirera dedans mes bras."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Je_suis_marsouin.mp3"
      },
      {
        "nom": "LE FANION DE LA COLONIALE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "L’as tu vu le fanion de la Coloniale",
              "L’as tu vu le fanion des coloniaux?",
              "On nous appelle les fortes têtes",
              "On a mauvaise réputation",
              "Mais l’on s’en fout comme d’une musette",
              "On n’est pas fier au bataillon",
              "Mais ce qu’ignore le Biffin,",
              "C’est que du soldat au colon,",
              "On a une âme, nous les Marsouins,",
              "La Coloniale!"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Quand dégoûté, lassé, on doute de son passé",
              "On rencontre un p’tit gars ayant du courage ici-bas",
              "On lui dit vient petit, chez nous chercher l’oubli",
              "Sous un soleil de plomb chanter notre plus belle chanson."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "De Beyrouth à Damas, de Sidi-Bel-Abbes",
              "Au brûlant soleil de Meknes",
              "L’ancre rouge au képi, sans peur et sans répit",
              "Quand il s’agit d’aller mourir, on y va sans frémir."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Le_Fanion_de_la_Coloniale.mp3"
      },
      {
        "nom": "LA TERRE JAUNE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Y a des gens de la haute zone",
              "Qui se disent explorateurs",
              "D’avoir visité la terre",
              "Du pôle nord à l’équateur",
              "Moi qui suis d’la Coloniale",
              "Mes moyens m’ permettent pas ça, ha, ha, ha, ha!"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "J’ai visité la terre jaune",
              "J’en suis pas plus fier pour ça",
              "J’en suis pas plus fier pour ça"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Y en a qui pour faire la fête",
              "S’en vont dans les grands salons",
              "Avec des demies mondaines",
              "Qui leur bouffent tout leur pognon",
              "Moi quand j’veux faire mon affaire",
              "Je vais au Parisiana, ha, ha, ha, ha!"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "M’envoyer la mère maquerelle",
              "J’en suis pas plus fier pour ça",
              "J’en suis pas plus fier pour ça"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Y en a qui pour faire l’amour",
              "Prennent des poses à l’amateur",
              "A la russe, à la tartare",
              "A la cosaque, à l’Artilleur",
              "Moi quand j’veux faire mon affaire",
              "Je fais pas tant de chichi, ah, ah, ha, ah!"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "J’lui fous ça dans l’ trou qui pète",
              "J’en suis pas plus fier pour ça",
              "J’en suis pas plus fier pour ça"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Y en a qui trouvent ridicules",
              "Les passions du genre humain",
              "D’autres préfèrent qu’on les encule",
              "Pour soulager leur prochain",
              "Moi j’connais une vieille bourrique",
              "Qui se fait chier sur l’estomac, ah, ah, ha, ah!"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Moi j’me fais chier sur la bite",
              "J’en suis pas plus fier pour ça",
              "J’en suis pas plus fier pour ça"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Le lundi j’baise en levrette",
              "Le mardi j’baise en canard",
              "L’mercredi je fais minette",
              "Et le jeudi m’fais pomper l’dard",
              "L’vendredi feuille de rose",
              "Samedi soixante-neuf, ah, ah, ha, ah!"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Le dimanche je me repose",
              "Pour refaire du foutre neuf",
              "Pour refaire du foutre neuf"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/La_terre_jaune.mp3"
      },
      {
        "nom": "LE MOUSQUETAIRE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Partout, partout nos traditions guerrières",
              "Et nos couleurs toujours plus loin",
              "Voici les fils des vaillants mousquetaires",
              "Jeunes et fiers et valeureux Marsouins",
              "La mine altière s’en vont eu guerre",
              "Tout en chantant leurs anciennes chansons",
              "Et l’ancre d’or brillante aux écussons."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Le mousquetaire sur cette terre",
              "C’est le Marsouin au passé éclatant",
              "Arrière, arrière tribu guerrière",
              "Vous ne vaincrez jamais nos régiments"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Humble biffin à la capote grise",
              "Et toi dragon au casque étincelant",
              "Chasseurs hussards à la moustache qui frise",
              "Inclinez-vous devant nos régiments",
              "Et quand la poudre, comme la foudre",
              "Éclate et tonne au milieu des combats",
              "Tout est carnage sur son passage",
              "L’ennemi fuit et ne résiste pas"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Et l’on peut voir sur sa face brunie",
              "Les longs sillons que le soleil trace,",
              "Et à ses pieds les têtes ennemies",
              "Qu’en attaquant, le Yatagan faucha",
              "Jeunes et frivoles, à notre école",
              "Si vous voulez gagner nos ancres d’or",
              "C’est dans la plaine africaine",
              "Qu’il faut venir, et l’on vous dressera"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Et vous verrez sous un plafond d’étoiles",
              "A la lueurs d’un feu de bivouac",
              "Qu’un marsouin peut, sous sa guitoune de toile",
              "Dormir en paix, et fumer son tabac",
              "Et dès l’aurore il peut encore",
              "Marcher gaiement sous un soleil de plomb",
              "Sans une goutte dans sa source",
              "Un biscuit sec souvent comme pot au feu"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Le_mousquetaire.mp3"
      },
      {
        "nom": "L’INFANTERIE DE MARINE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "J’ai fais trois fois le tour du monde,",
              "Jamais j’n’ai vu, jamais j’n’ai vu,",
              "Chose aussi belle, chose aussi ronde,",
              "Que l’trou mon cul, que l’trou mon cul,",
              "Que l’trou mon cul, Marsouin !"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "L’infanterie de Marine, voilà mes amours,",
              "Oui je l’aimerai, je l’aimerai sans cesse,",
              "L’infanterie de Marine, voilà mes amours,",
              "Oui je l’aimerai, je l’aimerai toujours ! Marsouin !"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Tous les obus de la Marine,",
              "Sont si pointus, sont si pointus, sont si pointus,",
              "Qu’ils rentreraient sans vaseline",
              "Dans l’trou mon cul, dans l’trou mon cul,",
              "Dans l’trou mon cul, Marsouin !"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "A mon dernier voyage en Chine,",
              "Un mandarin gras et dodu, gras et dodu,",
              "Voulut me mettre sa grosse pine",
              "Dans l’trou mon cul, dans l’trou mon cul,",
              "Dans l’trou mon cul, Marsouin !"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "J’ai fait trente ans de gymnastique,",
              "Jamais j’n’ai pu, j’n’ai pu, j’n’ai pu",
              "Poser un baiser sympathique",
              "Sur l’trou mon cul, sur l’trou mon cul,",
              "Sur l’trou mon cul, Marsouin !"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "De Singapour jusqu’à Formose",
              "Jamais j’n’ai vu, jamais j’n’ai vu, jamais j’n’ai vu",
              "Chose aussi belle, chose aussi rose",
              "Que l’trou mon cul, Marsouin !"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Quand j’serai un vieux qu’a la tremblote",
              "Et que d’baiser je n’pourrai plus, je n’pourrai plus",
              "J’irai chez Jeanne ou chez Charlotte m’y faire passer",
              "Des langues dans l’cul, des langues dans l’cul,",
              "Des langues dans l’cul !"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Linfanterie_de_Marine.mp3"
      },

      {
        "nom": "Loin de chez nous",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Loin de chez nous, en Afrique",
              "Combattait le bataillon",
              "Pour refaire, à la Patrie (bis)",
              "Sa splendeur, sa gloire et son renom"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "La bataille faisait rage",
              "Lorsque l’un de nous tomba",
              "Et mon meilleur camarade (bis)",
              "Gisait là blessé auprès de moi"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Et ses lèvres murmurèrent",
              "Si tu retournes au pays",
              "A la maison de ma mère (bis)",
              "Parles-lui, dis-lui à mots très doux"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Dis-lui qu’un soir, en Afrique",
              "Je suis parti pour toujours",
              "Dis-lui qu’elle me pardonne (bis)",
              "Car nous nous retrouverons un jour"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Loin_de_chez_nous.mp3"
      },
      {
        "nom": "MARIE-DOMINIQUE",
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Marie_Dominique.mp3",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "J’étais un soldat de marine",
              "J’venais m’engager pour cinq ans",
              "J’avais vingt ans, belle poitrine",
              "Comme dans le refrain du régiment",
              "Dans les bistrots près de Lourcine",
              "Les Anciens m’en faisaient un plat",
              "Tu verras ce que c’est que l’Indochine",
              "Écoute la chanson d’un soldat"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Marie, Marie-Dominique",
              "Que foutais-tu à Saigon?",
              "Ça ne pouvait rien faire de bon",
              "Marie-Dominique",
              "Je n’étais qu’un cabot clairon",
              "Mais je me rappelle ton nom",
              "Marie-Dominique",
              "Est-ce l’écho de tes prénoms",
              "Ou le triste appel du clairon",
              "Marie-Dominique"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Je ne savais pas que la chance",
              "Ne fréquentait point les canyas",
              "Et qu’en dehors de la cuistance",
              "Tout le reste ne valait pas ça",
              "Tu m’as fait comprendre des choses",
              "Avec tes petits airs insolents",
              "Et je ne sais quelles apothéoses",
              "C’était le plus clair de mes tourments"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ce fut Marie la tonkinoise",
              "Qui voulut faire notre bonheur",
              "En me faisant passer sous la toise",
              "Dans le vieux cholon ou bien ailleurs",
              "Tu étais rusée comme un homme",
              "Mais ton but je l’voyais pas bien",
              "Avec ta morale à la gomme",
              "Au cour de la Piastre à Nankin"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Tu m’as gâté mon paysage",
              "Et l’avenir quand sur le transport",
              "Je feuilletais de belles images",
              "Peintes comme des bouddhas en or",
              "Où sont mes buffles dans la rivière",
              "Les sampans, l’arroyo brumeux",
              "Les congaïs, leurs petites manières",
              "Devant le pouvoir de tes yeux"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "C’est ta démarche balancée",
              "Qui effaça tous mes espoirs",
              "Car cette bonne vie si bien rêvée",
              "Ce s’rait idiot de t’en vouloir",
              "Cette chanson de la Coloniale",
              "C’est le résultat en cinq ans",
              "De mes erreurs sentimentales",
              "Selon l’expérience des camps"
            ]
          }
        ]
      },
      {
        "nom": "MON AMANT DE LA COLONIALE",
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Mon_amant_de_la_coloniale.mp3",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Il était fort et puis si tendre",
              "Que, dès notre première nuit,",
              "Je sentais que je ne pourrais plus me reprendre,",
              "Et pour toujours, j’étais à lui.",
              "Je voyais toutes les femmes lui sourire.",
              "Moi, je me cramponnais à son bras",
              "Et je les regardais comme pour leur dire :",
              "« Il est à moi, et je l’lâche pas ! »"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "C’était un gars de la Coloniale.",
              "Il avait là, partant du front",
              "Et descendant jusqu’au menton,",
              "Une cicatrice en diagonale,",
              "Des cheveux noirs, des yeux si pâles,",
              "La peau brûlée par le soleil.",
              "J’en ai plus jamais vu de pareils",
              "A mon amant de la Coloniale."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Des fois, quand il avait la fièvre,",
              "Il parlait trop et j’avais peur.",
              "Je mettais la main sur ses lèvres",
              "Pour pas connaître le fond de son cœur",
              "Car je sentais que, dans son âme,",
              "Y avait des larmes et du cafard.",
              "Longtemps, j’ai cru que c’était une femme.",
              "Quand j’ai compris, c’était trop tard…"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Lorsque j’ai connu ma rivale,",
              "Alors j’ai serré fort mes bras",
              "Pour que cette grande garce de la Coloniale",
              "Lui foute la paix et ne me le vole pas",
              "Et lui, il m’avait dit : « Je reste »",
              "Mais un beau jour, il est reparti",
              "Vers ce pays que je déteste",
              "Dont il rêvait souvent la nuit."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "C’était un gars de la Coloniale.",
              "Il portait là, partant du front",
              "Et descendant jusqu’au menton,",
              "Une cicatrice en diagonale.",
              "Je reverrai plus ses beaux yeux pâles,",
              "Ses yeux qui n’ont pas leur pareil.",
              "Il est reparti vers son soleil,",
              "Mon bel amant de la Coloniale…"
            ]
          }
        ]
      },
      {
        "nom": "NOUS SOMMES DE LA COLONIALE",
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Nous_sommes_de_la_Coloniale.mp3",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Nous sommes de la Coloniale",
              "Si loin de nos pays",
              "Vers le front nous marcherons",
              "Pour vaincre l’ennemi."
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Avec nos armes",
              "Nos coeurs et notre vie",
              "Nous défendrons la France",
              "Contre l’ennemi.",
              "Avec nos armes",
              "Nos coeurs et notre vie",
              "Nous défendrons la France",
              "Contre l’ennemi."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "En tête de notre colonne",
              "Un fanion flotte au vent",
              "C’est celui d’la Coloniale",
              "Qui flotte dans le rang."
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Frères d’Afrique",
              "D’Indo du Pacifique",
              "Nous avons lutté ensemble",
              "Pour notre idéal",
              "Frères d’Afrique",
              "D’Indo du Pacifique",
              "Nous avons lutté ensemble",
              "Pour notre idéal."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Et si toute une vermine",
              "Bavent sur notre honneur",
              "Un soldat de la marine",
              "Sait mourir sans rancoeur."
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Nos belles âmes",
              "Pas besoins de merci",
              "Jamais les pas de nos ancres",
              "Ne seront perdus",
              "Nos belles âmes",
              "Pas besoins de merci",
              "Jamais les pas de nos ancres",
              "Ne seront perdus."
            ]
          }
        ]
      },
      {
        "nom": "OPIUM",
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Opium.mp3",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Dans le port de Saigon",
              "Il est une jonque chinoise",
              "Mystérieuse et sournoise",
              "Dont nul ne connaît le nom",
              "Et le soir dans l’entrepont",
              "Quand la nuit se fait complice",
              "Les européens se glissent",
              "Cherchant des coussins profonds"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Opium, poison de rêve",
              "Fumée qui monte au ciel",
              "C’est toi qui nous élève",
              "Aux paradis artificiels",
              "Je vois le doux visage",
              "Les yeux de mon aimée",
              "Parfois j’ai son image",
              "Dans un nuage de fumée."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Et le soir au port Falot,",
              "Les lanternes qui se voilent",
              "Semblent de petites étoiles",
              "Qui scintillent tour à tour.",
              "Et parfois dans son extase,",
              "Au gré de la fumée grise,",
              "Le fumeur se représente",
              "Ses plus beaux rêves d’amour"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Puisqu’on dit que le bonheur",
              "N’existe pas sur la terre,",
              "Puisse l’ombre de nos chimères",
              "Un jour nous porter ailleurs.",
              "Au paradis enchanteur",
              "Plein de merveilleux mensonges",
              "Où dans l’extase de mes songes",
              "J’ai laissé prendre mon cœur"
            ]
          }
        ]
      },
      {
        "nom": "QUAND JÉSUS-CHRIST CRÉA LA COLONIALE",
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Quand_Jesus_Christ_Crea_la_Coloniale.mp3",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Quand Jésus-Christ créa la Coloniale",
              "Il décréta qu’fallait des hommes costauds,",
              "N’ayant pas peur du feu, de la mitraille",
              "Et sachant boire le vin et le pernod !"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Intaï mot haï ba congaï annamit Lintaï (Bis)",
              "Derrière la cabane bambou",
              "Faï Faï mot Laï ba",
              "Derrière la cabane bambou",
              "Casser quiditt paye nam sous.",
              "Oh Sa Oï mon capitaine, casser quiditt l’a pas payé."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "A Saïgon la ville principale",
              "Où les Marsouins tenaient leur garnison,",
              "Les officiers en pousse- pousse se baladent",
              "S’faisant traîner comme de vulgaires cochons."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Les officiers se payent les japonaises",
              "Tandis que nous, pauvres marsouins fauchés",
              "Nous nous payons c’qu’on appelle la terre glaise",
              "Spécialité de nos girons niakoués."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Après quinze ans, percutés mais superbes",
              "L’armée nous rend enfin à nos foyers",
              "Pour épouser une pucelle imberbe",
              "Avec laquelle il faudra procréer."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Le soir des noces, à l’humble créature",
              "Nous lui dirons, va tourne moi le dos",
              "Le cul vois tu c’est contre la nature",
              "Mais c’est si cher au coeur des coloniaux."
            ]
          }
        ]
      },
      {
        "nom": "TAMARII VOLONTAIRE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Matou teie tamarii volontaire",
              "O ta œ ite tau maineï",
              "Te farii nei mato’u ite tuve | bis",
              "No to mato’u hau ne tua |"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Teie mainei to nau Tamarii",
              "O ta œ ite tau maineï",
              "Té hia rua Tona tava Raa",
              "Té Vahi o te rupe"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Tamarii_volontaire.mp3"
      },
      {
        "nom": "TIENS VOILA LA COLONIALE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "C’était un wagon de pines",
              "Qui revenait d’Indochine",
              "Y en avait des longues, des fines",
              "Qui pendaient par la portière"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Tiens voilà la Coloniale!",
              "Tiens voilà les coloniaux!"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Y en avait des longues des fines",
              "Qui pendaient par la portière",
              "Une bonne dame de charité",
              "En pris trois douzaines de paires"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Une bonne dame de charité",
              "En pris trois douzaines de paires",
              "Les posa sur la cheminée",
              "Pour se les carrer dans l’ derrière"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Les posa sur la cheminée",
              "Pour se les carrer dans l’ derrière",
              "La p’tite bonne qu’avait tout vu",
              "S’en est servi la première"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "La p’tite bonne qu’avait tout vu",
              "S’en est servi la première",
              "Elle s’en est tellement foutue",
              "Qu’elle s’en péta la charnière"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Elle s’en est tellement foutue",
              "Qu’elle s’en péta la charnière",
              "Si bien que du con au cul",
              "Ce n’est plus qu’une vaste ornière"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Si bien que du con au cul",
              "Ce n’est plus qu’une vaste ornière",
              "Tu crois la prendre par-devant",
              "Va te faire foutre c’est par-derrière"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Tu crois la prendre par-devant",
              "Va te faire foutre c’est par-derrière",
              "Tu veux lui faire un enfant",
              "V’la tout le foutre qui tombe par terre"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Tu veux lui faire un enfant",
              "V’la tout le foutre qui tombe par terre",
              "Et tu dis en l’écrasant",
              "D’un mouvement de colère"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Et tu dis en l’écrasant",
              "D’un mouvement de colère",
              "Non tu ne connaîtras pas",
              "Le foutu con de ta mère"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Non tu ne connaîtras pas",
              "Le foutu con de ta mère",
              "Tu ne feras pas non plus",
              "Un militaire de carrière"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Tiens_voila_la_coloniale.mp3"
      }
    ],
    'Bivouac': [
      {
        "nom": "À LA CLAIRE FONTAINE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "À la claire fontaine",
              "M’en allant promener",
              "J’ai trouvé l’eau si belle",
              "Que je m’y suis baigné"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Il y a longtemps que je t’aime",
              "Jamais je ne t’oublierai",
              "Il y a longtemps que je t’aime",
              "Jamais je ne t’oublierai"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Sous les feuilles d’un chêne",
              "Je me suis fait sécher",
              "Sur la plus haute branche",
              "Un rossignol chantait"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Chante rossignol chante",
              "Toi qui as le cœur gai",
              "Tu as le cœur à rire",
              "Moi je l’ai à pleurer"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "J’ai perdu mon amie",
              "Sans l’avoir mérité",
              "Pour un bouton de roses",
              "Que je lui refusai"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Je voudrais que la rose",
              "Fut encore au rosier",
              "Et que ma douce amie",
              "Fût encore à m'aimer"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/A_la_claire_fontaine.mp3"
      },
      {
        "nom": "SANTIANO",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "C’est un fameux trois-mâts fin comme un oiseau",
              "Hissez haut Santiano",
              "Dix-huit noeuds quatre cents tonneaux",
              "Je suis fier d’y être matelot"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Tiens bon la vague et tiens bon le vent",
              "Hissez haut Santiano",
              "Si Dieu veut toujours droit devant",
              "Nous irons jusqu’à San Francisco"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Je pars pour de longs mois en laissant Margot",
              "Hissez haut Santiano",
              "D’y penser j’avais le coeur gros",
              "En doublant les feux de Saint-Malo"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Tiens bon la vague et tiens bon le vent",
              "Hissez haut Santiano",
              "Si Dieu veut toujours droit devant",
              "Nous irons jusqu’à San Francisco"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "On prétend que là-bas l’argent coule à flot",
              "Hissez haut Santiano",
              "On trouve l’or au fond des ruisseaux",
              "J’en ramènerai plusieurs lingots"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Tiens bon la vague et tiens bon le vent",
              "Hissez haut Santiano",
              "Si Dieu veut toujours droit devant",
              "Nous irons jusqu’à San Francisco"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Un jour je reviendrai chargé de cadeaux",
              "Hissez haut Santiano",
              "Au pays j’irai voir Margot",
              "A son doigt je passerai l’anneau"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Tiens bon le cap et tiens bon le flot",
              "Hissez haut Santiano",
              "Sur la mer qui fait le gros dos",
              "Nous irons jusqu’à San Francisco"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Santiano.mp3"
      },
      {
        "nom": "Un Gai Luron des Flandres",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Un gai luron des Flandres",
              "S’en vint en Wallonie",
              "S’en vint, s’en vint en Wallonie;",
              "Pour y conter des fables, des fables de son pays.",
              "Tra la la la, Tra la la la",
              "Des fables de son pays.",
              "Heureux qui peut entendre, entendre de ses chansons",
              "Tra la la la, Tra la la la",
              "Entendre de ses chansons.",
              "Un gai luron…"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Tra la la la, Tra la la la",
              "Des fables de son pays.",
              "Tra la la la, Tra la la la",
              "Entendre de ses chansons."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Un_gai_luron_des_flandres.mp3"
      },
      {
        "nom": "AU TRENTE ET UN DU MOIS D’AOUT",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Au trente et un du mois d’août (bis)",
              "Nous vîmes venir sous le vent à nous (bis)",
              "Une frégate d’Angleterre",
              "Qui fendait la mer et les flots",
              "C’était pour aller à Bordeaux"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Buvons un coup, buvons en deux",
              "A la santé des amoureux",
              "A la santé du roi de France",
              "Et merde pour le roi d’Angleterre",
              "Qui nous a déclaré la guerre"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Le Capitaine au même moment (bis)",
              "Fait appeler son Lieutenant (bis)",
              "Lieutenant te sens-tu capable",
              "Dis-moi te sens-tu assez fort",
              "Pour aller crocher à son bord ?"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Le Lieutenant fier et hardi (bis)",
              "Lui répondit « Capitaine oui » (bis)",
              "Faites monter votre équipage",
              "Hardis gabiers, gars matelots",
              "Faites monter tout le monde en haut"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Le maître donne un coup d’sifflet (bis)",
              "« En haut ! Largue les perroquets » (bis)",
              "Largue les ris et vent arrière",
              "Laisse arriver près de son bord",
              "Pour voir qui sera le plus fort"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Vive lof pour lof, en abattant (bis)",
              "Nous l’accostons par son avant (bis)",
              "A coup de haches, à coup de sabres",
              "De piqûres, de couteaux, mousquetons",
              "Nous l’avons mis à la raison"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Que va-t-on dire de lui tantôt (bis)",
              "A Brest, à Londres et à Bordeaux (bis)",
              "De s’être ainsi laissé surprendre",
              "Par un corsaire de quinze canons",
              "Lui qui en avait trente et six bons !"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Au_31_du_mois_d_aout.mp3"
      },
      {
        "nom": "AUX MARCHES DU PALAIS",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Aux marches du palais (bis)",
              "Y a une toute belle fille lon-la",
              "Y a une toute belle fille"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Elle a tant d’amoureux (bis)",
              "Qu’elle ne sait lequel prendre lon-la",
              "Qu’elle ne sait lequel prendre"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "C’est un p’tit cordonnier (bis)",
              "Qu’en a la préférence lon-la",
              "Qu’en a la préférence"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Et c’est en la chaussant (bis)",
              "Qu’il lui fit sa demande lon-la",
              "Qu’il lui fit sa demande"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "La belle si tu voulais (bis)",
              "Nous dormirions ensemble lon-la",
              "Nous dormirions ensemble"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Dans un grand lit doré (bis)",
              "Tout garni de dentelles lon-la",
              "Tout garni de dentelles"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Aux quatre coins du lit (bis)",
              "Un bouquet de pervenches lon-la",
              "Un bouquet de pervenches"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Dans le miton du lit (bis)",
              "La rivière est profonde lon-la",
              "La rivière est profonde"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Tous les chevaux du roi (bis)",
              "Pourraient y boire ensemble lon-la",
              "Pourraient y boire ensemble"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Et ils vécurent heureux (bis)",
              "Jusqu’à la fin du monde lon-la",
              "Jusqu’à la fin du monde"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Aux_marches_du_palais.mp3"
      },
      {
        "nom": "CHEVALIERS DE LA TABLE RONDE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Chevaliers de la table ronde",
              "Goûtons voir si le vin est bon"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Goûtons voir, oui, oui, oui",
              "Goûtons voir, non, non, non",
              "Goûtons voir si le vin est bon"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "S’il est bon, s’il est agréable",
              "J’en boirai jusqu’à mon plaisir"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "J’en boirai cinq à six bouteilles",
              "Une femme sur les genoux"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Pan, pan, pan qui frappe à la porte?",
              "Je crois bien que c’est mon mari"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Si c’est lui que le diable l’emporte",
              "De venir troubler mon plaisir"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Si je meurs, je veux qu’on m’enterre",
              "Dans la cave où il y a du bon vin"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Les deux pieds contre la muraille",
              "Et la tête sous le robinet"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Et les quatre plus grands ivrognes",
              "Porteront les quatre coins du draps"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Pour donner le discours d’usage",
              "On prendra le bistrot du coin"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Et si le tonneau se débouche",
              "J’en boirai jusqu’à mon loisir"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Et s’il en reste quelques gouttes",
              "Ce sera pour nous rafraîchir"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Sur ma tombe je veux qu’on inscrive",
              "Ici gît le roi des buveurs"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Chevaliers_de_la_table_ronde.mp3"
      },
      {
        "nom": "COMPLAINTE DE MANDRIN",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Nous étions 20 ou 30 brigands de même bande",
              "Tous habillés de blanc à la mode des marchands"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "La première volerie que je fis dans ma vie",
              "C’est d’avoir goupillé la bourse d’un curé"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "J’entrai dans une chambre, Mon Dieu qu’elle était grande",
              "J’y trouvai 1000 écus, j’y mis la main dessus"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "J’entrai dedans une autre, Mon Dieu qu’elle était haute",
              "De robes et de manteaux, je chargeais 20 chariots"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Je suis allé les vendre à la foire en Hollande",
              "J’les vendis bon marché, ils m’avaient rien coûté"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ces messieurs de Grenoble avec leurs grandes robes",
              "Et leur bonnet carré m’eurent bientôt jugé"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ils m’ont jugé à pendre, que c’est dur à entendre",
              "A pendre et étrangler sur la place du marché"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Du haut de ma potence, je regardais la France",
              "J’y vis mes compagnons à l’ombre d’un buisson"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Compagnons de misère, allez dire à ma mère",
              "Qu’elle me r’verra plus, j’suis un enfant perdu"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Complainte_de_mandrin.mp3"
      },
      {
        "nom": "TI FLEUR FANEE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "{ Vi souviens nénére adorée",
              "Le p’tit bouquet que l’a donn’ a moin",
              "Na longtemps que li l’est fané.",
              "Vi souviens comm’ ça l’est loin } (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "{ Ti fleurs fanées",
              "Ti fleurs aimées",
              "Di a moins toujours",
              "Couc’ c’est l’amour.}bis"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "{ Marché dans la forêt.",
              "Y faisait bon, y faisait frais",
              "Dans l’ z’ herbes l’avait la rosée",
              "Dans le ciel, z’oiseaux y chantaient. } (bis)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "{ Depuis ça, le temps l’a passé",
              "Y reste rien qu’un doux souvenir,",
              "Quand mi pense, mon cœur l’est brisé,",
              "Tout ici, com’ ça y doit finir. } (bis)"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Ti_fleur_fane.mp3"
      },
      {
        "nom": "DEBOUT LES GARS",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Cette montagne que tu vois",
              "On y viendra à bout mon gars",
              "Un bulldozer et deux cents bras",
              "Et passera la route"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Debout les gars réveillez-vous",
              "Il va falloir en mettre un coup",
              "Debout les gars réveillez-vous",
              "On va au bout du monde"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Il ne faut pas se dégonfler",
              "Devant les tonnes de rocher",
              "On va faire un 14 juillet",
              "A coup de dynamite"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Encore un mètre et deux et trois",
              "Et tu verras en 2003",
              "Tes enfants seront fiers de toi",
              "La route sera belle"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Les gens nous prenaient pour des fous",
              "Mais nous on passera partout",
              "Et nous serons au rendez-vous",
              "De ceux qui nous attendent"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Il nous arrive parfois le soir",
              "Comme un petit coup de cafard",
              "Mais ce n’est qu’un peu de brouillard",
              "Que le soleil déchire"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Et quand tout sera terminé",
              "Il faudra bien se séparer",
              "Mais on n’oubliera jamais, jamais",
              "Ce qu’on a fait ensemble"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Debout_les_gars.mp3"
      },
      {
        "nom": "FANCHON",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Amis il faut faire une pause",
              "J’aperçois l’ombre d’un bouchon",
              "Buvons à l’aimable Fanchon",
              "Chantons pour elle quelque chose"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ah! que son entretien est doux",
              "Qu’elle a de mérite et de gloire",
              "Elle aime à rire, elle aime à boire",
              "Elle aime à chanter comme nous",
              "Oui comme nous"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Fanchon préfère la grillade",
              "A d’autre mets plus délicats",
              "Son teint prend un nouvel éclat",
              "Quand on lui verse une rasade"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Fanchon quoique bonne chrétienne",
              "Fut baptisée avec du vin",
              "Un bourguignon fut son parrain",
              "Une bretonne sa marraine"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Fanchon ne se montre cruelle",
              "Que lorsqu’on lui parle d’amour",
              "Mais moi je ne lui fais la cour",
              "Que pour m’enivrer avec elle"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Un jour le voisin la grenade",
              "Lui mit sa main dans son corset",
              "Elle riposta d’un soufflet",
              "Sur le museau du camarade"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Fanchon.mp3"
      },
      {
        "nom": "GUERRE, GUERRE, VENTE, VENT",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Après sept années de guerre, sept années de bâtiment",
              "Je reviens de Grande Terre, je reviens à Lorient",
              "Guerre, guerre, vente, vent"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "J’ai passé des nuits entière debout au gaillard d’avant",
              "Sous bon vent, sous vent contraire, sous la brise, sous les brisants",
              "Guerre, guerre, vente, vent"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Voyez mon sac de misère, lourd de gourdes, vide d’argent",
              "Allez dire au capitaine, j’ai obéi trop souvent",
              "Guerre, guerre, vente, vent"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Bonjour ma mie qui m’est chère, revoilà ton cher amant",
              "Je suis las de trop de guerres, sans voir grandir mes enfants",
              "Guerre, guerre, vente, vent"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "J’ai reçu tes mille lettres par le rossignol chantant",
              "Je t’écrivais moins peut-être, je t’envoyais des rubans",
              "Guerre, guerre, vente, vent"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Mes amis plus que naguère, vous me verrez bien souvent",
              "Après tant années de guerre, j’aurai tant et tant de temps",
              "Guerre, guerre, vente, vent"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "De Lorient à Grande Terre, vent arrière, vent avant",
              "Les fleurs d’hiver étaient belles, elles annonçaient le printemps",
              "Guerre, guerre, vente, vent"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Guerre_guerre_vente_vent.mp3"
      },
      {
        "nom": "JEAN-FRANCOIS DE NANTES",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "C’est Jean-François de Nantes",
              "Gabier de la Fringante.",
              "Oh ! Mes bouées Jean-François."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Débarque de campagne",
              "Fier comme un roi d’Espagne.",
              "Oh ! Mes bouées Jean-François."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "En vrac dedans sa bourse",
              "Il a vingt mois de course.",
              "Oh ! Mes bouées Jean-François."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Une montre, une chaîne",
              "Qui vaut une baleine.",
              "Oh ! Mes bouées Jean-François."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Branle bas chez son hôtesse",
              "Carambole et largesses.",
              "Oh ! Mes bouées Jean-François."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "La plus belle servante",
              "L’emmène dans sa soupente.",
              "Oh ! Mes bouées Jean-François."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "De concert avec elle",
              "Navigue sur mer belle.",
              "Oh ! Mes bouées Jean-François."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "En vidant sa bouteille",
              "Tout son or appareille.",
              "Oh ! Mes bouées Jean-François."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Montre, chaîne se baladent",
              "Jean-François est malade.",
              "Oh ! Mes bouées Jean-François."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "A l’hôpital de Nantes",
              "Jean-François se lamente.",
              "Oh ! Mes bouées Jean-François."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Il ferait de la peine",
              "Même à son capitaine.",
              "Oh ! Mes bouées Jean-François."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Et les draps de sa couche",
              "Déchire avec sa bouche.",
              "Oh ! Mes bouées Jean-François."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Pauvre Jean-François de Nantes",
              "Gabier de la Fringante.",
              "Oh ! Mes bouées Jean-François."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Jean_francois_de_nantes.mp3"
      },
      {
        "nom": "LA BLANCHE HERMINE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "J’ai rencontré ce matin",
              "Devant la haie de mon champs",
              "Une troupe de marins",
              "D’ouvriers, de paysans",
              "{ Où allez-vous camarades",
              "Avec vos fusils chargés",
              "Nous tendons des embuscades",
              "Vient rejoindre notre armée }bis"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "La voilà la blanche hermine",
              "Vive la mouette et l’ajonc",
              "La voilà la blanche hermine",
              "Vive Fougère et Clisson"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Où allez-vous camarades",
              "Avec vos fusils chargés",
              "Nous tendons des embuscades",
              "Viens rejoindre notre armée",
              "{ Ma mie dit que c’est folie",
              "D’aller faire la guerre au francs",
              "Moi je dis que c’est folie",
              "D’être enchaîné plus longtemps }bis"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ma mie dit que c’est folie",
              "D’aller faire la guerre au francs",
              "Moi je dis que c’est folie",
              "D’être enchaîné plus longtemps",
              "{ Elle aura bien de la peine",
              "Pour élever les enfants",
              "Elle aura bien de la peine",
              "Car je m’en vais pour longtemps }bis"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Elle aura bien de la peine",
              "Pour élever les enfants",
              "Elle aura bien de la peine",
              "Car je m’en vais pour longtemps",
              "{ Je viendrais à la nuit noire",
              "Tant que la guerre durera",
              "Comme les femmes en noir",
              "Triste et seule elle m’attendra }bis"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Je viendrais à la nuit noire",
              "Tant que la guerre durera",
              "Comme les femmes en noir",
              "Triste et seule elle m’attendra",
              "{ C’est sans doute pense t elle",
              "Que je suis en déraison",
              "De la voir mon cœur se serre",
              "Là-bas devant la maison }bis"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "C’est sans doute pense t elle",
              "Que je suis en déraison",
              "De la voir mon cœur se serre",
              "Là-bas devant la maison",
              "{ Et si je meurs à la guerre",
              "Pourra-t-elle me pardonner",
              "D’avoir préféré ma terre",
              "A l’amour qu’elle m’a donné }bis"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Et si je meurs à la guerre",
              "Pourra-t-elle me pardonner",
              "D’avoir préféré ma terre",
              "A l’amour qu’elle ‘a donné",
              "{ J’ai rencontré ce matin",
              "Devant la haie de mon champs",
              "Une troupe de marins",
              "D’ouvriers, de paysans }bis"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/La_blanche_hermine.mp3"
      },
      {
        "nom": "LE FORBAN",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "A moi forban que m’importe la gloire",
              "Les lois du monde et qu’importe la mort?",
              "Sur l’océan j’ai planté ma victoire",
              "Et bois mon vin dans une coupe d’or.",
              "Vivre d’orgies est ma seule espérance",
              "Le seul bonheur que j’ai pu conquérir",
              "Si sur les flots j’ai passé mon enfance",
              "C’est sur les flots qu’un forban doit mourir."
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Vins qui pétillent",
              "Femmes gentilles",
              "Sous des baisers brûlants d’amour",
              "Plaisirs, batailles",
              "Viv’ la canaille",
              "Je bois, je chante",
              "Et je tue tour à tour."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Peut-être au mât d’une barque étrangère",
              "Mon corps un jour servira d’étendard",
              "Et tout mon sang rougira la galère",
              "Aujourd’hui fête et demain le bazar.",
              "Allons, esclave, allons, debout mon brave",
              "Buvons le vin et la vie à grand pot",
              "Aujourd’hui fête et demain peut-être",
              "Ma tête ira s’engloutir dans les flots."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Peut-être un jour sur un coup de fortune",
              "Je saisirai l’or d’un beau galion",
              "Riche à pouvoir vous acheter la lune",
              "Je m’en irai vers d’autres horizons.",
              "Là respecté tout comme un gentil’homme",
              "Moi qui ne suis qu’un forban, qu’un bandit",
              "Je pourrai comm’ le fils d’un roi, tout comme,",
              "Mourir peut-être dedans un bon lit."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Le_forban.mp3"
      },
      {
        "nom": "LE GARS PIERRE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Le gars pierre est parti à la guerre",
              "Un matin de beau jour de printemps",
              "Il avait une allure si fière",
              "Qu’il partit comme un homme en chantant"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "T’en fait pas la Marie t’es jolie",
              "T’en fait pas la Marie j’ reviendrai",
              "Nous aurons du bonheur plein la vie",
              "T’en fait pas la Marie j’ reviendrai"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Mais les mois et les années passèrent",
              "La Marie a pleuré bien souvent",
              "En songeant aux beaux jours de naguère",
              "Et surtout quand revient le printemps"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Le gars pierre est revenu de la guerre",
              "Toujours jeune et joyeux comme avant",
              "Sans chagrin ni blessure légère",
              "C’est un homme vigoureux à présent"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "La Marie qui était si jolie",
              "A perdu sa beauté de vingt ans",
              "Quand on pleure on vieillit c’est la vie",
              "Ses grands yeux sont tout gris à présent"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Le gars pierre est parti à la ville",
              "Mais il ne reviendra jamais plus",
              "Il y a tant de filles de belles filles",
              "La Marie pour lui n’existe plus"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "La Marie dans un jour de folie",
              "A couru se jeter dans l’étang",
              "Mais un gars lui a sauvé la vie",
              "Et lui fit oublier ses tourments"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Le_gars_Pierre.mp3"
      },
      {
        "nom": "LE PAUVRE AVEUGLE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Un pauvre aveugle qui n’y voyait rien,",
              "Rencontre une dame, rencontre une dame,",
              "Un pauvre aveugle qui n’y voyait rien,",
              "Rencontre une dame qui lui veut du bien"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Faites lui du bien, bien, bien, bien, bien,",
              "A ce pauvre aveugle, à ce pauvre aveugle,",
              "Faites lui du bien, bien, bien, bien, bien,",
              "A ce pauvre aveugle qui n’y voyait rien !"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Mon pauvre aveugle, voulez-vous des oeufs ?",
              "Non, merci Madame, non merci Madame.",
              "Mon pauvre aveugle, voulez-vous des oeufs ?",
              "Non, merci Madame, j’en ai déjà deux !"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Mon pauvre aveugle, voulez-vous du pain ?",
              "Non, merci Madame, non merci Madame.",
              "Mon pauvre aveugle, voulez-vous du pain ?",
              "Non, merci Madame, j’en ai déjà un !"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Mon pauvre aveugle, voulez-vous du vin ?",
              "Non, merci Madame, non merci Madame.",
              "Mon pauvre aveugle, voulez-vous du vin ?",
              "Non, merci Madame, je suis déjà plein !"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Mon pauvre aveugle mais que voulez-vous ?",
              "Je voudrais Madame, je voudrais Madame",
              "Mon pauvre aveugle mais que voulez-vous ?",
              "Je voudrais Madame coucher avec vous !"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Mon pauvre aveugle, vous n’y verrez rien !",
              "Ca n’fait rien Madame, ça n’fait rien Madame",
              "Mon pauvre aveugle, vous n’y verrez rien !",
              "Ca n’fait rien Madame, j’y mettrai les mains !"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Le_pauvre_aveugle.mp3"
      },
      {
        "nom": "LE PERE ABRAHAM’S",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "C’est le père Abraham’s, et ses 7 fils,",
              "7 fils, et le père Abraham’s, Tchoutchou!",
              "Il ne rit jamais, ne sourit jamais,",
              "Mais tous les jours il est comme ça!",
              "Et le bras gauche !! (bouger le bras gauche en chantant)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "C’est le père Abraham’s, et ses 7 fils,",
              "7 fils, et le père Abraham’s, Tchoutchou!",
              "Il ne rit jamais, ne sourit jamais,",
              "Mais tous les jours il est comme ça!",
              "Et le bras gauche !! Et le bras droit !! (bouger les deux bras)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "C’est le père Abraham’s, et ses 7 fils,",
              "7 fils, et le père Abraham’s, Tchoutchou!",
              "Il ne rit jamais, ne sourit jamais,",
              "Mais tous les jours il est comme ça!",
              "Et le bras gauche !! Et le bras droit !!",
              "Et le pieds gauche!! (bouger les trois…)"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "C’est le père Abraham’s, et ses 7 fils,",
              "7 fils, et le père Abraham’s, Tchoutchou!",
              "Il ne rit jamais, ne sourit jamais,",
              "Mais tous les jours il est comme ça!",
              "Et le bras gauche !! Et le bras droit !!",
              "Et le pieds gauche!! Et le pieds droit !!"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "C’est le père Abraham’s, et ses 7 fils,",
              "7 fils, et le père Abraham’s, Tchoutchou!",
              "Il ne rit jamais, ne sourit jamais,",
              "Mais tous les jours il est comme ça!",
              "Et le bras gauche !! Et le bras droit !!",
              "Et le pieds gauche!! Et le pieds droit !!",
              "Et le cul !!"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "C’est le père Abraham’s, et ses 7 fils,",
              "7 fils, et le père Abraham’s, Tchoutchou!",
              "Il ne rit jamais, ne sourit jamais,",
              "Mais tous les jours il est comme ça!",
              "Et le bras gauche !! Et le bras droit !!",
              "Et le pieds gauche!! Et le pieds droit !!",
              "Et le cul !! Et la teub !!"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "C’est le père Abraham’s, et ses 7 fils,",
              "7 fils, et le père Abraham’s, Tchoutchou!",
              "Il ne rit jamais, ne sourit jamais,",
              "Mais tous les jours il est comme ça!",
              "Et le bras gauche !! Et le bras droit !!",
              "Et le pieds gauche!! Et le pieds droit !!",
              "Et le cul !! Et la teub !!",
              "Et la langue !! (danser comme un tordu la langue sortie…)"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Le_pere_abrahams.mp3"
      },
      {
        "nom": "LE PERE BACCHUS",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Le père Bacchus qui aimait les fredaines",
              "A ses enfants voulut faire un présent",
              "Bon, bon, bon, il leur dit mes enfants",
              "Buvons à tasse pleine",
              "Car le paradis, la hira (bis)",
              "Car le paradis, aux ivrognes est promis"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ne faisons pas comme le premier homme",
              "Qui fut trompé par sa chère moitié",
              "Par sa chère moitié",
              "Non, non, non! Il a été trompé",
              "En mangeant une pomme",
              "Amis soyons fins, la hira (bis)",
              "Amis soyons fins et buvons du bon vin"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Samson qui portait belle chevelure",
              "N’eut pas de chance avec sa Dalida",
              "Avec sa Dalida",
              "Non, non, non! Un jour elle la coupa",
              "Pour faire de la fourrure",
              "Qu’on me les coupe à ras, la hira (bis)",
              "Qu’on me les coupe à ras mais sans couper mon vin"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ma p’tite Suzon ne fait pas tant la fière",
              "Car tes appas ne me séduiront pas",
              "Ne me séduiront pas",
              "Non, non, non! Ni tous tes falbalas",
              "Ni tes belles manières",
              "Non ne valent pas, la hira (bis)",
              "Non ne valent pas le bon vin que voilà"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Le_pere_bacchus.mp3"
      },
      {
        "nom": "LE PETIT ANE GRIS",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Écoutez cette histoire",
              "Que l’on m’a raconté",
              "Du fond de ma mémoire",
              "Je vais vous la chanter",
              "Elle se passe en Provence",
              "Au milieu des moutons",
              "Dans le sud de la France ( bis )",
              "Au pays des santons ( bis )"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Quand il vint au domaine",
              "Y’avait un beau troupeau",
              "Les étables étaient pleines",
              "De brebis et d’agneaux",
              "Marchant toujours en tête",
              "Aux premières lueurs",
              "Pour tirer sa charrette ( bis )",
              "Il mettait tout son coeur ( bis )"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Aux temps des transhumances",
              "Il s’en allait heureux",
              "Remontant la Durance",
              "Honnête et courageux",
              "Mais un jour de Marseille",
              "Des messieurs sont venus",
              "La ferme était bien vieille ( bis )",
              "Alors on l’a vendue ( bis )"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Il resta au village",
              "Tout le monde l’aimait bien",
              "Veillant malgré son âge",
              "Et malgré son chagrin",
              "Image d’Evangile",
              "Vivant d’humilité",
              "Il se rendait utile ( bis )",
              "Auprès du cantonnier ( bis )"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Cette vie honorable",
              "Un soir s’est terminée",
              "Dans le fond d’une étable",
              "Tout seul il s’est couché",
              "Pauvre bête de somme",
              "Il a fermé les yeux",
              "Abandonné des hommes ( bis )",
              "Il est mort sans adieux ( bis )"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Mmmmmmmmmmm ( bis )"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Cette chanson sans gloire",
              "Vous racontait la vie",
              "Vous racontait l’histoire ( bis )",
              "D’un petit âne gris ( bis )"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Le_petit_ane_gris.mp3"
      },
      {
        "nom": "LE PETIT VILLAGE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Je connais un petit village",
              "Entouré de pommiers fleuris",
              "Et là près d’un joli cottage",
              "Marie, Suzon sont réunies",
              "Et toutes deux ensemble se demandent",
              "Reviendra-t-il",
              "Le petit gars",
              "Pour écouter le gai ruisseau qui chante",
              "Les prés, les bois, les plaisirs d’autrefois"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Il est parti un bon matin",
              "Tout le long des chemins",
              "Il a quitté sa chaumière",
              "Sa Marie et puis sa Suzon",
              "C’est pour défendre la Patrie",
              "Car au loin tonne le canon",
              "Soldat le pays t’appelle",
              "Va rejoindre tes compagnons",
              "Un jour tu reverras ta belle",
              "Ta Marie et ta Suzon"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Le_petit_village.mp3"
      },
      {
        "nom": "LE PINARD",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Dans les campagnes de France et de Navarre",
              "Le soldat chante en portant son bardas",
              "Une chanson aux paroles bizarres",
              "Dont le refrain est « vive le pinard »"
            ]
          },
          {
            "type": "refrain",
            "texte": [
              "Le pinard, c’est de la vinasse",
              "Ça fait du bien par où ce que ça passe",
              "Allez bidasse, 1-2, remplis mon quart, 3-4",
              "Vive le pinard, vive le pinard"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Dans la montagne, culbute la bergère",
              "Et au combat renverse l’ennemi",
              "Dans la tranchée fous-toi la gueule par terre",
              "Mais non de Dieu, ne renverse pas le pinard"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Dans le désert, on dit qu’les dromadaires",
              "Ne boivent pas, ça c’est des racontars",
              "S’ils ne boivent pas, c’est qu’ils n’ont que d’l’eau claire",
              "Ils boiraient bien s’ils avaient du pinard"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Petit bébé, tu bois le lait de ta mère",
              "Tu trouves ça bon, mais tu verras plus tard",
              "Cette boisson te semblera amère",
              "Quand tu auras goûté au pinard"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Aime ton pays, aime ton Etendard",
              "Aime ton sergent, aime ton Capitaine",
              "Aime l’adjudant même s’il a une sale gueule",
              "Mais que ça ne t’empêche pas d’aimer le pinard"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ne bois jamais d’eau, même la plus petite dose",
              "Ça c’est marqué dans tous les règlements",
              "Les soldats disent « danger l’eau bue explose »",
              "Va donc chantant sur tous les continents"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Si dans la brousse, un jour tu rendais l’âme",
              "Une dernière fois, pense au bon vieux pinard",
              "Si un giron a remplacé ta femme",
              "Jamais de l’eau n’a remplacé l’ pinard"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Le_pinard.mp3"
      },
      {
        "nom": "LE VIEUX CHALET",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "{ Là haut sur la montagne",
              "L’était un vieux chalet}(bis)",
              "Murs blancs, toits de bardeaux",
              "Devant la porte, un vieux boulot",
              "Là haut sur la montagne",
              "L’était un vieux chalet"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "{ Là haut sur la montagne",
              "Croula le vieux chalet }(bis)",
              "La neige et les rochers",
              "s’était unis pour l’arracher",
              "Là haut sur la montagne",
              "Croula le vieux chalet"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "{ Là haut sur la montagne",
              "Quand Jean vint au chalet }(bis)",
              "Pleura de tout son cœur",
              "Sur les débris de son bonheur",
              "Là haut sur la montagne",
              "Quand Jean vint au chalet"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "{ Là haut sur la montagne",
              "L’est un nouveau chalet }(bis)",
              "Car Jean, d’un cœur vaillant",
              "L’a rebâti plus beau qu’avant",
              "Là haut sur la montagne",
              "L’est un nouveau chalet"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Le_vieux_chalet.mp3"
      },
      {
        "nom": "LE VIN GAULOIS",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Vive le vieux vin de vigne,",
              "Le vieux vin gaulois !"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Tan ! Tan ! Terre et ciel!",
              "Chêne, feu rouge et soleil",
              "Tan ! Tan ! Glaive clair,",
              "Flots de sang vermeil !"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Mieux que bière ou vin de pommes",
              "Mieux vaut vin gaulois !"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "C’est le sang gaulois qui coule,",
              "C’est le sang gaulois !"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Sang et vin mêlés ruissèlent",
              "Sang et vin gaulois !"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Chant du glaive bleu qui frappe",
              "Chant du glaive roi !"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Le_vin_gaulois.mp3"
      },
      {
        "nom": "MONTAGNES PYRENEES",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Montagnes Pyrénées",
              "Vous êtes mes amours",
              "Cabanes fortunées",
              "Vous me plairez toujours",
              "Rien est si beau que ma patrie",
              "Rien ne plaît tant à mon ami",
              "Oh montagnards",
              "Chantez en choeurs",
              "De mon pays la paix et le bonheur",
              "La la la"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Halte là, halte là, halte là",
              "Les montagnards, les montagnards",
              "Halte là, halte là, halte là",
              "Les montagnards sont là",
              "Les montagnards, les montagnards",
              "Les montagnards sont là"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Laisse là tes montagnes",
              "Disait un étranger",
              "Suis moi dans mes campagnes",
              "Viens ne soit plus berger",
              "Jamais, jamais quelle folie",
              "Je suis heureux dans cette vie",
              "J’ai ma ceinture",
              "Et mon béret",
              "Mes chants joyeux",
              "Ma vie et mon chalet",
              "La la la"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Sur la cime argentée",
              "De ces pics orageux",
              "La nature domptée",
              "Favorise vos jeux",
              "Vers les glaciers d’un plomb rapide",
              "J’attends souvent l’ours intrépide",
              "Et sur les monts",
              "Plus d’une fois",
              "J’ai devancé les courses de chamois",
              "La la la"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Déjà dans la vallée",
              "Tout est silencieux",
              "La montagne voilée",
              "Se dérobe a nos yeux",
              "On entend plus dans la nuit sombre",
              "Que le torrent mugir dans l’ombre",
              "Oh montagnards",
              "Chantez moins fort",
              "Thérèse dort",
              "Ne la réveillons pas",
              "La la la"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Montagnes_pyrenees.mp3"
      },
      {
        "nom": "LILLY MARLENE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Devant la caserne, quand le jour s’enfuit",
              "La vieille lanterne soudain s’allume et luit",
              "C’est dans ce coin là que le soir",
              "On s’attendait remplit d’espoir",
              "Tous deux Lilly Marlène (bis)",
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Et dans la nuit sombre, nos corps enlacés",
              "Ne faisait qu’une ombre lorsque je t’embrassais",
              "Nous échangions ingénument",
              "Joue contre joue, bien des serments",
              "Tous deux Lilly Marlène (bis)",
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "La vieille lanterne s’allume toujours",
              "Prés de la caserne, quand s’enfuit le jour",
              "Mais tout me semble étranger",
              "Aurais-je donc bien changé",
              "Dis-moi Lilly Marlène (bis)",
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Cette tendre histoire, de nos cher vingt ans",
              "Chante en nos mémoires, malgré les jours, les ans",
              "Il me semble entendre ta voix",
              " Et je te serre dans mes bras",
              "Lilly, Lilly Marlène (bis)",
            ]
          },
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Lili_marleen.mp3"
      },
      {
        "nom": "NOUS IRONS A VALPARAISO",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Hardi les gars ! Vire au guindeau !",
              "Good bye farewell ! Good bye farewell !",
              "Hardi les gars ! Adieu Bordeaux !",
              "Hourra ! Oh Mexico ! HO ! Ho ! Ho !",
              "Au Cap Horn il ne fera pas chaud !",
              "Haul away ! hé oula tchalez !",
              "A faire la pêche cachalot !",
              "Hal’ matelot ! Hé ! Ho ! Hisse hé ! Ho !"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Plus d’un y laissera sa peau !",
              "Good bye farewell ! Good bye farewell !",
              "Adieu misère adieu bateau !",
              "Hourra ! Oh Mexico ! HO ! Ho ! Ho !",
              "Et nous irons à Valparaiso !",
              "Haul away ! hé oula tchalez !",
              "Où d’autres y laisseront leur os !",
              "Hal’ matelot ! Hé ! Ho ! Hisse hé ! Ho !"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ceux qui reviendront pavillons haut !",
              "Good bye farewell ! Good bye farewell !",
              "C’est premier brin de matelot !",
              "Hourra ! Oh Mexico ! HO ! Ho ! Ho !",
              "Pour la bordée ils seront à flot !",
              "Haul away ! hé oula tchalez !",
              "Bon pour le rack, la fille, le couteau !",
              "Hal’ matelot ! Hé ! Ho ! Hisse hé ! Ho !"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Nous_irons_a_valparaiso.mp3"
      },
      {
        "nom": "M’SIEU DE TURENNE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "M’sieu d’Turenne a dit au Poitevin",
              "Qui a grand soif et lui demande à boire",
              "M’sieu d’Turenne a dit au Poitevin",
              "Aux champs d’Alsace il pousse aussi du vin",
              "Et ce vin là pétille mieux",
              "s’il est versé par madame la gloire",
              "Et ce vin là pétille mieux",
              "Lorsqu’il s’y mêle un flot de sang joyeux"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "M’sieu d’Turenne a dit aux Provençaux",
              "Très désireux d’entendre les cigales",
              "M’sieu d’Turenne a dit aux Provençaux",
              "La poudre chante à l’heure des assauts",
              "Dans l’air en feu vous entendrez",
              "Autour de vous la musique des balles",
              "Dans l’air en feu vous entendrez",
              "Des cigalons de soleil enivrés"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "M’sieu d’Turenne a dit aux gars Bretons",
              "A qui les cloches donnent du courage",
              "M’sieur d’Turenne a dit aux gars Bretons",
              "Morbleu! Courez me prendre ces canons!",
              "Avec leur bronze l’on fera",
              "De quoi sonner par-dessus vos villages",
              "Avec leur bronze l’on fera",
              "De quoi sonner quand on vous mariera"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "M’sieu d’Turenne a dit aux gens du Roi",
              "Qui marchent fiers sous les drapeaux de France",
              "M’sieu d’Turenne a dit aux gens du Roi",
              "Levez la tête et tenez le corps droit",
              "Aux jolis yeux, sachez soldats",
              "Mousquet au poing, faire la révérence",
              "Aux jolis yeux, sachez soldats",
              "Quant aux boulets, ne les saluez pas"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/MSieu_de_turenne.mp3"
      },
      {
        "nom": "PELOT D’HENNEBONT",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Ma chère maman, je vous écris",
              "Que nous sommes entrés dans Paris,",
              "Que je sommes déjà caporal",
              "Et serions bientôt général."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "A la bataille je combattions",
              "Les ennemis de la nation,",
              "Et tous ceux qui se présentions",
              "A grands coups sabres j’les émondions."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Le roi Louis m’a s’appelé",
              "C’est « Sans Quartier » qu’il m’a nommé,",
              "Mais Sans Quartier c’est point mon nom",
              "J’lui dis j’m’appelle Pelot d’Hennebont."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Il a tiré un biau ruban",
              "Et je n’sais quoi au bout d’argent,",
              "M’a dit boutt’ça sur ton habit",
              "Et combats toujours l’ennemi."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Faut que ce soye quelqu’chose de précieux",
              "Pour que les autres m’appellent Monsieur,",
              "Et bout lou main à lou chapiau",
              "Quand ils veulent compter au Pelot."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Ma mère, si j’meurs en combattant,",
              "J’vous enverrai ce biau ruban,",
              "Et vous l’coudrez à votre fusiau",
              "En souvenir du gars Pelot."
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Dites à mon père, à mon cousin",
              "A mes amis que je vais bien,",
              "Je suis leur humble serviteur",
              "Pelot qui vous embrasse de cœur."
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Pelot_d_hennebont.mp3"
      },
      {
        "nom": "PLAINE, MA PLAINE",
        "couplets": [
          {
            "type": "couplet",
            "texte": [
              "Plaine, ma plaine, plaine ô mon immense plaine",
              "Où traîne encore le cri des loups",
              "Grande steppe blanche de chez nous"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Plaine, ma plaine, dans l’immensité des neiges",
              "Entends-tu le pas des chevaux",
              "Entends-tu le bruit des galops"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Plaine, ma plaine, entends-tu ces voix lointaines",
              "Des cavaliers vers les champs",
              "Sous le ciel chevauche en chantant"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Plaine, ma plaine, sous l’épais manteau de neige",
              "La terre renferme dans sa main",
              "La graine, récolte de demain"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Plaine, ma plaine, vas-t’en dire aux autres plaines",
              "Reviennent le soleil, les étés",
              "Pour tous ceux qui savent espérer"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Plaine, ma plaine, ô doux vent de ma plaine",
              "Tu peux gémir avec les loups",
              "L’espoir est bien plus fort que tout"
            ]
          },
          {
            "type": "couplet",
            "texte": [
              "Plaine, ma plaine, plaine ô mon immense plaine",
              "Où traîne encore le cri des loups",
              "Grande steppe blanche de chez nous"
            ]
          }
        ],
        "url": "https://asor44.fr/wp-content/uploads/2018/04/Plaine_ma_plaine.mp3"
      }
    ]
  };


  selectChant(chant: any) {
    this.selectedChant = chant;
    console.log(this.selectedChant)

  }
}
