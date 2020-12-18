
import { Link } from 'react-router-dom'
import './nav-bar.css'
import React, {useState} from 'react';





const NavBar = () =>{

    const [navLinkOpen, navLinkToggle] = useState(false);

    const handleNavlinksToggle =() => {
      navLinkToggle(!navLinkOpen);
    }
     
   const renderClasses = ()=> {
     let classes = 'navlinks';
   
     if(navLinkOpen){
       classes += ' active'
     }
     return classes;
   }
     



return(

    <div>
           <nav className='Navbar'>
            <>
          <div className='logo'>
          <i class="fas fa-palette"></i>
            <h4><Link to='/' className="link">Wild Art Agency</Link></h4>
            </div>
            <ul className={renderClasses()}>
            <li className="link"> <Link to='/'>Home </Link></li>
             <li className="link"><Link to='/about'>About</Link></li>
             
         </ul>
         {
           navLinkOpen === false ?
         
         <div onClick={handleNavlinksToggle} className="hamburger-toggle">
             <i className = "fas fa-bars fa-lg"></i>
         </div>

          :
          
         <div onClick={handleNavlinksToggle} className="hamburger-krestik">
             <i className ="far fa-times-circle"></i>
         </div>

         }

         </>

    </nav>
        

    </div>
)
}


export default NavBar;
