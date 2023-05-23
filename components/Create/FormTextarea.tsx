import React, { FC } from "react";

interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
  value: any;
  className?: string;
  [key: string]: any;
}

const FormTextarea: FC<InputProps> = ({
  onChange,
  name,
  value,
  className,
  ...props
}) => {
  return (
    <textarea
      onChange={onChange}
      name={name}
      value={value}
      className={`px-4 py-2 border-[1px] font-normal w-full md:min-w-[150px] md:max-w-[400px] border-gray-300 hover:border-gray-600 text-[#000] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent ${className}`}
      {...props}
    ></textarea>
  );
};

export default FormTextarea;
