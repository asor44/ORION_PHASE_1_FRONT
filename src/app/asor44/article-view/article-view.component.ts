import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class ArticleViewComponent implements OnInit {
  name: string = '';
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(async params => {
      if (!params['name']) {
        await this.router.navigate(['/home']);
      }
      this.name = params['name'];

      //faire le service pour pouvoir récupérer l'article avec le this.name
    });
  }
}
