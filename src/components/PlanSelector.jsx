import React from "react";

export default function PlanSelector() {
    
  
    return (
        <div className=''>
            <form action="" className='text-md'>
                <div className='bg-base-300 p-2'>
                    <div className='flex items-center gap-2'>
                        <input type="radio" name="radio-1" className="radio radio-sm" />
                        <label htmlFor="">Plan A</label>
                    </div>
                    <div className='flex gap-1 py-1'>
                        <p className='w-3/2 bg-base-100 pl-2 py-2'>Plan</p>
                        <p className='w-1/3 bg-base-100 pl-2 py-2'>Spent Amount ($)</p>
                        <p className='w-1/3 bg-base-100 pl-2 py-2'>Profit (%)</p>
                    </div>
                    <div className='flex gap-1 py-1'>
                        <div className='w-3/2 bg-base-100 pl-2 py-2'>Plan</div>
                        <div className='w-1/3 bg-base-100 pl-2 py-2 flex justify-center gap-2'>
                            <p className='badge badge-primary'>500</p>
                            -
                            <p className='badge badge-primary'>500</p>
                        </div>
                        <div className='w-1/3 bg-base-100 pl-2 py-2'>40.00%</div>
                    </div>
                </div>
            </form>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="bg-base-200">
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
}
