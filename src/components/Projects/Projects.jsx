import React from 'react';
import styles from './Projects.module.css';

const Projects = ({ onViewAnalytics }) => {
  const projects = [
    {
      name: 'Full-Stack E-Commerce & Inventory System',
      description: 'Production-style e-commerce platform with JWT auth, role-based access, inventory management, guest checkout, and admin dashboard. Built with FastAPI, PostgreSQL, and React 19. Includes atomic order transactions, signed Cloudinary uploads, and 23 automated tests running in CI.',
      tech: ['React 19', 'FastAPI', 'PostgreSQL', 'Docker', 'Tailwind'],
      link: 'https://github.com/safayetsawom/ecommerce-fullstack'
    },
    {
      name: 'Robust EV Charging Demand Prediction (Federated Learning)',
      description: 'Research prototype comparing centralized and federated learning (FedAvg) for next-hour EV charging demand prediction across 3 simulated stations. Tests resilience to communication failures where stations drop out of training rounds. Key finding: FedAvg lagged centralized training on non-IID data, and disconnected stations saw rising error rates.',
      tech: ['Python', 'PyTorch', 'Federated Learning', 'MLP', 'Simulation'],
      link: 'https://github.com/safayetsawom/robust-ev-federated-learning'
    },
    {
      name: 'OrangeHRM Automation Suite',
      description: 'Python + Selenium + pytest POM framework for end-to-end HR workflow testing. 7 automated test cases with reusable page objects, test plan, RTM and Jira-style bug reports.',
      tech: ['Python', 'Selenium', 'pytest', 'GitHub Actions'],
      link: 'https://github.com/safayetsawom/orangehrm-automation'
    },
    {
      name: 'Scrapy Login Scraper',
      description: 'Authenticated web scraper with automatic CSRF token handling and session management. Custom pipeline cleans, deduplicates and exports 100+ records to SQLite and JSON simultaneously.',
      tech: ['Python', 'Scrapy', 'SQLite', 'JSON'],
      link: 'https://github.com/safayetsawom/scrapy_login_scraper'
    },
    {
      name: 'Expense Tracker',
      description: 'Full-stack expense tracking app with user auth, custom income/expense categories, monthly dashboard and CSV export. Built with PHP, MySQL and Chart.js.',
      tech: ['PHP', 'MySQL', 'Chart.js', 'Bootstrap'],
      link: 'https://github.com/safayetsawom/expense-tracker'
    },
    {
      name: 'BD Government Job Scraper',
      description: 'Web scraper that collects and structures government job listings from Bangladeshi portals. Exports clean, queryable data for job seekers.',
      tech: ['Python', 'Scrapy', 'BeautifulSoup'],
      link: 'https://github.com/safayetsawom/bdjobs'
    },
    {
      name: 'Guru99 Bank — Manual Testing',
      description: 'Designed and executed 26 manual test cases across Login, New Customer and Fund Transfer modules. Identified 4 bugs including 2 major defects. Produced full QA docs: test cases, bug report, test summary.',
      tech: ['Excel', 'Jira', 'Chrome DevTools'],
      link: 'https://1drv.ms/x/c/e15dce6c8eb698b0/IQB-rdLxlM9oS60debs7-JkkAbRsi-IoFLI_Vqb_lzmdKHo'
    }
  ];

  return (
    <section className={styles.section} id="projects">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.prompt}>$</span> ls -la ~/projects/
        </h2>
        
        <div className={styles.projectsList}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectIndex}>
                [{String(index).padStart(2, '0')}]
              </div>
              
              <div className={styles.projectContent}>
                <h3 className={styles.projectName}>
                  <span className={styles.prompt}>$</span> {project.name}
                </h3>
                
                <p className={styles.projectDesc}>{project.description}</p>
                
                <div className={styles.techStack}>
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className={styles.techChip}>{tech}</span>
                  ))}
                </div>
                
                <div className={styles.projectFooter}>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.repoLink}
                  >
                    <span className={styles.prompt}>▶</span> {project.link.replace('https://', '').replace('http://', '')}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.analyticsNav}>
          <span className={styles.prompt}>$</span>
          <span className={styles.noteText}>View Data Analytics Projects →</span>
          <button onClick={onViewAnalytics} className={styles.analyticsLink}>
            <span className={styles.prompt}>▶</span> /projects/data-analytics
          </button>
        </div>
        
        <div className={styles.note}>
          <span className={styles.prompt}>$</span> 
          <span className={styles.noteText}>more projects available on GitHub</span>
          <a 
            href="https://github.com/safayetsawom" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.link}
          >
            github.com/safayetsawom
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;