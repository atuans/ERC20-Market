import Navbar from "../components/Navbar"
import Main from "../components/Main"


const styles = {
  container:`h-full w-full flex bg-[#fff]`
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <Main/>
      
    </div>
  )
}
