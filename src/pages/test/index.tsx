import React, { useState } from "react";
import * as miu from "../../utils/index";

const TsReactTest = () => {
  const persons: { name: string; age: number }[] = [
    { name: "jack", age: 25 },
    { name: "mae", age: 22 },
  ];
  const { value, clear, removeIndex, add } = miu.useArray(persons);

  miu.useMount(() => {});

  return (
    <div>
      <button onClick={() => add({ name: "jj", age: 15 })}>add jj</button>
      <button onClick={() => removeIndex(0)}>remove 0</button>
      <button onClick={() => clear()}>clear</button>
      {value.map((person: { age: number; name: string }, index: number) => (
        <div>
          <span>{index}</span>
          <span>{person.name}</span>
          <span>{person.age}</span>
        </div>
      ))}
    </div>
  );
};

export default TsReactTest;
