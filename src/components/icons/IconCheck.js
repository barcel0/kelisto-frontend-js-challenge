import React from 'react';

const IconCheck = ({ size = 4 }) => {
  return (
    <svg className={`h-${size} w-${size}`} id="Check" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      viewBox="0 0 20 20" enableBackground="new 0 0 20 20">
      <path fill="#FFFFFF" d="M8.294,16.998c-0.435,0-0.847-0.203-1.111-0.553L3.61,11.724c-0.465-0.613-0.344-1.486,0.27-1.951
    c0.615-0.467,1.488-0.344,1.953,0.27l2.351,3.104l5.911-9.492c0.407-0.652,1.267-0.852,1.921-0.445
    c0.653,0.406,0.854,1.266,0.446,1.92L9.478,16.34c-0.242,0.391-0.661,0.635-1.12,0.656C8.336,16.998,8.316,16.998,8.294,16.998z"/>
    </svg>
  );
}

export default IconCheck;