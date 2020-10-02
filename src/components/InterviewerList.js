import React from 'react';
import InterviewerListItem from './InterviewerListItem';
import './InterviewerList.scss';

export default function InterviewerList(props) {
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {props.interviewers.map(interviewer =>(
          <InterviewerListItem
            key={interviewer.id}
            name={interviewer.name}
            avatar={interviewer.avatar}
            setInterviewer={() => props.onChange(interviewer.id)}
            selected={interviewer.id === props.value}
          />
        ))}
      </ul>
    </section>
  );
}