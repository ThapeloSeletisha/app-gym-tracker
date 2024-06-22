import React from 'react';
import WorkoutCard from './components/WorkoutCard';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <WorkoutCard
        dateTime={new Date()}
        location='Century City Virgin Active'
        focus='Upper Body'
      />
      <WorkoutCard
        dateTime={new Date()}
        location='Century City Virgin Active'
        focus='Lower Body'
      />
      <Footer 
        total={2}
      />
    </div>
  );
}

export default App;
