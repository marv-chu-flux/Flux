import { useEffect, useState } from 'react';

function App() {
  const [val, setVal] = useState([{}]);

  useEffect(() => {
    fetch('/api')
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setVal(data);
      });
  }, []);

  return (
    <>
      <h1>
        {typeof val.msg === 'undefined' ? <p>Loading...</p> : <p>{val.msg}</p>}
      </h1>
    </>
  );
}

export default App;
