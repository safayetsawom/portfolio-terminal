import React from 'react';
import styles from './SoftSkills.module.css';

const SoftSkills = () => {
  const softSkills = [
    {
      icon: '🔍',
      title: 'Attention to Detail',
      description: 'I catch what others miss — whether it\'s a broken edge case, an off-by-one error, or an inconsistency in documentation. Precision is built into how I work.'
    },
    {
      icon: '🧠',
      title: 'Analytical Thinking',
      description: 'I break complex problems into structured parts before acting. From mapping test coverage to designing project phases, I think in systems, not just steps.'
    },
    {
      icon: '💬',
      title: 'Clear Communication',
      description: 'I translate technical work into readable outputs — structured bug reports, test plans, and documentation that teammates and non-technical stakeholders can follow.'
    },
    {
      icon: '📚',
      title: 'Self-Directed Learning',
      description: 'I pick up new tools and skills independently and apply them in real projects quickly — from Selenium and Django to API testing and IELTS prep, all self-driven.'
    },
    {
      icon: '🔄',
      title: 'Adaptability',
      description: 'I move comfortably across roles and domains — testing, backend development, automation, research — and adjust quickly to new environments and requirements.'
    },
    {
      icon: '📐',
      title: 'Structured Problem Solving',
      description: 'I approach challenges with a plan — breaking work into phases, validating at each step, and iterating deliberately rather than jumping straight to solutions.'
    }
  ];

  return (
    <section className={styles.section} id="softskills">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.prompt}>$</span> cat ~/soft_skills.json | jq '.'
        </h2>
        
        <div className={styles.skillsGrid}>
          {softSkills.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.cardHeader}>
                <span className={styles.skillIcon}>{skill.icon}</span>
                <span className={styles.skillIndex}>[{String(index).padStart(2, '0')}]</span>
              </div>
              
              <h3 className={styles.skillTitle}>
                <span className={styles.prompt}>$</span> {skill.title}
              </h3>
              
              <p className={styles.skillDescription}>{skill.description}</p>
              
              <div className={styles.cardFooter}>
                <span className={styles.tag}>soft_skill</span>
                <span className={styles.tag}>verified</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.summary}>
          <span className={styles.prompt}>$</span> 
          <span className={styles.summaryText}>echo "Technical excellence meets human connection — I build, test, and communicate with equal precision."</span>
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;