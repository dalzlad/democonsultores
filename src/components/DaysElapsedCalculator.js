import React from 'react';
import { differenceInDays, parseISO } from 'date-fns';

const DaysElapsedCalculator = ({ startDate, endDate }) => {
  // Convertir las fechas de cadena ISO a objetos Date
  const startDateObj = parseISO(startDate);
  const endDateObj = parseISO(endDate);

  // Calcular la diferencia en días entre las dos fechas
  //const daysElapsed = differenceInDays(endDateObj, startDateObj);

  const startDay = startDateObj.getDate();
  const startMonth = startDateObj.getMonth() + 1;
  const startYear = startDateObj.getFullYear();

  const endDay = endDateObj.getDate();
  const endMonth = endDateObj.getMonth() + 1;
  const endYear = endDateObj.getFullYear();

  // Calcular los días de 360
  const daysInStartMonth = Math.min(30, 30 - startDay + 1);
  const daysInEndMonth = Math.min(30, endDay);

  const monthsElapsed = (endYear - startYear) * 12 + (endMonth - startMonth) - 1;
  const days360 = monthsElapsed * 30 + daysInStartMonth + daysInEndMonth;

  return days360


  return (
    <div>
      <p>Días transcurridos: {daysElapsed}</p>
    </div>
  );
};

export default DaysElapsedCalculator;
