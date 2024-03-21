import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import Swal from "sweetalert2";

const SearchTours = () => {
    const today = new Date();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [formattedStartDate, setFormattedStartDate] = useState();
    const [formattedEndDate, setFormattedEndDate] = useState();

    useEffect(() => {
        setFormattedStartDate(moment(startDate).format("DD/MM/YYYY"));
        setFormattedEndDate(moment(endDate).format("DD/MM/YYYY"));
    }, [startDate, endDate]);

    const handleDateChange = (value) => {
        setStartDate(value[0]);
        setEndDate(value[1]);
    };

    console.log(formattedStartDate, formattedEndDate);

    return (
        <div data-aos="fade-up" className="max-w-screen-xl mx-auto my-20">
            <h1 className="text-3xl lg:text-5xl text-white text-center tracking-widest font-thin">
                Search for tours
            </h1>
            <div className="flex flex-col items-center md:flex-row md:items-end md:justify-between md:gap-2 mt-5 lg:mt-10">
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-white">
                            Destinations
                        </span>
                    </div>
                    <select className="select select-bordered select-sm rounded bg-zinc-950 text-white">
                        <option disabled selected>
                            Pick one
                        </option>
                        <option>Star Wars</option>
                        <option>Harry Potter</option>
                        <option>Lord of the Rings</option>
                        <option>Planet of the Apes</option>
                        <option>Star Trek</option>
                    </select>
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-white">
                            Number of travelers
                        </span>
                    </div>
                    <select className="select select-bordered select-sm rounded bg-zinc-950 text-white">
                        <option disabled selected>
                            Number of travelers
                        </option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>More than 10</option>
                    </select>
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-white">
                            Pick a date
                        </span>
                    </div>
                    <DatePicker
                        selectsRange={true}
                        onChange={handleDateChange}
                        startDate={startDate}
                        endDate={endDate}
                        minDate={today}
                        dateFormat="dd-MM-yyyy"
                        className="w-full max-w-xs bg-zinc-950 text-white rounded focus:border-none focus:outline-none p-1"
                    />
                </label>
                <input
                    type="submit"
                    value="Search"
                    className="input input-bordered input-sm w-full max-w-xs rounded focus:border-none focus:outline-none cursor-pointer bg-orange-500 font-semibold text-white tracking-widest mt-4 md:mt-0"
                />
            </div>
        </div>
    );
};

export default SearchTours;
