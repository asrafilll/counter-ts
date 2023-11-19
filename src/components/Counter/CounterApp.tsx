'use client';

import { useState } from 'react';

export const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  const addCounter = () => setCounter(counter + 1);
  const decreaseCounter = () => setCounter(counter - 1);

  return (
    <div className="max-w-xl mx-auto mt-20 text-center flex flex-col gap-10">
      <div className="text-2xl">Counter App</div>
      <div className="text-4xl">{counter}</div>
      <div className="flex gap-8 justify-center">
        <button
          type="button"
          className="px-8 py-2 bg-blue-400 text-white rounded-lg"
          onClick={addCounter}
        >
          Add
        </button>
        <button
          type="button"
          className="px-8 py-2 bg-red-400 text-white rounded-lg"
          onClick={decreaseCounter}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};
