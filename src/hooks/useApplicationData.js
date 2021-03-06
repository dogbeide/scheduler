import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  useEffect(() => {
    Promise.all([
      axios.get(`/api/days`),
      axios.get(`/api/appointments`),
      axios.get(`/api/interviewers`)
    ])
    .then((all) => {
      const days = all[0].data;
      const appointments = all[1].data;
      const interviewers = all[2].data;
      setState(prev => ({ ...prev, days, appointments, interviewers }))
    });
  }, []);

  const setDay = day => setState(prev => ({ ...prev, day }));

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    setState(prev => ({ ...prev, appointments }));
    return axios.put(`/api/appointments/${id}`, { interview });
  }

  function cancelInterview(id) {
    const appointments = {
      ...state.appointments,
      [id]: {
        ...state.appointments[id],
        interview: null
      }
    }
    setState(prev => ({...prev, appointments}));
    return axios.delete(`/api/appointments/${id}`);
  }

  function updateSpots(increase = false) {

    const days = state.days.map(day => {
      if (day.name === state.day) {
        day.spots = increase ? day.spots + 1 : day.spots - 1;
      }
      return day;
    });

    setState(prev => ({
      ...prev,
      days
    }));

  }

  return { state, setDay, bookInterview, cancelInterview, updateSpots };
}