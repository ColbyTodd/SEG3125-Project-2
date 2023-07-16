import { useState } from 'react';
import { useEffect } from 'react';
import PlayerList from './PlayerList';
import { useParams } from 'react-router-dom';

const Search = () => {
    const [players, setPlayers] = useState(null);
    const [filter, setFilter] = useState(null);
    const [teams, setTeams] = useState(null);
    const {compare} = useParams();
    const [pos, setPos] = useState('');
    const [con, setCon] = useState('');
    const [div, setDiv] = useState('');
    const [teamSel, setTeam] = useState('');
    const [nationality, setNationality] = useState('');

    const posChange = (event) => {
        setPos(event.target.value);
      };

    const conChange = (event) => {
        setCon(event.target.value);
      };

      const divChange = (event) => {
        setDiv(event.target.value);
      };
    
      const teamChange = (event) => {
        setTeam(event.target.value);
      }; 

      const nationalityChange = (event) => {
        setNationality(event.target.value);
      }; 

    const searchClick = () => {
        var query = players;
        
        if (pos !== ''){
            query = query.filter((filter) => filter.Position === pos)
        }
        if (con !== ''){
           query = query.filter((filter) => filter.Conference === con)
        }
        if (div !== ''){
            query = query.filter((filter) => filter.Division === div)
        }
        if (teamSel !== ''){
            query = query.filter((filter) => filter.Team === teamSel)
        }
        if (nationality !== ''){
            query = query.filter((filter) => filter.Nationality === nationality)
        }
        
        if (query.length == 0){
            query = [{Name: "Player not found"}]
        }

        setFilter(query);

    };

    const uniqueNationalities = players && players.reduce((uniqueList, item) => {
        if (!uniqueList.includes(item.Nationality)) {
          uniqueList.push(item.Nationality);
        }
        return uniqueList;
      }, []);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/ColbyTodd/SEG3125-Project-2/Players")
            .then(res => {
                return res.json()
            })
            .then((data) => {
                if (compare){
                    setPlayers(data.filter((data) => data.Name !== compare))
                } else{
                    setPlayers(data);
                }
                setFilter(players);
                console.log(players);
                console.log(filter);
                
            })
        
        fetch("https://my-json-server.typicode.com/ColbyTodd/SEG3125-Project-2/Teams")
            .then(res => {
            return res.json()
            })
            .then((data) => {
                setTeams(data);
            })
    }, []); 

    return (  
        <div className="container-sm">
            <h1 className='text-center py-5'>Find a player</h1>
            <div className="row">
                <div className="col">
                    <h4>Position</h4>
                </div>
                <div className="col">
                    <h4>Conference</h4>
                </div>
                <div className="col">
                    <h4>Division</h4>
                </div>
                <div className="col">
                    <h4>Team</h4>
                </div>
                <div className="col">
                    <h4>Nationality</h4>
                </div>
            </div>
            <div className="row">
                <div className="col">
                        <select className="form-select" value={pos} onChange={posChange}>
                            <option selected value=''>---</option>
                            <option value="C">C</option>
                            <option value="RW">RW</option>
                            <option value="LW">LW</option>
                            <option value="D">D</option>
                        </select>
                </div>
                <div className="col">
                    <select className="form-select" value={con} onChange={conChange}>
                    <option selected value=''>---</option>
                        <option value="Eastern">Eastern</option>
                        <option value="Western">Western</option>
                    </select>
                </div>
                <div className="col">
                    <select className="form-select" value={div} onChange={divChange}>
                    <option selected value =''>---</option>
                        <option value="Metropolitan">Metropolitan</option>
                        <option value="Atlantic">Atlantic</option>
                        <option value="Central">Central</option>
                        <option value="Pacific">Pacific</option>
                    </select>
                </div>
                <div className="col">
                    <select className="form-select" value={teamSel} onChange={teamChange}>
                        <option selected value=''>---</option>
                        {teams && teams.map((team) => (
                            <option key={team.Name}>{team.Name}</option>
                        ))}  
                    </select>
                </div>
                <div className="col">
                    <select className="form-select" value={nationality} onChange={nationalityChange}>
                    <option selected value=''>---</option>
                        {uniqueNationalities && uniqueNationalities.map((nationality) => (
                            <option key={nationality}>{nationality}</option>
                        ))}  
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col text-center pt-3">
                    <button className="button" onClick={searchClick}>Search</button>
                </div>
            </div>
            <div className="row">
                <h2>Players</h2>
                {filter && <PlayerList players={filter} compare={compare}/>}
            </div>
            
        </div>
    );
}
 
export default Search;