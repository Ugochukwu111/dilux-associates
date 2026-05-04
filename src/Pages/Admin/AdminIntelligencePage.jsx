
import { NavLink ,  Outlet} from "react-router-dom"
import { DashBoardLayout } from "../../Components/Admin/DashBoardLayout"
import './AdminIntelligencePage.css'


export default function AdminIntelligencePage() {
  return (
    <section className="h-full">
     <nav className="admin-intelligence-page-navigation container">
      <ul className="flex gap-2">
        <li><NavLink to = "upload-listing" className="fw700 text-red">Upload Listing</NavLink></li>
        <li><NavLink to = "open-deals" className="fw700 text-red">Open Deals</NavLink></li>
      </ul>
     </nav>
     <div>
        <Outlet/>
     </div>
    </section>
  )
}
