import React from 'react';
import { NavLink } from 'react-router-dom'

const BaseBreadcrumbs = ({
    homeLink,
    pathList,
}) => {
    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
                <li>
                    <div>
                        <NavLink to={homeLink || '#'} className="text-blue-500 hover:text-blue-600">
                            {/* home */}
                            <svg className="flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                            {/* <span className="sr-only">Home</span> */}
                        </NavLink>
                    </div>
                </li>

                {Array.isArray(pathList) && pathList.map((path, i, arr) => (
                    <li key={i}>
                        <div className="flex items-center">
                            <svg className="flex-shrink-0 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                            </svg>
                            {arr.length === i + 1 ?
                                <div className="ml-4 text-sm font-medium text-gray-700">
                                    {path.path}
                                </div>
                                :
                                <NavLink to={path.link || '#'} className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">{path.path}</NavLink>
                            }
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default BaseBreadcrumbs;