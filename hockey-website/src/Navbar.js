import { Link } from "react-router-dom/cjs/react-router-dom.min";
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const locat = useLocation();
    var div;
    // Create the "Need help?" text node
    var helpText = document.createTextNode("Need help? Visit our discord: ");

    // Create the link element for Discord
    var discordLink = document.createElement("a");
    discordLink.href = "https://discord.com/";
    discordLink.className = "text-white ps-1";
    discordLink.textContent = "https://discord.com/";
            

    // Create the line break element
    var lineBreak = document.createElement("br");

    // Create the "Data gathered from:" text node
    var dataText = document.createTextNode("Data gathered from: ");

    // Create the link element for NHL.com
    var nhlLink = document.createElement("a");
    nhlLink.href = "https://www.nhl.com/";
    nhlLink.className = "text-white ps-1";
    nhlLink.textContent = "https://www.nhl.com/";

    window.addEventListener('load',() => {
        div = document.getElementById("textDiv");
        let location = window.location.href;
        let lang = location.split('/').slice(-1)[0]
        if(lang === "FR"){
            document.getElementById('language').value="FR"
            document.getElementById("home").innerHTML = "Accueil"
            document.getElementById("search").innerHTML = "Recherche"
            div.innerHTML = "";
            helpText = document.createTextNode("Besoin d'aide? Visitez notre discord:");
            dataText = document.createTextNode("Les données recueillies auprès de: ");
            // Append the elements to the helpDiv
            div.appendChild(helpText);
            div.appendChild(discordLink);
            div.appendChild(lineBreak);
            div.appendChild(dataText);
            div.appendChild(nhlLink);
        } else if(lang === "EN"){
            document.getElementById("home").innerHTML = "Home"
            document.getElementById("search").innerHTML = "Search"
            div.innerHTML = "";
            helpText = document.createTextNode("Need help? Visit our discord: ");
            dataText = document.createTextNode("Data gathered from: ");
            // Append the elements to the helpDiv
            div.appendChild(helpText);
            div.appendChild(discordLink);
            div.appendChild(lineBreak);
            div.appendChild(dataText);
            div.appendChild(nhlLink);
        } 
    });

    useEffect(() => {
        div = document.getElementById("textDiv");
        // Custom code to be executed when the link changes
        console.log('Link has changed');
        // You can perform additional actions here
        if(window.location.href.split('/').slice(-1)[0] === 'EN'){
            document.getElementById("home").innerHTML = "Home"
            document.getElementById("search").innerHTML = "Search"
            div.innerHTML = "";
            helpText = document.createTextNode("Need help? Visit our discord: ");
            dataText = document.createTextNode("Data gathered from: ");
            // Append the elements to the helpDiv
            div.appendChild(helpText);
            div.appendChild(discordLink);
            div.appendChild(lineBreak);
            div.appendChild(dataText);
            div.appendChild(nhlLink);
            
        } else if(window.location.href.split('/').slice(-1)[0]  === 'FR'){
            document.getElementById("home").innerHTML = "Accueil"
            document.getElementById("search").innerHTML = "Recherche"
            div.innerHTML = "";
            helpText = document.createTextNode("Besoin d'aide? Visitez notre discord:");
            dataText = document.createTextNode("Les données recueillies auprès de: ");
            // Append the elements to the helpDiv
            div.appendChild(helpText);
            div.appendChild(discordLink);
            div.appendChild(lineBreak);
            div.appendChild(dataText);
            div.appendChild(nhlLink);
        } else{
            document.getElementById('language').value="EN"
            document.getElementById("home").innerHTML = "Home"
            document.getElementById("search").innerHTML = "Search"
            document.getElementById('language').value="EN"
            div.innerHTML = '';
            // Append the elements to the helpDiv
            div.appendChild(helpText);
            div.appendChild(discordLink);
            div.appendChild(lineBreak);
            div.appendChild(dataText);
            div.appendChild(nhlLink);
        }
    }, [locat]);

    const langChange = (event) => {
        let location = window.location.href;
        let lang = location.split('/').slice(-1)[0]

        if(lang === 'EN' || lang === 'FR'){
            location = location.slice(0, -2);
        } 
        if(location.split('/').slice(-1)[0] === ''){
            window.location = location + event.target.value;
        } else {
            document.getElementById('language').value="EN"
        }

    }; 

    

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link className="navbar-brand" to='/'>
                <img src={process.env.PUBLIC_URL + '/logo-white.png'} width="30" height="30" className="d-inline-block ms-4" alt="crossed hockey sticks and puck logo"/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to='/' id="home">Home</Link>
                    <Link className="nav-item nav-link active" to="/search" id="search">Search</Link>
                </div>
                
            </div>
            <div className="navbar-nav navbar-right me-4">
                <select className="nav-item nav-link active" style={{ float: 'right' }} onChange={langChange} id="language">
                        <option style={{color: "black"}} selected>EN</option>
                        <option style={{color: "black"}}>FR</option>
                </select>
            </div>
        </nav>
    );
}
 
export default Navbar;