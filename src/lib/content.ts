import { getCollection, type CollectionEntry } from 'astro:content';

/** Returns published blog entries order by createdAt desc. */
export async function getPublishedBlogEntries(): Promise<CollectionEntry<'blog'>[]> {
  const entries = await getCollection('blog', ({ data }) => data.published);
  return entries.sort((a, b) => b.data.createdAt.valueOf() - a.data.createdAt.valueOf());
}
