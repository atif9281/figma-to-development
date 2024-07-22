import Image from "next/image"
export default function Banks() {
    return (
        <>

            <div className="w-5/6  flex flex-col justify-start px-8 pt-5 backgroundColor">
                <div className="flex flex-row text-xl font-bold darkGreen justify-evenly">

                    <div className=" basis-10/12 ">
                        <div>
                            Banks
                        </div>
                        <div className="mt-2">
                            <div className="bg-white rounded">
                                <div className="flex flex-row justify-between p-4 pb-2">
                                    <div className="flex flex-row ">
                                        <div className="flex flex-row backgroundColor justify-center items-center mr-2 rounded h-5">
                                            <img className="w-4 h-4" src="/images/filter.png"></img>
                                            <p className="text-xs font-normal my-auto">Filter by country</p>
                                        </div>
                                        <div className="flex flex-row backgroundColor justify-center items-center mr-2 rounded h-5">
                                            <img className="w-4 h-4" src="/images/filter.png"></img>
                                            <p className="text-xs font-normal my-auto">Filter by bank</p>
                                        </div>
                                    </div>
                                    <div className="my-auto">
                                        <div className="text-sm font-normal text-white">
                                            <button type="button" className=" buttonColor rounded mr-2 px-2 h-5">ADD</button>
                                            <button type="button" className=" bg-red-600 rounded px-2 h-5">DELETE</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col px-4">
                                    <div className="text-base font-normal pb-2">SOUTH AFRICA</div>
                                    <div>
                                        <div className=' backgroundColor boxShadow'>

                                            <div className="relative scrollbar-thin">
                                                <table className="w-full text-sm items-center">
                                                    <thead className="text-xs ">
                                                        <tr className="text-left text-nowrap border border-b-secondary ">
                                                            <th scope="col" className="text-center pt-2">Bank</th>

                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Active</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Rank</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Default</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Intl. Default</th>
                                                            <th scope="col" className=" pt-2 pl-2">Details</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody className="backgroundColor text-xs ">

                                                        <tr className="border border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">FNB</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Yes</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">1</td>
                                                            <td scope="row" className=" font-medium border border-secondary"><div className="flex justify-center items-center"><div className=" border border-secondary w-4 h-4"><div className="flex justify-center items-center pt-0.5"><img src="/images/rectangle.png"></img></div></div></div></td>
                                                            <td scope="row" className=" font-medium border border-secondary"><div className="flex justify-center items-center"><div className=" border border-secondary w-4 h-4"></div></div></td>
                                                            <td scope="row" className=" font-medium text-center"><div className="flex flex-row justify-between items-center pl-2"><div>Currencies Receivable: ZAR</div><img src="/images/sendIcon.png"/></div></td>


                                                        </tr>
                                                        <tr className="border border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">FNB</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Yes</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">1</td>
                                                            <td scope="row" className=" font-medium border border-secondary"><div className="flex justify-center items-center"><div className=" border border-secondary w-4 h-4"><div className="flex justify-center items-center pt-0.5"><img src="/images/rectangle.png"></img></div></div></div></td>
                                                            <td scope="row" className=" font-medium border border-secondary"><div className="flex justify-center items-center"><div className=" border border-secondary w-4 h-4"></div></div></td>
                                                            <td scope="row" className=" font-medium text-center"><div className="flex flex-row justify-between items-center pl-2"><div>Currencies Receivable: ZAR</div><img src="/images/sendIcon.png"/></div></td>


                                                        </tr>
                                                        <tr className="">
                                                            <td scope="row" className=" font-medium text-center ">FNB</td>
                                                            <td scope="row" className=" font-medium text-center border border-b-0 border-secondary">Yes</td>
                                                            <td scope="row" className=" font-medium text-center  border border-b-0 border-secondary">1</td>
                                                            <td scope="row" className=" font-medium border border-b-0 border-secondary"><div className="flex justify-center items-center"><div className=" border border-secondary w-4 h-4"><div className="flex justify-center items-center pt-0.5"><img src="/images/rectangle.png"></img></div></div></div></td>
                                                            <td scope="row" className=" font-medium border border-b-0 border-secondary"><div className="flex justify-center items-center"><div className=" border border-secondary w-4 h-4"></div></div></td>
                                                            <td scope="row" className=" font-medium text-center"><div className="flex flex-row justify-between items-center pl-2"><div>Currencies Receivable: ZAR</div><img src="/images/sendIcon.png"/></div></td>


                                                        </tr>
                                                        

                                                    </tbody>
                                                </table>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="flex flex-col p-4">
                                    <div className="text-base font-normal pb-2">SOUTH AFRICA</div>
                                    <div>
                                        <div className='userTable backgroundColor boxShadow'>

                                            <div className="relative scrollbar-thin">
                                                <table className="w-full text-sm items-center">
                                                    <thead className="text-xs ">
                                                        <tr className="text-left text-nowrap border border-b-secondary ">
                                                            <th scope="col" className="text-center pt-2">Bank</th>

                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Active</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Rank</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Default</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Intl. Default</th>
                                                            <th scope="col" className=" pt-2 pl-2">Details</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody className="backgroundColor text-xs ">

                                                        <tr className="border border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">FNB</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Yes</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">1</td>
                                                            <td scope="row" className=" font-medium border border-secondary"><div className="flex justify-center items-center"><div className=" border border-secondary w-4 h-4"><div className="flex justify-center items-center pt-0.5"><img src="/images/rectangle.png"></img></div></div></div></td>
                                                            <td scope="row" className=" font-medium border border-secondary"><div className="flex justify-center items-center"><div className=" border border-secondary w-4 h-4"></div></div></td>
                                                            <td scope="row" className=" font-medium text-center"><div className="flex flex-row justify-between items-center pl-2"><div>Currencies Receivable: ZAR</div><img src="/images/sendIcon.png"/></div></td>


                                                        </tr>
                                                        <tr className="border border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">FNB</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Yes</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">1</td>
                                                            <td scope="row" className=" font-medium border border-secondary"><div className="flex justify-center items-center"><div className=" border border-secondary w-4 h-4"><div className="flex justify-center items-center pt-0.5"><img src="/images/rectangle.png"></img></div></div></div></td>
                                                            <td scope="row" className=" font-medium border border-secondary"><div className="flex justify-center items-center"><div className=" border border-secondary w-4 h-4"></div></div></td>
                                                            <td scope="row" className=" font-medium text-center"><div className="flex flex-row justify-between items-center pl-2"><div>Currencies Receivable: ZAR</div><img src="/images/sendIcon.png"/></div></td>


                                                        </tr>
                                                        <tr className="">
                                                            <td scope="row" className=" font-medium text-center ">FNB</td>
                                                            <td scope="row" className=" font-medium text-center border border-b-0 border-secondary">Yes</td>
                                                            <td scope="row" className=" font-medium text-center  border border-b-0 border-secondary">1</td>
                                                            <td scope="row" className=" font-medium border border-b-0 border-secondary"><div className="flex justify-center items-center"><div className=" border border-secondary w-4 h-4"><div className="flex justify-center items-center pt-0.5"><img src="/images/rectangle.png"></img></div></div></div></td>
                                                            <td scope="row" className=" font-medium border border-b-0 border-secondary"><div className="flex justify-center items-center"><div className=" border border-secondary w-4 h-4"></div></div></td>
                                                            <td scope="row" className=" font-medium text-center"><div className="flex flex-row justify-between items-center pl-2"><div>Currencies Receivable: ZAR</div><img src="/images/sendIcon.png"/></div></td>


                                                        </tr>
                                                        

                                                    </tbody>
                                                </table>

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