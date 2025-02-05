import {Component, inject} from '@angular/core';
import {ArticleService} from "../services/article.service";


@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.scss']
})
export class ArticleCreationComponent {
  articleTitle: string = "";
  mediaUrl: string = '';
  videoUrl: string = '';
  images: string[] = [];
  texts: { content: string, images: string[] }[] = [{ content: 'Premier texte de l\'article', images: [] }];
  articleService = inject(ArticleService);

  addTextBlock() {
    this.texts.push({ content: '', images: [] });
  }

  addMedia(type: string, index: number | null = null) {
    if (type === 'image' && this.mediaUrl) {
      if (index !== null) {
        this.texts[index].images.push(this.mediaUrl);
      } else {
        this.images.push(this.mediaUrl);
      }
      this.mediaUrl = '';
    } else if (type === 'video' && this.videoUrl) {
      if (index === null) {
        this.images.push(this.videoUrl);
      }
      this.videoUrl = '';
    }
  }

  onFileSelected(event: any, index: number | null) {
    const files = event.target.files;
    if (files) {
      for (let file of files) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          if (index !== null) {
            this.texts[index].images.push(e.target.result);
          } else {
            this.images.push(e.target.result);
          }
        };
        reader.readAsDataURL(file);
      }
    }
  }

  getArticlePreview(): string {
    let articleContent = this.texts.map((block: { content: string, images: string[] }) =>
      `<div class="mb-4">
        <p class="break-words">${block.content}</p>
        ${block.images.map(img =>
        img.includes('data:image') || img.includes('http') ?
          `<img src="${img}" class="mt-4 max-w-full h-auto block">` :
          '').join('')}
      </div>`
    ).join('');

    this.images.forEach(img => {
      if (img.includes('http') && img.includes('youtube.com')) {
        articleContent += `<div class="mt-4"><iframe width="560" height="315" src="${img}" frameborder="0" allowfullscreen></iframe></div>`;
      }
    });

    return `<div class="max-w-full overflow-x-auto indent-4 mb-5">${articleContent}</div>`;
  }

  removeImage(index: number, textIndex: number | null) {
    if (textIndex !== null) {
      this.texts[textIndex].images.splice(index, 1);
    } else {
      this.images.splice(index, 1);
    }
  }

  removeTextBlock(i: number) {
    this.texts.splice(i, 1);
  }

  async createArticle() {
    const request = await this.articleService.createArticle({
      title: this.articleTitle,
      content: this.texts,
      images: this.images
    });
    if(request.status === 201) {
      console.log('Article créé avec succès !');
    }
  }
}
