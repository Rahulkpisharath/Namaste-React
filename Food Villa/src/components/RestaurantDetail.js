import { useEffect,useState } from "react";
import { json, useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../constants";
import Shimmer from "./Shimmer";

const RestaurantDetail=()=>{
    const params = useParams();
    //Object Destructing Method
    const { resId } = params;
    const [restaurant, setRestaurant] = useState({});
    console.log(params);

    useEffect(()=>{
            getRestaurantInfo()
    },[])

    async function getRestaurantInfo() {
        const data= await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=8.573073&lng=76.875569&restaurantId=" + resId);
        const json= await data.json();
        setRestaurant(json.data.cards[0].card.card.info);
        console.log(json);
    }


    return (!restaurant)?<Shimmer/> : (
        <div>
            <h1>Restaurant ID: {resId}</h1>
            <h2>Restaurant Name: {restaurant.name}</h2>
            <img src={IMG_CDN_URL + restaurant.cloudinaryImageId}/>
        </div>
    )
}

export default RestaurantDetail;