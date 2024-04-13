import React, { useState, useTransition } from "react";

const List = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const [isPending, startTransition] = useTransition();

  const List_size = 100000;
  const handleInput = (e) => {
    // user is entering something in input
    // we are making an api and fetching data
    setInput(e.target.value);
    startTransition(() => {
      const newList = [];
      for (let i = 0; i < List_size; i++) {
        newList.push(e.target.value);
      }
      setList(newList);
    });
  };
  return (
    <>
      <div>
        <h1>List (Transition)</h1>
        <input type="text" value={input} onChange={handleInput} />
      </div>
      {isPending ? (
        <div> List are getting Loaded</div>
      ) : (
        list?.map((item, idx) => {
          return <div key={idx}>{item}</div>;
        })
      )}
    </>
  );
};

export default List;
