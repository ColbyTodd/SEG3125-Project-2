import { useState } from 'react';
import { useEffect } from 'react';
import HotPlayers from "./HotPlayers";
import Standings from "./Standings";

const Home = () => {
    const [Metro, setMetro] = useState(null);
    const [Atl, setAtl] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/Teams")
            .then(res => {
                return res.json()
            })
            .then((data) => {
                setMetro(data.filter((data) => data.Division === 'Metropolitan'));
                setAtl(data.filter((data) => data.Division === 'Atlantic'));
            })
    }, []);

    return (  
        <div className="home">
            <img src="https://cms.nhl.bamgrid.com/images/photos/319846256/1024x576/cut.jpg" className="img-fluid d-block" />
            <HotPlayers />
            <h2>Eastern</h2>
            {Metro && <Standings teams={Metro}/>}
            {Atl && <Standings teams={Atl}/>}
        </div>
    );
}
 
export default Home;