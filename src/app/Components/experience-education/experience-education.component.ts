import { Component } from '@angular/core';
import { 
  trigger,
  stagger,
  query,
  style,
  animate,
  transition,
  sequence
} from '@angular/animations';

@Component({
  selector: 'app-experience-education',
  templateUrl: './experience-education.component.html',
  styleUrls: ['./experience-education.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.6s ease-out', 
          style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', 
            style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('itemFade', [
      transition(':enter', [
        sequence([
          style({ opacity: 0, transform: 'translateX(-20px)' }),
          animate('0.4s ease-out', 
            style({ opacity: 1, transform: 'translateX(0)' }))
        ])
      ])
    ])
  ]
})
export class ExperienceEducationComponent {
  activeTab: 'experience' | 'education' = 'experience';
  
  experiences = [

{
    role: 'Final Year Internship (PFE) – ERP Migration (Odoo 12 to 18)',
    company: 'Exploit Consult',
    period: 'January – July 2026',
    location: 'Tunis, Tunisia',
    description: 'Progressive migration of an Odoo ERP from version 12 to version 18.',
    skills: ['Odoo', 'Python', 'PostgreSQL', 'XML/JS', 'OpenUpgrade', 'Power BI', 'SonarQube', 'Docker', 'Git', 'Linux']
  },

  {
    role: 'Engineering Intern – Microservices Application Development',
    company: 'ESPRIT – Private Higher School of Engineering and Technology',
    period: 'July – August 2025',
    location: 'Tunis, Tunisia',
    description: 'Development of an exam monitoring management application based on a microservices architecture using Spring Boot, Eureka, Spring Cloud Gateway, Docker, and GitHub.',
    skills: ['Java', 'Spring Boot', 'Microservices', 'Eureka', 'Spring Cloud Gateway', 'Docker', 'GitHub']
  },
  {
    role: 'Immersion Internship – Mobile Quiz Development',
    company: 'Edutest',
    period: 'June 2024',
    location: 'Tunisia',
    description: 'Development of a mobile quiz application using React Native, Node.js, and MongoDB.',
    skills: ['React Native', 'JavaScript', 'Node.js', 'MongoDB']
  },
  {
    role: 'Final Year Internship – QoS Website Development',
    company: 'ISET’Com – Higher Institute of Communication Studies',
    period: '2023',
    location: 'Tunisia',
    description: 'Development of a website for measuring and analyzing QoS performance in telecommunication networks.',
    skills: ['Web Development', 'QoS', 'Networking']
  },
  {
    role: 'Technical Internship – Deployment and Maintenance',
    company: 'ISET’Com',
    period: '2022',
    location: 'Tunisia',
    description: 'Deployment and maintenance of GSM and fiber optic infrastructures.',
    skills: ['GSM', 'Fiber Optics', 'Network Maintenance']
  },
  {
    role: 'Introductory Internship – GSM and Fiber Discovery',
    company: 'ISET’Com',
    period: '2021',
    location: 'Tunisia',
    description: 'Introduction to GSM and fiber optic network technologies.',
    skills: ['GSM', 'Fiber Optics']
  }
];
education = [
  {
    degree: 'Engineering Degree in Software Engineering',
    institution: 'Private Higher School of Engineering and Technology Tunis',
    period: '2023 - 2026',
    highlights: ['Software Architecture Engineering'],
    skills: ['Software Architecture Engineering', 'Spring Boot', 'Docker']
  },
  {
    degree: 'Applied Bachelor’s Degree in Network Security',
    institution: 'ISET’Com – Higher Institute of Communication Studies',
    period: '09/2020 – 06/2023',
    highlights: ['Network Security'],
    skills: ['Network Security', 'Data Protection', 'Networking Protocols']
  },
  {
    degree: 'Baccalaureate Degree',
    institution: 'Sers High School, Le Kef, Tunisia',
    period: '2020',
    highlights: [],
    skills: []
  }
];

  toggleTab(tab: 'experience' | 'education') {
    this.activeTab = tab;
  }

  getSkillIcon(skill: string): string {
  const icons: { [key: string]: string } = {
    // Existant
    'Angular': 'fab fa-angular',
    'React': 'fab fa-react',
    'TypeScript': 'fas fa-code',
    'JavaScript': 'fab fa-js',
    'RxJS': 'fas fa-stream',
    'NgRx': 'fas fa-database',
    'CSS3': 'fab fa-css3-alt',
    'HTML5': 'fab fa-html5',
    'Selenium': 'fas fa-robot',
    'BeautifulSoup': 'fas fa-seedling',
    'NLP': 'fas fa-language',
    'Python': 'fab fa-python',

    // Expériences : développement
    'Spring Boot': 'fas fa-leaf',
    'Eureka': 'fas fa-server',
    'Spring Cloud Gateway': 'fas fa-door-open',
    'Docker': 'fab fa-docker',
    'GitHub': 'fab fa-github',
    'React Native': 'fab fa-react',
    'Node.js': 'fab fa-node-js',
    'MongoDB': 'fas fa-database',
    'Web Development': 'fas fa-globe',

    // Expériences : réseaux et télécoms
    'QoS': 'fas fa-tachometer-alt',
    'Networking': 'fas fa-network-wired',
    'GSM': 'fas fa-signal',
    'Fiber Optics': 'fas fa-satellite-dish',
    'Network Maintenance': 'fas fa-tools',

    // Formation
    'Network Security': 'fas fa-shield-alt',
    'Data Protection': 'fas fa-lock',
    'Networking Protocols': 'fas fa-project-diagram',
    'Software Architecture Engineering': 'fas fa-sitemap',

    // Utiles pour tes candidatures (à afficher une fois pratiquées)
    'Java': 'fab fa-java',
    'Kafka': 'fas fa-exchange-alt',
    'Kubernetes': 'fas fa-dharmachakra',
    'Jenkins': 'fab fa-jenkins',
    'Git': 'fab fa-git-alt',
    'Linux': 'fab fa-linux',
    'JUnit': 'fas fa-vial'
  };
  return icons[skill] || 'fas fa-code';
}

}