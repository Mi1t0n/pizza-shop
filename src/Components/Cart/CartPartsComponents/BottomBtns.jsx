const BottomBtns = ({countAllItems,allPrice}) => (
    <div className="flex justify-between mb-[40px]">
        <div className="flex">Всего пицц : <span
            className="pl-[5px] font-[700] text-[22px] leading-[27px]">{countAllItems} шт</span></div>
        <div className="flex ">Сумма заказа : <span
            className="pl-[5px] font-[700] text-[22px] leading-[27px] text-[#FE5F1E]">{allPrice} ₽</span>
        </div>
    </div>
);
export default BottomBtns;