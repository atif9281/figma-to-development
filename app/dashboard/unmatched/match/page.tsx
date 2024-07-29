"use client";
import Image from "next/image"
import ModalComponent from "@/components/modal/CustomModal"
import { useState } from "react";
export default function Match() {

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [confimDeleteModel, setConfimDeleteMode] = useState(false);
    const [sendBankDetails, setSendBankDetails] = useState(false);

    const openAddModal = () => setIsAddModalOpen(true);
    const closeAddModal = () => setIsAddModalOpen(false);

    const openDeleteModal = () => setIsDeleteModalOpen(true);

    const closeDeleteModal = () => setIsDeleteModalOpen(false);

    const openConfirmDeleteModal = () => setConfimDeleteMode(true);
    const closeConfirmDeleteModal = () => setConfimDeleteMode(false);

    const openSendBankDetails = () => setSendBankDetails(true);
    const closeSendBankDetails = () => setSendBankDetails(false);


    return (
        <>

            <div className="w-5/6  flex flex-col justify-start px-8 pt-5 backgroundColor">
                <div className="flex flex-row text-xl font-bold darkGreen justify-evenly">

                    <div className=" basis-10/12 ">
                        <div>
                            Unmatched Deposits
                        </div>
                        <div className="mt-2">
                            <div className="bg-white rounded pb-4">
                                <div className="rounded">
                                    <div className="uppercase darkBackground pt-4 pl-4 activeLink"><div className="w-44">Unmatched Deposit</div></div>
                                    <div className="">
                                        <div className=' darkBackground  pb-4 pl-4'>

                                            <div className="relative scrollbar-thin">
                                                <table className="w-full text-sm items-center">
                                                    <thead className="text-xs text-white">
                                                        <tr className="text-left text-nowrap  ">
                                                            <th scope="col" className=" pt-2">Date</th>

                                                            <th scope="col" className=" pt-2">Source</th>
                                                            <th scope="col" className=" pt-2">Reference</th>
                                                            <th scope="col" className=" pt-2">Currency</th>
                                                            <th scope="col" className=" pt-2  pr-6">Amount</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody className="darkBackground text-xs ">



                                                        <tr className="text-white">
                                                            <td scope="row" className=" font-medium  ">01 jan 2023</td>
                                                            <td scope="row" className=" font-medium ">Text Field</td>
                                                            <td scope="row" className=" font-medium  ">Text Field</td>
                                                            <td scope="row" className=" font-medium ">GBP</td>
                                                            <td scope="row" className=" font-medium ">Number Field</td>



                                                        </tr>






                                                    </tbody>
                                                </table>

                                            </div>
                                        </div>

                                    </div>

                                </div>







































                                <div className="flex flex-row justify-between p-4 pb-2">
                                    <div className="flex flex-row ">
                                        <div className="flex flex-row backgroundColor justify-center items-center mr-2 rounded h-6">
                                            <p className="text-xs font-normal my-auto px-2">search by name</p>
                                        </div>
                                        <div className="flex flex-row backgroundColor justify-center items-center mr-2 rounded h-6">
                                            <p className="text-xs font-normal my-auto px-2">search by name</p>
                                        </div>
                                        <div className="flex flex-row backgroundColor justify-center items-center mr-2 rounded h-6">
                                            <p className="text-xs font-normal my-auto px-2">search by name</p>
                                        </div>
                                        <div className="flex flex-row backgroundColor justify-center items-center mr-2 rounded h-6">
                                            <p className="text-xs font-normal my-auto px-2">search by name</p>
                                        </div>
                                        <div className="flex flex-row backgroundColor justify-center items-center mr-2 rounded h-6">
                                            <p className="text-xs font-normal my-auto px-2">search by name</p>
                                        </div>

                                    </div>
                                    <div className="my-auto">
                                        <div className="text-sm font-normal text-white">
                                            <button type="button" className=" buttonColor rounded mr-2 px-2 h-5">SEARCH</button>



                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col px-4">
                                    <div className="text-base font-normal pb-2">Potential Deposits</div>
                                    <div>
                                        <div className=' backgroundColor boxShadow'>

                                            <div className="relative scrollbar-thin">
                                                <table className="w-full text-sm items-center">
                                                    <thead className="text-xs ">
                                                        <tr className="text-left text-nowrap border border-b-secondary ">
                                                            <th scope="col" className="text-center pt-2">Client ID</th>

                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Name</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Other Name</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Surname</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">DOB</th>
                                                            <th scope="col" className=" pt-2 text-end pr-6"><button >Match</button></th>

                                                        </tr>
                                                    </thead>
                                                    <tbody className="backgroundColor text-xs ">

                                                        <tr className="border border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">Text</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Client Name</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Other Name</td>
                                                            <td scope="row" className=" font-medium border text-center border-secondary">Surname</td>
                                                            <td scope="row" className=" font-medium border text-center border-secondary">12 feb 2002</td>
                                                            <td scope="row" className=" text-end pr-4 font-medium ">
                                                                <div className="">
                                                                    <div className="text-xs font-normal text-white">
                                                                        <button onClick={openAddModal} type="button" className=" buttonColor rounded px-2 h-4">Match</button>
                                                                        <ModalComponent isOpen={isAddModalOpen} closeModal={closeAddModal} title="">
                                                                            <div className="">
                                                                                <form action="" className="text-sm">
                                                                                    <div className="p-4 border border-green-500 rounded">
                                                                                        <div className="flex flex-col justify-center">
                                                                                            <div className="flex justify-center mb-4"><img className="h-12 w-12" src="/images/successDetails.png"></img></div>
                                                                                            <div className="flex justify-center mb-4 text-sm font-bold text-green-500"><p>Match Details?</p></div>
                                                                                            <div className="flex justify-center text-xs mb-4"><p>please provide a reason for the client/deposit match:</p></div>
                                                                                            <div className="mb-4 text-sm flex flex-row justify-center">
                                                                                                <textarea cols={35} rows={3} name="password" id="password" value="Sample Text" className="min-w-[50%] px-3 py-1 backgroundColor link focus:outline-none text-sm tracking-tighter" />
                                                                                            </div>
                                                                                            <div className="mb-4 text-xs flex flex-row justify-end">
                                                                                                <label className="mr-4 mt-1.5"><p>Upload Proof Of Payment: </p></label><input type="file" className="min-w-[50%] px-3 py-1 backgroundColor link focus:outline-none tracking-tighter outline-none border-none focus:border-none text-xs" />
                                                                                            </div>

                                                                                        </div>

                                                                                        <div className="text-sm font-normal text-white flex flex-row justify-center mt-2">
                                                                                            <button type="button" onClick={closeAddModal} className=" buttonColor rounded mr-2 px-2 h-8">Match</button>
                                                                                            <button type="button" onClick={closeAddModal} className=" bg-red-600 rounded px-2 h-8">Cancel</button>
                                                                                        </div></div>

                                                                                </form>
                                                                            </div>
                                                                        </ModalComponent>


                                                                    </div>
                                                                </div>
                                                            </td>


                                                        </tr>

                                                        <tr className="border border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">Text</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Client Name</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Other Name</td>
                                                            <td scope="row" className=" font-medium border text-center border-secondary">Surname</td>
                                                            <td scope="row" className=" font-medium border text-center border-secondary">12 feb 2002</td>
                                                            <td scope="row" className=" text-end pr-4 font-medium ">
                                                                <div className="">
                                                                    <div className="text-xs font-normal text-white">
                                                                        <button onClick={openAddModal} type="button" className=" buttonColor rounded px-2 h-4">Match</button>


                                                                    </div>
                                                                </div>
                                                            </td>


                                                        </tr>

                                                        <tr className="border border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">Text</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Client Name</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Other Name</td>
                                                            <td scope="row" className=" font-medium border text-center border-secondary">Surname</td>
                                                            <td scope="row" className=" font-medium border text-center border-secondary">12 feb 2002</td>
                                                            <td scope="row" className=" text-end pr-4 font-medium ">
                                                                <div className="">
                                                                    <div className="text-xs font-normal text-white">
                                                                        <button onClick={openAddModal} type="button" className=" buttonColor rounded px-2 h-4">Match</button>


                                                                    </div>
                                                                </div>
                                                            </td>


                                                        </tr>

                                                        <tr className="border border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">Text</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Client Name</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Other Name</td>
                                                            <td scope="row" className=" font-medium border text-center border-secondary">Surname</td>
                                                            <td scope="row" className=" font-medium border text-center border-secondary">12 feb 2002</td>
                                                            <td scope="row" className=" text-end pr-4 font-medium ">
                                                                <div className="">
                                                                    <div className="text-xs font-normal text-white">
                                                                        <button onClick={openAddModal} type="button" className=" buttonColor rounded px-2 h-4">Match</button>


                                                                    </div>
                                                                </div>
                                                            </td>


                                                        </tr>

                                                        <tr className="border border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">Text</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Client Name</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Other Name</td>
                                                            <td scope="row" className=" font-medium border text-center border-secondary">Surname</td>
                                                            <td scope="row" className=" font-medium border text-center border-secondary">12 feb 2002</td>
                                                            <td scope="row" className=" text-end pr-4 font-medium ">
                                                                <div className="">
                                                                    <div className="text-xs font-normal text-white">
                                                                        <button onClick={openAddModal} type="button" className=" buttonColor rounded px-2 h-4">Match</button>


                                                                    </div>
                                                                </div>
                                                            </td>


                                                        </tr>

                                                        <tr className="border border-b-0 border-b-secondary ">
                                                            <td scope="row" className=" font-medium text-center ">Text</td>
                                                            <td scope="row" className=" font-medium text-center border border-b-0 border-secondary">Client Name</td>
                                                            <td scope="row" className=" font-medium text-center  border border-b-0 border-secondary">Other Name</td>
                                                            <td scope="row" className=" font-medium border text-center border-b-0 border-secondary">Surname</td>
                                                            <td scope="row" className=" font-medium border text-center border-b-0 border-secondary">12 feb 2002</td>
                                                            <td scope="row" className=" text-end pr-4 font-medium ">
                                                                <div className="">
                                                                    <div className="text-xs font-normal text-white">
                                                                        <button onClick={openAddModal} type="button" className=" buttonColor rounded px-2 h-4">Match</button>


                                                                    </div>
                                                                </div>
                                                            </td>


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