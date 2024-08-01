import Image from "next/image"

export default function SignOut() {
    return (

        <>
            <div className="h-screen flex justify-center items-center backgroundColor">
                <section className=" lg:w-4/6 dark:bg-gray-800 flex justify-between backgroundColor">

                    <div className=" bg-white container flex flex-col justify-between mx-auto space-y-16  lg:my-8 lg:flex-row lg:items-center rounded boxShadow">

                        <div className="w-1/2">
                            <div className="left-0 logoHeightAndWidth">
                                <img src="/images/logo.png" alt="logo"></img>

                            </div>

                            <div className="ml-10">


                                <div className="pt-28  ">
                                    <h1 className="heading1 tracking-wide darkGreen lg:text-xl">
                                        Signed Out
                                    </h1>
                                    <p className="flex items-center -mx-2 link">
                                        <span className="mx-2 mb-6 authParagraph">See you soon</span>
                                    </p>
                                </div>
                            </div>

                            <div className="ml-10">
                                <form action="" className="text-sm">
                                
                                    
                                    <div className="mb-24">
                                        <button type="button" className=" px-2 pt-1.5 text-white buttonColor rounded-md">SIGN IN</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full h-96 lg:w-1/2 ">
                            <img className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="/images/signin.png" alt="glasses photo" />
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}