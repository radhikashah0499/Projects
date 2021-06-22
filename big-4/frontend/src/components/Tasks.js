import React, { useEffect, useState } from "react";
import '../App.css'
const Tasks = () => {
  useEffect(() => {
    fetchItems();
  }, []);
  const [items, setItems] = useState([]);
  const [test, setTest] = useState(false);
  const [value, setValue] = useState("");
  const fetchItems = async () => {
    const data = await fetch("/tasks");
    data.json().then((result) => {
      setItems(result);
    });
  };

  function displayData() {
    if (value === "BIG 4") setTest(true);
    else setTest(false);
  }


  return (
    <section class="tasks">
      <label for="fname">Please type</label>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <br />
      <button onClick={() => displayData()}> Click me!</button>

      {test ? items.map((item) => <div>{item.concept}</div>) : null}
    </section>
  );
};

export default Tasks;
