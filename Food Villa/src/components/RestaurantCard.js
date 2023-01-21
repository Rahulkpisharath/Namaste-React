import { IMG_CDN_URL } from '../../constants';

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, area, avgRating }) => {
    return (
        <div className='restaurant'>
            <a href='/' className='item-link'>
                <div>
                    <img className='width-100' src={IMG_CDN_URL + cloudinaryImageId} />
                    <h3 className='h3'>{name}</h3>
                    <h4 className='h4'>{area}</h4>
                    <h5 className='h5'>{cuisines.join(", ")}</h5>
                    <p className='tag-span'>{avgRating}</p>
                </div>
            </a>

        </div>

    )
}

export default RestaurantCard;