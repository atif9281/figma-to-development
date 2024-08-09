"use client";
import Link from "next/link";

export default function Unmatched() {



    return (
        <>

            <div className="w-5/6  flex flex-col justify-start pt-8 backgroundColor">
                <div className="flex flex-row text-xl font-bold darkGreen justify-evenly">

                    <div className=" basis-10/12 ">
                        <div className="heading2">
                            Unmatched Deposits
                        </div>
                        <div className="mt-2">
                            <div className="bg-white rounded boxShadow max-h-[70vh]  overflow-y-auto custom-scrollbar ">


                                <div className="flex flex-col p-2">

                                    <div>
                                        <div className=' '>

                                            <div className="relative scrollbar-thin">
                                                <table className="w-full text-sm items-center">
                                                    <thead className="text-sm 2xl:text-lg">
                                                        <tr className="text-left text-nowrap border border-t-0 border-l-0 border-r-0 border-b-secondary ">
                                                            <th scope="col" className="text-center pt-2">Date</th>

                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Source</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary"><div className="flex flex-row justify-between items-center"><div className="pl-2 2xl:text-base">Reference</div><div className="flex flex-row mb-1">
                                                                <div className="flex flex-row backgroundColor justify-center items-center mr-2 rounded h-5">
                                                                    <img className="pl-2" src="/images/Search.svg"></img>
                                                                    <p className="text-xs 2xl:text-base font-normal my-auto pl-2  input-search-container1"><input className="inputSearch1  focus:outline-none  rounded" placeholder="Search"></input></p>
                                                                </div>

                                                            </div></div></th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Currency</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Amount</th>



                                                        </tr>
                                                    </thead>
                                                    <tbody className=" text-sm 2xl:text-lg ">

                                                        <tr className="border border-t-0 border-l-0 border-r-0  border-b-secondary ">
                                                            <td scope="row" className=" font-medium text-center ">01 Jan 2023</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium pl-2  border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">GBP</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            <td scope="row" className=" font-medium text-center  border-r-0 border border-secondary py-2"><Link href="/dashboard/unmatched/match" className="border border-b-secondary">Match</Link></td>




                                                        </tr>

                                                        

                                                        

                                                        <tr className="border border-t-0 border-l-0 border-r-0  border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">01 Jan 2023</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium pl-2  border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">GBP</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            <td scope="row" className=" font-medium text-center  border-r-0 border border-secondary py-2"><Link href="/dashboard/unmatched/match" className="border border-b-secondary">Match</Link></td>




                                                        </tr>

                                                        <tr className="border border-t-0 border-l-0 border-r-0  border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">01 Jan 2023</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium pl-2  border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">GBP</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            <td scope="row" className=" font-medium text-center  border-r-0 border border-secondary py-2"><Link href="/dashboard/unmatched/match" className="border border-b-secondary">Match</Link></td>




                                                        </tr>

                                                        <tr className="border border-t-0 border-l-0 border-r-0  border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">01 Jan 2023</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium pl-2  border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">GBP</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            <td scope="row" className=" font-medium text-center  border-r-0 border border-secondary py-2"><Link href="/dashboard/unmatched/match" className="border border-b-secondary">Match</Link></td>




                                                        </tr>

                                                        <tr className="border border-t-0 border-l-0 border-r-0  border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">01 Jan 2023</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium pl-2  border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">GBP</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            <td scope="row" className=" font-medium text-center  border-r-0 border border-secondary py-2"><Link href="/dashboard/unmatched/match" className="border border-b-secondary">Match</Link></td>




                                                        </tr>

                                                        <tr className="border border-t-0 border-l-0 border-r-0  border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">01 Jan 2023</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium pl-2  border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">GBP</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            <td scope="row" className=" font-medium text-center  border-r-0 border border-secondary py-2"><Link href="/dashboard/unmatched/match" className="border border-b-secondary">Match</Link></td>




                                                        </tr>

                                                        <tr className="border border-t-0 border-l-0 border-r-0  border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">01 Jan 2023</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium pl-2  border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">GBP</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            <td scope="row" className=" font-medium text-center  border-r-0 border border-secondary py-2"><Link href="/dashboard/unmatched/match" className="border border-b-secondary">Match</Link></td>




                                                        </tr>

                                                        <tr className="border border-t-0 border-l-0 border-r-0  border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">01 Jan 2023</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium pl-2  border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">GBP</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            <td scope="row" className=" font-medium text-center  border-r-0 border border-secondary py-2"><Link href="/dashboard/unmatched/match" className="border border-b-secondary">Match</Link></td>




                                                        </tr>

                                                        <tr className="border border-t-0 border-l-0 border-r-0  border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">01 Jan 2023</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium pl-2  border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">GBP</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            <td scope="row" className=" font-medium text-center  border-r-0 border border-secondary py-2"><Link href="/dashboard/unmatched/match" className="border border-b-secondary">Match</Link></td>




                                                        </tr>

                                                        <tr className="border border-t-0 border-l-0 border-r-0  border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">01 Jan 2023</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium pl-2  border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">GBP</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            <td scope="row" className=" font-medium text-center  border-r-0 border border-secondary py-2"><Link href="/dashboard/unmatched/match" className="border border-b-secondary">Match</Link></td>




                                                        </tr>

                                                        <tr className="border border-t-0 border-l-0 border-r-0  border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">01 Jan 2023</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium pl-2  border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">GBP</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            <td scope="row" className=" font-medium text-center  border-r-0 border border-secondary py-2"><Link href="/dashboard/unmatched/match" className="border border-b-secondary">Match</Link></td>




                                                        </tr>

                                                        <tr className="border border-t-0 border-l-0 border-r-0  border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">01 Jan 2023</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium pl-2  border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">GBP</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            <td scope="row" className=" font-medium text-center  border-r-0 border border-secondary py-2"><Link href="/dashboard/unmatched/match" className="border border-b-secondary">Match</Link></td>




                                                        </tr>

                                                        <tr className="">
                                                            <td scope="row" className=" font-medium text-center ">01 Jan 2023</td>
                                                            <td scope="row" className=" font-medium text-center  border-b-0 border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium pl-2  border border-b-0  border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center  border-b-0 border border-secondary">GBP</td>
                                                            <td scope="row" className=" font-medium text-center  border-b-0  border border-secondary">Number Field</td>
                                                            <td scope="row" className=" font-medium text-center  border-r-0 border-b-0 border border-secondary py-2"><Link href="/dashboard/unmatched/match" className="border border-b-secondary">Match</Link></td>




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