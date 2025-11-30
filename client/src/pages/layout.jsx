import { Outlet } from "react-router-dom"

const LayoutPage = () => {
  return (
    <div>
      <h1>Layout Page</h1>
      <div className="text-black">
        <Outlet />
      </div>
    </div>
  )
}

export default LayoutPage