import React from 'react'
import RightContent from './RightContent'
import LeftContent from './LeftContent'

const Page1Content = (props) => {
  return (
    <div className='py-3 pb-16 flex items-center gap-10 px-18 h-[90vh] w-full'>
    <LeftContent/>
    <RightContent users={props.user} />
    </div>
  )
}

export default Page1Content
