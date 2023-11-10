import { useContext } from "react"
import Header from "./Header"
import { appcontext } from "./ManageRoute"
function Home() {
  const context=useContext(appcontext)
  return (
    <div className={`${context.menuButton&&'animation'}`} >
      <Header />
    </div>
  )
}

export default Home