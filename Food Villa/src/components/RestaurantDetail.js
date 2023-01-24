import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { IMG_CDN_URL, RESTAURANT_MENU_API } from "../../constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const RestaurantDetail = () => {
    const params = useParams();
    //Object Destructing Method
    const { resId } = params;
    const [restaurant, setRestaurant] = useState({});
    console.log(params);
    console.log("rendering!!!");

    useEffect(() => {
        getRestaurantInfo();
        console.log("UseEffect is calling!!!");
    }, [])

    async function getRestaurantInfo() {
        const data = await fetch(RESTAURANT_MENU_API + resId);
        const json = await data.json();
        setRestaurant(json.data.cards[0].card.card.info);
        console.log(json);
    }


    return (!restaurant) ? <Shimmer /> : (
        <div className="container mg-top-25">
            <div className="breadcrump">
                <Link to='/'>Home</Link>
                /<span>{restaurant.id}</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <div className="flex-50">
                    <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
                </div>
                <div className="flex-50">
                    <h1>{restaurant.name}</h1>
                    <h6>{restaurant.city}</h6>
                    <h4>{restaurant.avgRatingString}</h4>
                    <h6></h6>
                    <br />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    <br />
                    <h3>{restaurant.costForTwoMessage}</h3>
                    {/* <h5 className='h5'>{restaurant.cuisines.join(" ")}</h5> */}
                </div>
            </div>


        </div>
    )
}

export default RestaurantDetail;