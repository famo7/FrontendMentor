import React from 'react';

const Testimonials = ({
  name,
  role,
  patternImage,
  Testimonial,
  story,
  bg,
  avatar,
  whiteText,
}) => {
  const bgColorClass =
    bg === 'moderateViolet'
      ? 'bg-moderateViolet'
      : bg === 'veryDarkGrayishBlue'
      ? 'bg-veryDarkGrayishBlue'
      : bg === 'veryDarkBlackishBlue'
      ? 'bg-veryDarkBlackishBlue'
      : bg === 'white'
      ? 'bg-white'
      : 'bg-gray-200';

  return (
    <div className={`font-body  ${bgColorClass}   rounded-xl text-white`}>
      <div className="flex flex-col items-center sm:items-start">
        <div className="grid grid-cols-5">
          <img src={avatar} className="w-12 rounded-full border-2 mt-7 ml-5" />
          <div className="col-span-2  mt-7 ml-5 sm:ml-3">
            <p
              className={`${
                whiteText ? 'text-gray-300' : 'text-gray-500'
              } font-bold text-lg`}
            >
              {name}
            </p>
            <p className="text-gray-400">{role}</p>
          </div>

          {patternImage && (
            <div className="col-span-2 sm:col-start-6 sm:ml-28  ml-3 ">
              <img
                src="/images/bg-pattern-quotation.svg"
                className="h-32 w-32 sm:h-32 sm:w-32"
              />
            </div>
          )}
        </div>
        <h1
          className={`text-2xl font-bold px-9   ${
            !whiteText ? 'text-gray-500' : 'text-gray-300'
          }    ${patternImage ? 'mt-[-2rem]' : 'mt-6'}`}
        >
          {Testimonial}
        </h1>
        <p
          className={`mt-4  text-gray-400  px-9  ${
            bg === 'white' ? 'pb-24' : 'pb-9'
          }`}
        >
          {story}
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
