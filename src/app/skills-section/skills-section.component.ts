import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss']
})
export class SkillsSectionComponent {
  readonly baseUrl = '../../assets/img/skills';

 skillList = [
  {
    nameOfSkill: 'JavaScript',
    logo: `${this.baseUrl}/javascript.png`
  },
  {
    nameOfSkill: 'Angular',
    logo: `${this.baseUrl}/angular.png`
  },
  {
    nameOfSkill: 'HTML / CSS',
    logo: `${this.baseUrl}/html.png`
  },
  {
    nameOfSkill: 'SCRUM',
    logo: `${this.baseUrl}/scrum.png`
  },
  {
    nameOfSkill: 'Git',
    logo: `${this.baseUrl}/git.png`
  },
  {
    nameOfSkill: 'Design Thinking',
    logo: `${this.baseUrl}/think.png`
  },
  {
    nameOfSkill: 'Rest API',
    logo: `${this.baseUrl}/api.png`
  },
  {
    nameOfSkill: 'Test automation',
    logo: `${this.baseUrl}/test.png`
  },
  {
    nameOfSkill: 'Databases',
    logo: `${this.baseUrl}/db.png`
  }
 ]
}
