import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Python', 'PHP', 'JavaScript', 'C++', 'SQL', 'HTML', 'CSS']
    },
    {
      category: 'Testing & QA',
      skills: [
        'Manual Testing', 
        'Regression', 
        'Boundary Value Analysis', 
        'Exploratory Testing', 
        'API Testing', 
        'Postman', 
        'REST APIs', 
        'pytest', 
        'Page Object Model',
        'Django REST Framework',
        'Test Reporting'
      ]
    },
    {
      category: 'Automation',
      skills: ['n8n Workflow Automation']
    },
    {
      category: 'Dev Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Chrome DevTools', 'Jira', 'Test Case Management', 'draw.io']
    },
    {
      category: 'Data & Analytics',
      skills: ['pandas', 'MySQL', 'NoSQL', 'Web Scraping', 'Scrapy', 'Selenium']
    },
    {
      category: 'QA Documentation',
      skills: ['Technical Writing', 'Test Plans', 'Test Summary Reports']
    },
    {
      category: 'Methodologies',
      skills: ['Agile/Scrum', 'SDLC', 'V-Model', 'Waterfall']
    }
  ];

  return (
    <section className={styles.section} id="skills">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.prompt}>$</span> ls -la /usr/local/bin/skills/
        </h2>
        
        <div className={styles.skillsGrid}>
          {skillCategories.map((cat, index) => (
            <div key={index} className={styles.categoryCard}>
              <div className={styles.categoryHeader}>
                <span className={styles.bullet}>▶</span>
                <span>{cat.category}</span>
              </div>
              <div className={styles.skillChips}>
                {cat.skills.map((skill, idx) => (
                  <span key={idx} className={styles.chip}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;