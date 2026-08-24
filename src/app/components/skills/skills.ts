import { Component } from '@angular/core';

interface SkillGroup {
  title: string;
  used?: string[];
  learning?: string[];
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {

  skillGroups: SkillGroup[] = [
    {
      title: 'Développement Backend',
      used: ['Java'],
      learning: ['Spring Boot', 'API REST', 'JPA / Hibernate']
    },
    {
      title: 'Bases de données',
      used: ['SQL', 'MySQL', 'Indexation', 'Analyse de performances']
    },
    {
      title: 'Outils & environnement',
      used: ['Git', 'GitHub', 'Docker', 'IntelliJ IDEA', 'Gradle']
    },
    {
      title: 'Frontend — fondamentaux',
      used: ['HTML', 'CSS', 'JavaScript'],
      learning: ['TypeScript', 'Angular']
    },
    {
      title: 'Compétences complémentaires',
      used: [
        'Python',
        'Analyse de données',
        'Machine Learning',
        'Réseaux',
        'Cybersécurité'
      ]
    }
  ];
}