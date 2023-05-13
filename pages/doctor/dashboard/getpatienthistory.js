import axios from "axios";

export default function GetOperation({history}) 
{
    return (
   
    <div>{history.map(op => <div key={op.id}>

     <p>Date: {op.date}</p>
        
     <p>Time: {op.time}</p>

     <p>Contact: {op.contact}</p>
        
     </div>)}</div>
    )
   
}
///serverSideRendering(ssr)
export const getServerSideProps = async () => {
 const res = await axios.get("http://localhost:3000/doctor/viewpatienthistory");
   ////from api call
    
    const history = await res.data;
    
    
    
    
    return {
    
    props: { history }
    
    }
    
    }
    