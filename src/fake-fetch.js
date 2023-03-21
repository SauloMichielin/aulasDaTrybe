const TIME_IN_MILLISECONDS = 1000;

function fakeFetchSolutions() {
  return Promise.resolve({
    json: () => new Promise((resolve) => {
      setTimeout(() => {
        return resolve({ results: [
          {
            lecture: '4.1',
            name: 'Ciclo de Vida de Componentes',
          },
          {
            lecture: '4.2',
            name: 'React Router',
          },
          {
            lecture: '4.3',
            name: 'Projeto TrybeTunes',
          }] 
        });
      }, TIME_IN_MILLISECONDS);
    }),
  });
}

function fakeFetchSolutionsId(id) {
  return Promise.resolve({
    json: () => new Promise((resolve) => {
      setTimeout(() => {
        return resolve([
          {
            lecture: '4.1',
            exercises: ['1', '2', '3', '4']
          },
          {
            lecture: '4.2',
            exercises: ['5', '6', '7', '8']
          },
          {
            lecture: '4.3',
            exercises: ['9', '10', '11', '12']
          },
        ].find((exercise) => exercise.lecture === id )
        );
      }, TIME_IN_MILLISECONDS);
    }),
  });
}


export { fakeFetchSolutions, fakeFetchSolutionsId };