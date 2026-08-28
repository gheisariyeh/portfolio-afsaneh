import { Component } from '@angular/core';

interface SkillGroup {
  title: string;
  icon: string;
  used?: string[];
  learning?: string[];
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skillGroups: SkillGroup[] = [
    {
      title: 'Bases de données',
      icon: '▤',
      used: ['SQL', 'MySQL', 'Indexation', 'Analyse de performances'],
    },
    {
      title: 'Outils & environnement',
      icon: '⌁',
      used: ['Git', 'GitHub', 'Docker', 'IntelliJ IDEA', 'Gradle'],
    },
    {
      title: 'Frontend — fondamentaux',
      icon: '</>',
      used: ['HTML', 'CSS', 'JavaScript'],
      learning: ['TypeScript', 'Angular'],
    },
    {
      title: 'Compétences complémentaires',
      icon: '◎',
      used: ['Python', 'Analyse de données', 'Machine Learning', 'Réseaux', 'Cybersécurité'],
    },
  ];
}
