import { lazy, Suspense } from 'react';
import { createHashRouter } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
const HomePage = lazy(() => import('../pages/HomePage').then((m) => ({ default: m.HomePage })));
const ProjectsPage = lazy(() =>
  import('../pages/ProjectsPage').then((m) => ({ default: m.ProjectsPage })),
);
const ProjectDetailPage = lazy(() =>
  import('../pages/ProjectDetailPage').then((m) => ({ default: m.ProjectDetailPage })),
);
const WorkshopsPage = lazy(() =>
  import('../pages/WorkshopsPage').then((m) => ({ default: m.WorkshopsPage })),
);
const WorkshopDetailPage = lazy(() =>
  import('../pages/WorkshopDetailPage').then((m) => ({ default: m.WorkshopDetailPage })),
);
const ToolsPage = lazy(() => import('../pages/ToolsPage').then((m) => ({ default: m.ToolsPage })));
const ToolDetailPage = lazy(() =>
  import('../pages/ToolDetailPage').then((m) => ({ default: m.ToolDetailPage })),
);
const AboutPage = lazy(() => import('../pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const NotFoundPage = lazy(() =>
  import('../pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })),
);
const wait = (element: React.ReactNode) => (
  <Suspense fallback={<div className="page container">Loading…</div>}>{element}</Suspense>
);
export const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: wait(<HomePage />) },
      { path: 'projects', element: wait(<ProjectsPage />) },
      { path: 'projects/:slug', element: wait(<ProjectDetailPage />) },
      { path: 'workshops', element: wait(<WorkshopsPage />) },
      { path: 'workshops/:slug', element: wait(<WorkshopDetailPage />) },
      { path: 'tools', element: wait(<ToolsPage />) },
      { path: 'tools/:slug', element: wait(<ToolDetailPage />) },
      { path: 'about', element: wait(<AboutPage />) },
      { path: '*', element: wait(<NotFoundPage />) },
    ],
  },
]);
