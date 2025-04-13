import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import './index.css'
import App from './components/App/App'
import { store } from './redux/store'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
