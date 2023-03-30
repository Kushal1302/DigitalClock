import React , {useState} from 'react';



const Clock = ()=>{
    let time = new Date().toLocaleTimeString();
    const [newTime , setNewTime] = useState(time)
    setInterval(()=>{
        time = new Date().toLocaleTimeString();
        setNewTime(time)
    } ,1000 )
    return (
        <h1>{newTime}</h1>
    );
}
export default Clock;
