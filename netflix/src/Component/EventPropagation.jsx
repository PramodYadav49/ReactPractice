import React from 'react'

export const EventPropagation = () => {

    const handleGrandParent =()=>{
        console.log("grandparent Click")
    }
    const handleParentClick =()=>{
        console.log("parent Click")
    }
    const handleChildClick =()=>{
        console.log("Child Click")
    }
  return (
    <section className='flex items-center justify-center'>

<div className="h-64 w-64 border bg-red-64 flex items-center justify-center" onClick={handleGrandParent}>
  <div className="border h-48 w-48 flex items-center justify-center" onClick={handleParentClick}>
    <button className="border h-20 w-32  " onClick={handleChildClick}>
      Child Div
    </button>
  </div>
</div>



    </section>
  )
}
