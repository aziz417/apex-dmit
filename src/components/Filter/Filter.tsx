import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompany } from '../../../app/redux/actions/companyActions';
import { RootState } from '../../../app/redux/store';
import Select from "../FormControl/Select";


const Filter = () => {
    const dispatch = useDispatch();
    const { params } = useSelector((state: RootState) => state.company);

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {

        let new_params: any = {
            ...params,
            [e.target.name]: e.target.value
        }
        //here page param delete
        delete new_params['page']
        // dispatch new params
        dispatch(fetchCompany(new_params));
    }

    // filter refresh function
    const refresh = () => {
        let params: any = { page: 1 }
        dispatch(fetchCompany(params));
    }

    // This object can be created by calling all company api
    const comanies = [
        { value: 'APEX Homes', label: 'APEX Homes' },
        { value: 'test company', label: 'test company' },
        { value: 'APEX Homes Mgt', label: 'APEX Homes Mgt' },
        { value: 'SD team', label: 'SD team' },
        { value: 'SQA Company 1', label: 'SQA Company 1' },
        { value: 'Test Project', label: 'Test Project' },
        { value: 'c1', label: 'c1' },
        { value: 'TestCompany', label: 'TestCompany' },
        { value: 'Helal Company', label: 'Helal Company' },
        { value: 'APEX Homes Mgt.', label: 'APEX Homes Mgt.' },
        { value: 'New Company', label: 'New Company' },
        { value: 'ABC Homes', label: 'ABC Homes' },
        { value: 'Company for Test Team', label: 'Company for Test Team' },
    ];

    //status options object
    const status = [
        { value: 1, label: 'Active' },
        { value: 0, label: 'Inactive' }
    ];

    return (
        <>
            <div className="sm:col-span-3 flex justify-end space-x-3 items-end  mb-2">
                <Select
                    onChange={handleSelectChange}
                    options={comanies}
                    name="company_name"
                    label="Company Name"
                    value={params?.company_name}
                />

                <Select
                    onChange={handleSelectChange}
                    options={status}
                    name="company_status"
                    label="Company Status"
                    value={params?.company_status}
                />

                <button onClick={refresh} className="flex items-center p-1 h-9 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">
                    <svg className="w-5 h-5 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                    <span className="mx-1">Refresh</span>
                </button>

            </div>
        </>
    );
};

export default Filter;
