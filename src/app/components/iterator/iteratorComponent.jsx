import { useState, useEffect } from 'react'



export default () => {


  const [count, setCount] = useState(2);
  const [odd, setOdd] = useState(false)

  let i = 0

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(val => {
        let ret = val + 1
        if ( ret > 10 ) ret = 0
        return ret
        
      }); 
      setOdd(val => !val)
      i++
      console.log("useEffect: '", i, "'");
    }, 1000);
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div>
        IteratorComponent {count} {JSON.stringify(odd)}
    </div>
  )
}