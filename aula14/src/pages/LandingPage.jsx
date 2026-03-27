import NavBar from "../components/Navbar"
import Hero from "../components/Hero"
export default function LandingPage(){
    return (
        <>
        <NavBar titulo="CyberSecurity" link1="Home" link2="Dashboard" link3="Contato" />
        <Hero /> 
        </>
    )
}