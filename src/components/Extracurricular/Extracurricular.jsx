import React from 'react';
import styles from './Extracurricular.module.css';

const Extracurricular = () => {
  const activities = [
    {
      org: 'BRAC University Computer Club (BUCC)',
      role: 'Executive, Creative Department',
      duration: 'Apr 2022 – Jun 2024',
      contributions: [
        'Designed promotional posters and visual content for club events',
        'Maintained brand consistency across all design assets',
        'Collaborated with event coordinators on theme translation'
      ]
    },
    {
      org: 'BRAC University Entrepreneurship Development Forum (BUEDF)',
      role: 'Assistant Director, Research & Publication',
      duration: 'Apr 2022 – Jun 2024',
      contributions: [
        'Wrote social media campaigns and messaging for Facebook posts',
        'Conducted recruitment interviews for department members',
        'Semi-finalist in internal business competition'
      ]
    },
    {
      org: 'Freelance Digital Marketing & Video Editing',
      role: 'Independent Contractor',
      duration: 'Ongoing',
      contributions: [
        'Managed Facebook ad campaigns for client pages',
        'Created and edited promotional videos using CapCut',
        'Optimized reach, engagement, and conversion metrics'
      ]
    }
  ];

  return (
    <section className={styles.section} id="extracurricular">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.prompt}>$</span> cat ~/extracurricular.log
        </h2>
        
        <div className={styles.timeline}>
          {activities.map((activity, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineMarker}>
                <span className={styles.markerDot}></span>
                <span className={styles.markerLine}></span>
              </div>
              
              <div className={styles.timelineContent}>
                <div className={styles.contentHeader}>
                  <h3 className={styles.orgName}>{activity.org}</h3>
                  <span className={styles.duration}>{activity.duration}</span>
                </div>
                
                <p className={styles.role}>{activity.role}</p>
                
                <ul className={styles.contributions}>
                  {activity.contributions.map((item, idx) => (
                    <li key={idx}>
                      <span className={styles.prompt}>→</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.portfolioLink}>
          <span className={styles.prompt}>$</span>
          <span>open portfolio_assets --external</span>
          <a 
            href="https://drive.google.com/drive/folders/1wEfoD27ksBAdccoeu_xSLoR3cbf-i2Gh?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            View Work Samples →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;