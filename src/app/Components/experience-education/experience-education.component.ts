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
      role: 'AI Intern – Web Scraping & Sentiment Analysis',
      company: 'Clevory Training. ',
      period: 'Summer 2024',
      description: 'I completed an intensive AI bootcamp where I focused on core concepts in machine learning and natural language processing (NLP). As part of my hands-on experience, I built a review analysis platform using tools like Selenium, BeautifulSoup, Scikit-learn, and Streamlit. The platform integrates a multi-class emotion detection model capable of classifying user sentiments in real time. Additionally, I implemented techniques to extract key drivers of negative sentiment, providing actionable insights to support product improvement decisions.',
      skills: ['Python', 'Selenium', 'NLP', 'BeautifulSoup']
    }
  ];

  education = [
    {
      degree: 'Baccalaureate Degree',
      institution: 'School Technique Farhat Hached Rades',
      period: '2021',
    },
    {
      degree: 'ESPRIT - Engineering Degree',
      institution: 'The Private Higher School of Engineering and Technology Tunis',
      period: '2021 - 2026',
      highlights: ['Software Architecture Engineering']
    }
  ];

  toggleTab(tab: 'experience' | 'education') {
    this.activeTab = tab;
  }

  getSkillIcon(skill: string): string {
  const icons: { [key: string]: string } = {
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
    'Python': 'fab fa-python'
  };
  return icons[skill] || 'fas fa-code';
}

}