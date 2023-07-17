const DisplayPlayer = (props) => {
    const player = props.player;
    return (
        <div className="container">
            <h1 className="text-center">{player.Name}</h1>
            <div className="row">
                <div className="col-2 text-center">
                    <img className="img-thumbnail" src={player.Image}/>
                </div>
                <div className="col">
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th scope="col">Position</th>
                                <th scope="col">Goals</th>
                                <th scope="col">Assists</th>
                                <th scope="col">Points</th>
                                <th scope="col">Team</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    <td>{player.Position}</td>
                                    <td>{player.Goals}</td>
                                    <td>{player.Assists}</td>
                                    <td>{player.Points}</td>
                                    <td>{player.Team}</td>
                                </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-2 text-center">
                    <img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Detroit_Red_Wings_logo.svg/1200px-Detroit_Red_Wings_logo.svg.png"/>
                </div>
            </div>
        </div>
      );
}
 
export default DisplayPlayer;