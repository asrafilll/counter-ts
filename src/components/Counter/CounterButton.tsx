'use client';

import { useState } from 'react';

export const CounterButton = ({ addCounter, decreaseCounter }) => (
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
);
