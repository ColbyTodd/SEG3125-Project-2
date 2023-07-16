import { useHistory } from 'react-router-dom';

const PlayerList = (props) => {
    const players = props.players;
    const compare = props.compare;
    const history = useHistory();

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
                    <th style={{width: '300px'}}scope="col">Name</th>
                    <th scope="col">#</th>
                    <th scope="col">Position</th>
                    <th scope="col">Team</th>
                    <th scope="col">Points</th>
                </tr>
            </thead>
            {players.map((player, index) => (
                <tbody key={index}>
                        <tr onClick={() => handleRowClick(player.Name)} className="playerLink">
                            <th scope="row">{player.Name}</th>
                            <td>{player.Number}</td>
                            <td>{player.Position}</td>
                            <td>{player.Team}</td>
                            <td>{player.Points}</td>
                        </tr>
                </tbody>
            ))}  
        </table>
    );
}
 
export default PlayerList;