import styles from "./innerComponent.module.css";
export default function InnerComponents({ children }) {
  return <div classsName={styles.innerComponent}>{children}</div>;
}
