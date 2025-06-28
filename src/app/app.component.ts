import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project-FrontEnd';
}
