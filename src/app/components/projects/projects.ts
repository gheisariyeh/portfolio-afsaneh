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
        'Plateforme de réservation d’activités de montagne et de lac autour d’Annecy, pensée pour évoluer progressivement vers une application full stack.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Java', 'Spring Boot'],
      highlight:
        'Faire évoluer progressivement le projet d’une interface statique vers une architecture backend Java / Spring Boot claire et structurée.',
      githubUrl: 'https://github.com/gheisariyeh/cimebook',
      visual: 'cimebook',
      status: 'En cours',
    },
    {
      number: '02',
      title: 'Dungeon Crawler Java',
      type: 'Projet Java · Formation',
      description:
        'Application console inspirée de l’univers Dungeon & Dragons, développée en Java pour mettre en pratique la programmation orientée objet.',
      technologies: ['Java', 'POO', 'UML', 'Héritage', 'Polymorphisme', 'Git'],
      highlight:
        'Modéliser les personnages, équipements, ennemis et règles du jeu tout en séparant clairement les responsabilités entre les classes.',
      githubUrl: 'https://github.com/gheisariyeh/dungeon-crawler-java',
      visual: 'dungeon',
    },
    {
      number: '03',
      title: 'HosTaGe · BACnet',
      type: 'Projet académique · Recherche',
      description:
        'Intégration et simulation du protocole BACnet dans une application Android existante, avec analyse des communications réseau en Java.',
      technologies: ['Java', 'Android', 'BACnet', 'BACnet4J', 'Wireshark', 'Réseaux'],
      highlight:
        'Comprendre une base de code existante, intégrer un protocole réseau spécifique et analyser les échanges techniques associés.',
      githubUrl: 'https://github.com/gheisariyeh/HosTaGe',
      visual: 'hostage',
    },
  ];
}
