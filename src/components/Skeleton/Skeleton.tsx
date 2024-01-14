import styles from "./Skeleton.module.scss";
import BrandLogo from "../BrandLogo";

const Skeleton = () => (
  <>
    <BrandLogo />
    <div className={`${styles.skeleton} ${styles.subHeader}`}></div>
    <div className={`${styles.skeleton} ${styles.filterBar}`}></div>
    <div className={`${styles.skeleton} ${styles.recordRow}`}></div>
    <div className={`${styles.skeleton} ${styles.recordRow}`}></div>
    <div className={`${styles.skeleton} ${styles.recordRow}`}></div>
  </>
);

export default Skeleton;
