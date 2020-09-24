import React from "react";
import classNames from "classnames";

import "components/Button.scss";

export default function Button(props) {

   const btnClass = classNames(
      'button', {
      'button--confirm': props.confirm,
      'button--danger': props.danger,
   });

   return (
      <button 
         disabled={props.disabled}
         className={btnClass} 
         onClick={props.onClick}
      >
         {props.children}
      </button>
   );
}
