# Data Structures

## Object Definitions
```mermaid
classDiagram
  Exercise --|> WorkoutExercise
  class Workout{
    +Date dateTime
    +string location
    +string focus
    +WorkoutExercise[] exercises
    +addExercise()
    +removeExercise()
    +getDateTime()
    +setLocation()
    +getLocation()
    +setFocus()
    +getFocus()
  }
  class Exercise {
    +string name
    +string muscle
    +setName()
    +getName()
    +setMuscle()
    +getMuscle()
  }
  class WorkoutExercise {
    +Exercise exercise
    +ExerciseSet[] sets
    +setExerise()
    +getExercise()
    +addSet()
    +removeSet()
  }
  class ExerciseSet {
    +int reps
    +int weight
    +bool isBodyWeight
    +setReps()
    +getReps()
    +setWeight()
    +getWeight()
    +getIsBodyWeight()
  }
```