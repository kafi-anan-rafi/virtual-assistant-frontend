import axios from "axios";

export default function GetIncome({Income}) 
{
    return (
   
    <div>{Income.map(op => <div key={op.id}>

     <p>Name: {op.name}</p>
        
     <p>Balance: {op.balance}</p>

    
        
     </div>)}</div>

    )
   
}
///serverSideRendering(ssr)
export const getServerSideProps = async () => {
 const res = await axios.get("http://localhost:3000/doctor/ViewIncome");
   ////from api call
    
    const Income = await res.data;
    
    
    
    
    return {
    
    props: { Income }
    
    }
    
    }
    