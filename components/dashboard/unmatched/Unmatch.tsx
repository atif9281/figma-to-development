"use client";
import Link from "next/link";
import Image from "next/image";

export default function Unmatched() {



    return (
        <>

            <div className="w-5/6  flex flex-col justify-start pt-8  2xl:pt-[74px] backgroundColor">
                <div className="flex flex-row text-xl font-bold darkGreen justify-evenly">

                    <div className=" basis-10/12 ">
                        <div className="heading2">
                            Unmatched Deposits
                        </div>
                        <div className="mt-2  2xl:pt-[27px] ">
                            <div className="bg-white p-2 2xl:px-[35px] 2xl:py-[45px] boxShadow">
                                <div className="bg-white rounded  max-h-[70vh]  overflow-y-auto custom-scrollbar ">


                                    <div className="flex flex-col">

                                        <div>
                                            <div className='max-h-[60vh] '>

                                                <div className="relative scrollbar-thin">
                                                    <table className="w-full text-sm items-center">
                                                        <thead className="text-sm 2xl:text-xl">
                                                            <tr className="text-left text-nowrap border border-t-0 border-l-0 border-r-0 border-b-secondary ">
                                                                <th scope="col" className="text-center  pt-2">Date</th>

                                                                <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Source</th>
                                                                <th scope="col" className="text-center pt-2 border border-t-0 border-secondary"><div className="flex flex-row justify-between items-center"><div className="pl-2 2xl:text-base">Reference</div><div className="flex flex-row mb-1">
                                                                    <div className="flex flex-row backgroundColor justify-center items-center mr-2 rounded h-5">
                                                                        <Image width={20} height={20} alt="" className="pl-2" src="/images/Search.svg"></Image >
                                                                        <p className="text-xs 2xl:text-base font-normal my-auto pl-2  input-search-container1"><input className="inputSearch1  focus:outline-none  rounded" placeholder="Search"></input></p>
                                                                    </div>

                                                                </div></div></th>
                                                                <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Currency</th>
                                                                <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Amount</th>



                                                            </tr>
                                                        </thead>
                                                        <tbody className="text-sm 2xl:text-base">

                                                            <tr className="2xl:py-[16px] border border-t-0 border-l-0 border-r-0  border-b-secondary ">
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center ">01 Jan 2023</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center border border-secondary">Text Field</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium pl-2  border border-secondary">Text Field</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center border border-secondary">GBP</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center  border border-secondary">Number Field</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center  border-r-0 border border-secondary py-2"><Link href="/unmatched/match" className="tableLink">Match</Link></td>




                                                            </tr>





                                                            <tr className="border border-t-0 border-l-0 border-r-0  border-b-secondary">
                                                                <td scope="row" className=" 2xl:py-[16px] font-medium text-center ">01 Jan 2023</td>
                                                                <td scope="row" className=" 2xl:py-[16px] font-medium text-center border border-secondary">Text Field</td>
                                                                <td scope="row" className=" 2xl:py-[16px] font-medium pl-2  border border-secondary">Text Field</td>
                                                                <td scope="row" className=" 2xl:py-[16px] font-medium text-center border border-secondary">GBP</td>
                                                                <td scope="row" className=" 2xl:py-[16px] font-medium text-center  border border-secondary">Number Field</td>
                                                                <td scope="row" className=" 2xl:py-[16px] font-medium text-center  border-r-0 border border-secondary py-2"><Link href="/unmatched/match" className="tableLink">Match</Link></td>




                                                            </tr>

                                                            <tr className="border border-t-0 border-l-0 border-r-0  border-b-secondary">
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center ">01 Jan 2023</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center border border-secondary">Text Field</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium pl-2  border border-secondary">Text Field</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center border border-secondary">GBP</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center  border border-secondary">Number Field</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center  border-r-0 border border-secondary py-2"><Link href="/unmatched/match" className="tableLink">Match</Link></td>




                                                            </tr>

                                                            <tr className="border border-t-0 border-l-0 border-r-0  border-b-secondary">
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center ">01 Jan 2023</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center border border-secondary">Text Field</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium pl-2  border border-secondary">Text Field</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center border border-secondary">GBP</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center  border border-secondary">Number Field</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center  border-r-0 border border-secondary py-2"><Link href="/unmatched/match" className="tableLink">Match</Link></td>




                                                            </tr>

                                                            <tr className="border border-t-0 border-l-0 border-r-0  border-b-secondary">
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center ">01 Jan 2023</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center border border-secondary">Text Field</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium pl-2  border border-secondary">Text Field</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center border border-secondary">GBP</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center  border border-secondary">Number Field</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center  border-r-0 border border-secondary py-2"><Link href="/unmatched/match" className="tableLink">Match</Link></td>




                                                            </tr>

                                                            <tr className="border border-t-0 border-l-0 border-r-0  border-b-secondary">
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center ">01 Jan 2023</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center border border-secondary">Text Field</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium pl-2  border border-secondary">Text Field</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center border border-secondary">GBP</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center  border border-secondary">Number Field</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center  border-r-0 border border-secondary py-2"><Link href="/unmatched/match" className="tableLink">Match</Link></td>




                                                            </tr>

                                                            <tr className="border border-t-0 border-l-0 border-r-0  border-b-secondary">
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center ">01 Jan 2023</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center border border-secondary">Text Field</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium pl-2  border border-secondary">Text Field</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center border border-secondary">GBP</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center  border border-secondary">Number Field</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center  border-r-0 border border-secondary py-2"><Link href="/unmatched/match" className="tableLink">Match</Link></td>




                                                            </tr>

                                                            <tr className="border border-t-0 border-l-0 border-r-0  border-b-secondary">
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center ">01 Jan 2023</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center border border-secondary">Text Field</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium pl-2  border border-secondary">Text Field</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center border border-secondary">GBP</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center  border border-secondary">Number Field</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center  border-r-0 border border-secondary py-2"><Link href="/unmatched/match" className="tableLink">Match</Link></td>




                                                            </tr>

                                                            <tr className="border border-t-0 border-l-0 border-r-0  border-b-secondary">
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center ">01 Jan 2023</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center border border-secondary">Text Field</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium pl-2  border border-secondary">Text Field</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center border border-secondary">GBP</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center  border border-secondary">Number Field</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center  border-r-0 border border-secondary py-2"><Link href="/unmatched/match" className="tableLink">Match</Link></td>




                                                            </tr>

                                                            <tr className="border border-t-0 border-l-0 border-r-0  border-b-secondary">
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center ">01 Jan 2023</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center border border-secondary">Text Field</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium pl-2  border border-secondary">Text Field</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center border border-secondary">GBP</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center  border border-secondary">Number Field</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center  border-r-0 border border-secondary py-2"><Link href="/unmatched/match" className="tableLink">Match</Link></td>




                                                            </tr>

                                                            <tr className="border border-t-0 border-l-0 border-r-0  border-b-secondary">
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center ">01 Jan 2023</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center border border-secondary">Text Field</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium pl-2  border border-secondary">Text Field</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center border border-secondary">GBP</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center  border border-secondary">Number Field</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center  border-r-0 border border-secondary py-2"><Link href="/unmatched/match" className="tableLink">Match</Link></td>




                                                            </tr>

                                                            <tr className="border border-t-0 border-l-0 border-r-0  border-b-secondary">
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center ">01 Jan 2023</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center border border-secondary">Text Field</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium pl-2  border border-secondary">Text Field</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center border border-secondary">GBP</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center  border border-secondary">Number Field</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center  border-r-0 border border-secondary py-2"><Link href="/unmatched/match" className="tableLink">Match</Link></td>




                                                            </tr>

                                                            <tr className="">
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center ">01 Jan 2023</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center  border-b-0 border border-secondary">Text Field</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium pl-2  border border-b-0  border-secondary">Text Field</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center  border-b-0 border border-secondary">GBP</td>
                                                                <td scope="row" className="2xl:py-[16px] font-medium text-center  border-b-0  border border-secondary">Number Field</td>
                                                                <td scope="row" className="2xl:pt-[16px] font-medium text-center  border-r-0 border-b-0 border border-secondary py-2"><Link href="/unmatched/match" className="tableLink">Match</Link></td>




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
            </div>
        </>
    )
}