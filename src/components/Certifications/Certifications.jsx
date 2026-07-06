import React, { useState } from 'react';
import styles from './Certifications.module.css';

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);

  const primaryCerts = [
    {
      name: 'Excel Fundamentals',
      issuer: 'DataCamp',
      link: 'https://www.datacamp.com/completed/statement-of-accomplishment/track/11493ab2c84f2e0b4d110e81bd19e4d5fa48f68a'
    },
    {
      name: 'Intermediate SQL',
      issuer: 'DataCamp',
      link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/e2803ee14096fd1e2c76b2935c30c79303d26b21'
    },
    {
      name: 'API Testing Learning Path',
      issuer: 'Postman',
      link: 'https://verify.skilljar.com/c/ggxm55ty5jfr'
    },
    {
      name: 'IEEE BECITHCON 2025 Paper Presentation',
      issuer: 'IEEE',
      link: 'https://drive.google.com/file/d/1XqexFqgI3RKNs4GMtRU5ahQG_9BO9YQC/view?usp=sharing'
    },
    {
      name: 'Financial Modeling in Excel',
      issuer: 'DataCamp',
      link: 'https://www.datacamp.com/courses/financial-modeling-in-excel'
    },
    {
      name: 'Introduction to Power BI',
      issuer: 'DataCamp',
      link: 'https://www.datacamp.com/courses/introduction-to-power-bi'
    }
  ];

  const secondaryCerts = [
    {
      name: 'Introduction to Workflow Automation with n8n',
      issuer: 'DataCamp',
      link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/0f305c6335d10042657725e18c9f5b835a755b2d'
    },
    {
      name: 'Web Scraping in Python',
      issuer: 'DataCamp',
      link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/ffc359e962b53d7c9fb71f46730f593030ae1b62'
    },
    {
      name: 'Google Analytics',
      issuer: 'Skillshop',
      link: 'https://skillshop.credential.net/e9c278ec-49e0-40b9-96cc-276fd42b2bb6'
    },

    {
      name: 'Joining Data in SQL',
      issuer: 'DataCamp',
      link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/2d265e1fd0360b4bb2d16b9e6d19bce46358eba3'
    }
  ];

  const displayCerts = showAll ? [...primaryCerts, ...secondaryCerts] : primaryCerts;

  return (
    <section className={styles.section} id="certifications">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.prompt}>$</span> cat ~/certifications.json | jq '.'
        </h2>
        
        <div className={styles.certsGrid}>
          {displayCerts.map((cert, index) => (
            <a 
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.certCard}
            >
              <div className={styles.certHeader}>
                <span className={styles.bullet}>📜</span>
                <span className={styles.certIndex}>[{String(index).padStart(2, '0')}]</span>
              </div>
              
              <h3 className={styles.certName}>{cert.name}</h3>
              
              <div className={styles.certFooter}>
                <span className={styles.issuer}>{cert.issuer}</span>
                <span className={styles.verify}>verify →</span>
              </div>
            </a>
          ))}
        </div>
        
        <div className={styles.buttonContainer}>
          <button 
            className={styles.toggleButton}
            onClick={() => setShowAll(!showAll)}
          >
            <span className={styles.prompt}>$</span>
            {showAll ? ' collapse --certifications' : ' expand --all-certifications'}
          </button>
          
          <div className={styles.certStats}>
            <span className={styles.prompt}>$</span>
            <span className={styles.statsText}>
              Showing {displayCerts.length} of {primaryCerts.length + secondaryCerts.length} certifications
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;