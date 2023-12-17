'use client';

import { useState } from 'react';
import { Button } from '../button';

export const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  const addCounter = () => setCounter(counter + 1);
  const decreaseCounter = () => setCounter(counter - 1);

  return (
    <div className="max-w-xl mx-auto mt-20 text-center flex flex-col gap-10">
      <div className="text-2xl">Counter App</div>
      <div className="text-4xl">{counter}</div>
      <div className="flex gap-8 justify-center">
        <Button variant="primary" size="sm" onClick={addCounter}>
          Add
        </Button>

        <Button variant="danger" size="sm" onClick={decreaseCounter}>
          Decrease
        </Button>
      </div>
    </div>
  );
};
