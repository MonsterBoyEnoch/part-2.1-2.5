import React from 'react';

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    },
    {
      name: 'Database Systems',
      id: 3,
      parts: [
        {
          name: 'SQL',
          exercises: 8,
          id: 1
        },
        {
          name: 'NoSQL',
          exercises: 12,
          id: 2
        }
      ]
    }
  ];

  return (
    <div>
      <h1>Course Information</h1>
      {courses.map(course => {
        const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);

        return (
          <div key={course.id}>
            <h2>{course.name}</h2>
            {course.parts.map(part => (
              <div key={part.id}>
                <p>{part.name}: {part.exercises}</p>
              </div>
            ))}
            <p><strong>Total exercises: {totalExercises}</strong></p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
