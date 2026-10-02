import { Component } from '@angular/core';

interface Project {
  number: string;
  title: string;
  type: string;
  description: string;
  technologies: string[];
  highlight: string;
  githubUrl: string;
  visual: 'square-games' | 'cimebook' | 'hostage';
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
      title: 'Square Games API & Users API',
      type: 'Java / Spring Boot',
      description:
        'Développement de deux API REST pour la gestion de jeux et d’utilisateurs avec Spring Boot.',
      technologies: ['Java', 'Spring Boot', 'API REST', 'JDBC / JPA', 'MySQL', 'Docker', 'Postman'],
      highlight:
        'Mise en place d’une architecture en couches, de la persistance avec JDBC/JPA, d’un environnement Docker et de tests d’API avec Postman.',
      githubUrl: 'https://github.com/gheisariyeh/square-games-api',
      visual: 'square-games',
    },
    {
      number: '02',
      title: 'CimeBook',
      type: 'Projet personnel · En cours',
      description:
        'Conception d’une plateforme de réservation d’activités autour d’Annecy. Développement progressif du backend avec Spring Boot, JPA et H2. Conception du modèle de données et gestion des activités.',
      technologies: ['Spring Boot', 'JPA', 'H2'],
      highlight:
        'Développement progressif du backend, conception du modèle de données et gestion des activités.',
      githubUrl: 'https://github.com/gheisariyeh/cimebook',
      visual: 'cimebook',
      status: 'En cours',
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
