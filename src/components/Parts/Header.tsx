import React, {useState} from 'react'

interface HeaderProps{
  buttonText: string;
}

export default function Header({buttonText}: HeaderProps) {
  const [count, setCount] = useState<number | null>(0);
  const increment = () => {
    if (count == null){
      setCount(0);
    }else{
      setCount(count + 1);
    }
  }
  return (
    <div>
      <h1>Header</h1> 
      <button onClick={increment}>{buttonText}</button>
      <p>{count}</p>
    </div>
  );
}
