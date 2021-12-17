/* eslint-disable no-var */
/* eslint-disable vars-on-top */
import React from 'react';
import { useQuery } from 'react-query';

interface Category {
    id: number;
    title: string;
    slug: string;
    content?: string;
}

// type Params = {
//     queryKey: [string, { id: number }];
// };

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function getCategories() {
  const response = await fetch('http://localhost:8000/api/categories');
  if (!response.ok) {
    throw new Error('Problem fetching data');
  }

  const categories = await response.json();

  return categories;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const CategoryList = () => {
  const { status, error, data } = useQuery<Category[], Error>(
    'categories',
    getCategories,
  );

  if (status === 'loading') {
    return <div>...</div>;
  }

  if (status === 'error') {
    return <div>{error?.message}</div>;
  }

  // eslint-disable-next-line no-console
  console.log('CATEGORIES: ', data);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {
    // eslint-disable-next-line arrow-parens
    data?.map(category => (
      <li key={category.id}>
        {category.title}
      </li>
    ))
  }
    </>
  );

//   const mappedData = data?.map((category) => (
//     <li key={category.id}>
//       {category.title}
//     </li>
//   ));
//   return mappedData || <div>No categories</div>;
};
