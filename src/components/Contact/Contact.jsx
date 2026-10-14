import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const contacts = [
    { label: 'GitHub', value: 'github.com/safayetsawom', link: 'https://github.com/safayetsawom' },
    { label: 'LinkedIn', value: 'linkedin.com/in/safayet-hossain-sawom', link: 'https://www.linkedin.com/in/safayet-hossain-sawom/' },
    { label: 'Email', value: 'mdsafayethossainsawomm@gmail.com', link: 'mailto:mdsafayethossainsawomm@gmail.com' },
    { label: 'Phone', value: '+880 1954-439394', link: 'tel:+8801954439394' }
  ];

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.prompt}>$</span> contact --list
        </h2>
        
        <div className={styles.contactCard}>
          <div className={styles.cardHeader}>
            <span className={styles.bracket}>┌─[</span>
            <span>safayet@portfolio:~/.contact</span>
            <span className={styles.bracket}>]</span>
          </div>
          
          <div className={styles.cardBody}>
            {contacts.map((contact, index) => (
              <div key={index} className={styles.contactRow}>
                <span className={styles.label}>{contact.label}:</span>
                <a 
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.value}
                >
                  {contact.value}
                  <span className={styles.arrow}>→</span>
                </a>
              </div>
            ))}
          </div>
          
          <div className={styles.cardFooter}>
            <span className={styles.prompt}>$</span>
            <span className={styles.status}>echo "Available for opportunities | Graduated 2026"</span>
          </div>
        </div>
        
        <div className={styles.signature}>
          <pre className={styles.nameAscii}>
{`
███████╗ █████╗ ███████╗ █████╗ ██╗   ██╗ ███████╗████████╗
██╔════╝██╔══██╗██╔════╝██╔══██╗╚██╗ ██╔╝ ██╔════╝╚══██╔══╝
███████╗███████║█████╗  ███████║ ╚████╔╝  █████╗     ██║   
╚════██║██╔══██║██╔══╝  ██╔══██║  ╚██╔╝   ██╔══╝     ██║   
███████║██║  ██║██║     ██║  ██║   ██║    ███████╗   ██║   
╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝  ╚═╝   ╚═╝    ╚══════╝   ╚═╝   
`}
          </pre>
          <div className={styles.signatureLine}>
            <span className={styles.prompt}>$</span> echo "MD.SAFAYET HOSSAIN SAWOM"  
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;