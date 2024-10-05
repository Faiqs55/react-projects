import React from 'react'

const HeroCard = ({data}) => {
    
  return (
    <div className='text-white bg-gradient-to-t from-[#441132] to-[#140a22] rounded-lg p-5 flex flex-col gap-2'>
        <img className='max-h-[60px] mb-2 self-start' src={data.img} alt="" />
        <h1 className='text-lg font-semibold'>{data.title.split(' ')[0]} <br /> {data.title.split(' ')[1]}</h1>
        <p className='text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae libero id voluptatem dolorum nobis, esse illum reiciendis ipsa modi aliquam?Lorem ipsum dolor sit amet.</p>
    </div>
  )
}

export default HeroCard