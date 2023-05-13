import MyLayout from "../../component/layout"
import Header from "../../component/header"
import Link from "next/link"


export default function Dashboard() {
  return (
    <div className="container mx-auto px-4">
      <h1>Welcome Back!</h1>
      <Link href="/doctor/dashboard/appointment/1">  Appointment</Link> <br />
      <Link href="/doctor/dashboard/getappointmentlist"> Appointment List</Link>
    </div>
  )
}