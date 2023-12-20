"use client"
import BgDesign from "@/components/BgDesign";
import { useEffect, useState } from "react";
import "../styles/globals.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompany } from '../../app/redux/actions/companyActions';
import { RootState } from '../../app/redux/store';
import Pagination from "../components/Pagination/Pagination";
import Filter from "@/components/Filter/Filter";
import CompanyTable from "@/components/Loaders/CompanyTable";

const Home: React.FC = () => {

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.company);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {

    let new_params: any = { page: currentPage }
    dispatch(fetchCompany(new_params));

  }, [dispatch, currentPage]);


  // if (loading) {
  //   return <div>
  //     <CompanyTable />
  //   </div>;
  // }

  return <div className="flex flex-col items-center justify-center">
    <div className="flex flex-col items-center space-y-3 w-full">
      <BgDesign />

      <div className="py-3 w-full">
       
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">

          {loading ? <div>
            <CompanyTable />
          </div> : <>
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold leading-tight">Companies</h2>
                <Filter />
              </div>
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">

              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:text-gray-200 dark:bg-gray-700 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Company Name
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 dark:text-gray-200 dark:bg-gray-700 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Address 1
                    </th>
                    <th className="px-5 py-3 border-b-2 dark:text-gray-200 dark:bg-gray-700 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Address 2
                    </th>
                    <th className="px-5 py-3 border-b-2 dark:text-gray-200 dark:bg-gray-700 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Zip
                    </th>
                    <th className="px-5 py-3 border-b-2 dark:text-gray-200 dark:bg-gray-700 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-5 py-3 border-b-2 dark:text-gray-200 dark:bg-gray-700 border-gray-200 bg-gray-100" >Action</th>
                  </tr>
                </thead>
                <tbody>

                  {data?.companys?.data?.map((item: any, index: number) => <tr key={index}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img className="w-full h-full rounded-full" src={item?.company_logo_link} />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {item?.company_name}
                          </p>
                          <p className="text-gray-600 whitespace-no-wrap">{item?.company_phone}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{item?.address1}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{item?.address2}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{item?.zip}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        {item?.company_status === '1' ? <>
                          <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full" />
                          <span className="relative">Active</span>
                        </>
                          :
                          <>
                            <span aria-hidden className="absolute inset-0 bg-red-200 opacity-50 rounded-full" />
                            <span className="relative">Inactive</span>
                          </>}
                      </span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                      <button type="button" className="inline-block text-gray-500 hover:text-gray-700">
                        <svg className="inline-block h-6 w-6 fill-current" viewBox="0 0 24 24">
                          <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                        </svg>
                      </button>
                    </td>
                  </tr>)}
                </tbody>
              </table>
              <div className="px-5 py-1 border-b-2 border-gray-200 bg-gray-100 dark:text-gray-200 dark:bg-gray-700 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider flex justify-end rounded-b-lg">
                <Pagination
                  className="pagination-bar"
                  currentPage={currentPage}
                  totalCount={data?.companys?.total}
                  pageSize={data?.companys?.per_page}
                  onPageChange={(page: any) => setCurrentPage(page)}
                />
              </div>
            </div>
          </>}






          {/* <ReactPaginate
            pageCount={companies?.companyData?.companys?.total/5} // Replace with the actual number of pages
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            onPageChange={handlePageChange}
            containerClassName={'pagination'}
            activeClassName={'active'}
          /> */}
        </div>
      </div>
    </div>
  </div>
}

export default Home;
