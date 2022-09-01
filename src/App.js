import {Route, Routes} from 'react-router-dom';
import {useEffect, useReducer, useState} from 'react';
import Logo from './Components/Logo/Logo';
import CartBtn from './Components/Cart/CartBtn/CartBtn';
import Cart from './Components/Cart/Cart';
import Catalog from './Components/Catalog/Catalog';
import {actions, reducer} from './reducers/cart_reducer';

const App = () => {
    const [inCart, dispatchInCart] = useReducer(reducer, []);

    const allPrice = inCart.reduce((accum, curr) => accum + curr.price * curr.count, 0);
    const allCount = inCart.reduce((accum, curr) => accum + curr.count, 0);

    useEffect(()=>{
        let cart = JSON.parse(localStorage.getItem('cart'))
        dispatchInCart({type:actions.SET_CART,cart})
    },[])


    return (
        <div className="pb-[5px]">
            <header className=" w-[1225px] flex justify-between pt-[49px] ml-[77px] ">
                <Logo/>
                <Routes>
                    <Route path="/" element={<CartBtn allCount={allCount} allPrice={allPrice}/>}/>
                </Routes>
            </header>
            <Routes>
                <Route path="/" element={<Catalog dispatchInCart={dispatchInCart} inCart={inCart}/>}/>
                <Route path="/cart"
                       element={<Cart inCart={inCart} dispatchInCart={dispatchInCart} countAllItems={allCount}
                                      allPrice={allPrice}/>}
                />
            </Routes>
        </div>
    );
};

export default App;
