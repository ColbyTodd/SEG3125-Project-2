const Compare = () => {
    const [playerTop, setPlayerTop] = useState(null);
    const [playerBot, setPlayerBot] = useState(null);
    const { name } = useParams();

    useEffect(() => {
        name.replace("%20", " ")
        fetch("http://localhost:8000/Players")
            .then(res => {
                return res.json()
            })
            .then((data) => {
                setPlayerTop(data.filter((data) => data.Name === name)[0]);
            })
    }, []);

    return (  
        <div className="container">
            {player && <h1 className="text-center">{player.Name}</h1>}
            <div className="row">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Position</th>
                            <th scope="col">Goals</th>
                            <th scope="col">Assists</th>
                            <th scope="col">Points</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr>
                                {player && <td>{player.Position}</td>}
                                {player && <td>{player.Goals}</td>}
                                {player && <td>{player.Assists}</td>}
                                {player && <td>{player.Points}</td>}
                            </tr>
                    </tbody>
                </table>
            </div>
            <div className="row text-center">
                <div className="col">
                    <button className="button">Compare</button>
                </div>
                <div className="col">
                    <button className="button">Chat</button>
                </div>
            </div>
        </div>
    );
}
 
export default Compare;