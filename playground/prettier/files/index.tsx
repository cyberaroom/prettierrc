import { useState } from 'react';

export const Test = (props: { name: string }) => {
  const [count, setCount] = useState(0);
  return (
    <div className='    justify-center  flex   items-center p-4 bg-blue-500 text-white'>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
};
