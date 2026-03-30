import { getCollection } from 'astro:content';

export async function getActivePraticiens() {
  const all = await getCollection('praticiens', ({ data }) => data.actif);
  return all.sort((a, b) => a.data.ordre - b.data.ordre);
}
