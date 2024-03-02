import styles from "./innercontainer.module.css";
export default function InnerContainr({ children }) {
  return <div className={styles.innerContainer}>{children}</div>;
}
