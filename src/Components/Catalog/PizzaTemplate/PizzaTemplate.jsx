import Buttons from './Buttons/Buttons';

const PizzaTemplate = ({pizza,dispatchInCart,inCart}) => {
    return (
        <div className="w-[280px] h-[460px] mb-[65px]">
            <img src={pizza.picture} className="w-[260px] pl-[15px] "/>
            <p className="font-[800] text-[20px] text-center mt-[11px]">{pizza.name}</p>
            <Buttons {...pizza} inCart={inCart} dispatchInCart={dispatchInCart} />
        </div>
    );
};

export default PizzaTemplate;