export function getAppointmentsForDay(state, day) {
  const dayObj = state.days.find(dayItem => dayItem.name === day);
  let appointments = [];
  if (dayObj !== undefined) {
    appointments = dayObj.appointments.map(id => state.appointments[id])
  }
  return appointments;
}

export function getInterview(state, interview) {
  if (interview !== null) {
    const interviewerObj = state.interviewers[interview.interviewer];
    return { ...interview, interviewer: interviewerObj }
  }
  return null;
}

export function getInterviewersForDay(state, day) {
  const dayObj = state.days.find(dayItem => dayItem.name === day);
  let interviewers = [];
  if (dayObj !== undefined) {
    interviewers = dayObj.interviewers.map(id => state.interviewers[id])
  }
  return interviewers;
}