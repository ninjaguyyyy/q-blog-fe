import { useRouter, useSearchParams } from 'next/navigation';

type QueryParams = {
  search?: string;
  page?: number;
};

export default function useCustomRouter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query: QueryParams = {};

  let search = searchParams?.get('search');
  let page = searchParams?.get('page');

  if (search) query.search = search;
  if (page) query.page = +page;

  const pushQuery = ({ search, page }: QueryParams) => {
    if (search !== undefined) {
      search === '' ? delete query.search : (query.search = search);
    }

    if (page !== undefined) {
      page === 1 ? delete query.page : (query.page = page);
    }

    const newQuery = new URLSearchParams(query as any).toString();

    router.push(`?${newQuery}`);
  };

  return { pushQuery, query };
}
