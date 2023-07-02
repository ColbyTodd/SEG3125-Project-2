import { useState } from 'react';
import { useEffect } from 'react';
import HotPlayers from "./HotPlayers";
import Standings from "./Standings";

const Home = () => {
    const [teams, setTeams] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/Teams")
            .then(res => {
                return res.json()
            })
            .then((data) => {
                setTeams(data);
            })
    }, []);

    return (  
        <div className="home">
            <img src="https://cms.nhl.bamgrid.com/images/photos/319846256/1024x576/cut.jpg" className="img-fluid d-block" />
            <HotPlayers />
            {teams && <Standings teams={teams}/>}
        </div>
    );
}
 
export default Home;