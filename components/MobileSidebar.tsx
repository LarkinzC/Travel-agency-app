import type { SidebarComponent } from "@syncfusion/ej2-react-navigations"
import { Link } from "react-router"

const MobileSidebar = () => {
    let sidebar: SidebarComponent

  return (
    <div className="mobile-sidebar wrapper">
        <header>
            <Link to='/'>
                <img src="/assets/icons/logo.svg" alt="Logo" className="size-[30px]" />
                <h1>Tourvisto</h1>
            </Link>
            <button onClick={() => sidebar.toggle}></button>
        </header>
        </div>
  )
}

export default MobileSidebar