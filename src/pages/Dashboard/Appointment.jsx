import React from 'react';
import StatusStatsSection from '../../components/sections/dashboard/Appointment/StatusStatsSection';
import BookingLink from '../../components/sections/dashboard/Appointment/BookingLink';

const Appointment = () => {
    return (
        <div>
          <StatusStatsSection/>
          <BookingLink/>  
        </div>
    );
};

export default Appointment;