import { Component } from '@angular/core';

interface SkillGroup {
  title: string;
  icon: string;
  items: string[];
  wide?: boolean;
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
      items: ['SQL', 'MySQL', 'SQL Server'],
    },
    {
      title: 'Web',
      icon: '</>',
      items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular'],
    },
    {
      title: 'Outils & environnement',
      icon: '⌁',
      items: ['Git', 'GitHub', 'Docker', 'IntelliJ IDEA', 'Gradle'],
    },
    {
      title: 'Certifications',
      icon: '✓',
      items: [
        'Spring Boot 3, Spring 6 & Hibernate',
        'Java for Android',
        'Android App Components',
        'Learn HTML and CSS',
      ],
      wide: true,
    },
  ];
}
