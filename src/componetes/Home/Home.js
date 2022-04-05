import React from 'react';
import CoustomReview from '../CoustomReview/CoustomReview';
import './Home.css'
const Home = () => {
    return (
        <div className="mt-10 mb-10">
          
               
               <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center'>
           <div className='p-5 lg:mt-10'>
               <h2 className='text-3xl font-bold px-10'>2022 Lamborghini Aventador
                </h2>
                <h2 className="text-3xl pt-5 px-10 font-bold text-indigo-600">Lamborghini Aventador models
</h2>
                <p className='flex justify-center text-justify px-10 pt-5 desc'>A supercar that holds two people, the 2022 Lamborghini Aventador is available as a coupe or a convertible. It comes only in LP 780-4 Ultimae specification, equipped with a 6.5-liter V12 engine (769 horsepower, 531 lb-ft of torque). A seven-speed single-clutch automatic transmission delivers the power to all four wheels.</p>

                <button className=' mt-5 mx-10 bg-indigo-200 rounded p-3 font-bold'>
                    live Demo
                </button>
               </div>

               <div> 
                   <img className="mx-10 img-size"
                   src="https://images.unsplash.com/photo-1630312465536-5c6b1f76dc3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhbWJvcmdoaW5pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
               </div>
           </div>

           <CoustomReview />
        </div>
    );
};

export default Home;