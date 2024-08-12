"use client";

import Image from "next/image"
import { useRouter } from "next/navigation";

export default function AccessRequest() {

    const router:any = useRouter();

    const handleClick = () => {
        router.push("/dashboard");
    }

    return (

        <>
            <div className="min-h-screen flex justify-center items-center backgroundColor">
                <section className=" lg:w-4/6 dark:bg-gray-800 flex justify-between backgroundColor">

                    <div className="xl:px-16 xl:py-8 2xl:px-16 2xl:py-8 bg-white container flex flex-col justify-between mx-auto space-y-16  lg:my-8 lg:flex-row lg:items-center rounded authShadow">

                        <div className="w-1/2">
                            <div className="left-0 2xl:-mt-16 logoHeightAndWidth">
                                <img src="/images/logo.svg" alt="logo"></img>

                            </div>

                            <div className="ml-14">


                                <div className="pt-10 xl:pt-0 2xl:pt-10">
                                    <h1 className="heading1 tracking-wide darkGreen ">
                                        Request Access
                                    </h1>
                                    <p className="flex items-center -mx-2 link">
                                        <span className="authParagraph mx-2 mb-2 mt-2 ">Please complete the form below</span>
                                    </p>
                                </div>
                            </div>

                            <div className="ml-14">
                                <form action="" className="text-sm">
                                <div className="my-4 2xl:mt-8 text-sm w-1/2 input-container">
                                        <input type="text" name="password" id="password" placeholder="Enter Full Name" className="w-full px-3 py-1 inputClass focus:outline-none text-sm  rounded" />
                                    </div>
                                    <div className="my-4 text-sm backgroundColor w-1/2 input-container">
                                        <input type="email" name="email" id="email" placeholder="Enter Email Address" className="w-full px-3 py-1 inputClass focus:outline-none text-sm  rounded" />
                                    </div>
                                    
                                    <div className="2xl:mt-7 mb-4">
                                        <button type="button" onClick={handleClick} className="buttonFont px-2 pt-1.5 pb-1.5 text-white buttonColor rounded-lg">REQUEST</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full  lg:w-1/2 ">
                            <Image height={622} width={596}   className=" object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="/images/accessRequest.svg" alt="glasses photo" />
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}