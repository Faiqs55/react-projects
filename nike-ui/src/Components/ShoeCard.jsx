import React from 'react'

const ShoeCard = ({imgURL, changeBigShoeIMG, bigShoeIMG}) => {

    const handleClick = () => {
        if(bigShoeIMG !== imgURL.bigShoe){
            changeBigShoeIMG(imgURL.bigShoe)
        }
    }

  return (
    <div className={`border-2 rounded-xl ${bigShoeIMG === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1 hover:scale-[1.1] ease-in-out transition-all`} onMouseEnter={handleClick}>
        <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
            <img src={imgURL.thumbnail} width={127} height={103} className='object-contain' alt="" />
        </div>
    </div>
  )
}

export default ShoeCard