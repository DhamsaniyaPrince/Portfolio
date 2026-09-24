import liveScreen from './preview.svg';
import statsScreen from './stats.svg';
import matchesScreen from './matches.svg';

export const cricverseScreens = [
  {
    id: 'live',
    label: 'Live Broadcast',
    title: 'Real-Time Match Broadcast Center',
    caption: 'Low-latency WebSocket score broadcasting with ball-by-ball updates and interactive team telemetry.',
    image: liveScreen,
  },
  {
    id: 'stats',
    label: 'Analytics Engine',
    title: 'Recharts Performance Worms & Curves',
    caption: 'Visual run-rate comparative worm charts, phase-wise RPO curves, and player strike-rate indicators.',
    image: statsScreen,
  },
  {
    id: 'matches',
    label: 'Fixtures',
    title: 'Tournament Schedules & Rosters',
    caption: 'Dynamic match calendar with automated status sorting and detailed team roster formations.',
    image: matchesScreen,
  },
];

export default cricverseScreens;
