import Image from "next/image"
import Link from "next/link"
import ActiveLink from '@/components/navbar/ActiveLink';
export default function Navbar() {
    return (
        <>
            <div className="">
                <div className="flex justify-end h-[10vh]">
                    <div className=" w-5/6 flex flex-row justify-end headerShadow">

                        <div className="flex flex-row justify-center items-center">
                            <div className="pr-4 pl-4 userBorder border-l-1">
                                <Image width={45} height={45} src="/images/userIcon.svg" alt="" />
                            </div>
                            <div className="flex flex-row justify-center items-center">
                                <div className="text-sm">BlockKoin Admin</div>
                                <div className="pl-4 pr-12 ">
                                    <Image width={12} height={6} src="/images/vector.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <aside className="w-1/6 absolute top-0 boxShadow min-h-screen">
                    <div className="h-[10vh] flex justify-center items-center">
                        <Image width={191} height={59} className="" src="/images/logo.svg" alt="" />
                    </div>
                    <div className="px-4 my-16 flex flex-col justify-end items-center ">
                        <ul className="text-sm text-end font-medium">
                            <ActiveLink href="/dashboard">Dashboard</ActiveLink>
                            <ActiveLink href="/reports">Reports</ActiveLink>
                            <ActiveLink href="/unmatched">Unmatched</ActiveLink>

                            <ActiveLink href="/matched">Matched</ActiveLink>
                            <ActiveLink href="/withdraw">Withdraw</ActiveLink>
                            <ActiveLink href="/profiles">Profiles</ActiveLink>
                            <ActiveLink href="/banks">Banks</ActiveLink>
                            <ActiveLink href="/fees">Fees</ActiveLink>
                            <ActiveLink href="/user-rights">User Rights</ActiveLink>
                            <ActiveLink href="/settings">Settings</ActiveLink>
                            <ActiveLink href="/archive">Archive</ActiveLink>

                        </ul>
                    </div>
                </aside>
            </div>
        </>
    )
}


