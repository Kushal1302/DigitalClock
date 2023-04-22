import React , {useState} from 'react';



const Clock = ()=>{
    let curtime = new Date();
    let time = curtime.toLocaleTimeString()
    let dayDate = curtime.toLocaleDateString()
    

    const [newTime , setNewTime] = useState(time)
    const [DayDate , setDayDate] = useState(dayDate)

    setInterval(()=>{
        let curtime = new Date();
        let time = curtime.toLocaleTimeString()
        let dayDate = curtime.toLocaleDateString()
        setNewTime(time)
        setDayDate(dayDate)
    } ,1000 )
    return (
       <>
            <h1>{newTime}</h1>
            <h2>{DayDate}</h2>
        </>
        
    );
}
export default Clock;
