import React from 'react';


const HeaderBox: React.FC<HeaderBoxProps> = (props) => {
  const { type, user, title, subtext } = props;
  return (
    <div className='header-box'>
      <h1 className='header-box-title'>
        {title} {type === 'greeting' && (
          <span className='text-bankGradient'>&nbsp; {user}</span>
        )}
      </h1>
      <p className='header-box-subtext'>{subtext}</p>
    </div>
  );
}

export default HeaderBox;