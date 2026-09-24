import dashboardScreen from './preview.svg';
import projectsScreen from './projects.svg';
import materialsScreen from './materials.svg';
import attendanceScreen from './attendance.svg';
import reportsScreen from './reports.svg';

export const constructionScreens = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    title: 'Executive Project Control Center',
    caption: 'Real-time overview of active sites, equipment deployments, and cross-discipline workforce status.',
    image: dashboardScreen,
  },
  {
    id: 'projects',
    label: 'Projects',
    title: 'Site Milestones & Work Orders',
    caption: 'Granular phase tracking across commercial, transit, and warehouse construction contracts.',
    image: projectsScreen,
  },
  {
    id: 'materials',
    label: 'Materials',
    title: 'Materials & Inventory Logistics',
    caption: 'Automated steel, concrete, and equipment dispatch ledgers with supplier order monitoring.',
    image: materialsScreen,
  },
  {
    id: 'attendance',
    label: 'Attendance',
    title: 'Workforce Muster & Shift Logs',
    caption: 'Muster roll verification and multi-contractor shift tracking across all operational zones.',
    image: attendanceScreen,
  },
  {
    id: 'reports',
    label: 'Reports',
    title: 'Daily Progress Reports (DPR)',
    caption: 'Cloudinary photo audits, inspection sign-offs, and daily engineering progress submissions.',
    image: reportsScreen,
  },
];

export default constructionScreens;
