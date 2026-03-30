import styles from "./footer.module.css";
function Footer() {
  return (
    <>
      <article>
        <footer className={styles.footer}>
          <h5 className={styles.header}>All Quick Links</h5>
          <ol className={styles.links}>
            <li>Home</li>
            <li>Surgeries</li>
            <li> Patients</li>
          </ol>
        </footer>
        {/* <p className={styles.hospital}>©Hospital Mangement 2026</p> */}
      </article>
    </>
  );
}
export default Footer;
