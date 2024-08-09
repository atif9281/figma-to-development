import Image from "next/image"
import Link from "next/link"
import ActiveLink from '@/components/navbar/ActiveLink';
export default function Navbar() {
    return (
        <>
            <div className="">
                <div className="flex justify-end h-[10vh]">
                    <div className=" w-5/6 flex flex-row justify-end boxShadow">

                        <div className="flex flex-row justify-center items-center">
                            <div className="pr-4 pl-4 userBorder border-l-1">
                                <img src="/images/userIcon.svg" alt="" />
                            </div>
                            <div className="flex flex-row justify-center items-center">
                                <div className="text-sm">BlockKoin Admin</div>
                                <div className="pl-4 pr-12 ">
                                    <img src="/images/vector.svg"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <aside className="w-1/6 absolute top-0 boxShadow min-h-screen">
                    <div className="h-[10vh] flex justify-center items-center">
                        <img className="" src="/images/logo.svg" alt="" />
                    </div>
                    <div className="px-4 my-10 flex flex-col justify-end items-center ">
                        <ul className="text-sm text-end font-medium">
                            <ActiveLink href="/dashboard/dashboard">Dashboard</ActiveLink>
                            <ActiveLink href="/dashboard/reports">Reports</ActiveLink>
                            <ActiveLink href="/dashboard/unmatched">Unmatched</ActiveLink>

                            <ActiveLink href="/dashboard/matched">Matched</ActiveLink>
                            <ActiveLink href="/dashboard/withdraw">Withdraw</ActiveLink>
                            <ActiveLink href="/dashboard/profiles">Profiles</ActiveLink>
                            <ActiveLink href="/dashboard/banks">Banks</ActiveLink>
                            <ActiveLink href="/dashboard/fees">Fees</ActiveLink>
                            <ActiveLink href="/dashboard/user-rights">User Rights</ActiveLink>
                            <ActiveLink href="/dashboard/settings">Settings</ActiveLink>
                            <ActiveLink href="/dashboard/archive">Archive</ActiveLink>

                        </ul>
                    </div>
                </aside>
            </div>
        </>
    )
}


