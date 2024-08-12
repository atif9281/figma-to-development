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

            <div className="w-5/6  flex flex-col justify-start pt-8 backgroundColor">
                <div className="flex flex-row text-xl font-bold darkGreen justify-evenly">

                    <div className=" basis-10/12 ">
                        <div className="heading2">
                            Unmatched Deposits
                        </div>
                        <div className="mt-2">
                            <div className="bg-white rounded boxShadow pb-4">
                                <div className="rounded-md">
                                    <div className="">
                                        <div className="uppercase darkBackground pt-4 pl-4 activeLink rounded-md rounded-b-none"><div className="w-44">Unmatched Deposit</div></div>
                                        <div className=" rounded-md">
                                            <div className=' darkBackground  pb-4 pl-4 rounded-md rounded-t-none'>

                                                <div className="relative scrollbar-thin">
                                                    <table className="w-full text-sm items-center">
                                                        <thead className=" text-white text-sm 2xl:text-lg">
                                                            <tr className="text-left text-nowrap  ">
                                                                <th scope="col" className=" pt-2">Date</th>

                                                                <th scope="col" className=" pt-2">Source</th>
                                                                <th scope="col" className=" pt-2">Reference</th>
                                                                <th scope="col" className=" pt-2">Currency</th>
                                                                <th scope="col" className=" pt-2  pr-6">Amount</th>

                                                            </tr>
                                                        </thead>
                                                        <tbody className="darkBackground text-sm 2xl:text-lg">



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

                                </div>







































                                <div className="flex flex-row justify-between p-4 pb-2">
                                    <div className="flex flex-row ">
                                        <div className="flex flex-row backgroundColor justify-center items-center mr-2 rounded-lg ">
                                            <p className="text-xs font-normal my-auto px-2"><input className="w-full px-2 py-1  inputSearch less-italic focus:outline-none text-sm  rounded" placeholder="Search by name"></input></p>
                                        </div>
                                        <div className="flex flex-row backgroundColor justify-center items-center mr-2 rounded-lg ">
                                            <p className="text-xs font-normal my-auto px-2"><input className="w-full px-2 py-1  inputSearch less-italic focus:outline-none text-sm  rounded" placeholder="Search by name"></input></p>
                                        </div>
                                        <div className="flex flex-row backgroundColor justify-center items-center mr-2 rounded-lg ">
                                            <p className="text-xs font-normal my-auto px-2"><input className="w-full px-2 py-1  inputSearch less-italic focus:outline-none text-sm  rounded" placeholder="Search by name"></input></p>
                                        </div>
                                        <div className="flex flex-row backgroundColor justify-center items-center mr-2 rounded-lg ">
                                            <p className="text-xs font-normal my-auto px-2"><input className="w-full px-2 py-1  inputSearch less-italic focus:outline-none text-sm  rounded" placeholder="Search by name"></input></p>
                                        </div>
                                        <div className="flex flex-row backgroundColor justify-center items-center mr-2 rounded-lg ">
                                            <p className="text-xs font-normal my-auto px-2"><input className="w-full px-2 py-1  inputSearch less-italic focus:outline-none text-sm  rounded" placeholder="Search by name"></input></p>
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
                                        <div className=' backgroundColor boxShadow max-h-[30vh]  overflow-y-auto custom-scrollbar'>

                                            <div className="relative scrollbar-thin">
                                                <table className="w-full text-sm items-center">
                                                    <thead className="text-sm 2xl:text-lg">
                                                        <tr className="text-left text-nowrap border  border-b-darker-secondary  ">
                                                            <th scope="col" className="text-center pt-2">Client ID</th>

                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-b-darker-secondary border-l-darker-secondary  border-r-darker-secondary">Name</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-b-darker-secondary border-l-darker-secondary  border-r-darker-secondary">Other Name</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-b-darker-secondary border-l-darker-secondary  border-r-darker-secondary">Surname</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-b-darker-secondary border-r-darker-secondary">DOB</th>
                                                            <th scope="col" className=" pt-2 text-end pr-5"><button >Match</button></th>

                                                        </tr>
                                                    </thead>
                                                    <tbody className="backgroundColor text-sm 2xl:text-lg">

                                                        <tr className="border border-b-darker-secondary">
                                                            <td scope="row" className=" font-medium text-center py-1">Text</td>
                                                            <td scope="row" className=" font-medium text-center py-1  border border-darker-secondary">Client Name</td>
                                                            <td scope="row" className=" font-medium text-center py-1   border border-darker-secondary">Other Name</td>
                                                            <td scope="row" className=" font-medium border py-1  text-center border-darker-secondary">Surname</td>
                                                            <td scope="row" className=" font-medium border py-1  text-center border-darker-secondary">12 feb 2002</td>
                                                            <td scope="row" className=" text-end pr-4 font-medium ">
                                                                <div className="">
                                                                    <div className="text-xs font-normal text-white">
                                                                        <button onClick={openAddModal} type="button" className=" buttonColor rounded px-2 h-4">Match</button>
                                                                        <ModalComponent isOpen={isAddModalOpen} closeModal={closeAddModal} title="">
                                                                            <div className="">
                                                                                <form action="" className="text-sm">
                                                                                    <div className="p-16 py-12 border-2 border-modal rounded">
                                                                                        <div className="flex flex-col justify-center">
                                                                                            <div className="flex justify-center mb-4"><Image width={125} height={125} alt="" className="h-12 w-12" src="/images/successDetails.svg"></Image ></div>
                                                                                            <div className="flex justify-center mb-4 text-sm font-bold  darkGreen "><p className="heading5">Match Details?</p></div>
                                                                                            <div className="flex justify-center text-xs -ml-4 mb-4 2xl:text-base"><p>Please provide a reason for the client / deposit match:</p></div>
                                                                                            <div className="mb-4 text-sm flex flex-row justify-center">
                                                                                                <textarea cols={39} rows={4} name="password" id="password" placeholder="Sample Text" className="min-w-[50%] inputModal px-3 py-1 backgroundColor link focus:outline-none text-sm tracking-tighter" />
                                                                                            </div>
                                                                                            <div className="mb-4 text-xs flex flex-row justify-evenly">
                                                                                                <label className="mt-0.5"><p className="mr-3">Upload Proof Of Payment: </p></label><div className="file-input-wrapper">
                                                                                                    <input type="file" id="file-input" className="file-input" />
                                                                                                    <label htmlFor="file-input" className="file-input-label">
                                                                                                        Select File
                                                                                                    </label>
                                                                                                    <span id="file-name" className="file-name">no file uploaded</span>
                                                                                                </div>
                                                                                            </div>

                                                                                        </div>

                                                                                        <div className="text-sm font-normal text-white flex flex-row justify-center mt-8">
                                                                                            <button type="button" onClick={closeAddModal} className=" buttonColor rounded-lg mr-2 px-2 h-7 w-16 py-1">Match</button>
                                                                                            <button type="button" onClick={closeAddModal} className="  redBackground  rounded-lg px-1 w-16 h-7 py-1">Cancel</button>
                                                                                        </div></div>

                                                                                </form>
                                                                            </div>
                                                                        </ModalComponent>


                                                                    </div>
                                                                </div>
                                                            </td>


                                                        </tr>



                                                        <tr className="border border-b-darker-secondary">
                                                            <td scope="row" className=" font-medium py-1  text-center ">Text</td>
                                                            <td scope="row" className=" font-medium py-1  text-center border border-darker-secondary">Client Name</td>
                                                            <td scope="row" className=" font-medium py-1  text-center  border border-darker-secondary">Other Name</td>
                                                            <td scope="row" className=" font-medium  py-1 border text-center border-darker-secondary">Surname</td>
                                                            <td scope="row" className=" font-medium py-1  border text-center border-darker-secondary">12 feb 2002</td>
                                                            <td scope="row" className=" text-end py-1  pr-4 font-medium ">
                                                                <div className="">
                                                                    <div className="text-xs font-normal text-white">
                                                                        <button onClick={openAddModal} type="button" className=" buttonColor rounded px-2 h-4">Match</button>


                                                                    </div>
                                                                </div>
                                                            </td>


                                                        </tr>

                                                        <tr className="border border-b-darker-secondary">
                                                            <td scope="row" className=" font-medium py-1  text-center ">Text</td>
                                                            <td scope="row" className=" font-medium py-1  text-center border border-darker-secondary">Client Name</td>
                                                            <td scope="row" className=" font-medium  py-1 text-center  border border-darker-secondary">Other Name</td>
                                                            <td scope="row" className=" font-medium py-1  border text-center border-darker-secondary">Surname</td>
                                                            <td scope="row" className=" font-medium py-1  border text-center border-darker-secondary">12 feb 2002</td>
                                                            <td scope="row" className=" text-end py-1  pr-4 font-medium ">
                                                                <div className="">
                                                                    <div className="text-xs font-normal text-white">
                                                                        <button onClick={openAddModal} type="button" className=" buttonColor rounded px-2 h-4">Match</button>


                                                                    </div>
                                                                </div>
                                                            </td>




                                                        </tr>

                                                        <tr className="border border-b-darker-secondary">
                                                            <td scope="row" className=" font-medium py-1  text-center ">Text</td>
                                                            <td scope="row" className=" font-medium py-1  text-center border border-darker-secondary">Client Name</td>
                                                            <td scope="row" className=" font-medium  py-1 text-center  border border-darker-secondary">Other Name</td>
                                                            <td scope="row" className=" font-medium py-1  border text-center border-darker-secondary">Surname</td>
                                                            <td scope="row" className=" font-medium py-1  border text-center border-darker-secondary">12 feb 2002</td>
                                                            <td scope="row" className=" text-end py-1  pr-4 font-medium ">
                                                                <div className="">
                                                                    <div className="text-xs font-normal text-white">
                                                                        <button onClick={openAddModal} type="button" className=" buttonColor rounded px-2 h-4">Match</button>


                                                                    </div>
                                                                </div>
                                                            </td>




                                                        </tr>


                                                        <tr className="border border-b-darker-secondary">
                                                            <td scope="row" className=" font-medium py-1  text-center ">Text</td>
                                                            <td scope="row" className=" font-medium py-1  text-center border border-darker-secondary">Client Name</td>
                                                            <td scope="row" className=" font-medium  py-1 text-center  border border-darker-secondary">Other Name</td>
                                                            <td scope="row" className=" font-medium py-1  border text-center border-darker-secondary">Surname</td>
                                                            <td scope="row" className=" font-medium py-1  border text-center border-darker-secondary">12 feb 2002</td>
                                                            <td scope="row" className=" text-end py-1  pr-4 font-medium ">
                                                                <div className="">
                                                                    <div className="text-xs font-normal text-white">
                                                                        <button onClick={openAddModal} type="button" className=" buttonColor rounded px-2 h-4">Match</button>


                                                                    </div>
                                                                </div>
                                                            </td>




                                                        </tr>


                                                        <tr className="border border-b-darker-secondary">
                                                            <td scope="row" className=" font-medium py-1  text-center ">Text</td>
                                                            <td scope="row" className=" font-medium py-1  text-center border border-darker-secondary">Client Name</td>
                                                            <td scope="row" className=" font-medium  py-1 text-center  border border-darker-secondary">Other Name</td>
                                                            <td scope="row" className=" font-medium py-1  border text-center border-darker-secondary">Surname</td>
                                                            <td scope="row" className=" font-medium py-1  border text-center border-darker-secondary">12 feb 2002</td>
                                                            <td scope="row" className=" text-end py-1  pr-4 font-medium ">
                                                                <div className="">
                                                                    <div className="text-xs font-normal text-white">
                                                                        <button onClick={openAddModal} type="button" className=" buttonColor rounded px-2 h-4">Match</button>


                                                                    </div>
                                                                </div>
                                                            </td>




                                                        </tr>


                                                        <tr className="border border-b-darker-secondary">
                                                            <td scope="row" className=" font-medium py-1  text-center ">Text</td>
                                                            <td scope="row" className=" font-medium py-1  text-center border border-darker-secondary">Client Name</td>
                                                            <td scope="row" className=" font-medium py-1  text-center  border border-darker-secondary">Other Name</td>
                                                            <td scope="row" className=" font-medium py-1  border text-center border-darker-secondary">Surname</td>
                                                            <td scope="row" className=" font-medium py-1  border text-center border-darker-secondary">12 feb 2002</td>
                                                            <td scope="row" className=" text-end py-1  pr-4 font-medium ">
                                                                <div className="">
                                                                    <div className="text-xs font-normal text-white">
                                                                        <button onClick={openAddModal} type="button" className=" buttonColor rounded px-2 h-4">Match</button>


                                                                    </div>
                                                                </div>
                                                            </td>


                                                        </tr>

                                                        <tr className="border border-b-0 border-b-darker-secondary">
                                                            <td scope="row" className=" font-medium py-1  text-center ">Text</td>
                                                            <td scope="row" className=" font-medium py-1  text-center border border-b-0 border-darker-secondary">Client Name</td>
                                                            <td scope="row" className=" font-medium py-1  text-center  border border-b-0 border-darker-secondary">Other Name</td>
                                                            <td scope="row" className=" font-medium py-1  border text-center border-b-0 border-darker-secondary">Surname</td>
                                                            <td scope="row" className=" font-medium py-1  border text-center border-b-0 border-darker-secondary">12 feb 2002</td>
                                                            <td scope="row" className=" text-end py-1  pr-4 font-medium ">
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