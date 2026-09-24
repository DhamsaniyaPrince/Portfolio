import inventoryScreen from './preview.svg';
import managementScreen from './management.svg';
import schemaScreen from './schema.svg';

export const carDealershipScreens = [
  {
    id: 'inventory',
    label: 'Inventory Showroom',
    title: 'Vehicle Showroom & Search Catalog',
    caption: 'Snappy React client interface with real-time status filtering and dynamic price calculation.',
    image: inventoryScreen,
  },
  {
    id: 'management',
    label: 'Fleet Management',
    title: 'Dealership Operations Dashboard',
    caption: 'Administrative fleet control with live status mutations, vehicle telemetry, and reservation holds.',
    image: managementScreen,
  },
  {
    id: 'schema',
    label: 'Prisma Schema',
    title: 'Type-Safe Relational Schema',
    caption: 'Strongly typed Express backend with Prisma ORM, SQLite relations, and zero-runtime-mismatch contracts.',
    image: schemaScreen,
  },
];

export default carDealershipScreens;
