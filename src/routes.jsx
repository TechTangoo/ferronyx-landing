import React from 'react'
import HomePage from './pages/HomePage'
import UseCasesPage from './pages/UseCasesPage'
import AboutPage from './pages/AboutPage'
import BlogListingPage from './pages/blog/BlogListingPage'
import BlogPostPage from './pages/blog/BlogPostPage'
import CaseStudiesListingPage from './pages/case-studies/CaseStudiesListingPage'
import CaseStudyPage from './pages/case-studies/CaseStudyPage'

// Define all blog post slugs for static generation
const blogSlugs = [
  'intelligent-alert-correlation-root-cause-analysis',
  'gpu-monitoring-optimization-insights',
  'ota-deployment-tracking-failure-correlation',
  'ros2-observability-complete-guide',
  'debug-navigation-failures-ros2',
  'reducing-robot-mttr-best-practices',
]

// Define all case study slugs for static generation
const caseStudySlugs = [
  'warehouse-amr-fleet-mttr-reduction',
  'delivery-robot-fleet-scaling',
]

export const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/use-cases',
    element: <UseCasesPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/blog',
    element: <BlogListingPage />,
  },
  {
    path: '/blog/:slug',
    element: <BlogPostPage />,
    // Tell vite-react-ssg which paths to pre-render
    getStaticPaths: () => blogSlugs.map(slug => `/blog/${slug}`),
  },
  {
    path: '/case-studies',
    element: <CaseStudiesListingPage />,
  },
  {
    path: '/case-studies/:slug',
    element: <CaseStudyPage />,
    // Tell vite-react-ssg which paths to pre-render
    getStaticPaths: () => caseStudySlugs.map(slug => `/case-studies/${slug}`),
  },
]
