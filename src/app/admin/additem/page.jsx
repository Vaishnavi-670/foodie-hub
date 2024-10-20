import { useFormik } from 'formik'
import { enqueueSnackbar } from 'notistack';
import React from 'react'

const AddItem = () => {
  const additemform = useFormik({
    initialValues:{
      name: '',
      category: '',
      description: '',
      price: '',
      image: ''
    },
    onSubmit: async(values, {setSubmitting, resetForm}) => {
      console.log(values);
      setSubmitting(true);
      const res = await fetch('http://localhost:5000/product/add',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        }
      );
      setSubmitting(false);
      if (res.status === 200) {
        enqueueSnackbar('Add Product Successfully', {variant:'success'});
      }
      else {
        enqueueSnackbar('Failed to add Product', {variant:'error'});
      }
    }
  })
  return (
    <>
    {/* AddItem */}
      <form onSubmit={additemform.handleSubmit}>
        <div className="h-[80vh] flex justify-center items-center ">
          <div className=" bg-white shadow-2xl rounded-lg h-[600px] w-[450px] box-border text-center  flex flex-col justify-center items-center" style={{ margin: '15px 0 0 0', padding: '20px 30px', }}>
            <p className=" font-sans text-3xl font-bold" style={{ margin: '10px 0 30px 0' }}>Add Items </p>
            <div className="w-full flex flex-col gap-4 mb-3.5">
              <input id='title' onChange={additemform.handleChange} value={additemform.values.title} type="title" className="text-base rounded-full border border-gray-400 outline-none box-border p-3.5" placeholder="Product title" />
              <input id='category' onChange={additemform.handleChange} value={additemform.values.category} type="Category" className="text-base rounded-full border border-gray-400 outline-none box-border p-3.5" placeholder="Category" />
              <input id='description' onChange={additemform.handleChange} value={additemform.values.description} type="description" className="text-base rounded-full border border-gray-400 outline-none box-border p-3.5" placeholder="Description" />
              <input id='price' onChange={additemform.handleChange} value={additemform.values.price} type="price" className="text-base rounded-full border border-gray-400 outline-none box-border p-3.5" placeholder="Price" />
              <input id='image' onChange={additemform.handleChange} value={additemform.values.image} type="file" className="text-base rounded-full border border-gray-400 outline-none box-border p-3.5" placeholder="image" />

              <button className="p-2.5 font-sans rounded-full border-0 outline-none bg-teal-500 text-white text-base cursor-pointer shadow-md active:shadow-none hover:bg-teal-600">Submit</button>

            </div>

          </div>
        </div>
      </form>
    </>
  )
}

export default AddItem