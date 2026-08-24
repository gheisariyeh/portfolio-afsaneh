import { Component } from '@angular/core';

interface Project {
  number: string;
  title: string;
  type: string;
  description: string;
  technologies: string[];
  highlight: string;
  status?: string;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

  projects: Project[] = [
    {
      number: '01',
      title: 'CimeBook',
      type: 'Projet personnel · En cours',
      description:
        'Une plateforme dédiée à la réservation d’activités de montagne et de lac autour d’Annecy, pensée pour évoluer progressivement vers une application full stack.',
      technologies: ['Java', 'Spring Boot', 'REST API', 'SQL'],
      highlight:
        'Concevoir progressivement une architecture backend claire et évolutive.',
      status: 'En cours'
    },
    {
      number: '02',
      title: 'SIRENE · Passage à l’échelle',
      type: 'Projet de formation',
      description:
        'Travail sur un jeu de données volumineux afin d’analyser les performances des requêtes et l’impact des choix d’indexation.',
      technologies: ['Java', 'SQL', 'MySQL', 'Docker'],
      highlight:
        'Comprendre comment la structure des données et les index influencent les performances.'
    },
    {
      number: '03',
      title: 'HosTaGe · BACnet',
      type: 'Projet de recherche',
      description:
        'Intégration et simulation du protocole BACnet dans une application existante, avec analyse des communications réseau et exploitation de données.',
      technologies: ['Java', 'Android', 'BACnet', 'Wireshark'],
      highlight:
        'Travailler sur une base de code existante et intégrer un protocole réseau complexe.'
    }
  ];
}