import { useState } from 'react';
import { useEffect } from 'react';
import HotPlayers from "./HotPlayers";
import Standings from "./Standings";

const Home = () => {
    const [Metro, setMetro] = useState(null);
    const [Atl, setAtl] = useState(null);
    const [Cent, setCent] = useState(null);
    const [Pac, setPac] = useState(null);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/ColbyTodd/SEG3125-Project-2/Teams")
            .then(res => {
                return res.json()
            })
            .then((data) => {
                data.sort((a, b) => b.PTS - a.PTS);
                setMetro(data.filter((data) => data.Division === 'Metropolitan'));
                setAtl(data.filter((data) => data.Division === 'Atlantic'));
                setCent(data.filter((data) => data.Division === 'Central'));
                setPac(data.filter((data) => data.Division === 'Pacific'));
            })
    }, []);

    return (  
        <div className="home">
            <h1 className='text-center py-5'>The Hockey Stats.com</h1>
            <HotPlayers/>
            <h2 className='text-center pt-5'>Eastern Conference</h2>
            {Metro && <Standings teams={Metro}/>}
            {Atl && <Standings teams={Atl}/>}
            <h2 className='text-center pt-5'>Western Conference</h2>
            {Cent && <Standings teams={Cent}/>}
            {Pac && <Standings teams={Pac}/>}
        </div>
    );
}
 
export default Home;