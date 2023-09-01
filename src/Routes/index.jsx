import { BrowserRouter, Routes as RoutesDom, Route, Outlet } from "react-router-dom"
import Images from "../components/gallery/images"
import Header from "../components/Header/header"
import Footer from "../components/Footer/footer"
import Main from '../components/Main'
import styles from './styles.module.scss'
import Form from "../components/Form/form"
import Video from "../components/VideoPage/video"
import Map from "../components/Map/maps"

function Layout(){
  return(
    <>
    <Header/>
    <div className={styles.outlet}>
    <Outlet/>
    </div>
    <Footer/>
    </>
  )
}


export default function Routes(){
  return(
    <>
    <BrowserRouter>
    <RoutesDom>
    <Route element={<Layout/>}>
      <Route element={<Main/>} path="/"/>
      <Route element={<Images/>} path="/galeria"/>
      <Route element={<Form/>} path="/form"/>
      <Route element={<Video/>} path="/video"/>
      <Route element={< Map />} path="/map"/>
    </Route>
    </RoutesDom>
    </BrowserRouter>
    </>
  )
}