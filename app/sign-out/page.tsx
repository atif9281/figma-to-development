import Image from "next/image"

export default function SignOut() {
    return (

        <>
            <div className="min-h-screen flex justify-center items-center backgroundColor">
                <section className=" lg:w-4/6 dark:bg-gray-800 flex justify-between backgroundColor">

                    <div className="xl:px-16 xl:py-8 2xl:px-16 2xl:py-8 bg-white container flex flex-col justify-between mx-auto space-y-16  lg:my-8 lg:flex-row lg:items-center rounded boxShadow">

                        <div className="w-1/2">
                            <div className="left-0 logoHeightAndWidth">
                                <img src="/images/logo.svg" alt="logo"></img>

                            </div>

                            <div className="ml-14">


                                <div className="pt-28  ">
                                    <h1 className="heading1 tracking-wide darkGreen ">
                                        Signed Out
                                    </h1>
                                    <p className="flex items-center -mx-2 link">
                                        <span className="mx-2 mb-6 authParagraph">See you soon</span>
                                    </p>
                                </div>
                            </div>

                            <div className="ml-14">
                                <form action="" className="text-sm">
                                
                                    
                                    <div className="mb-24">
                                        <button type="button" className="buttonFont px-2 pt-1.5 pb-1.5 text-white buttonColor rounded-lg authShadow">SIGN IN</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full lg:w-1/2 ">
                            <img className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="/images/signin.svg" alt="glasses photo" />
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}