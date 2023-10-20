import "./overview.scss"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import locationsData from "../../locationsData";
import { useEffect } from 'react';
import { useState } from 'react';

function Overview({visibleMarkers}) {


    const [isFav, setIsFav] = useState();

    
    const newArrayMarkers = []

    for (var i = 0; i < visibleMarkers.length; i++) {

        newArrayMarkers.push(visibleMarkers[i]);
       
    }

    // const handleClick = (id) =>
    // [...newArrayMarkers].map(marker =>
    //     ({
    //         ...marker,
    //         favorite: marker.favorite !== (marker.id===id)
    //     })
    // )
    // console.log("clicked")


    // const handleClick = (index) => {
    //     setIsFav(prevState => 
    //         prevState.map(newArrayMarkers => ({...newArrayMarkers, favorite: !newArrayMarkers.favorite}))
    //     );
    // };

    // this.setState(prevState => {
    //     prevState.week.map(day => {
    //       const tempDay = {...day};
    //       if (target.includes(day.en)) {
    //         if (target.includes('morn')) {
    //           tempDay.morn = !day.morn;
    //         }
    //         if (target.includes('night')) {
    //           tempDay.night = !day.night;
    //         }
    //       }
    //       return tempDay;
    //     });
    //   });

    

    return (
      
       newArrayMarkers.map((marker, index) => {

        return (
          
            <div className="cards-container">
                <div className="cards">
                    <Card style={{ width: '15rem' }}>
                    <div className="card-image">
                    <Card.Img variant="top" src={marker.imgURL} />
                    <div className="heart-favorite">
                        {/* {marker.favorite ? <i className="fa-solid fa-heart fa-2xl" onClick={handleFavClick}></i> : <i className="fa-regular fa-heart fa-2xl" onClick={handleFavClick} ></i> } */}
                        {marker.favorite ? <i className="fa-solid fa-heart fa-2xl"></i> : <i className="fa-regular fa-heart fa-2xl"></i>}

                    </div>
                    </div>
                    <Card.Body>
                        <Card.Title>{marker.title}</Card.Title>
                        <Card.Text>
                        {marker.text}
                        </Card.Text>
                        <Button variant="primary">{`${marker.price} $`}</Button>
                    </Card.Body>
                    </Card>
                </div>
                <br></br><br></br><br></br>
            </div>
        
        )
    }))
}
    
export default Overview;


