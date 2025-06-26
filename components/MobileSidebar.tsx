import { Link } from "react-router"

const MobileSidebar = () => {
  return (
    <div className="mobile-sidebar wrapper">
        <header>
            <Link to='/'>
                <img src="/assets/icons/logo.svg" alt="Logo" className="size-[30px]" />
                <h1>Tourvisto</h1>
            </Link>
        </header>
        </div>
  )
}

export default MobileSidebar