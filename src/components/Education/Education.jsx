import React from 'react';
import styles from './Education.module.css';

const Education = () => {
  return (
    <section className={styles.section} id="education">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.prompt}>$</span> system_info --education
        </h2>
        
        <div className={styles.educationCard}>
          <div className={styles.cardHeader}>
            <span className={styles.bracket}>┌─[</span>
            <span>BRAC University</span>
            <span className={styles.bracket}>]</span>
          </div>
          
          <div className={styles.cardBody}>
            <div className={styles.infoRow}>
              <span className={styles.label}>Degree</span>
              <span className={styles.value}>Bachelor of Science in Computer Science and Engineering</span>
            </div>
            
            <div className={styles.infoRow}>
              <span className={styles.label}>Aggregate</span>
              <span className={styles.highlight}>79%</span>
              <span className={styles.muted}>(CGPA Equivalent: 3.26/4.00)</span>
            </div>
            
            <div className={styles.infoRow}>
              <span className={styles.label}>Graduation</span>
              <span className={styles.highlight}>2026 (Completed)</span>
            </div>
            
            <div className={styles.progressBar}>
              <div className={styles.progressFill} style={{ width: '100%' }}>
                <span className={styles.progressText}>100% Complete</span>
              </div>
            </div>
          </div>
          
          <div className={styles.cardFooter}>
            <span className={styles.prompt}>$</span> 
            <span className={styles.status}>status: graduated ✓</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;