// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const items = [
  {
    id: 1,
    name: 'Water',
    description: 'vital fluid',
  },
  {
    id: 2,
    name: 'Food',
    description: 'What you eat for nutrition',
  },
  {
    id: 3,
    name: 'Medication',
    description: 'What is eaten to cure diseases',
  },
  {
    id: 4,
    name: 'C-Virus Vaccine',
    description: 'What you apply to avoid contracting the virus',
  },
];

const survivors = [
  {
    id: 1,
    name: 'Domenic Hurst',
    age: 20,
    gender: 'man',
    last_location: {
      latitude: 45.367584,
      longitude: -68.972168,
    },
    infected: false,
    inventory: [
      { id: 1, item_id: items[0].id, item_name: items[0].name, quantity: 3 },
      { id: 2, item_id: items[1].id, item_name: items[1].name, quantity: 4 },
      { id: 3, item_id: items[2].id, item_name: items[2].name, quantity: 2 },
      { id: 4, item_id: items[3].id, item_name: items[3].name, quantity: 5 },
    ],
  },
  {
    id: 2,
    name: 'Steve Daugherty',
    age: 21,
    gender: 'man',
    last_location: {
      latitude: 45.367584,
      longitude: -68.972168,
    },
    infected: false,
    inventory: [
      { id: 5, item_id: items[0].id, item_name: items[0].name, quantity: 3 },
      { id: 6, item_id: items[2].id, item_name: items[2].name, quantity: 2 },
    ],
  },
  {
    id: 3,
    name: 'Dominique Novak',
    age: 22,
    gender: 'woman',
    last_location: {
      latitude: 45.367584,
      longitude: -68.972168,
    },
    infected: false,
    inventory: [
      { id: 7, item_id: items[1].id, item_name: items[1].name, quantity: 4 },
      { id: 8, item_id: items[3].id, item_name: items[3].name, quantity: 5 },
    ],
  },
  {
    id: 4,
    name: 'Noemi Castaneda',
    age: 23,
    gender: 'woman',
    last_location: {
      latitude: 45.367584,
      longitude: -68.972168,
    },
    infected: true,
    inventory: [
      { id: 9, item_id: items[1].id, item_name: items[1].name, quantity: 4 },
      { id: 10, item_id: items[2].id, item_name: items[2].name, quantity: 2 },
    ],
  },
  {
    id: 5,
    name: 'Allyson Soto',
    age: 23,
    gender: 'woman',
    last_location: {
      latitude: 45.367584,
      longitude: -68.972168,
    },
    infected: true,
    inventory: [],
  },
  {
    id: 6,
    name: 'Kyle Manning',
    age: 23,
    gender: 'man',
    last_location: {
      latitude: 45.367584,
      longitude: -68.972168,
    },
    infected: true,
    inventory: [
      { id: 11, item_id: items[0].id, item_name: items[0].name, quantity: 3 },
      { id: 12, item_id: items[1].id, item_name: items[1].name, quantity: 4 },
      { id: 13, item_id: items[2].id, item_name: items[2].name, quantity: 2 },
    ],
  },
  {
    id: 7,
    name: 'Rosemary Lucero',
    age: 27,
    gender: 'woman',
    last_location: {
      latitude: 45.367584,
      longitude: -68.972168,
    },
    infected: true,
    inventory: [
      { id: 14, item_id: items[3].id, item_name: items[3].name, quantity: 5 },
    ],
  },
  {
    id: 8,
    name: 'Tad Macdonald',
    age: 21,
    gender: 'man',
    last_location: {
      latitude: 45.367584,
      longitude: -68.972168,
    },
    infected: false,
    inventory: [
      { id: 15, item_id: items[1].id, item_name: items[1].name, quantity: 4 },
    ],
  },
  {
    id: 9,
    name: 'Roxie Fletcher',
    age: 26,
    gender: 'woman',
    last_location: {
      latitude: 45.367584,
      longitude: -68.972168,
    },
    infected: false,
    inventory: [
      { id: 16, item_id: items[1].id, item_name: items[1].name, quantity: 4 },
    ],
  },
  {
    id: 10,
    name: 'Theresa Robbins',
    age: 25,
    gender: 'woman',
    last_location: {
      latitude: 45.367584,
      longitude: -68.972168,
    },
    infected: true,
    inventory: [
      { id: 17, item_id: items[0].id, item_name: items[0].name, quantity: 3 },
      { id: 18, item_id: items[1].id, item_name: items[1].name, quantity: 4 },
      { id: 19, item_id: items[2].id, item_name: items[2].name, quantity: 2 },
      { id: 20, item_id: items[3].id, item_name: items[3].name, quantity: 5 },
    ],
  },
  {
    id: 11,
    name: 'Percy Neal',
    age: 25,
    gender: 'man',
    last_location: {
      latitude: 45.367584,
      longitude: -68.972168,
    },
    infected: true,
    inventory: [
      { id: 21, item_id: items[0].id, item_name: items[0].name, quantity: 3 },
      { id: 22, item_id: items[1].id, item_name: items[1].name, quantity: 4 },
    ],
  },
  {
    id: 12,
    name: 'Florentino Mueller',
    age: 35,
    gender: 'man',
    last_location: {
      latitude: 45.367584,
      longitude: -68.972168,
    },
    infected: false,
    inventory: [
      { id: 23, item_id: items[2].id, item_name: items[2].name, quantity: 2 },
    ],
  },
  {
    id: 13,
    name: 'Charley Valencia',
    age: 32,
    gender: 'man',
    last_location: {
      latitude: 45.367584,
      longitude: -68.972168,
    },
    infected: false,
    inventory: [
      { id: 24, item_id: items[3].id, item_name: items[3].name, quantity: 5 },
    ],
  },
  {
    id: 14,
    name: 'Krystal Moyer',
    age: 32,
    gender: 'woman',
    last_location: {
      latitude: 45.367584,
      longitude: -68.972168,
    },
    infected: true,
    inventory: [],
  },
  {
    id: 15,
    name: 'Gayle Goodwin',
    age: 32,
    gender: 'man',
    last_location: {
      latitude: 45.367584,
      longitude: -68.972168,
    },
    infected: true,
    inventory: [
      { id: 25, item_id: items[2].id, item_name: items[2].name, quantity: 2 },
      { id: 26, item_id: items[3].id, item_name: items[3].name, quantity: 5 },
    ],
  },
  {
    id: 16,
    name: 'Marlon Mann',
    age: 18,
    gender: 'man',
    last_location: {
      latitude: 45.367584,
      longitude: -68.972168,
    },
    infected: true,
    inventory: [
      { id: 27, item_id: items[1].id, item_name: items[1].name, quantity: 4 },
    ],
  },
  {
    id: 17,
    name: 'Tania Pham',
    age: 32,
    gender: 'woman',
    last_location: {
      latitude: 45.367584,
      longitude: -68.972168,
    },
    infected: true,
    inventory: [],
  },
  {
    id: 18,
    name: 'Corrine Foley',
    age: 28,
    gender: 'woman',
    last_location: {
      latitude: 45.367584,
      longitude: -68.972168,
    },
    infected: true,
    inventory: [
      { id: 28, item_id: items[1].id, item_name: items[1].name, quantity: 4 },
      { id: 29, item_id: items[2].id, item_name: items[2].name, quantity: 2 },
    ],
  },
  {
    id: 19,
    name: 'Terri Morton',
    age: 28,
    gender: 'man',
    last_location: {
      latitude: 45.367584,
      longitude: -68.972168,
    },
    infected: false,
    inventory: [],
  },
  {
    id: 20,
    name: 'Suzanne Barnes',
    age: 48,
    gender: 'woman',
    last_location: {
      latitude: 45.367584,
      longitude: -68.972168,
    },
    infected: false,
    inventory: [
      { id: 30, item_id: items[0].id, item_name: items[0].name, quantity: 3 },
      { id: 31, item_id: items[1].id, item_name: items[1].name, quantity: 4 },
      { id: 32, item_id: items[2].id, item_name: items[2].name, quantity: 2 },
      { id: 33, item_id: items[3].id, item_name: items[3].name, quantity: 5 },
    ],
  },
];

module.exports = {
  survivors,
};
