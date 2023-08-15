import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "./util/calendar";
import cn from "./util/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import calendar from '../Images/calendar.png'

export default function Calendar({name}) {
	const days = ["S", "M", "T", "W", "T", "F", "S"];
	const currentDate = dayjs();
	 const [asd,setasd]=useState(false)
	const [today, setToday] = useState(currentDate);
	const [selectDate, setSelectDate] = useState(currentDate);

	function asdd(){
    setasd(!asd)
//	console.log(selectDate)
 }
	return (
		<div className=" sm:divide-x mb-5 mx-auto  items-center sm:flex-row flex-col ">
            <div className="">
         <div className=" ">
				<div className=" font-semibold border border-[#D4821F] p-3 flex justify-between px-2"
					onClick={asdd}>

					<img className="w-5 h-5" 
                    
					src={calendar} ></img> 
          	<h2>
						{selectDate.toDate().toDateString()} {name}
						</h2>			

					
				</div>
			</div>
            </div>
			{asd?
			<div className="w-72 h-[50%] absolute z-50 bg-white  shadow-md">
				<div className="flex justify-between items-center">
					
					<div className="flex gap-10 items-center ">
						<GrFormPrevious
							className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(today.month(today.month() - 1));
							}}
						/>
					
				
						<GrFormNext
							className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(today.month(today.month() + 1));
							}}
						/>
					</div>
					<h1 className="select-none font-semibold">
						{months[today.month()]}, {today.year()}
					</h1>
				</div>
				<div className="grid grid-cols-7 ">
					{days.map((day, index) => {
						return (
							<h1
								key={index}
								className="text-sm text-center h-14 w-14 grid place-content-center text-[#D4821F] select-none"
							>
								{day}
							</h1>
						);
					})}
				</div>

				<div className=" grid grid-cols-7 ">
					{generateDate(today.month(), today.year()).map(
						({ date, currentMonth, today }, index) => {
							return (
								<div
									key={index}
									className="p-2 text-center h-14 grid place-content-center text-sm "
								>
									<h1
										className={cn(
											currentMonth ? "" : "invisible",
											today
												? "border border-[#D4821F]"
												: "",
											selectDate
												.toDate()
												.toDateString() ===
												date.toDate().toDateString()
												? "border border-[#D4821F]"
												: "",
											"h-10 w-10  grid place-content-center hover:border border-[#D4821F]  transition-all cursor-pointer select-none"
										)}
										onClick={() => {
											setSelectDate(date)
										}}
									>
										{date.date()}
									</h1>
								</div>
							);
						}
					)}
				</div>
			</div>
			:''}
		</div>
	);
}
