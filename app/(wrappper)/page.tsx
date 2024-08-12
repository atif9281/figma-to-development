import Image from "next/image"
export default function Main() {



  return (
    
      <div className="w-5/6  flex flex-col justify-start pt-8 backgroundColor">
        <div className="flex flex-row text-xl font-bold darkGreen justify-evenly">

          <div className=" basis-10/12 heading2 pl-0 md:pl-7 lg:pl-7 xl:pl-7 2xl:pl-7">Dashboard</div>

        </div>
        <div className="">
          <div className="mt-4">
            <div className="flex flex-row justify-evenly">
              <div className="basis-4/12 linkBackground px-4 py-2 pb-4 rounded ">
                <p className="text-xs font-normal text-white mb-2 pt-1"><text>Total Company Funds Under Management</text></p>
                <sup className="text-white text-xs font-medium mr-1">$</sup><span className="activeLink boxTypography">999,999,999,999,999.99</span>
              </div>
              <div className="basis-4/12 bg-white darkGreen px-4 py-2 pb-4 rounded">
                <p className="text-xs font-normal text-black mb-2 pt-1"><text>Due To Trading Account</text></p>
                <sup className="text-black text-xs font-medium mr-1">$</sup><span className="darkGreen boxTypography">999,999,999,999,999.99</span>
              </div>

            </div>
          </div>
          <div className="mt-4">
            <div className="flex flex-row justify-evenly">
              <div className="basis-4/12 skinBackground px-4 py-2 pb-4 rounded">
                <p className="text-xs font-normal text-white mb-2 pt-1"><text>Unmatched Funds</text></p>
                <sup className="text-white text-xs font-medium mr-1">$</sup><span className="text-white boxTypography">999,999,999,999,999.99</span>
              </div>
              <div className="basis-4/12 bg-white darkGreen px-4 py-2 pb-4 rounded">
                <p className="text-xs font-normal text-black mb-2 pt-1"><text>Due From Trading Account</text></p>
                <sup className="text-black text-xs font-medium mr-1">$</sup><span className="darkGreen boxTypography">999,999,999,999,999.99</span>
              </div>

            </div>
          </div>
          <div className="mt-4">
            <div className="flex flex-row justify-evenly">
              <div className="basis-4/12 buttonColor px-4 py-2 pb-4 rounded">
                <p className="text-xs font-normal text-white mb-2 pt-1"><text>Pending Release</text></p>
                <sup className="text-white  text-xs font-medium mr-1">$</sup><span className="text-white boxTypography">999,999,999,999,999.99</span>
              </div>
              <div className="basis-4/12 bg-white darkGreen px-4 py-2 pb-4 rounded">
                <p className="text-xs font-normal text-black mb-2 pt-1"><text>Total Cash</text></p>
                <sup className="text-black  text-xs font-medium mr-1">$</sup><span className="darkGreen boxTypography">999,999,999,999,999.99</span>
              </div>

            </div>
          </div>
          <div className="mt-4">
            <div className="flex flex-row justify-evenly">
              <div className="basis-4/12 darkBackground px-4 py-2 pb-4 rounded ">
                <div className="text-xs font-normal text-white mb-2 flex flex-row justify-between"><text className="pt-1">Revenue (Month to Date)</text><div className="historyTimer -mt-2 -mr-4"><Image width={25} height={25} alt="" src="/images/historyTimer.svg" /></div></div>
                <sup className="text-white  text-xs font-medium mr-1">$</sup><span className="activeLink boxTypography">999,999,999,999,999.99</span>
              </div>
              <div className="basis-4/12 flex flex-row justify-between">
                <div className="basis-5/12 darkBackground px-4 py-2 pb-4 rounded">
                  <div className="text-xs font-normal text-white mb-2 flex flex-row justify-between"><text className="pt-1">New Accounts</text><div className="historyTimer -mt-2 -mr-4"><Image width={25} height={25} alt="" src="/images/historyTimer.svg" /></div></div>
                  <sup className="text-white  text-xs font-medium mr-1">$</sup><span className="activeLink boxTypography">999,999,99</span>
                </div>
                <div className="basis-5/12 darkBackground px-4 py-2  pb-4 rounded">
                  <div className="text-xs font-normal text-white mb-2 flex flex-row justify-between"><text className="pt-1 ">New Accounts</text><div className="historyTimer -mt-2 -mr-4"><Image width={25} height={25} alt="" src="/images/historyTimer.svg" /></div></div>
                  <sup className="text-white  text-xs font-medium mr-1">$</sup><span className="activeLink boxTypography">999,999,99</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

  );
}
