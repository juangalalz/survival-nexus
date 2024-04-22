import styles from './styles.module.scss';
import clsx from 'clsx';

export default function StatusItem({ status }: { status: boolean }) {
  return (
    <div className={styles.statusItemcontainer}>
      <div className={clsx(styles.statusItem, status && styles.red)}>
        <span className={styles.dot}></span>
        <p className={styles.statusText}>{status ? 'Infected' : 'Healthy'}</p>
      </div>
    </div>
  );
}
