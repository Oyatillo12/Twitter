import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import { AuthContext } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AuthContext>
            <App />
        </AuthContext>
    </BrowserRouter>

)
