export function getAppointmentsForDay(state, day) {
  const dayObj = state.days.find(dayItem => dayItem.name === day);
  let appointments = [];
  if (dayObj !== undefined) {
    appointments = dayObj.appointments.map(id => state.appointments[id])
  }
  return appointments;
}