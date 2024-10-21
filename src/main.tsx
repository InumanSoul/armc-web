import { createRoot } from 'react-dom/client'
import App from './routes'
import './index.css'
import { ApolloProvider } from '@apollo/client'
import client from './services/apolloClient'

createRoot(document.getElementById('root')!).render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
)
