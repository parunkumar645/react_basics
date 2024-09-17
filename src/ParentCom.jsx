import { useEffect, useState } from "react";
function ParentCom() {
  const [effectCount, setEffectCount] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setEffectCount(count + 1);
    // ⚠️ 👆 this code will only run
    // 👇 if this dependent variable `count` changes.
  }, [count]);

  function handleClick() { 
    setTimeout(() => {
      // ⚠️ we are updating count like as shown below, as we are dealing with async code like setTimeout.
      setCount((prev) => prev + 1); // updating count, synchronously
    }, 10000);
  }
  return (
    <div>
      <p> effect count : {effectCount} </p>
      <p> normal count : {count} </p>
      <button onClick={handleClick}> update </button>
    </div>
  );
}

function Sample() {
  return <ParentCom />;
}

export default ParentCom;
