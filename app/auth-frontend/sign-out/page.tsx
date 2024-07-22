import Image from "next/image"

export default function SignOut() {
    return (

        <>
            <div className="h-screen flex justify-center items-center backgroundColor">
                <section className=" lg:w-4/6 dark:bg-gray-800 flex justify-between backgroundColor">

                    <div className=" bg-white container flex flex-col justify-between mx-auto space-y-12  lg:my-8 lg:flex-row lg:items-center ">

                        <div className="">
                            <div className="left-0">
                                <img src="/images/logo.png" alt="logo"></img>

                            </div>

                            <div className="ml-10">


                                <div className="mt-2 space-y-3">
                                    <h1 className="text-3xl font-bold tracking-wide darkGreen lg:text-xl">
                                        Signed Out
                                    </h1>
                                    <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                        <span className="mx-2 mb-6 text-sm">See you soon</span>
                                    </p>
                                </div>
                            </div>

                            <div className="ml-10">
                                <form action="" className="text-sm">
                                
                                    
                                    <div className="mb-4">
                                        <button type="button" className=" px-2 py-1 text-white buttonColor rounded-xl">SIGN IN</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full h-96 lg:w-1/2 ml-12">
                            <img className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="/images/signin.png" alt="glasses photo" />
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}