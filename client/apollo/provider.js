import React from 'react'
import { ApolloProvider } from 'react-apollo'

const Provider = ({ client, children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
)

export default Provider
