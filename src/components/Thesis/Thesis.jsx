import React from 'react';
import styles from './Thesis.module.css';

const Thesis = () => {
  const metrics = [
    { label: 'Accuracy', value: '98.25%', icon: '📊' },
    { label: 'Parameters', value: '427K', icon: '⚡' },
    { label: 'Classes', value: '4', icon: '🔬' },
    { label: 'XAI Methods', value: '2', icon: '🧠' }
  ];

  const comparisons = [
    { model: '3C-Net (Ours)', accuracy: '98.25%', highlight: true },
    { model: 'VGG-19', accuracy: '94.12%', highlight: false },
    { model: 'ResNet-50', accuracy: '95.67%', highlight: false },
    { model: 'EfficientNet', accuracy: '96.34%', highlight: false },
    { model: 'DenseNet-121', accuracy: '96.89%', highlight: false }
  ];

  // IEEE Paper Details
  const ieeePaper = {
    title: '3C-Net: Cervical Cancer Cell Classification from Liquid-Based Cytology Pap Smear Images using Deep Learning Techniques',
    conference: '2025 IEEE International Conference on Biomedical Engineering, Computer and Information Technology for Health (BECITHCON)',
    location: 'Eastern University, Dhaka, Bangladesh',
    year: '2025',
    pages: '421-426',
    doi: '10.1109/BECITHCON69222.2025.11504298',
    link: 'https://ieeexplore.ieee.org/document/11504298',
    authors: [
      'M. S. Hossain Sawom',
      'M. A. Khan',
      'M. A. Rasheed Zaki',
      'M. N. F. Ronok',
      'D. Z. Karim'
    ],
    keywords: ['Convolutional Neural Networks (CNN)', 'Cervical Cancer', 'Deep Learning', 'Medical Imaging', 'Explainable AI', 'Performance Analysis']
  };

  return (
    <section className={styles.section} id="thesis">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.prompt}>$</span> cat ~/research/thesis.json | jq '.'
        </h2>
        
        {/* Main Thesis Card */}
        <div className={styles.thesisCard}>
          <div className={styles.cardHeader}>
            <span className={styles.bracket}>┌─[</span>
            <span>Undergraduate Thesis — BRAC University</span>
            <span className={styles.bracket}>]</span>
          </div>
          
          <div className={styles.cardBody}>
            <h3 className={styles.thesisTitle}>
              <span className={styles.prompt}>$</span> 3C-Net: Cervical Cancer Cell Classification using Deep Learning
            </h3>
            
            <p className={styles.thesisAbstract}>
              For my undergraduate thesis at BRAC University, I developed <span className={styles.highlight}>3C-Net</span> — a 
              lightweight convolutional neural network designed to automatically classify cervical cells from 
              Liquid-Based Cytology (LBC) Pap smear images into four clinical categories: 
              <span className={styles.classTag}>HSIL</span>, 
              <span className={styles.classTag}>LSIL</span>, 
              <span className={styles.classTag}>NILM</span>, and 
              <span className={styles.classTag}>SCC</span>.
            </p>
            
            {/* Metrics Grid */}
            <div className={styles.metricsGrid}>
              {metrics.map((metric, idx) => (
                <div key={idx} className={styles.metricCard}>
                  <span className={styles.metricIcon}>{metric.icon}</span>
                  <span className={styles.metricValue}>{metric.value}</span>
                  <span className={styles.metricLabel}>{metric.label}</span>
                </div>
              ))}
            </div>
            
            {/* IEEE Paper Section - NEW */}
            <div className={styles.ieeeSection}>
              <h4 className={styles.subHeading}>
                <span className={styles.prompt}>$</span> cat ~/publications/ieee.json | jq '.'
              </h4>
              
              <div className={styles.ieeeCard}>
                <div className={styles.ieeeHeader}>
                  <span className={styles.ieeeIcon}>📄</span>
                  <span className={styles.ieeeBadge}>IEEE Xplore</span>
                  <span className={styles.ieeeBadge}>Indexed</span>
                </div>
                
                <div className={styles.ieeeBody}>
                  <p className={styles.ieeeTitle}>{ieeePaper.title}</p>
                  
                  <div className={styles.ieeeAuthors}>
                    {ieeePaper.authors.map((author, idx) => (
                      <span key={idx} className={styles.ieeeAuthor}>
                        {author}{idx < ieeePaper.authors.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </div>
                  
                  <div className={styles.ieeeMeta}>
                    <span className={styles.ieeeMetaItem}>
                      <span className={styles.ieeeMetaLabel}>Conference:</span>
                      {ieeePaper.conference}
                    </span>
                    <span className={styles.ieeeMetaItem}>
                      <span className={styles.ieeeMetaLabel}>Location:</span>
                      {ieeePaper.location}
                    </span>
                    <span className={styles.ieeeMetaItem}>
                      <span className={styles.ieeeMetaLabel}>Year:</span>
                      {ieeePaper.year}
                    </span>
                    <span className={styles.ieeeMetaItem}>
                      <span className={styles.ieeeMetaLabel}>Pages:</span>
                      {ieeePaper.pages}
                    </span>
                    <span className={styles.ieeeMetaItem}>
                      <span className={styles.ieeeMetaLabel}>DOI:</span>
                      <span className={styles.ieeeDoi}>{ieeePaper.doi}</span>
                    </span>
                  </div>
                  
                  <div className={styles.ieeeKeywords}>
                    <span className={styles.ieeeKeywordLabel}>Keywords:</span>
                    {ieeePaper.keywords.map((keyword, idx) => (
                      <span key={idx} className={styles.ieeeKeyword}>{keyword}</span>
                    ))}
                  </div>
                </div>
                
                <div className={styles.ieeeFooter}>
                  <a 
                    href={ieeePaper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ieeeLink}
                  >
                    <span className={styles.prompt}>▶</span> View on IEEE Xplore
                    <span className={styles.ieeeArrow}>→</span>
                  </a>
                  <a 
                    href={ieeePaper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ieeeButton}
                  >
                    📖 Read Full Paper
                  </a>
                </div>
              </div>
            </div>
            
            {/* Model Comparison */}
            <div className={styles.comparisonSection}>
              <h4 className={styles.subHeading}>
                <span className={styles.prompt}>$</span> benchmark --compare
              </h4>
              <div className={styles.comparisonTable}>
                {comparisons.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`${styles.comparisonRow} ${item.highlight ? styles.highlightRow : ''}`}
                  >
                    <span className={styles.modelName}>
                      {item.highlight && <span className={styles.arrow}>▶</span>}
                      {item.model}
                    </span>
                    <span className={styles.modelAccuracy}>{item.accuracy}</span>
                    <div className={styles.accuracyBar}>
                      <div 
                        className={styles.accuracyFill} 
                        style={{ width: item.accuracy }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <p className={styles.comparisonNote}>
                Outperforms established architectures including VGG-19, ResNet-50, EfficientNet, and DenseNet-121 on the same dataset.
              </p>
            </div>
            
            {/* XAI Section */}
            <div className={styles.xaiSection}>
              <h4 className={styles.subHeading}>
                <span className={styles.prompt}>$</span> explainability --methods
              </h4>
              <p className={styles.xaiText}>
                To ensure clinical trustworthiness, I integrated Explainable AI techniques — 
                <span className={styles.xaiMethod}>Grad-CAM</span> and 
                <span className={styles.xaiMethod}>LIME</span> — that visually highlight 
                which regions of each cell image drove the model's decision.
              </p>
            </div>
            
            {/* Impact Statement */}
            <div className={styles.impactBox}>
              <span className={styles.impactIcon}>🎯</span>
              <p className={styles.impactText}>
                The goal was to build a practical, resource-efficient diagnostic aid that can support 
                early cervical cancer detection in <span className={styles.highlight}>low-resource healthcare settings</span>.
              </p>
            </div>
          </div>
          
          <div className={styles.cardFooter}>
            <span className={styles.prompt}>$</span>
            <span className={styles.status}>status: thesis_completed | BRAC_University | 2025-2026</span>
            <span className={styles.paperStatus}>| paper: IEEE_Xplore</span>
          </div>
        </div>
        
        {/* Keywords/Tags */}
        <div className={styles.keywords}>
          <span className={styles.prompt}>$</span> tags --
          <span className={styles.tag}>Deep Learning</span>
          <span className={styles.tag}>CNN</span>
          <span className={styles.tag}>Medical Imaging</span>
          <span className={styles.tag}>Cervical Cancer</span>
          <span className={styles.tag}>Explainable AI</span>
          <span className={styles.tag}>Grad-CAM</span>
          <span className={styles.tag}>LIME</span>
          <span className={styles.tag}>PyTorch</span>
          <span className={styles.tag}>IEEE</span>
          <span className={styles.tag}>Scopus</span>
        </div>
      </div>
    </section>
  );
};

export default Thesis;