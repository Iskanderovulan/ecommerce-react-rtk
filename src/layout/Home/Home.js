import React, { useEffect } from 'react';
import s from './Home.module.css'
import Item from '../../components/Item/Item';
import { getFavoritesAsync, getProductsAsync } from '../../redux/actions/action';
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {

    const dispatch = useDispatch()

    const { data } = useSelector(state => state.homeSlice)


    useEffect(() => {
        dispatch(getProductsAsync())
        dispatch(getFavoritesAsync())
    }, [dispatch])



    const items = data?.map(item =>
        <Item
            item={item}
            key={item._id}
        />
    )
    return (
        <section id={s.home}>
            <h2 className={s.homeText}>HOME</h2>
            <div className="container">
                <div className="row gy-4 row-cols-xl-4 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
                    {items}
                </div>
            </div>
        </section>
    );
};

export default Home;