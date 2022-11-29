import React from "react";

const CustomTable = ({ thead__count, tbody__count }) => {
  var head = ["Company", "Country", "Contact"];
  var data = [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    },
    {
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    },
    {
      userId: 1,
      id: 6,
      title: "dolorem eum magni eos aperiam quia",
      body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
    },
    {
      userId: 1,
      id: 7,
      title: "magnam facilis autem",
      body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
    },
    {
      userId: 1,
      id: 8,
      title: "dolorem dolore est ipsam",
      body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
    },
    {
      userId: 1,
      id: 9,
      title: "nesciunt iure omnis dolorem tempora et accusantium",
      body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
    },
    {
      userId: 1,
      id: 10,
      title: "optio molestias id quia eum",
      body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
    },
    {
      userId: 2,
      id: 11,
      title: "et ea vero quia laudantium autem",
      body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
    },
    {
      userId: 2,
      id: 12,
      title: "in quibusdam tempore odit est dolorem",
      body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
    },
  ];
  return (
    //       <div className="flex flex-col">
    //          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    //             <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
    //                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
    //                   <table className="min-w-full divide-y divide-gray-200">
    //                      <thead className="bg-gray-50">
    //                         <tr>{thead__count?.map((thead_data, i) =>
    //                            (
    //                               <th key={i} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //                                  {thead_data?.name}
    //                               </th>
    //                            ))}
    //                            <th scope="col" className="relative px-6 py-3">
    //                               <span className="sr-only">Edit</span>
    //                            </th>
    //                         </tr>
    //                      </thead>
    //                      <tbody>
    //                         {tbody__count?.map((tbody_data, i) => (
    //                            <tr key={i} className={i % 2 == 0 ? "bg-white" : "bg-gray-50"}>
    //                               {tbody_data?.children.map((tbody_element, i) => (
    //                                  <td key={i} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
    //                                     {tbody_element.name}
    //                                  </td>
    //                               ))}
    //                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
    //                               <a href="#fefe" className="text-indigo-600 hover:text-indigo-900">Edit</a>
    //                            </td>
    //                         </tr>
    // ))}
    //                      </tbody>
    //                   </table>
    //                </div>
    //             </div>
    //          </div>
    //       </div>
    <>
      <table className="w-[90%] mx-auto shadow-lg bg-white rounded-xl">
        <tr>
          {head?.map((e, i) => (
            <th class="bg-blue-100 border text-left px-8 py-4">{e}</th>
          ))}
        </tr>
        {data?.map((e, i) => (
          <tr>
            <td class="border px-8 py-4">{e.id}</td>
            <td class="border px-8 py-4">{e.title}</td>
            <td class="border px-8 py-4">{e.body}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default CustomTable;
