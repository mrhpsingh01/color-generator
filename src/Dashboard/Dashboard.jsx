import { useState } from "react";
import Values from "values.js";
import SingleColor from "../EventList/SingleColor";
import Navbar from "./Navbar";

function Dashboard() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(null);
  const [list, setList] = useState(new Values("#49be25").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  return (
    <>
      <Navbar
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="#49be25"
        className={`${error ? "error" : null}`}
        onClick={handleSubmit}
      />
      <section className="container mx-auto colors text-sm grid grid-cols-7 gap-10 grid-rows-[200px_minmax(200px,_1fr)_300px]">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default Dashboard;
