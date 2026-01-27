import React from 'react';
import ErrorPageImage from '../../assets/error-404.png'

const ErrorPage = () => {
    return (
      <div>
        <div className="w-[90%] mx-auto flex flex-col items-center justify-center text-center py-20 gap-6">
          <img className="w-1/3 h-auto" src={ErrorPageImage} alt="Error Page" />
          <h1 className="text-[#001931] font-semibold text-[3rem]  leading-15 text-center tracking-[-1.2%]">
            Oops, page not found!
          </h1>
          <p className="text-[#627382] font-regular text-[20px] font-normal leading-8 tracking-0">
            The page you are looking for is not available.
          </p>
          <button className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1))] px-5 py-3 rounded-lg flex flex-row justify-center gap-2 items-center text-[#ffffff]">
            Go Back!
          </button>
        </div>
      </div>
    );
};

export default ErrorPage;


    //   <div>
    //     <div className="w-[90%] mx-auto flex flex-col items-center justify-center text-center py-20 gap-6">
    //       <img className="w-1/3 h-auto" src={ErrorPageImage} alt="Error Page" />
    //       <h1 className="text-[#001931] font-semibold text-[3rem]  leading-15 text-center tracking-[-1.2%]">
    //         OPPS!! APP NOT FOUND
    //       </h1>
    //       <p className="text-[#627382] font-regular text-[20px] font-normal leading-8 tracking-0">
    //         The App you are requesting is not found on our system. please try
    //         another apps
    //       </p>
    //       <button className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1))] px-5 py-3 rounded-lg flex flex-row justify-center gap-2 items-center text-[#ffffff]">
    //         Go Back!
    //       </button>
    //     </div>
    //   </div>