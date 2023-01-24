import { useState, useEffect } from "react";
import { restaurantList, RESTAURANTS_LIST_API } from "../../constants";
import RestaurantCard from "../components/RestaurantCard";
import Shimmer from '../components/Shimmer';
import {Link} from 'react-router-dom';

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((res) =>
        res.data.name.includes(searchText)
    );
    return filterData;
}

const Body = () => {
    const [allrestaurants, setAllrestaurants] = useState([]);
    const [filteredRestaurants, setFilterdRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("Search Item");
    //  console.table(restaurants);

    useEffect(() => {
        getRestaurants();
    }, []);


    async function getRestaurants() {
        const data = await fetch(RESTAURANTS_LIST_API);
        const json = await data.json();
        setAllrestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilterdRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    return allrestaurants.length == 0 ? (<Shimmer />) : (
        <div className="container mg-top-25">
            <div className="d-flex justify-content-between align-items-center">
                <h2 className="flex-50">Restaurants</h2>
                <div className="search_wrapper pos-relative flex-50">
                <input
                    type="text"
                    className="search_input"
                    placeholder="Search Item"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                {/* <span class="locate_me">
                    <i class="fa fa-crosshairs" aria-hidden="true"></i> Locate Me
                </span> */}
                <button className="btn btn-submit"
                    onClick={() => {
                        const data = filterData(searchText, allrestaurants);
                        setFilterdRestaurants(data);
                    }}>Search</button>
            </div>
            </div>
            
            <div className="d-flex justify-content-between card-wrapper mg-top-25">
                {filteredRestaurants.map((restaurant) => {
                    return (
                        <Link className="restaurant-card" to={'/restaurant/'+ restaurant.data.id}>
                            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />            
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Body;
