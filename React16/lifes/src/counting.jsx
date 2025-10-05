import React, { useEffect, useState } from 'react';

function Count({ data }) {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    data();
  }, []);

  useEffect(() => {
    if (toggle) {
      console.log("h3 mounted (visible)");
    } else {
      console.log("h3 unmounted (hidden)");
    }
  }, [toggle]);

  return (
    <>
      {toggle ? <h3>My name is rages khana</h3> : null}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </>
  );
}
export default Count;
