import React from 'react';
import s from './Item.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addProductsAsync, toggleFavoriteAsync } from '../../redux/actions/action';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Item = ({ item }) => {

    const { loading } = useSelector(state => state.loadingErrorSlice)
    const { favorites } = useSelector(state => state.favoritesSlice) || []

    const status = favorites.reduce((acc, rec) => {
        const { product } = rec
        if (product._id === item._id) {
            return true
        }
        return acc

    }, null)

    const loadingPlus = loading.create?.[item._id] ? 'disabled' : null;


    const dispatch = useDispatch()
    return (
        <div className='col'>
            <div className={s.item__box}>
                <img src={item.img} alt="" />
                <div>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                </div>
                <button
                    onClick={() => dispatch(addProductsAsync(item._id))}
                    className={loadingPlus}
                >
                    Add To Cart
                </button>
                <div className={s.item__favorite} onClick={() => dispatch(toggleFavoriteAsync(item._id))}>
                    {status ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </div>
            </div>
        </div>
    );
};

export default Item;