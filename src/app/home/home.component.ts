import { Component } from '@angular/core';

import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  capabilities = [
    {
      "title": "Artificial Intelligence & Machine Learning",
      "description": "Expertise in developing and implementing AI and machine learning algorithms to solve complex problems, enhance decision-making, and innovate product development."
    },
    {
      "title": "DevOps & Cloud Solutions",
      "description": "Advanced proficiency in deploying DevOps methodologies to streamline development, enhance collaboration, and improve deployment cycles across AWS and Google Cloud platforms."
    },
    {
      "title": "Full-Stack Software Engineering",
      "description": "Proficient in full-stack software development, encompassing both front-end and back-end technologies. Expertise in designing, coding, testing, and deploying applications across various platforms, utilizing modern programming languages and frameworks to create scalable, efficient, and robust software solutions."
    },
    {
      "title": "Application Modernization",
      "description": "Skilled in modernizing applications to be cloud-native, enhancing scalability, reliability, and performance."
    },
    {
      "title": "Electrical Engineering & 3D Printing",
      "description": "Solid foundation in electrical engineering principles, combined with practical experience in 3D printing technologies, enabling innovative hardware solutions."
    },
    {
      "title": "Business Development & Customer Success",
      "description": "Proven track record in driving business growth, developing strategic partnerships, and leading customer success initiatives to maximize client satisfaction and retention."
    },
    {
      "title": "Project Management & Scrum Master",
      "description": "Certified Scrum Master with extensive experience in project management, adept at leading cross-functional teams to deliver projects on time and within budget."
    },
    {
      "title": "Physical Security",
      "description": "Comprehensive understanding and implementation of advanced physical security measures and technologies to protect organizational assets, including access control systems, surveillance, and emergency response strategies."
    },
    {
      "title": "Operations Management",
      "description": "Demonstrated excellence in operations management, optimizing processes for efficiency, quality, and scalability. Expertise in supply chain management, logistics, production planning, and continuous improvement methodologies."
    }
  ];
}
