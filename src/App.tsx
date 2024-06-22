import React from 'react';
import WorkoutCard from './components/WorkoutCard';

function App() {
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
    </div>
  );
}

export default App;
