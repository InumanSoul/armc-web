import { createRoot } from 'react-dom/client'
import App from './routes'
import './index.css'
import { ApolloProvider } from '@apollo/client'
import client from './services/apolloClient'
import { CartProvider } from './context/CartContext'

createRoot(document.getElementById('root')!).render(
    <ApolloProvider client={client}>
      <CartProvider>
        <App />
      </CartProvider>
    </ApolloProvider>
)
