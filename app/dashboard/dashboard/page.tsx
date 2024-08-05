export default function Data() {
    return (
        <>
            <div className="w-5/6  flex flex-col justify-start pt-5 backgroundColor">
                <div className="flex flex-row text-xl font-bold darkGreen justify-evenly">
                    
                    <div className=" basis-10/12 heading2 pl-0 md:pl-7 lg:pl-7 xl:pl-7 2xl:pl-7">Dashboard</div>

                </div>
                <div className="">
                    <div className="mt-4">
                        <div className="flex flex-row justify-evenly">
                            <div className="basis-4/12 linkBackground p-2 pb-3 rounded ">
                                <p className="text-xs font-normal text-white mb-2 pt-1"><text>Total Company Funds Under Management</text></p>
                                <sup className="text-white text-xs font-medium mr-1">$</sup><span className="activeLink">999,999,999,999,999.99</span>
                            </div>
                            <div className="basis-4/12 bg-white darkGreen p-2 pb-3 rounded">
                                <p className="text-xs font-normal text-black mb-2 pt-1"><text>Due To Trading Account</text></p>
                                <sup className="text-black text-xs font-medium mr-1">$</sup><span className="darkGreen">999,999,999,999,999.99</span>
                            </div>

                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="flex flex-row justify-evenly">
                            <div className="basis-4/12 skinBackground p-2 pb-3 rounded">
                                <p className="text-xs font-normal text-white mb-2 pt-1"><text>Unmatched Funds</text></p>
                                <sup className="text-white text-xs font-medium mr-1">$</sup><span className="text-white">999,999,999,999,999.99</span>
                            </div>
                            <div className="basis-4/12 bg-white darkGreen p-2 pb-3 rounded">
                                <p className="text-xs font-normal text-black mb-2 pt-1"><text>Due From Trading Account</text></p>
                                <sup className="text-black text-xs font-medium mr-1">$</sup><span className="darkGreen">999,999,999,999,999.99</span>
                            </div>

                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="flex flex-row justify-evenly">
                            <div className="basis-4/12 buttonColor p-2 pb-3 rounded">
                                <p className="text-xs font-normal text-white mb-2 pt-1"><text>Pending Release</text></p>
                                <sup className="text-white  text-xs font-medium mr-1">$</sup><span className="text-white">999,999,999,999,999.99</span>
                            </div>
                            <div className="basis-4/12 bg-white darkGreen p-2 pb-3 rounded">
                                <p className="text-xs font-normal text-black mb-2 pt-1"><text>Total Cash</text></p>
                                <sup className="text-black  text-xs font-medium mr-1">$</sup><span className="darkGreen">999,999,999,999,999.99</span>
                            </div>

                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="flex flex-row justify-evenly">
                            <div className="basis-4/12 darkBackground p-2 pb-3 rounded ">
                                <div className="text-xs font-normal text-white mb-2 flex flex-row justify-between"><text className="pt-1">Revenue (Month to Date)</text><div className="historyTimer"><img src="/images/historyTimer.png" alt=""  /></div></div>
                                <sup className="text-white  text-xs font-medium mr-1">$</sup><span className="activeLink">999,999,999,999,999.99</span>
                            </div>
                            <div className="basis-4/12 flex flex-row justify-between">
                                <div className="basis-2/5 darkBackground p-2 pb-3 rounded">
                                <div className="text-xs font-normal text-white mb-2 flex flex-row justify-between"><text className="pt-1">New Accounts</text><div className="historyTimer"><img src="/images/historyTimer.png" alt=""  /></div></div>
                                <sup className="text-white  text-xs font-medium mr-1">$</sup><span className="activeLink">999,999,99</span>
                                </div>
                                <div className="basis-2/5 darkBackground p-2 pb-3 rounded">
                                <div className="text-xs font-normal text-white mb-2 flex flex-row justify-between"><text className="pt-1 ">New Accounts</text><div className="historyTimer"><img src="/images/historyTimer.png" alt=""  /></div></div>
                                <sup className="text-white  text-xs font-medium mr-1">$</sup><span className="activeLink">999,999,99</span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}