import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ECommerceComponent } from "./components/e-commerce/e-commerce.component";
import { NewsArticleComponent } from "./components/news-article/news-article.component";
import { EventCardComponent } from './components/event-card/event-card.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ECommerceComponent, NewsArticleComponent,EventCardComponent, ProfileCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-cards';
}
