import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createIcons, icons } from 'lucide'

// Initialize Lucide icons globally just in case, though we will use Lucide React components
// but for any potentially remaining static HTML or manual usage:
// createIcons({ icons });

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
