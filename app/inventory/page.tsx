import type { Metadata } from 'next';
import Subhead from '@/app/ui/subhead/subhead';
import Button from '@/app/ui/button/button';
import UserItem from '@/app/ui/userItem/userItem';
import StatusItem from '@/app/ui/statusItem/statusItem';
import Pagination from '@/app/ui/pagination/pagination';
import ListInventory from '@/app/ui/listInventory/listInventory';
import { Survivor } from '@/app/lib/definitions';

import styles from './styles.module.scss';

import { fetchSurvivors } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'List of Survivors Inventories',
};

export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const { survivors, totalPages, survivorsLength } =
    fetchSurvivors(currentPage);

  return (
    <div>
      <div className={styles.subhead}>
        <Subhead
          title='List of Survivors Inventories'
          description='You will be able to see the inventory of each survivor.'
        />
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th align='left'>Name</th>
              <th align='left'>Inventories</th>
              <th align='left'>Action</th>
            </tr>
          </thead>
          <tbody>
            {survivors.map((survivor: Survivor) => {
              return (
                <tr key={survivor.id}>
                  <td>
                    <UserItem name={survivor.name} />
                  </td>
                  <td>
                    <ListInventory survivorItems={survivor.inventory} />
                  </td>
                  <td>
                    <Button text='Request Item' />
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>
                <Pagination
                  totalPages={totalPages}
                  survivorsLength={survivorsLength}
                />
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
