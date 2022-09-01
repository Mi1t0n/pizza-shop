export const DoughBtns = (notAvailableItems, userChoice, setChoice) =>
    ['Тонкое', 'Традиционное'].map(dough =>
        <button
            key={dough}
            disabled={notAvailableItems.includes(dough)}
            className={`w-[132px] h-[32px] mx-[5px] cursor-pointer
                            ${userChoice.dough === dough && 'bg-[#FE5F1E] text-white rounded-[15px]'}
                            ${notAvailableItems.includes(dough) && 'bg-[#2C2C2C]/[0.2] text-white rounded-[15px] cursor-not-allowed '}
                            `}

            onClick={() => setChoice({...userChoice, dough})}
        >{dough}</button>
    );

export const sizeBtns = (notAvailableItems, userChoice, setChoice) =>
    ['26', '30', '40'].map(size =>
        <button key={size}
                disabled={notAvailableItems.includes(size)}
                className={`w-[86px] h-[32px] mx-[5px] cursor-pointer
                            ${userChoice.size === size ? 'bg-[#FE5F1E] text-white rounded-[15px]' : ''}
                            ${notAvailableItems.includes(size) ? 'bg-[#2C2C2C]/[0.2] text-white rounded-[15px] cursor-not-allowed ' : ''}
                            `}
                onClick={() => setChoice({...userChoice, size})}
        >{size}</button>
    );
