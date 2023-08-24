import { PAGE_SIZE } from 'constants/common';
import { buildApiUrl } from 'helpers/common.helper';

const APIs = {
  POSTS: '/posts',
  POST_BY_SLUG: '/posts/by-slug',
};

export const getPosts = async ({ search, page, limit }: GetPostsParams) => {
  const params = {
    search: search as string,
    page: page || 1,
    limit: limit || PAGE_SIZE,
  };

  const url = buildApiUrl(APIs.POSTS, params);
  const res = await fetch(url, { cache: 'no-store' });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(res.json());
    }, 5000);
  });

  return res.json();
};

export const getPost = async (slug: string) => {
  const url = buildApiUrl(`${APIs.POST_BY_SLUG}/${slug}`);
  const res = await fetch(url, { cache: 'no-store' });

  return res.json();
};

export type GetPostsParams = {
  search?: string;
  page?: number;
  limit?: number;
};
