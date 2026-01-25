import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './pages/HomePage'
import UseCasesPage from './pages/UseCasesPage'
import AboutPage from './pages/AboutPage'
import BlogListingPage from './pages/blog/BlogListingPage'
import BlogPostPage from './pages/blog/BlogPostPage'
import CaseStudiesListingPage from './pages/case-studies/CaseStudiesListingPage'
import CaseStudyPage from './pages/case-studies/CaseStudyPage'

// This file is used for the SPA fallback build (npm run build:spa)
// The main SSG build uses routes.jsx instead

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/use-cases" element={<UseCasesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogListingPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/case-studies" element={<CaseStudiesListingPage />} />
        <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
      </Routes>
    </Layout>
  )
}

export default App
