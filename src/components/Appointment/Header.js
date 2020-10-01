import React from 'react';
import './styles.scss';

export default function Header({ time }) {
  return (
    <header className="appointment__time">
      <h4 className="text--semi-bold">{time}</h4>
      <hr className="appointment__separator" />
    </header>
  );
}
