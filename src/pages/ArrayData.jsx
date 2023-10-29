import { useState } from 'react';

function ArrayData() {
  const [names, setNames] = useState(['Asep', 'Alex', 'Bagus', 'Cika', 'Doni']);
  console.log(names);
  return (
    <>
      <ol>
        {names.map((item, index) => (
          <div key={index}>
            <li>{item.toUpperCase()}</li>
          </div>
        ))}
      </ol>
    </>
  );
}

export default ArrayData;
