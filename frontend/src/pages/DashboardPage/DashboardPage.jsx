
// Pagina para el admnistrador 
import './DashBoard.css'
import Content from "../../components/Content/Content"
import SideBar from "../../components/SideBar/SideBar"
import { useState } from 'react'

//(para ver el historial de ventas, los usuarios, los productos, crear producto)
const DashboardPage = () => {

    const [currentSelection, setCurrentSelection] = useState('')

    return (
        <div className='dashboard'>
            <SideBar setCurrentSelection={setCurrentSelection}></SideBar>
            <Content currentSelection={currentSelection}></Content>
        </div>
    )
}

export default DashboardPage