import React from 'react'

const CustomTable = ({ thead__count, tbody__count }) => {
   return (
      <div className="flex flex-col">
         <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
               <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                     <thead className="bg-gray-50">
                        <tr>{thead__count?.map((thead_data, i) =>
                           (
                              <th key={i} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                 {thead_data?.name}
                              </th>
                           ))}
                           <th scope="col" className="relative px-6 py-3">
                              <span className="sr-only">Edit</span>
                           </th>
                        </tr>
                     </thead>
                     <tbody>
                        {tbody__count?.map((tbody_data, i) => (
                           <tr key={i} className={i % 2 == 0 ? "bg-white" : "bg-gray-50"}>
                              {tbody_data?.children.map((tbody_element, i) => (
                                 <td key={i} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {tbody_element.name}
                                 </td>
                              ))}
                           <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#fefe" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                           </td>
                        </tr>
))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
   )
}

export default CustomTable