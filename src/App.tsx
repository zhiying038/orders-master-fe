import { ApolloProvider } from "@apollo/client";
import { client } from "./config/apollo.config";
import Layout from "./components/Layout";

function App() {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <h3>Hello World</h3>
      </Layout>
    </ApolloProvider>
  );
}

export default App;
