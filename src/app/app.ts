import { Component } from '@angular/core';

import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { Journey } from './components/journey/journey';
import { Education } from './components/education/education';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',

  imports: [
  Navbar,
  Hero,
  About,
  Projects,
  Skills,
  Journey,
  Education,
  Contact,
  Footer
],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}