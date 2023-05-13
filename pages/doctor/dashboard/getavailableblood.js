import axios from "axios";

export default function GetAvailableBlood({Blood}) 
{
    return (
   
    <div>{Blood.map(op => <div key={op.id}>

     <p>Donor: {op.blood_donor}</p>
        
     <p>Group: {op.blood_group}</p>
     

    
     </div>)}</div>
    )
   
}
///serverSideRendering(ssr)
export const getServerSideProps = async () => {
 const res = await axios.get("http://localhost:3000/doctor/Viewavailableblood");
   ////from api call
    
    const Blood = await res.data;
  console.log(Blood)  
    
    
    
    return {
    
    props: { Blood }
    
    }
    
    }
    