import { useHistory } from 'react-router-dom';

const PlayerList = (props) => {
    const players = props.players;
    const compare = props.compare;
    const history = useHistory();

    const posTrans = (pos) => {
        if(pos === "RW"){
            return "Right wing";
        } else if(pos === "C"){
            return "Center";
        } else if(pos ==="LW"){
            return "Left Wing";
        } else if(pos === "D"){
            return "Defence";
        }
    }

  const handleRowClick = (rowId) => {
    // Programmatically navigate to the desired URL
    if (compare){
        history.push(`/compare/${compare}_${rowId}`)
    } else{
        history.push(`/player/${rowId}`);
    }
  };

    return (  
        <table className="table">
            <thead>
                <tr>
                    <th style={{width: '300px'}}scope="col" aria-label="Name.">Name</th>
                    <th scope="col" aria-label='Number.'>#</th>
                    <th scope="col" aria-label='Position.'>Position</th>
                    <th scope="col" aria-label='Team.'>Team</th>
                    <th scope="col" aria-label='Points.'>Points</th>
                </tr>
            </thead>
            {players.map((player, index) => (
                <tbody key={index}>
                        <tr onClick={() => handleRowClick(player.Name)} className="playerLink">
                            <th scope="row" aria-label={player.Name + ','}><u>{player.Name}</u></th>
                            <td aria-label={"Number" + player.Number + ','}>{player.Number}</td>
                            <td aria-label={posTrans(player.Position) + ','}>{player.Position}</td>
                            <td aria-label={player.Team + ','}>{player.Team}</td>
                            <td aria-label={player.Points + 'Points,'}>{player.Points}</td>
                        </tr>
                </tbody>
            ))}  
        </table>
    );
}
 
export default PlayerList;