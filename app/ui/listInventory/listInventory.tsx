import styles from './styles.module.scss';
import { SurvivorItem } from '@/app/lib/definitions';

export default function ListInventory({
  survivorItems,
}: {
  survivorItems: SurvivorItem[];
}) {
  const survivorNamesArray = survivorItems.map(
    (survivorItem: SurvivorItem) => survivorItem.item_name
  );

  return (
    <div className={styles.listInventoryContainer}>
      {survivorNamesArray.join(', ')}
    </div>
  );
}
