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

    const [checkedState, setCheckedState] = useState({
        checkBoxid1: false,
        checkBoxid2: false,
        checkBoxid3: false,
        checkBoxid4: false,
        checkBoxid5: false,
        checkBoxid6: false,
        checkBoxid7: false,
        checkBoxid8: false,
        checkBoxid9: false,
        checkBoxid10: false,
        checkBoxid11: false,
        checkBoxid12: false,

    });


    const handleChange = (id: any) => {
        setCheckedState((prevState: any) => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };


    const clientDetails = <p className="mt-10 ml-14 darkGreen heading5">View / Send Bank Account Details</p>;
    const bankAddDetails = <p className="mt-10 ml-14 darkGreen heading5">Add New Bank Account</p>;
    const deleteClientDetails = <p className="mt-12 ml-14 text-red-700 heading5">Delete Bank Account</p>;

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
                                            <div className="pl-4"><Image alt="" width={16} height={16}  className="w-4 h-4" src="/images/filter.svg"></Image ></div>
                                            <p className="text-xs font-normal my-auto  pr-8"><input className="w-full px-2 py-1  inputSearch less-italic focus:outline-none text-sm  rounded" placeholder="Filter by country"></input></p>
                                        </div>
                                        <div className="flex flex-row backgroundColor justify-center items-center mr-2 rounded-lg  input-search-container">
                                            <div className="pl-4"><Image alt="" width={24} height={24} className="w-4 h-4" src="/images/filter.svg"></Image ></div>
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
                                            <ModalComponent isOpen={isDeleteModalOpen} closeModal={closeDeleteModal} title={deleteClientDetails}>
                                                <div className="">
                                                    <div className="p-16 py-6 pb-16">
                                                        <form action="" className="text-sm">

                                                            <div className="mb-2 darkGreen-sm flex flex-row justify-end">
                                                                <label className="mr-4 mt-1">Account Name: </label><input type="text" name="password" id="password" placeholder="Sample Text" className="inputModalRed text-red-700 min-w-[50%] px-3 py-1 backgroundColor  focus:outline-none text-sm tracking-tighter" />
                                                            </div>
                                                            <div className="mb-2 darkGreen-sm flex flex-row justify-end">
                                                                <label className="mr-4 mt-1 whitespace-nowrap">ACH And Wire Routing Number: </label><input type="text" name="password" id="password" placeholder="Sample Text" className="inputModalRed text-red-700 min-w-[50%] px-3 py-1 backgroundColor focus:outline-none text-sm tracking-tighter" />
                                                            </div>
                                                            <div className="mb-2 darkGreen-sm flex flex-row justify-end">
                                                                <label className="mr-4 mt-1">Account Number: </label><input type="text" name="password" id="password" placeholder="Sample Text" className="inputModalRed text-red-700 min-w-[50%] px-3 py-1 backgroundColor focus:outline-none text-sm tracking-tighter" />
                                                            </div>
                                                            <div className="mb-2 darkGreen-sm flex flex-row justify-end">
                                                                <label className="mr-4 mt-1">Routing Number: </label><input type="text" name="password" id="password" placeholder="Sample Text" className="inputModalRed text-red-700 min-w-[50%] px-3 py-1 backgroundColor focus:outline-none text-sm tracking-tighter" />
                                                            </div>
                                                            <div className="mb-2 darkGreen-sm flex flex-row justify-end">
                                                                <label className="mr-4 mt-1">Bank Address: </label><textarea cols={20} rows={3} name="password" id="password" placeholder="Sample Text" className="min-w-[50%] text-red-700 inputModalRed px-3 py-1 backgroundColor link focus:outline-none tracking-tighter" />
                                                            </div>
                                                            <div className="mb-2 darkGreen-sm flex flex-row justify-end">
                                                                <label className="mr-4 mt-1">Reference </label><input type="text" name="password" id="password" placeholder="Sample Text" className="inputModalRed min-w-[50%] text-red-700 px-3 py-1 backgroundColor focus:outline-none text-sm tracking-tighter" />
                                                            </div>

                                                            <div className="text-sm font-normal text-white flex flex-row justify-center mt-12">
                                                                <button type="button" onClick={openConfirmDeleteModal} className=" buttonColor rounded-lg mr-2 px-2 h-7 w-16 py-1">Delete</button>
                                                                <ModalComponent isOpen={confimDeleteModel} closeModal={closeConfirmDeleteModal} title="">
                                                                    <div className="">
                                                                        <form action="" className="text-sm">
                                                                            <div className="m-12 p-16 py-12 border-2 border-red-700 rounded">
                                                                                <div className="flex flex-col justify-center">
                                                                                    <div className="flex justify-center mb-4"><Image alt="" width={125} height={125}  className="h-12 w-12" src="/images/component.svg"></Image ></div>
                                                                                    <div className="flex justify-center mb-4 text-sm font-bold text-red-700 heading5"><p>Are You Sure?</p></div>
                                                                                    <div className="flex justify-center mb-3 text-xs"><p>This action cannot be undone.</p></div>
                                                                                    <div className="flex justify-center text-xs"><p>Are you sure you want to delete this bank account?</p></div>

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
                                                            <td scope="row" className=" font-medium border border-darker-secondary"><div className="flex justify-center items-center">
                                                                <input type="checkbox" id="checkBoxid1" checked={checkedState.checkBoxid1}
                                                                    onChange={() => handleChange('checkBoxid1')} />
                                                                <label htmlFor="checkBoxid1" className={`custom-checkbox ${checkedState.checkBoxid1 ? 'checked' : ''}`}><span className="checkedbox"></span></label>
                                                            </div></td>
                                                            <td scope="row" className=" font-medium border border-darker-secondary"><div className="flex justify-center items-center">
                                                                <input type="checkbox" id="checkBoxid2" checked={checkedState.checkBoxid2}
                                                                    onChange={() => handleChange('checkBoxid2')} />
                                                                <label htmlFor="checkBoxid2" className={`custom-checkbox ${checkedState.checkBoxid2 ? 'checked' : ''}`}><span className="checkedbox"></span></label>
                                                            </div></td>
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
                                                                    </ModalComponent><Image alt="" width={35} height={35}  src="/images/sendIcon.svg" /></button></div>
                                                            </td>


                                                        </tr>
                                                        <tr className="border border-b-darker-secondary">
                                                            <td scope="row" className=" font-medium text-center ">FNB</td>
                                                            <td scope="row" className=" font-medium text-center border border-darker-secondary">Yes</td>
                                                            <td scope="row" className=" font-medium text-center  border border-darker-secondary">1</td>
                                                            <td scope="row" className=" font-medium border border-darker-secondary"><div className="flex justify-center items-center">
                                                                <input type="checkbox" id="checkBoxid3" checked={checkedState.checkBoxid3}
                                                                    onChange={() => handleChange('checkBoxid3')} />
                                                                <label htmlFor="checkBoxid3" className={`custom-checkbox ${checkedState.checkBoxid3 ? 'checked' : ''}`}><span className="checkedbox"></span></label>
                                                            </div></td>
                                                            <td scope="row" className=" font-medium border border-darker-secondary"><div className="flex justify-center items-center">
                                                                <input type="checkbox" id="checkBoxid4" checked={checkedState.checkBoxid4}
                                                                    onChange={() => handleChange('checkBoxid4')} />
                                                                <label htmlFor="checkBoxid4" className={`custom-checkbox ${checkedState.checkBoxid4 ? 'checked' : ''}`}><span className="checkedbox"></span></label>
                                                            </div></td>
                                                            <td scope="row" className=" font-medium text-center"><div className="flex flex-row justify-between items-center pl-2"><div>Currencies Receivable: ZAR</div><button onClick={openSendBankDetails}><Image alt="" width={35} height={35} src="/images/sendIcon.svg" /></button></div></td>


                                                        </tr>
                                                        <tr className="">
                                                            <td scope="row" className=" font-medium text-center ">FNB</td>
                                                            <td scope="row" className=" font-medium text-center border border-b-0 border-darker-secondary">Yes</td>
                                                            <td scope="row" className=" font-medium text-center  border border-b-0 border-darker-secondary">1</td>
                                                            <td scope="row" className=" font-medium border border-b-0 border-darker-secondary"><div className="flex justify-center items-center">
                                                                <input type="checkbox" id="checkBoxid5" checked={checkedState.checkBoxid5}
                                                                    onChange={() => handleChange('checkBoxid5')} />
                                                                <label htmlFor="checkBoxid5" className={`custom-checkbox ${checkedState.checkBoxid5 ? 'checked' : ''}`}><span className="checkedbox"></span></label>
                                                            </div></td>
                                                            <td scope="row" className=" font-medium border border-b-0 border-darker-secondary"><div className="flex justify-center items-center">
                                                                <input type="checkbox" id="checkBoxid6" checked={checkedState.checkBoxid6}
                                                                    onChange={() => handleChange('checkBoxid6')} />
                                                                <label htmlFor="checkBoxid6" className={`custom-checkbox ${checkedState.checkBoxid6 ? 'checked' : ''}`}><span className="checkedbox"></span></label>
                                                            </div></td>
                                                            <td scope="row" className=" font-medium text-center"><div className="flex flex-row justify-between items-center pl-2"><div>Currencies Receivable: ZAR</div><button onClick={openSendBankDetails}><Image alt="" width={35} height={35}  src="/images/sendIcon.svg" /></button></div></td>


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
                                                            <td scope="row" className=" font-medium border border-darker-secondary"><div className="flex justify-center items-center">
                                                                <input type="checkbox" id="checkBoxid7" checked={checkedState.checkBoxid7}
                                                                    onChange={() => handleChange('checkBoxid7')} />
                                                                <label htmlFor="checkBoxid7" className={`custom-checkbox ${checkedState.checkBoxid7 ? 'checked' : ''}`}><span className="checkedbox"></span></label>
                                                            </div></td>
                                                            <td scope="row" className=" font-medium border border-darker-secondary"><div className="flex justify-center items-center">
                                                                <input type="checkbox" id="checkBoxid8" checked={checkedState.checkBoxid8}
                                                                    onChange={() => handleChange('checkBoxid8')} />
                                                                <label htmlFor="checkBoxid8" className={`custom-checkbox ${checkedState.checkBoxid8 ? 'checked' : ''}`}><span className="checkedbox"></span></label>
                                                            </div></td>
                                                            <td scope="row" className=" font-medium text-center"><div className="flex flex-row justify-between items-center pl-2"><div>Currencies Receivable: ZAR</div><button onClick={openSendBankDetails}><Image alt="" width={35} height={35}   src="/images/sendIcon.svg" /></button></div></td>


                                                        </tr>
                                                        <tr className="border border-b-darker-secondary">
                                                            <td scope="row" className=" font-medium text-center ">FNB</td>
                                                            <td scope="row" className=" font-medium text-center border border-darker-secondary">Yes</td>
                                                            <td scope="row" className=" font-medium text-center  border border-darker-secondary">1</td>
                                                            <td scope="row" className=" font-medium border border-darker-secondary"><div className="flex justify-center items-center">
                                                                <input type="checkbox" id="checkBoxid9" checked={checkedState.checkBoxid9}
                                                                    onChange={() => handleChange('checkBoxid9')} />
                                                                <label htmlFor="checkBoxid9" className={`custom-checkbox ${checkedState.checkBoxid9 ? 'checked' : ''}`}><span className="checkedbox"></span></label>
                                                            </div></td>
                                                            <td scope="row" className=" font-medium border border-darker-secondary"><div className="flex justify-center items-center">
                                                                <input type="checkbox" id="checkBoxid10" checked={checkedState.checkBoxid10}
                                                                    onChange={() => handleChange('checkBoxid10')} />
                                                                <label htmlFor="checkBoxid10" className={`custom-checkbox ${checkedState.checkBoxid10 ? 'checked' : ''}`}><span className="checkedbox"></span></label>
                                                            </div></td>
                                                            <td scope="row" className=" font-medium text-center"><div className="flex flex-row justify-between items-center pl-2"><div>Currencies Receivable: ZAR</div><button onClick={openSendBankDetails}><Image alt=""  width={35} height={35}   src="/images/sendIcon.svg" /></button></div></td>


                                                        </tr>
                                                        <tr className="">
                                                            <td scope="row" className=" font-medium text-center ">FNB</td>
                                                            <td scope="row" className=" font-medium text-center border border-b-0 border-darker-secondary">Yes</td>
                                                            <td scope="row" className=" font-medium text-center  border border-b-0 border-darker-secondary">1</td>
                                                            <td scope="row" className=" font-medium border border-b-0 border-darker-secondary"><div className="flex justify-center items-center">
                                                                <input type="checkbox" id="checkBoxid11" checked={checkedState.checkBoxid11}
                                                                    onChange={() => handleChange('checkBoxid11')} />
                                                                <label htmlFor="checkBoxid11" className={`custom-checkbox ${checkedState.checkBoxid11 ? 'checked' : ''}`}><span className="checkedbox"></span></label>
                                                            </div></td>
                                                            <td scope="row" className=" font-medium border border-b-0 border-darker-secondary"><div className="flex justify-center items-center">
                                                                <input type="checkbox" id="checkBoxid12" checked={checkedState.checkBoxid12}
                                                                    onChange={() => handleChange('checkBoxid12')} />
                                                                <label htmlFor="checkBoxid12" className={`custom-checkbox ${checkedState.checkBoxid12 ? 'checked' : ''}`}><span className="checkedbox"></span></label>
                                                            </div></td>
                                                            <td scope="row" className=" font-medium text-center"><div className="flex flex-row justify-between items-center pl-2"><div>Currencies Receivable: ZAR</div><button onClick={openSendBankDetails}><Image alt="" width={35} height={35}   src="/images/sendIcon.svg" /></button></div></td>


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