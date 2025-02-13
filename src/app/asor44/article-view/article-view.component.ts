import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ArticleService} from "../services/article.service";

@Component({
    selector: 'app-article-view',
    templateUrl: './article-view.component.html',
    styleUrls: ['./article-view.component.scss'],
    standalone: false
})
export class ArticleViewComponent implements OnInit {
  name: string = '';
  articleTitle: string = "Titre de l'article";

  articleService = inject(ArticleService);

  texts = [
    {
      content: "Voici le premier paragraphe de l'article.",
      images: [
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/400"
      ]
    },
    {
      content: "Deuxième section avec du texte et une image.",
      images: [
        "https://via.placeholder.com/500"
      ]
    },
    {
      content: "Dernière section, uniquement du texte sans image.",
      images: []
    }
  ];

  images = [
    "https://via.placeholder.com/600",
    "https://www.youtube.com/embed/dQw4w9WgXcQ" // Exemple de vidéo YouTube
  ];
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(async params => {
      if (!params['name']) {
        await this.router.navigate(['/home']);
      }
      this.name = params['name'];

      const requestGetArticle = await this.articleService.getArticle(this.name);
      if(requestGetArticle.status === 200){
        this.articleTitle = requestGetArticle.data.title;
        this.texts = requestGetArticle.data.texts;
        this.images = requestGetArticle.data.images;
      }
    });
  }
}
