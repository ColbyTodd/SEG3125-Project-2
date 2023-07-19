import { useState } from 'react';
import { useEffect } from 'react';
import HotPlayersFR from "./HotPlayersFR";
import StandingsFR from "./StandingsFR";

const HomeFR = () => {
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
            <h1 className='text-center py-5'>Les Statistiques du Hockey.com</h1>
            <div className="container-sm">
                <div className="row">
                    <h3 className="text-center pb-2">Leaders du classement des points de la LNH</h3>
                </div>
                <div className="row bordered p-2">
                    <div className="col">
                        <HotPlayersFR/>
                    </div>
                </div>
                <div className="row">
                    <h2 className='text-center pt-5 pb-2'>Classements de la LNH</h2>
                </div>
                <div className="row bordered p-2">
                    <div className="col p-2">
                        <h3 className='text-center'>Section Est</h3>
                        {Atl && <StandingsFR teams={Atl}/>}
                        {Metro && <StandingsFR teams={Metro}/>}
                    </div>
                    <div className="col p-2">
                        <h3 className='text-center'>Section Ouest</h3>
                        {Cent && <StandingsFR teams={Cent}/>}
                        {Pac && <StandingsFR teams={Pac}/>}
                    </div>
                </div>
                
            </div>
        </div>
    );
}
 
export default HomeFR;