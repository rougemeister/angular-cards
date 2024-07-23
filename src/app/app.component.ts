import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ECommerceComponent } from "./components/e-commerce/e-commerce.component";
import { NewsArticleComponent } from "./components/news-article/news-article.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ECommerceComponent, NewsArticleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-cards';
}
