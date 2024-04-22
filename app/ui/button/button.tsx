import styles from './styles.module.scss';
import Image from 'next/image';

export default function Button({
  text,
  iconPath,
  onClick,
}: {
  text: string;
  iconPath?: string;
  onClick?: () => void;
}) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={onClick ? false : true}
    >
      {iconPath && (
        <Image src={iconPath} width={24} height={24} alt='button icon' />
      )}
      {text}
    </button>
  );
}
