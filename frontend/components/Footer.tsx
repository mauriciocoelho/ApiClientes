import styles from '../styles/Footer.module.css'


const currentYear = new Date().getFullYear();

const Footer = () => (

  <div className={styles.footer}>
    @ {currentYear} Mauricio Coelho. All Rights Reserved.
  </div>
);
export default Footer;