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
        checkBoxid11: false

    });


    const handleChange = (id:any) => {
        setCheckedState((prevState:any) => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };



    const clientDetails = <p className="mt-10 ml-14 darkGreen heading5">Client Details</p>;



    return (
        <>

            <div className="w-5/6  flex flex-col justify-start pt-8 backgroundColor">
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
                                                <table className="w-full text-sm 2xl:text-base items-center">
                                                    <thead className=" text-sm 2xl:text-lg ">
                                                        <tr className="text-left text-nowrap border border-t-0 border-l-0 border-r-0 border-b-secondary ">
                                                            <th scope="col" className="text-start pt-2 pl-0.5">Date</th>

                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Source</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Reference</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Currency</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Funding Amount</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Currency</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Received Amount</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Recipient</th>
                                                            <th scope="col" className="text-center pt-2 border border-t-0 border-secondary">Method</th>
                                                            <td scope="row" className=" "><div className="flex justify-center items-center"><div className="flex justify-center items-center">
                                                                <input type="checkbox" id="checkBoxid1" checked={checkedState.checkBoxid1}
                                                                    onChange={() => handleChange('checkBoxid1')} />
                                                                <label htmlFor="checkBoxid1" className={`custom-checkbox ${checkedState.checkBoxid1 ? 'checked' : ''}`}><span className="checkedbox"></span></label>
                                                            </div><div className="my-auto">
                                                                <div className="text-sm font-normal text-white pl-2">
                                                                    <button type="button" onClick={openConfirmDeleteModal} className=" buttonColor rounded mr-2 px-2 h-5">Release All</button>
                                                                    <ModalComponent isOpen={confimDeleteModel} closeModal={closeConfirmDeleteModal} title="">
                                                                        <div className="">
                                                                            <form action="" className="text-sm">
                                                                                <div className="p-16 py-12 border-2 border-modal rounded">
                                                                                    <div className="flex flex-col justify-center">
                                                                                        <div className="flex justify-center mb-4"><img className="h-12 w-12" src="/images/Release.svg"></img></div>
                                                                                        <div className="flex justify-center mb-4 text-sm font-bold text-green-500"><p className="flex flex-row darkGreen heading5">Release <p className="mx-1 activeLink heading5">12</p><p className="heading5"> Payments?</p></p></div>
                                                                                        <div className="flex justify-center text-xs mb-3 2xl:text-base"><p>this action cannot be undone.</p></div>
                                                                                        <div className="flex justify-center text-xs 2xl:text-base"><p>are you sure you want to release all the payments?</p></div>

                                                                                    </div>

                                                                                    <div className="text-sm font-normal text-white flex flex-row justify-center mt-8">
                                                                                        <button type="button" onClick={closeConfirmDeleteModal} className=" buttonColor rounded-lg mr-2 px-2 h-7 w-16 py-1">Release</button>
                                                                                        <button type="button" onClick={closeConfirmDeleteModal} className=" bg-red-600 rounded-lg px-1 w-16 h-7 py-1">Cancel</button>
                                                                                    </div></div>

                                                                            </form>
                                                                        </div>
                                                                    </ModalComponent>
                                                                </div>
                                                            </div></div></td>

                                                        </tr>
                                                    </thead>
                                                    <tbody className="  text-sm 2xl:text-lg ">

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
                                                                    <div className="p-16 py-6 pb-12">
                                                                        <form action="" className="text-sm">
                                                                            <div className="mb-2 darkGreen-sm flex flex-row justify-end">
                                                                                <label className="mr-4 mt-1">Client ID: </label><input type="text" name="password" id="password" placeholder="Dropdown" className="inputModal min-w-[50%] px-3 py-1 backgroundColor darkGreen focus:outline-none text-sm tracking-tighter" />
                                                                            </div>
                                                                            <div className="mb-2 darkGreen-sm flex flex-row justify-end">
                                                                                <label className="mr-4 mt-1">Client Name: </label><input type="text" name="password" id="password" placeholder="Sample Text" className="inputModal min-w-[50%] px-3 py-1 backgroundColor darkGreen focus:outline-none text-sm tracking-tighter" />
                                                                            </div>
                                                                            <div className="mb-2 darkGreen-sm flex flex-row justify-end">
                                                                                <label className="mr-4 mt-1">Client Surname: </label><input type="text" name="password" id="password" placeholder="Sample Text" className="inputModal min-w-[50%] px-3 py-1 backgroundColor darkGreen focus:outline-none text-sm tracking-tighter" />
                                                                            </div>
                                                                            <div className="mb-2 darkGreen-sm flex flex-row justify-end">
                                                                                <label className="mr-4 mt-1">Client Date of Birth: </label><input type="text" name="password" id="password" placeholder="Sample Text" className="inputModal min-w-[50%] px-3 py-1 backgroundColor darkGreen focus:outline-none text-sm tracking-tighter" />
                                                                            </div>
                                                                            <div className="mb-2 darkGreen-sm flex flex-row justify-end">
                                                                                <label className="mr-4 mt-1">Client ID/Passport Number: </label><input type="text" name="password" id="password" placeholder="Sample Text" className="inputModal min-w-[50%] px-3 py-1 backgroundColor darkGreen focus:outline-none text-sm tracking-tighter" />
                                                                            </div>
                                                                            <div className="mb-2 darkGreen-sm flex flex-row justify-end">
                                                                                <label className="mr-4 mt-1">Client Mobile Number: </label><input type="text" name="password" id="password" placeholder="Sample Text" className="inputModal min-w-[50%] px-3 py-1 backgroundColor darkGreen focus:outline-none text-sm tracking-tighter" />
                                                                            </div>
                                                                            <div className="mb-2 darkGreen-sm flex flex-row justify-end">
                                                                                <label className="mr-4 mt-1">Client Profile Status: </label><input type="text" name="password" id="password" placeholder="Sample Text" className="inputModal min-w-[50%] px-3 py-1 backgroundColor darkGreen focus:outline-none text-sm tracking-tighter" />
                                                                            </div>
                                                                            <div className=" darkGreen-sm flex flex-row justify-center mt-10">
                                                                                <a className="mr-4 border border-x-0 border-t-0 border-b-green-500 activeLink">View Full Profile</a>
                                                                            </div>

                                                                            <div className="text-sm font-normal text-white flex flex-row justify-center mt-4">
                                                                                <button type="button" onClick={closeDeleteModal} className=" bg-red-600 rounded-lg px-1 w-16 h-7 py-1">Close</button>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </ModalComponent></td>
                                                            <td scope="row" className=" font-medium text-center  border border-secondary">Auto</td>
                                                            <td scope="row" className=" "><div className="flex justify-center items-center"><div className="flex justify-center items-center">
                                                                <input type="checkbox" id="checkBoxid2" checked={checkedState.checkBoxid2}
                                                                    onChange={() => handleChange('checkBoxid2')} />
                                                                <label htmlFor="checkBoxid2" className={`custom-checkbox ${checkedState.checkBoxid2 ? 'checked' : ''}`}><span className="checkedbox"></span></label>
                                                            </div><div className="my-auto">
                                                                <div className="text-sm font-normal text-white pl-2">
                                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-5">Release</button>
                                                                </div>
                                                            </div><div className="pb-1 w-5"><button onClick={openAddModal}><img src="/images/X.svg"></img></button>
                                                                    <ModalComponent isOpen={isAddModalOpen} closeModal={closeAddModal} title="">
                                                                        <div className="">
                                                                            <form action="" className="text-sm">
                                                                                <div className="p-16 py-12 border-2 border-red-700 rounded">
                                                                                    <div className="flex flex-col justify-center">
                                                                                        <div className="flex justify-center mb-4"><img className="h-12 w-12" src="/images/Decline.svg"></img></div>
                                                                                        <div className="flex justify-center mb-4 text-sm font-bold text-red-700"><p className="heading5">Decline Deposit?</p></div>
                                                                                        <div className="flex justify-center text-xs mb-4"><p className="2xl:text-base">please provide a reason for the declined request:</p></div>
                                                                                        <div className="mb-4 text-sm flex flex-row justify-center">
                                                                                            <textarea cols={31} rows={4} name="password" id="password" placeholder="Sample Text" className="min-w-[50%] inputModal px-3 py-1 backgroundColor  link focus:outline-none text-sm tracking-tighter" />
                                                                                        </div>

                                                                                    </div>

                                                                                    <div className="text-sm font-normal text-white flex flex-row justify-center mt-6">
                                                                                        <button type="button" onClick={closeAddModal} className=" buttonColor rounded-lg mr-2 px-2 h-7 w-16 py-1">Decline</button>
                                                                                        <button type="button" onClick={closeAddModal} className=" bg-red-600 rounded-lg px-1 w-16 h-7 py-1">Cancel</button>
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
                                                            <td scope="row" className=" "><div className="flex justify-center items-center"><div className="flex justify-center items-center">
                                                                <input type="checkbox" id="checkBoxid3" checked={checkedState.checkBoxid3}
                                                                    onChange={() => handleChange('checkBoxid3')} />
                                                                <label htmlFor="checkBoxid3" className={`custom-checkbox ${checkedState.checkBoxid3 ? 'checked' : ''}`}><span className="checkedbox"></span></label>
                                                            </div><div className="my-auto">
                                                                <div className="text-sm font-normal text-white pl-2">
                                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-5">Release</button>
                                                                </div>
                                                            </div><div className="pb-1 w-5"><button onClick={openAddModal}><img src="/images/X.svg"></img></button>

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
                                                            <td scope="row" className=" "><div className="flex justify-center items-center"><div className="flex justify-center items-center">
                                                                <input type="checkbox" id="checkBoxid4" checked={checkedState.checkBoxid4}
                                                                    onChange={() => handleChange('checkBoxid4')} />
                                                                <label htmlFor="checkBoxid4" className={`custom-checkbox ${checkedState.checkBoxid4 ? 'checked' : ''}`}><span className="checkedbox"></span></label>
                                                            </div><div className="my-auto">
                                                                <div className="text-sm font-normal text-white pl-2">
                                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-5">Release</button>
                                                                </div>
                                                            </div><div className="pb-1 w-5"><button onClick={openAddModal}><img src="/images/X.svg"></img></button>

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
                                                            <td scope="row" className=" "><div className="flex justify-center items-center"><div className="flex justify-center items-center">
                                                                <input type="checkbox" id="checkBoxid5" checked={checkedState.checkBoxid5}
                                                                    onChange={() => handleChange('checkBoxid5')} />
                                                                <label htmlFor="checkBoxid5" className={`custom-checkbox ${checkedState.checkBoxid5 ? 'checked' : ''}`}><span className="checkedbox"></span></label>
                                                            </div><div className="my-auto">
                                                                <div className="text-sm font-normal text-white pl-2">
                                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-5">Release</button>
                                                                </div>
                                                            </div><div className="pb-1 w-5"><button onClick={openAddModal}><img src="/images/X.svg"></img></button>

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
                                                            <td scope="row" className=" "><div className="flex justify-center items-center"><div className="flex justify-center items-center">
                                                                <input type="checkbox" id="checkBoxid6" checked={checkedState.checkBoxid6}
                                                                    onChange={() => handleChange('checkBoxid6')} />
                                                                <label htmlFor="checkBoxid6" className={`custom-checkbox ${checkedState.checkBoxid6 ? 'checked' : ''}`}><span className="checkedbox"></span></label>
                                                            </div><div className="my-auto">
                                                                <div className="text-sm font-normal text-white pl-2">
                                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-5">Release</button>
                                                                </div>
                                                            </div><div className="pb-1 w-5"><button onClick={openAddModal}><img src="/images/X.svg"></img></button>

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
                                                            <td scope="row" className=" "><div className="flex justify-center items-center"><div className="flex justify-center items-center">
                                                                <input type="checkbox" id="checkBoxid7" checked={checkedState.checkBoxid7}
                                                                    onChange={() => handleChange('checkBoxid7')} />
                                                                <label htmlFor="checkBoxid7" className={`custom-checkbox ${checkedState.checkBoxid7 ? 'checked' : ''}`}><span className="checkedbox"></span></label>
                                                            </div><div className="my-auto">
                                                                <div className="text-sm font-normal text-white pl-2">
                                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-5">Release</button>
                                                                </div>
                                                            </div><div className="pb-1 w-5"><button onClick={openAddModal}><img src="/images/X.svg"></img></button>

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
                                                            <td scope="row" className=" "><div className="flex justify-center items-center"><div className="flex justify-center items-center">
                                                                <input type="checkbox" id="checkBoxid8" checked={checkedState.checkBoxid8}
                                                                    onChange={() => handleChange('checkBoxid8')} />
                                                                <label htmlFor="checkBoxid8" className={`custom-checkbox ${checkedState.checkBoxid8 ? 'checked' : ''}`}><span className="checkedbox"></span></label>
                                                            </div><div className="my-auto">
                                                                <div className="text-sm font-normal text-white pl-2">
                                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-5">Release</button>
                                                                </div>
                                                            </div><div className="pb-1 w-5"><button onClick={openAddModal}><img src="/images/X.svg"></img></button>

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
                                                            <td scope="row" className=" "><div className="flex justify-center items-center"><div className="flex justify-center items-center">
                                                                <input type="checkbox" id="checkBoxid9" checked={checkedState.checkBoxid9}
                                                                    onChange={() => handleChange('checkBoxid9')} />
                                                                <label htmlFor="checkBoxid9" className={`custom-checkbox ${checkedState.checkBoxid9 ? 'checked' : ''}`}><span className="checkedbox"></span></label>
                                                            </div><div className="my-auto">
                                                                <div className="text-sm font-normal text-white pl-2">
                                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-5">Release</button>
                                                                </div>
                                                            </div><div className="pb-1 w-5"><button onClick={openAddModal}><img src="/images/X.svg"></img></button>

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
                                                            <td scope="row" className=" "><div className="flex justify-center items-center"><div className="flex justify-center items-center">
                                                                <input type="checkbox" id="checkBoxid10" checked={checkedState.checkBoxid10}
                                                                    onChange={() => handleChange('checkBoxid10')} />
                                                                <label htmlFor="checkBoxid10" className={`custom-checkbox ${checkedState.checkBoxid10 ? 'checked' : ''}`}><span className="checkedbox"></span></label>
                                                            </div><div className="my-auto">
                                                                <div className="text-sm font-normal text-white pl-2">
                                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-5">Release</button>
                                                                </div>
                                                            </div><div className="pb-1 w-5"><button onClick={openAddModal}><img src="/images/X.svg"></img></button>

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
                                                            <td scope="row" className=" "><div className="flex justify-center items-center"><div className="flex justify-center items-center">
                                                                <input type="checkbox" id="checkBoxid11" checked={checkedState.checkBoxid11}
                                                                    onChange={() => handleChange('checkBoxid11')} />
                                                                <label htmlFor="checkBoxid11" className={`custom-checkbox ${checkedState.checkBoxid11 ? 'checked' : ''}`}><span className="checkedbox"></span></label>
                                                            </div><div className="my-auto">
                                                                <div className="text-sm font-normal text-white pl-2">
                                                                    <button type="button" className=" buttonColor rounded mr-2 px-2 h-5">Release</button>
                                                                </div>
                                                            </div><div className="pb-1 w-5"><button onClick={openAddModal}><img src="/images/X.svg"></img></button>

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