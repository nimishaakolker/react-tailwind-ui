import React from 'react'

const RightCardContent = (props) => {
  console.log(props.color);
  return (
    <div>
      <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-end'>

          <p className='text-shadow-2xs text-xl text-gray-200  mb-5'>Lorem ipsum dolor sit,Lorem ipsum dolor sit amet. amet consecteturbus aliquam rerum reiciendis! Quidem quasi eum aut aspernatur repellendus!</p>
     
        <div className='flex justify-between'>
          <button
          className='text-white  bg-orange-400  font-medium px-8 py-2 rounded-full'>{props.tag}</button>
          <button className='text-white font-medium px-3 py-2 rounded-full bg-orange-400'><i className='ri-arrow-right-line'></i></button>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent
