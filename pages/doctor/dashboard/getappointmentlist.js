import axios from "axios";

export default function GetAppointmentlist({list}) 
{
    return (
   
    <div>{list.map(op => <div key={op.id}>

     <p>Date: {op.date}</p>
        
     <p>Time: {op.time}</p>

     <p>Contact: {op.contact}</p>
        
     </div>)}</div>
    )
   
}
///serverSideRendering(ssr)
export const getServerSideProps = async () => {
 const res = await axios.get("http://localhost:3000/doctor/viewappointmentlist");
   ////from api call
    
    const list = await res.data;
    
    
    
    
    return {
    
    props: { list }
    
    }
    
    }
    