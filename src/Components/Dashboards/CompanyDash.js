import React from "react";
import Layout from "../Layout/Layout";

const CompanyDash = () => {
  return (
    <Layout>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg border-2 border-gray-500 m-8">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-lg text-base">
                Sr no:
              </th>
              <th scope="col" className="px-6 py-3 text-lg text-base">
                Indivisual Name:
              </th>
              <th scope="col" className="px-6 py-3 text-lg text-base">
                Phone Number:
              </th>
              <th scope="col" className="px-6 py-3 text-lg text-base">
                Email id:
              </th>
              <th scope="col" className="px-6 py-3 text-lg text-base">
                Address:
              </th>
              <th scope="col" className="px-6 py-3 text-lg text-base">
                View More Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white ">
              <th className="px-6 py-4">1</th>
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap  text-base"
              >
                Alok Joshi
              </th>
              <td className="px-6 py-4 text-base">9876543210</td>
              <td className="px-6 py-4 text-base">alok@gmail.com</td>
              <td className="px-6 py-4 text-base">Alok Apartments, Bibvewadi, Pune</td>
              <td className="px-6 py-4 text-base">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-6"
                >
                  View
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default CompanyDash;
