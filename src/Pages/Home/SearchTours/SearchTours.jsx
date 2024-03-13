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
        <div className="max-w-screen-xl mx-auto">
            <h1 className="text-5xl text-white">this is search tours.</h1>
            <DatePicker
                selectsRange={true}
                onChange={handleDateChange}
                startDate={startDate}
                endDate={endDate}
                minDate={today}
                dateFormat="dd-MM-yyyy"
            />
            <div>
               
            </div>
        </div>
    );
};

export default SearchTours;
