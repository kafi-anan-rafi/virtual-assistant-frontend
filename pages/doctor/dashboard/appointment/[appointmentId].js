
import axios from "axios";

export default function Appoinment({appoinment}) 
{
    return (
        <div>
            <p>Date {appoinment.date}</p>
            <p>Contact {appoinment.contact}</p>
        </div>
    )
}
///serverSideRendering(ssr)
export const getServerSideProps = async (context) => {
    const id = context.params.appointmentId;

 const res = await axios.get("http://localhost:3000/doctor/viewappointedpatient/"+id);
   ////from api call
    
    const appoinment = await res.data;
    
    
    
    
    return {
    props: { appoinment }
    }
    }
    