import { Component } from '@angular/core';

interface Project {
  number: string;
  title: string;
  type: string;
  description: string;
  technologies: string[];
  highlight: string;
  githubUrl: string;
  visual: 'cimebook' | 'dungeon' | 'hostage';
  status?: string;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects: Project[] = [
    {
      number: '01',
      title: 'CimeBook',
      type: 'Projet personnel · En cours',
      description:
        'Plateforme de réservation d’activités autour d’Annecy, pensée pour évoluer vers une architecture full stack Java / Spring Boot.',
      technologies: ['Java', 'Spring Boot'],
      highlight:
        'Faire évoluer progressivement le projet vers une architecture full stack Java / Spring Boot.',
      githubUrl: 'https://github.com/gheisariyeh/cimebook',
      visual: 'cimebook',
      status: 'En cours',
    },
    {
      number: '02',
      title: 'Dungeon Crawler Java',
      type: 'Projet Java · Formation',
      description:
        'Application console Java pour pratiquer la programmation orientée objet, l’héritage, le polymorphisme et la structuration des classes.',
      technologies: ['Java', 'POO', 'Héritage', 'Polymorphisme'],
      highlight:
        'Mettre en pratique la POO, l’héritage, le polymorphisme et la structuration des classes.',
      githubUrl: 'https://github.com/gheisariyeh/dungeon-crawler-java',
      visual: 'dungeon',
    },
    {
      number: '03',
      title: 'HosTaGe · BACnet',
      type: 'Projet académique · Recherche',
      description:
        'Intégration du protocole BACnet dans un honeypot Android Java et analyse des communications réseau.',
      technologies: ['Java', 'Android', 'BACnet'],
      highlight:
        'Intégrer le protocole BACnet dans une application Android Java et analyser les communications réseau.',
      githubUrl: 'https://github.com/gheisariyeh/HosTaGe',
      visual: 'hostage',
    },
  ];
}
