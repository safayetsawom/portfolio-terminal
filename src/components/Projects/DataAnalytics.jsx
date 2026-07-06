import React, { useState } from 'react';
import styles from './DataAnalytics.module.css';

const DataAnalytics = ({ onBack }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E‑Commerce Sales Dashboard',
      description: 'Interactive Excel dashboard analyzing sales performance, customer demographics, and product trends. Built with slicers, charts, and maps.',
      image: '/ecommerce-sales-dashboard.PNG',
      github: 'https://github.com/safayetsawom/excel_dashboard',
      liveDemo: 'https://1drv.ms/x/s!AhL0yg3c1lq4iQpbe7s7-JkkAbRsi-IoFLI_Vqb_lzmdKHo',
      tech: ['Excel', 'PivotTables', 'Slicers', 'Power Query'],
      category: 'Excel Dashboard'
    },
    {
      id: 2,
      title: 'Cricket Analytics Dashboard',
      description: 'Power BI Executive Overview dashboard analyzing cricket player performance across countries and eras with interactive slicers and KPI cards.',
      image: '/cricket-analytics.PNG',
      github: 'https://github.com/safayetsawom/end-to-end-cricket-analytics',
      liveDemo: null,
      tech: ['Power BI', 'Python', 'Pandas', 'DAX', 'Data'],
      category: 'Power BI'
    },
    {
      id: 3,
      title: 'Customer Behavior Dashboard',
      description: 'Power BI dashboard analyzing customer shopping behavior across categories. Answers real business questions around revenue and segmentation.',
      image: '/customer-behavior-dashboard.PNG',
      github: 'https://github.com/safayetsawom/customer-shopping-analysis',
      liveDemo: null,
      tech: ['Power BI', 'Python', 'PostgreSQL', 'SQL'],
      category: 'Power BI'
    }
  ];

  return (
    <div className={styles.pageContainer}>
      {/* Terminal Header */}
      <div className={styles.terminalHeader}>
        <div className={styles.terminalDots}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
        <span className={styles.terminalTitle}>safayet@portfolio:~/projects/data-analytics</span>
      </div>

      {/* Back Button */}
      <button onClick={onBack} className={styles.backButton}>
        <span className={styles.prompt}>$</span> cd ../home
      </button>

      {/* Page Title */}
      <div className={styles.pageTitle}>
        <span className={styles.prompt}>$</span> ls -la ~/projects/data-analytics/
      </div>
      <p className={styles.pageSubtitle}>📊 Data Analytics & Dashboard Projects</p>

      {/* Project Grid */}
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.cardImage}>
              <img 
                src={project.image} 
                alt={project.title}
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"%3E%3Crect fill="%231a1a2e" width="400" height="200"/%3E%3Ctext x="80" y="100" fill="%2300ffcc" font-size="16" font-family="monospace"%3E📊 Dashboard%3C/text%3E%3C/svg%3E';
                }}
              />
              <div className={styles.cardOverlay}>
                <button 
                  className={styles.viewBtn}
                  onClick={() => setSelectedProject(project)}
                >
                  <span className={styles.prompt}>$</span> view details
                </button>
              </div>
              <span className={styles.categoryBadge}>{project.category}</span>
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.projectTitle}>
                <span className={styles.prompt}>$</span> {project.title}
              </h3>
              <p className={styles.projectDesc}>{project.description}</p>

              <div className={styles.techStack}>
                {project.tech.map((tech, idx) => (
                  <span key={idx} className={styles.techChip}>{tech}</span>
                ))}
              </div>

              <div className={styles.cardFooter}>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.githubLink}
                >
                  <span className={styles.prompt}>▶</span> GitHub
                </a>
                {project.liveDemo && (
                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.demoLink}
                  >
                    🌐 Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className={styles.stats}>
        <span className={styles.prompt}>$</span>
        <span>Total Projects: {projects.length}</span>
        <span className={styles.statsSeparator}>|</span>
        <span>Tools: Excel, Power BI, Python, SQL</span>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className={styles.modal} onClick={() => setSelectedProject(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setSelectedProject(null)}>✕</button>
            <div className={styles.modalImage}>
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>
            <h2 className={styles.modalTitle}>
              <span className={styles.prompt}>$</span> {selectedProject.title}
            </h2>
            <p className={styles.modalDesc}>{selectedProject.description}</p>
            <div className={styles.modalTech}>
              <span className={styles.modalLabel}>Tech Stack:</span>
              {selectedProject.tech.map((tech, idx) => (
                <span key={idx} className={styles.modalChip}>{tech}</span>
              ))}
            </div>
            <div className={styles.modalLinks}>
              <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                <span className={styles.prompt}>▶</span> View on GitHub
              </a>
              {selectedProject.liveDemo && (
                <a href={selectedProject.liveDemo} target="_blank" rel="noopener noreferrer">
                  🌐 Live Dashboard
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataAnalytics;