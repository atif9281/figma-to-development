"use client";
import { useState } from "react";

export default function Settings() {

    const [activeTab, setActiveTab] = useState('users');

    const handleTabClick = (tab: any) => {
        setActiveTab(tab);
    };

    return (
        <>

            <div className="w-5/6  flex flex-col justify-start px-8 pt-5 backgroundColor">
                <div className="flex flex-row text-xl font-bold darkGreen justify-evenly">

                    <div className=" basis-10/12 ">
                        <div className="heading2">
                            Withdrawals
                        </div>






                        <div className="mt-2">
                            <div className="rounded rounded-t-none">



                                <div>
                                    <ul className="flex flex-wrap text-xs font-medium text-center" role="tablist">
                                        {['Users', 'Company', 'Banks', 'Currencies', 'Restrictions', 'Limits', 'Messages'].map((tab) => (
                                            <li role="presentation" key={tab}>
                                                <button
                                                    className={`inline-block px-4 py-1 rounded rounded-b-none${activeTab.toLowerCase() === tab.toLowerCase()
                                                        ? 'link bg-white'
                                                        : 'link tabBackGround '
                                                        }`}
                                                    onClick={() => handleTabClick(tab.toLowerCase())}
                                                    type="button"
                                                    role="tab"
                                                    aria-controls={tab.toLowerCase()}
                                                    aria-selected={activeTab.toLowerCase() === tab.toLowerCase()}
                                                >
                                                    {tab}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                    <div>
                                        <div className={`${activeTab === 'users' ? '' : 'hidden'} p-4 rounded rounded-b-none bg-white dark:bg-gray-800`} id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                            <div className="flex flex-row justify-end my-auto h-[60vh]">
                                                <div className="text-sm font-normal text-white">
                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-6 w-16 py-1">ADD</button>
                                                    <button type="button" className=" bg-red-600 rounded px-1 w-16 h-6 py-1">DELETE</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`${activeTab === 'company' ? '' : 'hidden'} p-4 rounded bg-white dark:bg-gray-800`} id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                                            <div className="flex flex-row justify-end my-auto h-[60vh]">
                                                <div className="text-sm font-normal text-white">
                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-6 w-16 py-1">ADD</button>
                                                    <button type="button" className=" bg-red-600 rounded px-1 w-16 h-6 py-1">DELETE</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`${activeTab === 'banks' ? '' : 'hidden'} p-4 rounded bg-white dark:bg-gray-800`} id="settings" role="tabpanel" aria-labelledby="settings-tab">
                                            <div className="flex flex-row justify-end my-auto h-[60vh]">
                                                <div className="text-sm font-normal text-white">
                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-6 w-16 py-1">ADD</button>
                                                    <button type="button" className=" bg-red-600 rounded px-1 w-16 h-6 py-1">DELETE</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`${activeTab === 'currencies' ? '' : 'hidden'} p-4 rounded bg-white dark:bg-gray-800`} id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
                                            <div className="flex flex-row justify-end my-auto h-[60vh]">
                                                <div className="text-sm font-normal text-white">
                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-6 w-16 py-1">ADD</button>
                                                    <button type="button" className=" bg-red-600 rounded px-1 w-16 h-6 py-1">DELETE</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`${activeTab === 'restrictions' ? '' : 'hidden'} p-4 rounded bg-white dark:bg-gray-800`} id="notifications" role="tabpanel" aria-labelledby="notifications-tab">
                                            <div className="flex flex-row justify-end my-auto h-[60vh]">
                                                <div className="text-sm font-normal text-white">
                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-6 w-16 py-1">ADD</button>
                                                    <button type="button" className=" bg-red-600 rounded px-1 w-16 h-6 py-1">DELETE</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`${activeTab === 'limits' ? '' : 'hidden'} p-4 rounded bg-white dark:bg-gray-800`} id="messages" role="tabpanel" aria-labelledby="messages-tab">
                                            <div className="flex flex-row justify-end my-auto h-[60vh]">
                                                <div className="text-sm font-normal text-white">
                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-6 w-16 py-1">ADD</button>
                                                    <button type="button" className=" bg-red-600 rounded px-1 w-16 h-6 py-1">DELETE</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`${activeTab === 'messages' ? '' : 'hidden'} p-4 rounded bg-white dark:bg-gray-800`} id="activity" role="tabpanel" aria-labelledby="activity-tab">
                                            <div className="flex flex-row justify-end my-auto h-[60vh]">
                                                <div className="text-sm font-normal text-white">
                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-6 w-16 py-1">ADD</button>
                                                    <button type="button" className=" bg-red-600 rounded px-1 w-16 h-6 py-1">DELETE</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>




                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}