import React from "react";

interface Props {
    title: string,
}
const Th: React.FC<Props> = ({ title }) => {
    return (
        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:text-gray-200 dark:bg-gray-700 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
            {title}
        </th>
    );
};

export default Th;
