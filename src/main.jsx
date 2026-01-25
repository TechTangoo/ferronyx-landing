import { ViteReactSSG } from 'vite-react-ssg'
import './index.css'
import { routes } from './routes'
import Layout from './Layout'

export const createRoot = ViteReactSSG(
  { routes },
  ({ router, isClient }) => {
    // Custom setup - runs on both client and server
  },
  ({ app, router, routes, isClient, initialState }) => {
    // Return the app wrapped in Layout
    return <Layout>{app}</Layout>
  }
)
