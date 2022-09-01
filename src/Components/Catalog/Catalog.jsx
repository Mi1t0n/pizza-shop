import PizzaTemplate from './PizzaTemplate/PizzaTemplate';
import CategoryNav from './CategoryNav/CategoryNav';
import {useEffect, useState} from 'react';
import {getCategories, loadPage} from '../../firebase';
import SkeletonPack from './SkeletonPack/SkeletonPack';

const Catalog = ({dispatchInCart, inCart}) => {

    const [categories, setCategories] = useState([]);
    const [category, changeCategory] = useState('Все');
    const [sortBy, setSortBy] = useState('Популярности');

    const [loading, changeLoading] = useState(false);
    const [pizzas, setPizzas] = useState([
        {
            name: '',
            picture: '',
            price: {},
            notAvailableItems: [],
            count: 0
        }
    ]);
    useEffect(() => {
        changeLoading(true);

        loadPage()
            .then(res => setPizzas(res));

        getCategories()
            .then(res => setCategories(res.categories));

    }, []);
    useEffect(() => {
        loadPage(sortBy).then(res => setPizzas(res));
    }, [sortBy]);
    useEffect(() => {
        changeLoading(true);
        setTimeout(() => changeLoading(false), 1000);
    }, [pizzas, sortBy, category]);

    return (
        <>
            <CategoryNav categories={categories} changeCategory={changeCategory} category={category} sortBy={sortBy}
                         setSortBy={setSortBy}/>
            <div className="grid grid-cols-4 ml-[82px] mr-[53px] mt-[35px]">
                {
                    loading ?
                        <SkeletonPack/>
                        :
                        pizzas
                            .filter(el => category === 'Все' ? true : categories[el.category] === category)
                            .map(pizza => <PizzaTemplate pizza={pizza} dispatchInCart={dispatchInCart} inCart={inCart}
                                                         key={pizza.name}/>)
                }
            </div>
        </>
    );
};
export default Catalog;
