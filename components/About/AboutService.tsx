import React from "react";

interface Props {
  serviceTitle: string;
  serviceDescription: string;
  ServiceIcon: React.FC;
  className?: string;
}

const AboutService = ({
  serviceTitle,
  serviceDescription,
  ServiceIcon,
  className,
}: Props) => {
  return (
    <div className={`flex relative pb-12 ${className}`}>
      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
        <ServiceIcon />
      </div>
      <div className="flex-grow pl-4">
        <h2 className="font-semibold title-font text-base text-gray-900 mb-1 tracking-wider">
          {serviceTitle}
        </h2>
        <p className="leading-relaxed text-gray-600">{serviceDescription}</p>
      </div>
    </div>
  );
};

export default AboutService;
