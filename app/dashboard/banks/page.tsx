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

    const clientDetails = <p className="mt-10 ml-14 darkGreen heading5">View / Send Bank Account Details</p>;
    const bankAddDetails = <p className="mt-10 ml-14 darkGreen heading5">Add New Bank Account</p>;

    return (
        <>

            <div className="w-5/6  flex flex-col justify-start pt-8 backgroundColor">
                <div className="flex flex-row text-xl font-bold darkGreen justify-evenly">

                    <div className=" basis-10/12 ">
                        <div className="heading2">
                            Banks
                        </div>
                        <div className="mt-2">
                            <div className="bg-white rounded boxShadow">
                                <div className="flex flex-row justify-between p-4  pb-2">
                                    <div className="flex flex-row ">
                                        <div className="flex flex-row backgroundColor justify-center items-center mr-2 rounded-lg  input-search-container">
                                            <div className="pl-4"><img className="w-4 h-4" src="/images/filter.png"></img></div>
                                            <p className="text-xs font-normal my-auto  pr-8"><input className="w-full px-2 py-1  inputSearch less-italic focus:outline-none text-sm  rounded" placeholder="Filter by country"></input></p>
                                        </div>
                                        <div className="flex flex-row backgroundColor justify-center items-center mr-2 rounded-lg  input-search-container">
                                            <div className="pl-4"><img className="w-4 h-4" src="/images/filter.png"></img></div>
                                            <p className="text-xs font-normal my-auto  pr-8"><input className="w-full px-2 py-1  inputSearch less-italic focus:outline-none text-sm  rounded" placeholder="Filter by bank"></input></p>
                                        </div>
                                    </div>
                                    <div className="my-auto">
                                        <div className="text-sm font-normal text-white">
                                            <button type="button" onClick={openAddModal} className=" buttonColor rounded-lg mr-2 px-2 h-7 w-16 py-1">Add</button>
                                            <ModalComponent isOpen={isAddModalOpen} closeModal={closeAddModal} title={bankAddDetails}>
                                                <div className="">
                                                    <div className="p-16 py-6 pb-12">
                                                        <form action="" className="text-sm">
                                                            <div className="mb-2 darkGreen-sm flex flex-row justify-end">
                                                                <label className="mr-4 mt-1">Country: </label><input type="text" name="password" id="password" placeholder="Dropdown" className="inputModal min-w-[50%] px-3 py-1 backgroundColor darkGreen focus:outline-none text-sm tracking-tighter" />
                                                            </div>
                                                            <div className="mb-2 darkGreen-sm flex flex-row justify-end">
                                                                <label className="mr-4 mt-1">Account Name: </label><input type="text" name="password" id="password" placeholder="Sample Text" className="inputModal min-w-[50%] px-3 py-1 backgroundColor darkGreen focus:outline-none text-sm tracking-tighter" />
                                                            </div>
                                                            <div className="mb-2 darkGreen-sm flex flex-row justify-end">
                                                                <label className="mr-4 mt-1 whitespace-nowrap">ACH And Wire Routing Number: </label><input type="text" name="password" id="password" placeholder="Sample Text" className="inputModal min-w-[50%] px-3 py-1 backgroundColor darkGreen focus:outline-none text-sm tracking-tighter" />
                                                            </div>
                                                            <div className="mb-2 darkGreen-sm flex flex-row justify-end">
                                                                <label className="mr-4 mt-1">Account Number: </label><input type="text" name="password" id="password" placeholder="Sample Text" className="inputModal min-w-[50%] px-3 py-1 backgroundColor darkGreen focus:outline-none text-sm tracking-tighter" />
                                                            </div>
                                                            <div className="mb-2 darkGreen-sm flex flex-row justify-end">
                                                                <label className="mr-4 mt-1">Routing Number: </label><input type="text" name="password" id="password" placeholder="Sample Text" className="inputModal min-w-[50%] px-3 py-1 backgroundColor darkGreen focus:outline-none text-sm tracking-tighter" />
                                                            </div>
                                                            <div className="mb-2 darkGreen-sm flex flex-row justify-end">
                                                                <label className="mr-4 mt-1">Bank Address: </label><textarea cols={20} rows={3} name="password" id="password" placeholder="Sample Text" className="min-w-[50%] inputModal px-3 py-1 backgroundColor link focus:outline-none tracking-tighter" />
                                                            </div>
                                                            <div className="mb-2 darkGreen-sm flex flex-row justify-end">
                                                                <label className="mr-4 mt-1">Reference </label><input type="text" name="password" id="password" placeholder="Sample Text" className="inputModal min-w-[50%] px-3 py-1 backgroundColor darkGreen focus:outline-none text-sm tracking-tighter" />
                                                            </div>

                                                            <div className="text-sm font-normal text-white flex flex-row justify-center mt-8">
                                                                <button type="button" onClick={closeAddModal} className=" buttonColor rounded-lg mr-2 px-2 h-7 w-16 py-1">Save</button>
                                                                <button type="button" onClick={closeAddModal} className=" bg-red-600 rounded-lg px-1 w-16 h-7 py-1">Cancel</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </ModalComponent>
                                            <button type="button" onClick={openDeleteModal} className=" bg-red-600 rounded-lg px-1 w-16 h-7 py-1">Delete</button>
                                            <ModalComponent isOpen={isDeleteModalOpen} closeModal={closeDeleteModal} title={clientDetails}>
                                                <div className="">
                                                    <div className="px-16 pt-4 pb-12">
                                                        <form action="" className="text-sm">
                                                            <div className="mb-2 text-sm flex flex-row justify-end">
                                                                <label className="mr-4">Country: </label><input type="text" name="password" id="password" value="Dropdown" className="min-w-[50%] px-3 py-1 backgroundColor text-red-700 focus:outline-none text-sm tracking-tighter" />
                                                            </div>
                                                            <div className="mb-2 text-sm flex flex-row justify-end">
                                                                <label className="mr-4">Account Name: </label><input type="text" name="password" id="password" value="Sample Text" className="min-w-[50%] px-3 py-1 backgroundColor text-red-700 focus:outline-none text-sm tracking-tighter" />
                                                            </div>
                                                            <div className="mb-2 text-sm flex flex-row justify-end">
                                                                <label className="mr-4">ACH and Wire Routing Number: </label><input type="text" name="password" id="password" value="Sample Text" className="min-w-[50%] px-3 py-1 backgroundColor text-red-700 focus:outline-none text-sm tracking-tighter" />
                                                            </div>
                                                            <div className="mb-2 text-sm flex flex-row justify-end">
                                                                <label className="mr-4">Account Number: </label><input type="text" name="password" id="password" value="Sample Text" className="min-w-[50%] px-3 py-1 backgroundColor text-red-700 focus:outline-none text-sm tracking-tighter" />
                                                            </div>
                                                            <div className="mb-2 text-sm flex flex-row justify-end">
                                                                <label className="mr-4">Routing Number: </label><input type="text" name="password" id="password" value="Sample Text" className="min-w-[50%] px-3 py-1 backgroundColor text-red-700 focus:outline-none text-sm tracking-tighter" />
                                                            </div>
                                                            <div className="mb-2 text-sm flex flex-row justify-end">
                                                                <label className="mr-4">Bank Address: </label><textarea rows={2} name="password" id="password" value="Sample Text" className="min-w-[50%] px-3 py-1 backgroundColor text-red-700 focus:outline-none text-sm tracking-tighter" />
                                                            </div>
                                                            <div className="mb-2 text-sm flex flex-row justify-end">
                                                                <label className="mr-4">Reference: </label><input type="text" name="password" id="password" value="Sample Text" className="min-w-[50%] px-3 py-1 backgroundColor text-red-700 focus:outline-none text-sm tracking-tighter" />
                                                            </div>

                                                            <div className="text-sm font-normal text-white flex flex-row justify-center mt-6">
                                                                <button type="button" onClick={openConfirmDeleteModal} className=" buttonColor rounded-lg mr-2 px-2 h-7 w-16 py-1">Delete</button>
                                                                <ModalComponent isOpen={confimDeleteModel} closeModal={closeConfirmDeleteModal} title="">
                                                                    <div className="">
                                                                        <form action="" className="text-sm">
                                                                            <div className="m-12 p-4 border-2 border-red-700 rounded">
                                                                                <div className="flex flex-col justify-center">
                                                                                    <div className="flex justify-center mb-4"><img className="h-12 w-12" src="/images/component.png"></img></div>
                                                                                    <div className="flex justify-center mb-4 text-sm font-bold text-red-700"><p>Are You Sure?</p></div>
                                                                                    <div className="flex justify-center text-xs"><p>this action cannot be undone.</p></div>
                                                                                    <div className="flex justify-center text-xs"><p>are you sure you want to delete this bank account?</p></div>

                                                                                </div>

                                                                                <div className="text-sm font-normal text-white flex flex-row justify-center mt-6">
                                                                                    <button type="button" onClick={closeConfirmDeleteModal} className=" buttonColor rounded-lg mr-2 px-2 h-7 w-16 py-1">cancel</button>
                                                                                    <button type="button" onClick={closeConfirmDeleteModal} className=" bg-red-600 rounded-lg px-1 w-16 h-7 py-1">delete</button>
                                                                                </div></div>

                                                                        </form>
                                                                    </div>
                                                                </ModalComponent>
                                                                <button type="button" onClick={closeDeleteModal} className=" bg-red-600 rounded-lg px-1 w-16 h-7 py-1">Cancel</button>

                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </ModalComponent>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col px-4">
                                    <div className="heading4 font-normal pb-1">SOUTH AFRICA</div>
                                    <div>
                                        <div className=' backgroundColor boxShadow'>

                                            <div className="relative scrollbar-thin">
                                                <table className="w-full text-sm items-center">
                                                    <thead className="text-sm 2xl:text-lg ">
                                                        <tr className="text-left text-nowrap border border-b-darker-secondary ">
                                                            <th scope="col" className="text-center pt-2">Bank</th>

                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-darker-secondary">Active</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-darker-secondary">Rank</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-darker-secondary">Default</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-darker-secondary">Intl. Default</th>
                                                            <th scope="col" className=" pt-2 pl-2">Details</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody className="backgroundColor text-sm 2xl:text-lg ">

                                                        <tr className="border border-b-darker-secondary">
                                                            <td scope="row" className=" font-medium text-center ">FNB</td>
                                                            <td scope="row" className=" font-medium text-center border border-darker-secondary">Yes</td>
                                                            <td scope="row" className=" font-medium text-center  border border-darker-secondary">1</td>
                                                            <td scope="row" className=" font-medium border border-darker-secondary"><div className="flex justify-center items-center"><div className="rounded-sm  border rec-border w-4 h-4"><div className="flex justify-center items-center pt-0.5"><img src="/images/rectangle.png"></img></div></div></div></td>
                                                            <td scope="row" className=" font-medium border border-darker-secondary"><div className="flex justify-center items-center"><div className="rounded-sm border rec-border w-4 h-4"></div></div></td>
                                                            <td scope="row" className=" font-medium text-center">
                                                                <div className="flex flex-row justify-between items-center pl-2">
                                                                    <div>Currencies Receivable: ZAR</div><button onClick={openSendBankDetails}><ModalComponent isOpen={sendBankDetails} closeModal={closeSendBankDetails} title={clientDetails}>
                                                                        <div className="">
                                                                            <div className="p-16 py-4 pb-12">
                                                                                <form action="" className="text-sm">

                                                                                    <div className="mb-2 darkGreen-sm flex flex-row justify-end">
                                                                                        <label className="mr-4 mt-1">Account Name: </label><input type="text" name="password" id="password" placeholder="Dropdown" className="inputModal min-w-[50%] px-3 py-1 backgroundColor darkGreen focus:outline-none text-sm tracking-tighter" />
                                                                                    </div>
                                                                                    <div className="mb-2 darkGreen-sm flex flex-row justify-end">
                                                                                        <label className="mr-4 mt-1 whitespace-nowrap">ACH And Wire Routing Number: </label><input type="text" name="password" id="password" placeholder="Sample Text" className="inputModal min-w-[50%] px-3 py-1 backgroundColor darkGreen focus:outline-none text-sm tracking-tighter" />
                                                                                    </div>
                                                                                    <div className="mb-2 darkGreen-sm flex flex-row justify-end">
                                                                                        <label className="mr-4 mt-1">Account Number: </label><input type="text" name="password" id="password" placeholder="Sample Text" className="inputModal min-w-[50%] px-3 py-1 backgroundColor darkGreen focus:outline-none text-sm tracking-tighter" />
                                                                                    </div>
                                                                                    <div className="mb-2 darkGreen-sm flex flex-row justify-end">
                                                                                        <label className="mr-4 mt-1">Routing Number: </label><input type="text" name="password" id="password" placeholder="Sample Text" className="inputModal min-w-[50%] px-3 py-1 backgroundColor darkGreen focus:outline-none text-sm tracking-tighter" />
                                                                                    </div>
                                                                                    <div className="mb-2 darkGreen-sm flex flex-row justify-end">
                                                                                        <label className="mr-4 mt-1">Bank Address: </label><textarea cols={20} rows={3} name="password" id="password" placeholder="Sample Text" className="min-w-[50%] inputModal px-3 py-1 backgroundColor link focus:outline-none tracking-tighter" />
                                                                                    </div>
                                                                                    <div className="mb-2 darkGreen-sm flex flex-row justify-end">
                                                                                        <label className="mr-4 mt-1">Reference </label><input type="text" name="password" id="password" placeholder="Sample Text" className="inputModal min-w-[50%] px-3 py-1 backgroundColor darkGreen focus:outline-none text-sm tracking-tighter" />
                                                                                    </div>


                                                                                    <div className="flex justify-center"><form action="" className="text-sm max-w-[50%] ">
                                                                                        <div className="mt-6 text-sm backgroundColor ">
                                                                                            <input type="email" name="email" id="email" placeholder="Enter Email Address" className=" px-3 py-1 inputEmail  focus:outline-none " />
                                                                                        </div>

                                                                                    </form></div>


                                                                                    <div className="text-sm font-normal text-white flex flex-row justify-center mt-4">
                                                                                        <button type="button" onClick={closeSendBankDetails} className=" buttonColor rounded-lg mr-2 px-2 h-7 w-16 py-1">Send</button>
                                                                                        <button type="button" onClick={closeSendBankDetails} className=" bg-red-600 rounded-lg px-1 w-16 h-7 py-1">Close</button>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </div>
                                                                    </ModalComponent><img src="/images/sendIcon.png" /></button></div>
                                                            </td>


                                                        </tr>
                                                        <tr className="border border-b-darker-secondary">
                                                            <td scope="row" className=" font-medium text-center ">FNB</td>
                                                            <td scope="row" className=" font-medium text-center border border-darker-secondary">Yes</td>
                                                            <td scope="row" className=" font-medium text-center  border border-darker-secondary">1</td>
                                                            <td scope="row" className=" font-medium border border-darker-secondary"><div className="flex justify-center items-center"><div className="rounded-sm  border  rec-border w-4 h-4"><div className="flex justify-center items-center pt-0.5"><img src="/images/rectangle.png"></img></div></div></div></td>
                                                            <td scope="row" className=" font-medium border border-darker-secondary"><div className="flex justify-center items-center"><div className="rounded-sm border rec-border w-4 h-4"></div></div></td>
                                                            <td scope="row" className=" font-medium text-center"><div className="flex flex-row justify-between items-center pl-2"><div>Currencies Receivable: ZAR</div><button onClick={openSendBankDetails}><img src="/images/sendIcon.png" /></button></div></td>


                                                        </tr>
                                                        <tr className="">
                                                            <td scope="row" className=" font-medium text-center ">FNB</td>
                                                            <td scope="row" className=" font-medium text-center border border-b-0 border-darker-secondary">Yes</td>
                                                            <td scope="row" className=" font-medium text-center  border border-b-0 border-darker-secondary">1</td>
                                                            <td scope="row" className=" font-medium border border-b-0 border-darker-secondary"><div className="flex justify-center items-center"><div className="rounded-sm  border  rec-border w-4 h-4"><div className="flex justify-center items-center pt-0.5"><img src="/images/rectangle.png"></img></div></div></div></td>
                                                            <td scope="row" className=" font-medium border border-b-0 border-darker-secondary"><div className="flex justify-center items-center"><div className="rounded-sm border rec-border w-4 h-4"></div></div></td>
                                                            <td scope="row" className=" font-medium text-center"><div className="flex flex-row justify-between items-center pl-2"><div>Currencies Receivable: ZAR</div><button onClick={openSendBankDetails}><img src="/images/sendIcon.png" /></button></div></td>


                                                        </tr>


                                                    </tbody>
                                                </table>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="flex flex-col p-4 2xl:pb-16">
                                    <div className="heading4 font-normal pb-1">UNITED KINGDOM</div>
                                    <div>
                                        <div className='userTable backgroundColor boxShadow'>

                                            <div className="relative scrollbar-thin">
                                                <table className="w-full items-center  text-sm 2xl:text-lg ">
                                                    <thead className="text-sm 2xl:text-lg ">
                                                        <tr className="text-left text-nowrap border border-b-darker-secondary ">
                                                            <th scope="col" className="text-center pt-2">Bank</th>

                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-darker-secondary">Active</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-darker-secondary">Rank</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-darker-secondary">Default</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-darker-secondary">Intl. Default</th>
                                                            <th scope="col" className=" pt-2 pl-2">Details</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody className="backgroundColor text-sm 2xl:text-lg ">

                                                        <tr className="border border-b-darker-secondary">
                                                            <td scope="row" className=" font-medium text-center ">FNB</td>
                                                            <td scope="row" className=" font-medium text-center border border-darker-secondary">Yes</td>
                                                            <td scope="row" className=" font-medium text-center  border border-darker-secondary">1</td>
                                                            <td scope="row" className=" font-medium border border-darker-secondary"><div className="flex justify-center items-center"><div className="rounded-sm  border rec-border w-4 h-4"><div className="flex justify-center items-center pt-0.5"><img src="/images/rectangle.png"></img></div></div></div></td>
                                                            <td scope="row" className=" font-medium border border-darker-secondary"><div className="flex justify-center items-center"><div className="rounded-sm border rec-border w-4 h-4"></div></div></td>
                                                            <td scope="row" className=" font-medium text-center"><div className="flex flex-row justify-between items-center pl-2"><div>Currencies Receivable: ZAR</div><button onClick={openSendBankDetails}><img src="/images/sendIcon.png" /></button></div></td>


                                                        </tr>
                                                        <tr className="border border-b-darker-secondary">
                                                            <td scope="row" className=" font-medium text-center ">FNB</td>
                                                            <td scope="row" className=" font-medium text-center border border-darker-secondary">Yes</td>
                                                            <td scope="row" className=" font-medium text-center  border border-darker-secondary">1</td>
                                                            <td scope="row" className=" font-medium border border-darker-secondary"><div className="flex justify-center items-center"><div className="rounded-sm  border rec-border w-4 h-4"><div className="flex justify-center items-center pt-0.5"><img src="/images/rectangle.png"></img></div></div></div></td>
                                                            <td scope="row" className=" font-medium border border-darker-secondary"><div className="flex justify-center items-center"><div className="rounded-sm border rec-border w-4 h-4"></div></div></td>
                                                            <td scope="row" className=" font-medium text-center"><div className="flex flex-row justify-between items-center pl-2"><div>Currencies Receivable: ZAR</div><button onClick={openSendBankDetails}><img src="/images/sendIcon.png" /></button></div></td>


                                                        </tr>
                                                        <tr className="">
                                                            <td scope="row" className=" font-medium text-center ">FNB</td>
                                                            <td scope="row" className=" font-medium text-center border border-b-0 border-darker-secondary">Yes</td>
                                                            <td scope="row" className=" font-medium text-center  border border-b-0 border-darker-secondary">1</td>
                                                            <td scope="row" className=" font-medium border border-b-0 border-darker-secondary"><div className="flex justify-center items-center"><div className="rounded-sm border rec-border w-4 h-4"><div className="flex justify-center items-center pt-0.5"><img src="/images/rectangle.png"></img></div></div></div></td>
                                                            <td scope="row" className=" font-medium border border-b-0 border-darker-secondary"><div className="flex justify-center items-center"><div className="rounded-sm border rec-border w-4 h-4"></div></div></td>
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