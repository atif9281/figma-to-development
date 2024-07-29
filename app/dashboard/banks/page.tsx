"use client";
import Image from "next/image"
import ModalComponent from "@/components/modal/CustomModal"
import { useState } from "react";
export default function Banks() {


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
                                            <button type="button" onClick={openAddModal} className=" buttonColor rounded mr-2 px-2 h-5">ADD</button>
                                            <ModalComponent isOpen={isAddModalOpen} closeModal={closeAddModal} title="Add New Bank Account">
                                                <div className="">
                                                    <form action="" className="text-sm">
                                                        <div className="mb-4 text-sm flex flex-row justify-end">
                                                            <label className="mr-4">Country: </label><input type="text" name="password" id="password" value="Dropdown" className="min-w-[50%] px-3 py-1 backgroundColor link focus:outline-none text-sm tracking-tighter" />
                                                        </div>
                                                        <div className="mb-4 text-sm flex flex-row justify-end">
                                                            <label className="mr-4">Account Name: </label><input type="text" name="password" id="password" value="Sample Text" className="min-w-[50%] px-3 py-1 backgroundColor link focus:outline-none text-sm tracking-tighter" />
                                                        </div>
                                                        <div className="mb-4 text-sm flex flex-row justify-end">
                                                            <label className="mr-4">ACH and Wire Routing Number: </label><input type="text" name="password" id="password" value="Sample Text" className="min-w-[50%] px-3 py-1 backgroundColor link focus:outline-none text-sm tracking-tighter" />
                                                        </div>
                                                        <div className="mb-4 text-sm flex flex-row justify-end">
                                                            <label className="mr-4">Account Number: </label><input type="text" name="password" id="password" value="Sample Text" className="min-w-[50%] px-3 py-1 backgroundColor link focus:outline-none text-sm tracking-tighter" />
                                                        </div>
                                                        <div className="mb-4 text-sm flex flex-row justify-end">
                                                            <label className="mr-4">Routing Number: </label><input type="text" name="password" id="password" value="Sample Text" className="min-w-[50%] px-3 py-1 backgroundColor link focus:outline-none text-sm tracking-tighter" />
                                                        </div>
                                                        <div className="mb-4 text-sm flex flex-row justify-end">
                                                            <label className="mr-4">Bank Address: </label><textarea rows={4} name="password" id="password" value="Sample Text" className="min-w-[50%] px-3 py-1 backgroundColor link focus:outline-none text-sm tracking-tighter" />
                                                        </div>
                                                        <div className="mb-4 text-sm flex flex-row justify-end">
                                                            <label className="mr-4">Reference: </label><input type="text" name="password" id="password" value="Sample Text" className="min-w-[50%] px-3 py-1 backgroundColor link focus:outline-none text-sm tracking-tighter" />
                                                        </div>

                                                        <div className="text-sm font-normal text-white flex flex-row justify-center mt-10">
                                                            <button type="button" onClick={closeAddModal} className=" buttonColor rounded mr-2 px-2 h-8">save</button>
                                                            <button type="button" onClick={closeAddModal} className=" bg-red-600 rounded px-2 h-8">cancel</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </ModalComponent>
                                            <button type="button" onClick={openDeleteModal} className=" bg-red-600 rounded px-2 h-5">DELETE</button>
                                            <ModalComponent isOpen={isDeleteModalOpen} closeModal={closeDeleteModal} title="Delete a Bank Account">
                                                <div className="">
                                                    <form action="" className="text-sm">
                                                        <div className="mb-4 text-sm flex flex-row justify-end">
                                                            <label className="mr-4">Country: </label><input type="text" name="password" id="password" value="Dropdown" className="min-w-[50%] px-3 py-1 backgroundColor text-red-700 focus:outline-none text-sm tracking-tighter" />
                                                        </div>
                                                        <div className="mb-4 text-sm flex flex-row justify-end">
                                                            <label className="mr-4">Account Name: </label><input type="text" name="password" id="password" value="Sample Text" className="min-w-[50%] px-3 py-1 backgroundColor text-red-700 focus:outline-none text-sm tracking-tighter" />
                                                        </div>
                                                        <div className="mb-4 text-sm flex flex-row justify-end">
                                                            <label className="mr-4">ACH and Wire Routing Number: </label><input type="text" name="password" id="password" value="Sample Text" className="min-w-[50%] px-3 py-1 backgroundColor text-red-700 focus:outline-none text-sm tracking-tighter" />
                                                        </div>
                                                        <div className="mb-4 text-sm flex flex-row justify-end">
                                                            <label className="mr-4">Account Number: </label><input type="text" name="password" id="password" value="Sample Text" className="min-w-[50%] px-3 py-1 backgroundColor text-red-700 focus:outline-none text-sm tracking-tighter" />
                                                        </div>
                                                        <div className="mb-4 text-sm flex flex-row justify-end">
                                                            <label className="mr-4">Routing Number: </label><input type="text" name="password" id="password" value="Sample Text" className="min-w-[50%] px-3 py-1 backgroundColor text-red-700 focus:outline-none text-sm tracking-tighter" />
                                                        </div>
                                                        <div className="mb-4 text-sm flex flex-row justify-end">
                                                            <label className="mr-4">Bank Address: </label><textarea rows={4} name="password" id="password" value="Sample Text" className="min-w-[50%] px-3 py-1 backgroundColor text-red-700 focus:outline-none text-sm tracking-tighter" />
                                                        </div>
                                                        <div className="mb-4 text-sm flex flex-row justify-end">
                                                            <label className="mr-4">Reference: </label><input type="text" name="password" id="password" value="Sample Text" className="min-w-[50%] px-3 py-1 backgroundColor text-red-700 focus:outline-none text-sm tracking-tighter" />
                                                        </div>

                                                        <div className="text-sm font-normal text-white flex flex-row justify-center mt-10">
                                                            <button type="button" onClick={openConfirmDeleteModal} className=" buttonColor rounded mr-2 px-2 h-8">Delete</button>
                                                            <ModalComponent isOpen={confimDeleteModel} closeModal={closeConfirmDeleteModal} title="">
                                                                <div className="">
                                                                    <form action="" className="text-sm">
                                                                        <div className="m-4 p-4 border border-red-700 rounded">
                                                                            <div className="flex flex-col justify-center">
                                                                                <div className="flex justify-center mb-4"><img className="h-12 w-12" src="/images/component.png"></img></div>
                                                                                <div className="flex justify-center mb-4 text-sm font-bold text-red-700"><p>Are You Sure?</p></div>
                                                                                <div className="flex justify-center text-xs"><p>this action cannot be undone.</p></div>
                                                                                <div className="flex justify-center text-xs"><p>are you sure you want to delete this bank account?</p></div>

                                                                            </div>

                                                                            <div className="text-sm font-normal text-white flex flex-row justify-center mt-6">
                                                                                <button type="button" onClick={closeConfirmDeleteModal} className=" buttonColor rounded mr-2 px-2 h-8">cancel</button>
                                                                                <button type="button" onClick={closeConfirmDeleteModal} className=" bg-red-600 rounded px-2 h-8">delete</button>
                                                                            </div></div>

                                                                    </form>
                                                                </div>
                                                            </ModalComponent>
                                                            <button type="button" onClick={closeDeleteModal} className=" bg-red-600 rounded px-2 h-8">cancel</button>

                                                        </div>
                                                    </form>
                                                </div>
                                            </ModalComponent>
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
                                                            <td scope="row" className=" font-medium text-center">
                                                                <div className="flex flex-row justify-between items-center pl-2">
                                                                    <div>Currencies Receivable: ZAR</div><button onClick={openSendBankDetails}><ModalComponent isOpen={sendBankDetails} closeModal={closeSendBankDetails} title="View/Send Bank Account Details">
                                                                        <div className="">
                                                                            <form action="" className="text-sm">

                                                                                <div className="mb-4 mt-2 text-sm flex flex-row justify-end">
                                                                                    <label className="mr-4">Account Name: </label><input type="text" name="password" id="password" value="Sample Text" className="min-w-[50%] px-3 py-1 backgroundColor link focus:outline-none text-sm tracking-tighter" />
                                                                                </div>
                                                                                <div className="mb-4 text-sm flex flex-row justify-end">
                                                                                    <label className="mr-4">ACH and Wire Routing Number: </label><input type="text" name="password" id="password" value="Sample Text" className="min-w-[50%] px-3 py-1 backgroundColor link focus:outline-none text-sm tracking-tighter" />
                                                                                </div>
                                                                                <div className="mb-4 text-sm flex flex-row justify-end">
                                                                                    <label className="mr-4">Account Number: </label><input type="text" name="password" id="password" value="Sample Text" className="min-w-[50%] px-3 py-1 backgroundColor link focus:outline-none text-sm tracking-tighter" />
                                                                                </div>
                                                                                <div className="mb-4 text-sm flex flex-row justify-end">
                                                                                    <label className="mr-4">Routing Number: </label><input type="text" name="password" id="password" value="Sample Text" className="min-w-[50%] px-3 py-1 backgroundColor link focus:outline-none text-sm tracking-tighter" />
                                                                                </div>
                                                                                <div className="mb-4 text-sm flex flex-row justify-end">
                                                                                    <label className="mr-4">Bank Address: </label><textarea rows={4} name="password" id="password" value="Sample Text" className="min-w-[50%] px-3 py-1 backgroundColor link focus:outline-none text-sm tracking-tighter" />
                                                                                </div>
                                                                                <div className="mb-4 text-sm flex flex-row justify-end">
                                                                                    <label className="mr-4">Reference: </label><input type="text" name="password" id="password" value="Sample Text" className="min-w-[50%] px-3 py-1 backgroundColor link focus:outline-none text-sm tracking-tighter" />
                                                                                </div>
                                                                                <div className="flex justify-center"><form action="" className="text-sm max-w-[50%] ">
                                                                                    <div className="my-4 text-sm backgroundColor less-italic">
                                                                                        <input type="email" name="email" id="email" placeholder="Enter Email Address" className="px-3 py-1 backgroundColor focus:outline-none text-sm tracking-tighter" />
                                                                                    </div>

                                                                                </form></div>


                                                                                <div className="text-sm font-normal text-white flex flex-row justify-center mt-4">
                                                                                    <button type="button" onClick={closeSendBankDetails} className=" buttonColor rounded mr-2 px-2 h-8">send</button>
                                                                                    <button type="button" onClick={closeSendBankDetails} className=" bg-red-600 rounded px-2 h-8">close</button>
                                                                                </div>
                                                                            </form>
                                                                        </div>
                                                                    </ModalComponent><img src="/images/sendIcon.png" /></button></div>
                                                            </td>


                                                        </tr>
                                                        <tr className="border border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">FNB</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Yes</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">1</td>
                                                            <td scope="row" className=" font-medium border border-secondary"><div className="flex justify-center items-center"><div className=" border border-secondary w-4 h-4"><div className="flex justify-center items-center pt-0.5"><img src="/images/rectangle.png"></img></div></div></div></td>
                                                            <td scope="row" className=" font-medium border border-secondary"><div className="flex justify-center items-center"><div className=" border border-secondary w-4 h-4"></div></div></td>
                                                            <td scope="row" className=" font-medium text-center"><div className="flex flex-row justify-between items-center pl-2"><div>Currencies Receivable: ZAR</div><button onClick={openSendBankDetails}><img src="/images/sendIcon.png" /></button></div></td>


                                                        </tr>
                                                        <tr className="">
                                                            <td scope="row" className=" font-medium text-center ">FNB</td>
                                                            <td scope="row" className=" font-medium text-center border border-b-0 border-secondary">Yes</td>
                                                            <td scope="row" className=" font-medium text-center  border border-b-0 border-secondary">1</td>
                                                            <td scope="row" className=" font-medium border border-b-0 border-secondary"><div className="flex justify-center items-center"><div className=" border border-secondary w-4 h-4"><div className="flex justify-center items-center pt-0.5"><img src="/images/rectangle.png"></img></div></div></div></td>
                                                            <td scope="row" className=" font-medium border border-b-0 border-secondary"><div className="flex justify-center items-center"><div className=" border border-secondary w-4 h-4"></div></div></td>
                                                            <td scope="row" className=" font-medium text-center"><div className="flex flex-row justify-between items-center pl-2"><div>Currencies Receivable: ZAR</div><button onClick={openSendBankDetails}><img src="/images/sendIcon.png" /></button></div></td>


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
                                                            <td scope="row" className=" font-medium text-center"><div className="flex flex-row justify-between items-center pl-2"><div>Currencies Receivable: ZAR</div><button onClick={openSendBankDetails}><img src="/images/sendIcon.png" /></button></div></td>


                                                        </tr>
                                                        <tr className="border border-b-secondary">
                                                            <td scope="row" className=" font-medium text-center ">FNB</td>
                                                            <td scope="row" className=" font-medium text-center border border-secondary">Yes</td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">1</td>
                                                            <td scope="row" className=" font-medium border border-secondary"><div className="flex justify-center items-center"><div className=" border border-secondary w-4 h-4"><div className="flex justify-center items-center pt-0.5"><img src="/images/rectangle.png"></img></div></div></div></td>
                                                            <td scope="row" className=" font-medium border border-secondary"><div className="flex justify-center items-center"><div className=" border border-secondary w-4 h-4"></div></div></td>
                                                            <td scope="row" className=" font-medium text-center"><div className="flex flex-row justify-between items-center pl-2"><div>Currencies Receivable: ZAR</div><button onClick={openSendBankDetails}><img src="/images/sendIcon.png" /></button></div></td>


                                                        </tr>
                                                        <tr className="">
                                                            <td scope="row" className=" font-medium text-center ">FNB</td>
                                                            <td scope="row" className=" font-medium text-center border border-b-0 border-secondary">Yes</td>
                                                            <td scope="row" className=" font-medium text-center  border border-b-0 border-secondary">1</td>
                                                            <td scope="row" className=" font-medium border border-b-0 border-secondary"><div className="flex justify-center items-center"><div className=" border border-secondary w-4 h-4"><div className="flex justify-center items-center pt-0.5"><img src="/images/rectangle.png"></img></div></div></div></td>
                                                            <td scope="row" className=" font-medium border border-b-0 border-secondary"><div className="flex justify-center items-center"><div className=" border border-secondary w-4 h-4"></div></div></td>
                                                            <td scope="row" className=" font-medium text-center"><div className="flex flex-row justify-between items-center pl-2"><div>Currencies Receivable: ZAR</div><button onClick={openSendBankDetails}><img src="/images/sendIcon.png" /></button></div></td>


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