import catalogScreen from './preview.svg';
import detailScreen from './detail.svg';

export const airbnbScreens = [
  {
    id: 'catalog',
    label: 'Explore Catalog',
    title: 'Listing Feed & Category Filters',
    caption: 'Pure CSS grid recreation with sticky search header, responsive category tabs, and dynamic card layouts.',
    image: catalogScreen,
  },
  {
    id: 'detail',
    label: 'Stay Details & Booking',
    title: 'Property Overview & Reserve Card',
    caption: 'High-fidelity property detail showcase with structured photo grid and interactive reserve pricing calculation.',
    image: detailScreen,
  },
];

export default airbnbScreens;
