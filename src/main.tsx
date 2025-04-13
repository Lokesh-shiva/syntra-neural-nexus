import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/animations.css'
import './styles/interactions.css'

// Add performance optimization for initial render
const root = document.getElementById("root")

if (root) {
  // Use requestIdleCallback for non-critical initialization
  const renderApp = () => {
    const appRoot = createRoot(root)
    appRoot.render(<App />)
  }

  // Use requestIdleCallback if available, otherwise just render
  if ('requestIdleCallback' in window) {
    // @ts-ignore - TypeScript might not recognize requestIdleCallback
    window.requestIdleCallback(renderApp)
  } else {
    renderApp()
  }
}
