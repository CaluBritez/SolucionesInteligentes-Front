import logo from '../assets/SLrosa.png'
import { Link } from 'react-router-dom';
import './Header.css'


function Header() {
    return(
        <div id='header'>
            <div id='nav-box'>
                <div id='caja-img-logo'>
                    <Link to="/">
                        <img src={logo} id="logo" className="hover-image" alt="" />
                    </Link>
                </div>
                <div id='botonera'>
                    <button>Información</button>
                    <button >Nosotros</button>
                    <button >Contacto</button>
                </div>
                
            </div>    
        </div>

    )
}

export default Header