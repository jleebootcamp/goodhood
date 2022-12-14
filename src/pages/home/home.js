// import "./home.css";
// import React from "react";

// const Home = () => {
//   return (
//     <div>
//       <h1>Home</h1>
//       <h1>What's good in the neighborhood? Find honest reviews from the most trusted sources, your neighbors! </h1>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import { useQuery } from '@apollo/client';

import QuestionList from '../../components/QuestionList';
import QuestionForm from '../../components/QuestionForm';

import { QUERY_QUESTIONS } from '../../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_QUESTIONS);
  const questions = data?.questions || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <QuestionForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <QuestionList
              questions={questions}
              title="Some Feed for Question(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;