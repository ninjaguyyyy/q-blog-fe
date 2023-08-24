'use client';

import InputField from 'components/InputField';
import useCustomRouter from 'libs/hooks/useCustomRouter';
import { FaSearch } from 'react-icons/fa';

export default function PostSearchField() {
  const { query, pushQuery } = useCustomRouter();
  console.log('🚀 ~ file: index.tsx:9 ~ PostSearchField ~ query:', query);

  const handleSubmitSearch = (key: string) => {
    console.log('🚀 ~ file: index.tsx:8 ~ handleSubmitSearch ~ key:', key);
    pushQuery({ search: key, page: 1 });
  };

  return (
    <InputField
      suffix={<FaSearch className="text-base" />}
      className="w-[280px]"
      defaultValue={query.search || ''}
      onSearch={handleSubmitSearch}
    />
  );
}
