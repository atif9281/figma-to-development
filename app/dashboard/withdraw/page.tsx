export default function Withdraw () {
    return (
        <>
        
        <div className="w-5/6  flex flex-col justify-start px-8 pt-5 backgroundColor">
                <div className="flex flex-row text-xl font-bold darkGreen justify-evenly">

                    <div className=" basis-10/12 ">
                        <div>
                            Withdrawals
                        </div>
                        <div className="mt-2">
                            <div className="bg-white rounded">
                                

                                <div className="flex flex-col px-4">
                                    <div className="text-sm font-normal pt-1 pb-1 uppercase">Pending Release</div>
                                    <div>
                                        <div className=' boxShadow'>

                                            <div className="relative scrollbar-thin">
                                            <table className="w-full text-sm items-center">
                                                    <thead className="text-xs ">
                                                        <tr className="text-left text-nowrap border border-b-secondary ">
                                                            <th scope="col" className="text-center pt-2">Date</th>

                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Source</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Reference</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Currency</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Total Amount</th>
                                                            
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Recipient</th>
                                                            
                                                            <td scope="row" className=" "><div className="flex justify-center items-center"><div className=" border border-secondary w-4 h-4"><div className="flex justify-center items-center pt-0.5"><div><img src="/images/rectangle.png"></img></div></div></div><div className="my-auto">
                                                                <div className="text-sm font-normal text-white pl-2">
                                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-5">Release All</button>
                                                                </div>
                                                            </div></div></td>

                                                        </tr>
                                                    </thead>
                                                    <tbody className=" text-xs ">

                                                        <tr className="border border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">01 Jan 2023</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">GBP</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            
                                                            <td scope="row" className=" font-medium text-center  border border-secondary"><a className="border border-b-secondary">Text Field</a></td>
                                                            
                                                            <td scope="row" className=" "><div className="flex justify-center items-center"><div className=" border border-secondary w-4 h-4"><div className="flex justify-center items-center pt-0.5"><div><img src="/images/rectangle.png"></img></div></div></div><div className="my-auto">
                                                                <div className="text-sm font-normal text-white pl-2">
                                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-5">Release</button>
                                                                </div>
                                                            </div><div className="pb-1 w-5"><img src="/images/X.png"></img></div></div></td>

                                                        </tr>

                                                        <tr className="border border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">01 Jan 2023</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">GBP</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            
                                                            <td scope="row" className=" font-medium text-center  border border-secondary"><a className="border border-b-secondary">Text Field</a></td>
                                                            
                                                            <td scope="row" className=" "><div className="flex justify-center items-center"><div className=" border border-secondary w-4 h-4"><div className="flex justify-center items-center pt-0.5"><div><img src="/images/rectangle.png"></img></div></div></div><div className="my-auto">
                                                                <div className="text-sm font-normal text-white pl-2">
                                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-5">Release</button>
                                                                </div>
                                                            </div><div className="pb-1 w-5"><img src="/images/X.png"></img></div></div></td>

                                                        </tr>

                                                        <tr className="border border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">01 Jan 2023</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">GBP</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            
                                                            <td scope="row" className=" font-medium text-center  border border-secondary"><a className="border border-b-secondary">Text Field</a></td>
                                                            
                                                            <td scope="row" className=" "><div className="flex justify-center items-center"><div className=" border border-secondary w-4 h-4"><div className="flex justify-center items-center pt-0.5"><div><img src="/images/rectangle.png"></img></div></div></div><div className="my-auto">
                                                                <div className="text-sm font-normal text-white pl-2">
                                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-5">Release</button>
                                                                </div>
                                                            </div><div className="pb-1 w-5"><img src="/images/X.png"></img></div></div></td>

                                                        </tr>

                                                        <tr className="border border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">01 Jan 2023</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">GBP</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            
                                                            <td scope="row" className=" font-medium text-center  border border-secondary"><a className="border border-b-secondary">Text Field</a></td>
                                                            
                                                            <td scope="row" className=" "><div className="flex justify-center items-center"><div className=" border border-secondary w-4 h-4"><div className="flex justify-center items-center pt-0.5"><div><img src="/images/rectangle.png"></img></div></div></div><div className="my-auto">
                                                                <div className="text-sm font-normal text-white pl-2">
                                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-5">Release</button>
                                                                </div>
                                                            </div><div className="pb-1 w-5"><img src="/images/X.png"></img></div></div></td>

                                                        </tr>

                                                        <tr className="border ">
                                                            <td scope="row" className=" font-medium text-center ">01 Jan 2023</td>
                                                            <td scope="row" className=" font-medium text-center border-b-0 border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center border-b-0  border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center border-b-0 border border-secondary">GBP</td>
                                                            <td scope="row" className=" font-medium text-center border-b-0  border border-secondary">Number Field</td>
                                                            
                                                            <td scope="row" className=" font-medium text-center border-b-0  border border-secondary"><a className="border border-b-secondary">Text Field</a></td>
                                                            
                                                            <td scope="row" className=" "><div className="flex justify-center items-center"><div className=" border border-secondary w-4 h-4"><div className="flex justify-center items-center pt-0.5"><div><img src="/images/rectangle.png"></img></div></div></div><div className="my-auto">
                                                                <div className="text-sm font-normal text-white pl-2">
                                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-5">Release</button>
                                                                </div>
                                                            </div><div className="pb-1 w-5"><img src="/images/X.png"></img></div></div></td>

                                                        </tr>

                                                        

                                                        

                                                        


                                                    </tbody>
                                                </table>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="flex flex-col px-4">
                                    <div className="text-sm font-normal pt-3 pb-1 text-red-800 uppercase">Declined Withdrawals</div>
                                    <div>
                                        <div className=' boxShadow'>

                                            <div className="relative scrollbar-thin pb-2">
                                            <table className="w-full text-sm items-center">
                                                    <thead className="text-xs ">
                                                        <tr className="text-left text-nowrap border border-b-secondary ">
                                                            <th scope="col" className="text-center pt-2">Date</th>

                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Source</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Reference</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Currency</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Total Amount</th>
                                                            
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Recipient</th>
                                                            
                                                            <td scope="row" className=" "><div className="flex justify-center items-center"><div className=" border border-secondary w-4 h-4"><div className="flex justify-center items-center pt-0.5"><div><img src="/images/rectangle.png"></img></div></div></div><div className="my-auto">
                                                                <div className="text-sm font-normal text-white pl-2">
                                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-5">Release All</button>
                                                                </div>
                                                            </div></div></td>

                                                        </tr>
                                                    </thead>
                                                    <tbody className=" text-xs ">

                                                        <tr className="border border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">01 Jan 2023</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">GBP</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            
                                                            <td scope="row" className=" font-medium text-center  border border-secondary"><a className="border border-b-secondary">Text Field</a></td>
                                                            
                                                            <td scope="row" className=" "><div className="flex justify-center items-center"><div className=" border border-secondary w-4 h-4"><div className="flex justify-center items-center pt-0.5"><div><img src="/images/rectangle.png"></img></div></div></div><div className="my-auto">
                                                                <div className="text-sm font-normal text-white pl-2">
                                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-5">Release</button>
                                                                </div>
                                                            </div><div className="pb-1 w-5"><img src="/images/X.png"></img></div></div></td>

                                                        </tr>

                                                        <tr className="border border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">01 Jan 2023</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">GBP</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            
                                                            <td scope="row" className=" font-medium text-center  border border-secondary"><a className="border border-b-secondary">Text Field</a></td>
                                                            
                                                            <td scope="row" className=" "><div className="flex justify-center items-center"><div className=" border border-secondary w-4 h-4"><div className="flex justify-center items-center pt-0.5"><div><img src="/images/rectangle.png"></img></div></div></div><div className="my-auto">
                                                                <div className="text-sm font-normal text-white pl-2">
                                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-5">Release</button>
                                                                </div>
                                                            </div><div className="pb-1 w-5"><img src="/images/X.png"></img></div></div></td>

                                                        </tr>

                                                        <tr className="border border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">01 Jan 2023</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">GBP</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            
                                                            <td scope="row" className=" font-medium text-center  border border-secondary"><a className="border border-b-secondary">Text Field</a></td>
                                                            
                                                            <td scope="row" className=" "><div className="flex justify-center items-center"><div className=" border border-secondary w-4 h-4"><div className="flex justify-center items-center pt-0.5"><div><img src="/images/rectangle.png"></img></div></div></div><div className="my-auto">
                                                                <div className="text-sm font-normal text-white pl-2">
                                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-5">Release</button>
                                                                </div>
                                                            </div><div className="pb-1 w-5"><img src="/images/X.png"></img></div></div></td>

                                                        </tr>

                                                        <tr className="border border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">01 Jan 2023</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">GBP</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            
                                                            <td scope="row" className=" font-medium text-center  border border-secondary"><a className="border border-b-secondary">Text Field</a></td>
                                                            
                                                            <td scope="row" className=" "><div className="flex justify-center items-center"><div className=" border border-secondary w-4 h-4"><div className="flex justify-center items-center pt-0.5"><div><img src="/images/rectangle.png"></img></div></div></div><div className="my-auto">
                                                                <div className="text-sm font-normal text-white pl-2">
                                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-5">Release</button>
                                                                </div>
                                                            </div><div className="pb-1 w-5"><img src="/images/X.png"></img></div></div></td>

                                                        </tr>

                                                        <tr className="border ">
                                                            <td scope="row" className=" font-medium text-center ">01 Jan 2023</td>
                                                            <td scope="row" className=" font-medium text-center border-b-0 border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center border-b-0  border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center border-b-0 border border-secondary">GBP</td>
                                                            <td scope="row" className=" font-medium text-center border-b-0  border border-secondary">Number Field</td>
                                                            
                                                            <td scope="row" className=" font-medium text-center border-b-0  border border-secondary"><a className="border border-b-secondary">Text Field</a></td>
                                                            
                                                            <td scope="row" className=" "><div className="flex justify-center items-center"><div className=" border border-secondary w-4 h-4"><div className="flex justify-center items-center pt-0.5"><div><img src="/images/rectangle.png"></img></div></div></div><div className="my-auto">
                                                                <div className="text-sm font-normal text-white pl-2">
                                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-5">Release</button>
                                                                </div>
                                                            </div><div className="pb-1 w-5"><img src="/images/X.png"></img></div></div></td>

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