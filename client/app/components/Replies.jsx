import React from 'react'
import usePosts from '../zustand/posts/posts'

function Replies() {
   const {setRepliPost} = usePosts()

  const handleClick = async () => {
    setRepliPost()
    try { 
      
    } catch (error) {
      
    }
  }
  return (
    < >
    <div className='w-full h-10  active:border-b-[1px]'>

        <button className='w-full h-full' onClick={handleClick}>Replies</button>
    </div>
    </>
  )
}

export default Replies