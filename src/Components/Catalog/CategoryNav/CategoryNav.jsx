import arrow from '../../../assets/arrow.svg';
import {useState} from 'react';
import {sortTypes} from './sortType';

const CategoryNav = ({categories, category, changeCategory, setSortBy, sortBy}) => {
    const [menuStatus, changeStatus] = useState(false);

    const allSorts = sortTypes.map(sortName =>
        <li className={`p-1 cursor-pointer ${sortBy === sortName ? 'text-[#FE5F1E]' : 'text-[#000000]'}`}
            onClick={() => setSortBy(sortName)} key={sortName}
        >
            {sortName}
        </li>
    );

    const allCategories = categories.map(name =>
        <li onClick={() => changeCategory(name)}
            key={name}
            className={`btn-category ${category === name ? 'bg-[#282828] text-[#FFFFFF]' : ''}`}
        >
            <p className="h-[16px] py-[12px]">{name}</p>
        </li>
    );

    return (
        <>
            <div className="w-[1225px] mt-[81px] mb-[32px] pl-[67px] flex  justify-between ">
                <ul className="flex leading-[19px] gap-[9px] w-[828px]">
                    {allCategories}
                </ul>
                <div className=" w-[240px] h-[20px] grid grid-cols-[10px,120px,1fr] cursor-pointer my-[12px] relative"
                     onClick={() => changeStatus(!menuStatus)}
                >
                    <img src={arrow} className={`w - [10px] my-[6.5px] ${menuStatus && 'rotate-180'} transition-all`}/>
                    <p className=" font-[700] text-[14px] leading-[17px] ml-[7px]">Сортировка по :</p>
                    <div className="text-[#FE5F1E] font-[400] text-[14px] pl-[5px] leading-[17px]">
                        {sortBy}
                        {
                            menuStatus
                            &&
                            <div className="relative  top-[15px] w-fit h-fit p-1 bg-white rounded-[10px]
                                 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] left-[-15px]"
                            >
                                <ul>{allSorts}</ul>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <p className="font-[700] text-[32px] pl-[67px] ">{category}</p>
        </>
    );
};

export default CategoryNav;