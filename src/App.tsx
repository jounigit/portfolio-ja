import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CategoryList } from './components/category/CategoryList';

const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <CategoryList />
  </QueryClientProvider>
);

export default App;
