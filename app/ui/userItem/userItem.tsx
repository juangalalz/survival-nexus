import styles from './styles.module.scss';
import Image from 'next/image';

export default function UserItem({ name }: { name: string }) {
  return (
    <div className={styles.userItem}>
      <Image src='/avatar.png' width={40} height={40} alt='avatar icon' />
      <p className={styles.name}>{name}</p>
    </div>
  );
}
