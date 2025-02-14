import { Component } from '@angular/core';
import { AppModule } from 'src/app/app.module';

@Component({
    selector: 'app-dossiercandidature',
    templateUrl: './dossiercandidature.component.html',
    styleUrls: ['./dossiercandidature.component.scss'],
    imports: [AppModule]
})
export class dossiercandidatureComponent {
  currentVideoIndex = 0;
  videos = [
    'https://www.youtube.com/embed/rjuRMyaCAeA?rel=0&si=n8f1pA715x23Mzu_&start=198',
    'https://www.youtube.com/embed/DBJCc3JH2nk?rel=0&si=bWhW96-k2-pYZjYS',
    'https://www.youtube.com/embed/5HBJuq3WlLk?rel=0&si=1npJsd-tn51LWzTM',
    'https://www.youtube.com/embed/dIcGYEL3UKI?rel=0&si=9s5EjmTliYvjfVNM',
    'https://www.youtube.com/embed/ZigMBB0PyTM?rel=0&si=D1gm_TcispJjN_2T',
    'https://www.youtube.com/embed/mY02_2dUtRQ?rel=0&si=w5ELtObGRDeUHPCj'
  ];

  showPrevVideo() {
    if (this.currentVideoIndex > 0) {
      this.currentVideoIndex--;
    }
  }

  showNextVideo() {
    if (this.currentVideoIndex < this.videos.length - 1) {
      this.currentVideoIndex++;
    }
  }
}
