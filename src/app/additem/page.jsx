import React from 'react'

const AddItem = () => {
  return (
    <>
      <form >
      <div className="h-[80vh] flex justify-center items-center ">
        <div className=" bg-white shadow-2xl rounded-lg h-[600px] w-[450px] box-border text-center  flex flex-col justify-center items-center" style={{ margin: '15px 0 0 0', padding: '20px 30px', }}>
          <p className=" font-sans text-3xl font-bold" style={{ margin: '10px 0 30px 0' }}>Add Items </p>
          <div className="w-full flex flex-col gap-4 mb-3.5">
            <input type="name" className="text-base rounded-full border border-gray-400 outline-none box-border p-3.5" placeholder="Product Name" />
            <input type="Category" className="text-base rounded-full border border-gray-400 outline-none box-border p-3.5" placeholder="Category" />
            <input type="description" className="text-base rounded-full border border-gray-400 outline-none box-border p-3.5" placeholder="Description" />
            <input type="price" className="text-base rounded-full border border-gray-400 outline-none box-border p-3.5" placeholder="Price" />
            <input type="file" className="text-base rounded-full border border-gray-400 outline-none box-border p-3.5" placeholder="image" />
           
            <button className="p-2.5 font-sans rounded-full border-0 outline-none bg-teal-500 text-white text-base cursor-pointer shadow-md active:shadow-none hover:bg-teal-600">Submit</button>
            
          </div>

        </div>
      </div>
      </form>
    </>
  )
}

export default AddItem