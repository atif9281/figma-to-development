"use client";
import { useRouter } from "next/navigation";
export default function Home() {

  const router:any = useRouter();

  const handleClick = () => {
  
    router.push("/dashboard");
  
  };

  return (
    <div className="min-h-screen">
    <div className="min-h-screen flex justify-center items-center backgroundColor">
                <section className=" lg:w-4/6 dark:bg-gray-800 flex justify-between backgroundColor">

                    <div className=" bg-white container flex flex-col justify-between mx-auto space-y-12  lg:my-8 lg:flex-row lg:items-center ">

                        <div className="">
                            <div className="left-0 ">
                                <img src="/images/logo.png" alt="logo"></img>

                            </div>

                            <div className="ml-10">


                                <div className="mt-2 space-y-3">
                                    <h1 className="text-3xl font-bold tracking-wide darkGreen lg:text-xl">
                                        Admin Dashboard
                                    </h1>
                                    <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                        <span className="mx-2 mb-3 text-sm">Please Sign In</span>
                                    </p>
                                </div>
                            </div>

                            <div className="ml-10">
                                <form action="" className="text-sm">
                                    <div className="my-4 text-sm backgroundColor less-italic">
                                        <input type="email" name="email" id="email" placeholder="Enter Email Address" className="w-full px-3 py-1 backgroundColor focus:outline-none text-sm tracking-tighter" />
                                    </div>
                                    <div className="mb-4 text-sm less-italic">
                                        <input type="password" name="password" id="password" placeholder="Enter Password" className="w-full px-3 py-1 backgroundColor focus:outline-none text-sm tracking-tighter" />
                                    </div>
                                    <div className="mb-4">
                                        <button type="button" onClick={handleClick} className=" px-2 py-1 text-white buttonColor rounded-xl">SIGN IN</button>
                                    </div>
                                    <a href="access-request" className="darkGreen text-sm border-b-2 border-green-700">Request Access</a>
                                </form>
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full h-96 lg:w-1/2 xs:ml-0 sm:ml-2 md:sm-6 lg:ml-12">
                            <img className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="/images/signin.png" alt="glasses photo" />
                        </div>
                    </div>
                </section>
            </div>
    </div>
  );
}
