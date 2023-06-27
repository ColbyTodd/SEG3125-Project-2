const HotPlayers = () => {
    return (  
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="https://www.hockeydb.com/ihdb/photos/dylan-larkin-2019-34.jpg" alt="First slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Dylan Larkin</h5>
                        <p>Detroit Red Wings</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="..." alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="..." alt="Third slide" />
                </div>
            </div>
        </div>
    );
}
 
export default HotPlayers