import styles from '../styles/Footer.module.css'
  
function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className={styles.Footer}>
            @{currentYear} Mauricio Rodrigues Coelho. All Rights Reserved.
        </div>
    );
}


export default Footer