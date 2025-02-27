import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ResponsiveGrid from './ResponsiveGrid'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ResponsiveGrid />
  </StrictMode>,
)
