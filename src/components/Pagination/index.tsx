'use client';

import { Pagination as AntPagination } from 'antd';
import styles from './index.module.scss';
import { PAGE_SIZE } from 'constants/common';
import useCustomRouter from 'libs/hooks/useCustomRouter';

type Props = {
  total: number;
};

export default function Pagination({ total }: Props) {
  const { query, pushQuery } = useCustomRouter();

  const handleChangePage = (page: number) => {
    console.log('🚀 ~ file: index.tsx:14 ~ handleChangePage ~ page:', page);
    pushQuery({ page });
  };

  return (
    <div className={`${styles.pagination} flex justify-center`}>
      <AntPagination
        defaultCurrent={1}
        total={total}
        pageSize={PAGE_SIZE}
        onChange={handleChangePage}
      />
    </div>
  );
}
