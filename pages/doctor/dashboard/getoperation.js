import axios from "axios";

export default function GetOperation({operations}) 
{
    return (
   
    <div>{operations.map(op => <div key={op.id}>

     <p>Email: {op.doctor_email}</p>

     <p>Schedule: {op.schedule}</p>
        
     </div>)}</div>
    )
   
}
///serverSideRendering(ssr)
export const getServerSideProps = async () => {
 const res = await axios.get("http://localhost:3000/doctor/viewoperationlist");
   ////from api call
    
    const operations = await res.data;
    
    
    
    
    return {
    
    props: { operations }
    
    }
    
    }
    