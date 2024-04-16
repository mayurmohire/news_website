import React ,{useEffect,useState} from "react";


function Clock(){
  const [clockstate,setClockState]=useState();
   
   
     useEffect(()=>{
        setInterval(() => {

            const date =new Date();
            setClockState(date.toLocaleTimeString());
            
            
        }, 1000);
     }, []);

     return <div style={{fontSize:'18px',margin:'10px'}}>{clockstate}</div>



}
 
export default Clock;
