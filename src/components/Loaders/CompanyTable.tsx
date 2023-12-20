import React from "react";

const CompanyTable = () => {
    return (
        <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
            <div className="w-full">
                <div className="flex space-x-4 justify-end">
                    {Array.from({ length: 3 }, (_, index) => <div key={index}
                        className="h-8 bg-gray-200 rounded dark:bg-gray-700 w-44 mb-4" />)}
                </div>

                <div className="h-8 bg-gray-200 dark:bg-gray-700 w-full mb-4" />
                {Array.from({ length: 8 }, (_, index) => <div key={index}
                    className="h-1 bg-gray-200 dark:bg-gray-700 w-full my-12" />)}
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    );
};

export default CompanyTable;
