import styles from './styles.module.scss';
import Image from 'next/image';

export default function Subhead({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className={styles.subheadContainer}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.descriptionContainer}>
        <p className={styles.description}>{description}</p>
        <Image
          src='/exclamation_icon.png'
          width={16}
          height={16}
          alt='Exclamation icon'
        />
      </div>
    </div>
  );
}
