import { useState, useEffect } from "react";
import { restaurantList } from "../../constants";
import RestaurantCard from "../components/RestaurantCard";
import Shimmer from '../components/Shimmer';

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
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.573073&lng=76.875569&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setAllrestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilterdRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    return allrestaurants.length == 0 ? (<Shimmer />) : (
        <div className="container">
            <div className="search_wrapper pos-relative mg-tb">
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
            <div className="d-flex justify-content-between card-wrapper">
                {filteredRestaurants.map((restaurant) => {
                    return (
                        <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                    );
                })}
            </div>
        </div>
    );
};

export default Body;
