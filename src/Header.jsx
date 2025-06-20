import { Search } from "lucide-react";
import { ShoppingCart } from 'lucide-react';
import './header.css'
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header>
             
            <nav className="image flex justify-between pt-5 ">
            <ul className="jewellery flex gap-5 pl-10">
                <li><a className="" href="/rings">RINGS</a></li>
                <li>BRACELETS</li>
                <li>EARINGS</li>
                <li>NECKLACES</li>
            </ul>
            <ul className="blingg text-3xl">
                <h1>BLINGG</h1>
               <h6 className="letter font-extralight
               "> jewellery store</h6>
           </ul>
            <ul className="home flex gap-5 pr-10">
                <li><a className="" href="/">HOME</a> </li>
                <li><a className="" href="/About">ABOUT</a>  </li>
                <li>CONTACT</li>
                 <li>
                    <Search />
                    {/* <img src={image} alt=""/> */}
                 </li>
                 <li><ShoppingCart /></li>
            </ul>
            
            </nav>
        </header>
    );
}
