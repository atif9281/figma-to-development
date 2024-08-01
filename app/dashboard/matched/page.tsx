"use client";
import Image from "next/image"
import ModalComponent from "@/components/modal/CustomModal"
import { useState } from "react";
export default function Matched() {


    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [confimDeleteModel, setConfimDeleteMode] = useState(false);

    const openAddModal = () => setIsAddModalOpen(true);
    const closeAddModal = () => setIsAddModalOpen(false);

    const openDeleteModal = () => setIsDeleteModalOpen(true);

    const closeDeleteModal = () => setIsDeleteModalOpen(false);

    const openConfirmDeleteModal = () => setConfimDeleteMode(true);
    const closeConfirmDeleteModal = () => setConfimDeleteMode(false);


    const clientDetails = <p className="mt-8 ml-14 darkGreen heading2">Client Details</p>;
        


    return (
        <>

            <div className="w-5/6  flex flex-col justify-start px-8 pt-5 backgroundColor">
                <div className="flex flex-row text-xl font-bold darkGreen justify-evenly">

                    <div className=" basis-10/12 ">
                        <div className="heading2">
                            Matched Deposits
                        </div>
                        <div className="mt-2">
                            <div className="bg-white rounded">


                                <div className="flex flex-col">
                                    <div>
                                        <div className=' boxShadow p-2'>

                                            <div className="relative scrollbar-thin">
                                                <table className="w-full text-sm items-center">
                                                    <thead className="text-xs ">
                                                        <tr className="text-left text-nowrap border border-t-0 border-l-0 border-r-0 border-b-secondary ">
                                                            <th scope="col" className="text-center pt-2">Date</th>

                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Source</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Reference</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Currency</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Funding Amount</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Currency</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Received Amount</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Recipient</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Method</th>
                                                            <td scope="row" className=" "><div className="flex justify-center items-center"><div className="rounded-sm border rec-border w-4 h-4"><div className="flex justify-center items-center pt-0.5"><div><img src="/images/rectangle.png"></img></div></div></div><div className="my-auto">
                                                                <div className="text-sm font-normal text-white pl-2">
                                                                    <button type="button" onClick={openConfirmDeleteModal} className=" buttonColor rounded mr-2 px-2 h-5">Release All</button>
                                                                    <ModalComponent isOpen={confimDeleteModel} closeModal={closeConfirmDeleteModal} title="">
                                                                        <div className="">
                                                                            <form action="" className="text-sm">
                                                                                <div className=" p-8 py-10 border-2 border-modal rounded">
                                                                                    <div className="flex flex-col justify-center">
                                                                                        <div className="flex justify-center mb-4"><img className="h-12 w-12" src="/images/Release.png"></img></div>
                                                                                        <div className="flex justify-center mb-4 text-sm font-bold text-green-500"><p className="flex flex-row darkGreen ">Release <p className="mx-1 activeLink">12</p> Payments?</p></div>
                                                                                        <div className="flex justify-center text-xs"><p>this action cannot be undone.</p></div>
                                                                                        <div className="flex justify-center text-xs"><p>are you sure you want to release all the payments?</p></div>

                                                                                    </div>

                                                                                    <div className="text-sm font-normal text-white flex flex-row justify-center mt-6">
                                                                                        <button type="button" onClick={closeConfirmDeleteModal} className=" buttonColor rounded mr-2 px-2 h-8">Release</button>
                                                                                        <button type="button" onClick={closeConfirmDeleteModal} className=" bg-red-600 rounded px-2 h-8">Cancel</button>
                                                                                    </div></div>

                                                                            </form>
                                                                        </div>
                                                                    </ModalComponent>
                                                                </div>
                                                            </div></div></td>

                                                        </tr>
                                                    </thead>
                                                    <tbody className=" text-xs ">

                                                        <tr className="border border-t-0 border-l-0 border-r-0  border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">01 Jan 2023</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">GBP</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">EUR</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary"><button onClick={openDeleteModal}><a className="border border-b-secondary">Text Field</a></button><ModalComponent isOpen={isDeleteModalOpen} closeModal={closeDeleteModal} title={clientDetails}>
                                                                <div className="">
                                                                    <div className="px-16 pt-4 pb-8">
                                                                        <form action="" className="text-sm">
                                                                            <div className="mb-2 darkGreen-sm flex flex-row justify-end">
                                                                                <label className="mr-4">Client ID: </label><input type="text" name="password" id="password" value="Dropdown" className="min-w-[50%] px-3 py-1 backgroundColor darkGreen focus:outline-none text-sm tracking-tighter" />
                                                                            </div>
                                                                            <div className="mb-2 darkGreen-sm flex flex-row justify-end">
                                                                                <label className="mr-4">Client Name: </label><input type="text" name="password" id="password" value="Sample Text" className="min-w-[50%] px-3 py-1 backgroundColor darkGreen focus:outline-none text-sm tracking-tighter" />
                                                                            </div>
                                                                            <div className="mb-2 darkGreen-sm flex flex-row justify-end">
                                                                                <label className="mr-4">Client Surname: </label><input type="text" name="password" id="password" value="Sample Text" className="min-w-[50%] px-3 py-1 backgroundColor darkGreen focus:outline-none text-sm tracking-tighter" />
                                                                            </div>
                                                                            <div className="mb-2 darkGreen-sm flex flex-row justify-end">
                                                                                <label className="mr-4">Client Date of Birth: </label><input type="text" name="password" id="password" value="Sample Text" className="min-w-[50%] px-3 py-1 backgroundColor darkGreen focus:outline-none text-sm tracking-tighter" />
                                                                            </div>
                                                                            <div className="mb-2 darkGreen-sm flex flex-row justify-end">
                                                                                <label className="mr-4">Client ID/Passport Number: </label><input type="text" name="password" id="password" value="Sample Text" className="min-w-[50%] px-3 py-1 backgroundColor darkGreen focus:outline-none text-sm tracking-tighter" />
                                                                            </div>
                                                                            <div className="mb-2 darkGreen-sm flex flex-row justify-end">
                                                                                <label className="mr-4">Client Mobile Number: </label><input type="text" name="password" id="password" value="Sample Text" className="min-w-[50%] px-3 py-1 backgroundColor darkGreen focus:outline-none text-sm tracking-tighter" />
                                                                            </div>
                                                                            <div className="mb-2 darkGreen-sm flex flex-row justify-end">
                                                                                <label className="mr-4">Client Profile Status: </label><input type="text" name="password" id="password" value="Sample Text" className="min-w-[50%] px-3 py-1 backgroundColor darkGreen focus:outline-none text-sm tracking-tighter" />
                                                                            </div>
                                                                            <div className="mb-2 darkGreen-sm flex flex-row justify-center">
                                                                                <a className="mr-4 border border-x-0 border-t-0 border-b-green-500 activeLink">View Full Profile</a>
                                                                            </div>

                                                                            <div className="text-sm font-normal text-white flex flex-row justify-center mt-4">
                                                                                <button type="button" onClick={closeDeleteModal} className=" bg-red-600 rounded px-2 h-8">Close</button>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </ModalComponent></td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Auto</td>
                                                            <td scope="row" className=" "><div className="flex justify-center items-center"><div className="rounded-sm border rec-border w-4 h-4"><div className="flex justify-center items-center pt-0.5"><div><img src="/images/rectangle.png"></img></div></div></div><div className="my-auto">
                                                                <div className="text-sm font-normal text-white pl-2">
                                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-5">Release</button>
                                                                </div>
                                                            </div><div className="pb-1 w-5"><button onClick={openAddModal}><img src="/images/X.png"></img></button>
                                                                    <ModalComponent isOpen={isAddModalOpen} closeModal={closeAddModal} title="">
                                                                        <div className="">
                                                                            <form action="" className="text-sm">
                                                                                <div className="p-8 py-10 border-2 border-red-700 rounded">
                                                                                    <div className="flex flex-col justify-center">
                                                                                        <div className="flex justify-center mb-4"><img className="h-12 w-12" src="/images/Decline.png"></img></div>
                                                                                        <div className="flex justify-center mb-4 text-sm font-bold text-red-700"><p>Decline Deposit?</p></div>
                                                                                        <div className="flex justify-center text-xs mb-4"><p>please provide a reason for the declined request:</p></div>
                                                                                        <div className="mb-4 text-sm flex flex-row justify-center">
                                                                                            <textarea cols={31} rows={3} name="password" id="password" value="Sample Text" className="min-w-[50%] px-3 py-1 backgroundColor link focus:outline-none text-sm tracking-tighter" />
                                                                                        </div>

                                                                                    </div>

                                                                                    <div className="text-sm font-normal text-white flex flex-row justify-center mt-2">
                                                                                        <button type="button" onClick={closeAddModal} className=" buttonColor rounded mr-2 px-2 h-8">Decline</button>
                                                                                        <button type="button" onClick={closeAddModal} className=" bg-red-600 rounded px-2 h-8">Cancel</button>
                                                                                    </div></div>

                                                                            </form>
                                                                        </div>
                                                                    </ModalComponent>

                                                                </div></div></td>

                                                        </tr>



                                                        <tr className="border border-t-0 border-l-0 border-r-0  border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">01 Jan 2023</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">GBP</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">EUR</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary"><button onClick={openDeleteModal}><a className="border border-b-secondary">Text Field</a></button></td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Auto</td>
                                                            <td scope="row" className=" "><div className="flex justify-center items-center"><div className="rounded-sm border rec-border w-4 h-4"><div className="flex justify-center items-center pt-0.5"><div><img src="/images/rectangle.png"></img></div></div></div><div className="my-auto">
                                                                <div className="text-sm font-normal text-white pl-2">
                                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-5">Release</button>
                                                                </div>
                                                            </div><div className="pb-1 w-5"><button onClick={openAddModal}><img src="/images/X.png"></img></button>

                                                                </div></div></td>

                                                        </tr>

                                                        <tr className="border border-t-0 border-l-0 border-r-0  border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">01 Jan 2023</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">GBP</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">EUR</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary"><button onClick={openDeleteModal}><a className="border border-b-secondary">Text Field</a></button></td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Auto</td>
                                                            <td scope="row" className=" "><div className="flex justify-center items-center"><div className="rounded-sm border rec-border w-4 h-4"><div className="flex justify-center items-center pt-0.5"><div><img src="/images/rectangle.png"></img></div></div></div><div className="my-auto">
                                                                <div className="text-sm font-normal text-white pl-2">
                                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-5">Release</button>
                                                                </div>
                                                            </div><div className="pb-1 w-5"><button onClick={openAddModal}><img src="/images/X.png"></img></button>

                                                                </div></div></td>

                                                        </tr>

                                                        <tr className="border border-t-0 border-l-0 border-r-0  border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">01 Jan 2023</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">GBP</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">EUR</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary"><button onClick={openDeleteModal}><a className="border border-b-secondary">Text Field</a></button></td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Auto</td>
                                                            <td scope="row" className=" "><div className="flex justify-center items-center"><div className="rounded-sm border rec-border w-4 h-4"><div className="flex justify-center items-center pt-0.5"><div><img src="/images/rectangle.png"></img></div></div></div><div className="my-auto">
                                                                <div className="text-sm font-normal text-white pl-2">
                                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-5">Release</button>
                                                                </div>
                                                            </div><div className="pb-1 w-5"><button onClick={openAddModal}><img src="/images/X.png"></img></button>

                                                                </div></div></td>

                                                        </tr>

                                                        <tr className="border border-t-0 border-l-0 border-r-0  border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">01 Jan 2023</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">GBP</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">EUR</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary"><button onClick={openDeleteModal}><a className="border border-b-secondary">Text Field</a></button></td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Auto</td>
                                                            <td scope="row" className=" "><div className="flex justify-center items-center"><div className="rounded-sm border rec-border w-4 h-4"><div className="flex justify-center items-center pt-0.5"><div><img src="/images/rectangle.png"></img></div></div></div><div className="my-auto">
                                                                <div className="text-sm font-normal text-white pl-2">
                                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-5">Release</button>
                                                                </div>
                                                            </div><div className="pb-1 w-5"><button onClick={openAddModal}><img src="/images/X.png"></img></button>

                                                                </div></div></td>

                                                        </tr>

                                                        <tr className="border border-t-0 border-l-0 border-r-0  border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">01 Jan 2023</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">GBP</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">EUR</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary"><button onClick={openDeleteModal}><a className="border border-b-secondary">Text Field</a></button></td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Auto</td>
                                                            <td scope="row" className=" "><div className="flex justify-center items-center"><div className="rounded-sm border rec-border w-4 h-4"><div className="flex justify-center items-center pt-0.5"><div><img src="/images/rectangle.png"></img></div></div></div><div className="my-auto">
                                                                <div className="text-sm font-normal text-white pl-2">
                                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-5">Release</button>
                                                                </div>
                                                            </div><div className="pb-1 w-5"><button onClick={openAddModal}><img src="/images/X.png"></img></button>

                                                                </div></div></td>

                                                        </tr>

                                                        <tr className="border border-t-0 border-l-0 border-r-0  border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">01 Jan 2023</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">GBP</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">EUR</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary"><button onClick={openDeleteModal}><a className="border border-b-secondary">Text Field</a></button></td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Auto</td>
                                                            <td scope="row" className=" "><div className="flex justify-center items-center"><div className="rounded-sm border rec-border w-4 h-4"><div className="flex justify-center items-center pt-0.5"><div><img src="/images/rectangle.png"></img></div></div></div><div className="my-auto">
                                                                <div className="text-sm font-normal text-white pl-2">
                                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-5">Release</button>
                                                                </div>
                                                            </div><div className="pb-1 w-5"><button onClick={openAddModal}><img src="/images/X.png"></img></button>

                                                                </div></div></td>

                                                        </tr>

                                                        <tr className="border border-t-0 border-l-0 border-r-0  border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">01 Jan 2023</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">GBP</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">EUR</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary"><button onClick={openDeleteModal}><a className="border border-b-secondary">Text Field</a></button></td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Auto</td>
                                                            <td scope="row" className=" "><div className="flex justify-center items-center"><div className="rounded-sm border rec-border w-4 h-4"><div className="flex justify-center items-center pt-0.5"><div><img src="/images/rectangle.png"></img></div></div></div><div className="my-auto">
                                                                <div className="text-sm font-normal text-white pl-2">
                                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-5">Release</button>
                                                                </div>
                                                            </div><div className="pb-1 w-5"><button onClick={openAddModal}><img src="/images/X.png"></img></button>

                                                                </div></div></td>

                                                        </tr>

                                                        <tr className="border border-t-0 border-l-0 border-r-0  border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">01 Jan 2023</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">GBP</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">EUR</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary"><button onClick={openDeleteModal}><a className="border border-b-secondary">Text Field</a></button></td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Auto</td>
                                                            <td scope="row" className=" "><div className="flex justify-center items-center"><div className="rounded-sm border rec-border w-4 h-4"><div className="flex justify-center items-center pt-0.5"><div><img src="/images/rectangle.png"></img></div></div></div><div className="my-auto">
                                                                <div className="text-sm font-normal text-white pl-2">
                                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-5">Release</button>
                                                                </div>
                                                            </div><div className="pb-1 w-5"><button onClick={openAddModal}><img src="/images/X.png"></img></button>

                                                                </div></div></td>

                                                        </tr>

                                                        <tr className="border border-t-0 border-l-0 border-r-0  border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">01 Jan 2023</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">GBP</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">EUR</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Number Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary"><button onClick={openDeleteModal}><a className="border border-b-secondary">Text Field</a></button></td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Auto</td>
                                                            <td scope="row" className=" "><div className="flex justify-center items-center"><div className="rounded-sm border rec-border w-4 h-4"><div className="flex justify-center items-center pt-0.5"><div><img src="/images/rectangle.png"></img></div></div></div><div className="my-auto">
                                                                <div className="text-sm font-normal text-white pl-2">
                                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-5">Release</button>
                                                                </div>
                                                            </div><div className="pb-1 w-5"><button onClick={openAddModal}><img src="/images/X.png"></img></button>

                                                                </div></div></td>

                                                        </tr>

                                                        <tr className="">
                                                            <td scope="row" className=" font-medium text-center ">01 Jan 2023</td>
                                                            <td scope="row" className=" font-medium text-center border border-b-0 border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-b-0 border-secondary">Text Field</td>
                                                            <td scope="row" className=" font-medium text-center border border-b-0 border-secondary">GBP</td>
                                                            <td scope="row" className=" font-medium text-center  border border-b-0 border-secondary">Number Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-b-0 border-secondary">EUR</td>
                                                            <td scope="row" className=" font-medium text-center  border border-b-0 border-secondary">Number Field</td>
                                                            <td scope="row" className=" font-medium text-center  border border-b-0 border-secondary"><button onClick={openDeleteModal}><a className="border border-b-secondary">Text Field</a></button></td>
                                                            <td scope="row" className=" font-medium text-center  border border-b-0 border-secondary">Auto</td>
                                                            <td scope="row" className=" "><div className="flex justify-center items-center"><div className="rounded-sm border rec-border w-4 h-4"><div className="flex justify-center items-center pt-0.5"><div><img src="/images/rectangle.png"></img></div></div></div><div className="my-auto">
                                                                <div className="text-sm font-normal text-white pl-2">
                                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-5">Release</button>
                                                                </div>
                                                            </div><div className="pb-1 w-5"><button onClick={openAddModal}><img src="/images/X.png"></img></button>

                                                                </div></div></td>

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