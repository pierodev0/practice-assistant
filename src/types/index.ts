export type Item = {
  id: string,
  title: string;
  description: string;
  duration: number; // por ejemplo, en segundos o minutos
  relatedLink: string;
  statisticName: string;
};
export type DrafItem = Omit<Item, 'id'>;
