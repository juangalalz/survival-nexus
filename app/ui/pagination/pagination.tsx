'use client';

import styles from './styles.module.scss';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export default function Pagination({
  totalPages,
  survivorsLength,
}: {
  totalPages: number;
  survivorsLength: number;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const currentPage = Number(searchParams.get('page')) || 1;

  const goPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());

    replace(`${pathname}?${params.toString()}`);
  };
  const lastItem = currentPage * 10;
  const firstItem = lastItem - 9;
  return (
    <div className={styles.paginator}>
      <p className={styles.info}>
        Showing <span>{firstItem}</span> to <span>{lastItem}</span> of{' '}
        <span>{survivorsLength}</span> Results
      </p>
      <div className={styles.buttons}>
        <button
          className={styles.button}
          onClick={() => goPageURL(currentPage - 1)}
          disabled={currentPage <= 1}
        >
          Previous
        </button>
        <button
          className={styles.button}
          onClick={() => goPageURL(currentPage + 1)}
          disabled={currentPage >= totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
