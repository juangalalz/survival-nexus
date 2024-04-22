type Coordinates = { latitude: number; longitude: number };

export type Item = {
  id: number;
  name: string;
  description: string;
};

export type Survivor = {
  id: number;
  name: string;
  age: number;
  gender: 'man' | 'woman';
  last_location: Coordinates;
  infected: boolean;
  inventory: [SurvivorItem];
};

export type SurvivorItem = {
  id: number;
  item_id: string;
  item_name: string;
  quantity: number;
};
