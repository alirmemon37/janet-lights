import React, { FC } from "react";

interface Props {
  label: string;
  options: { value: string; label: string }[];
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  [key: string]: any;
}

const FormRadio: FC<Props> = ({ label, options, name, onChange, ...props }) => {
  return (
    <div>
      <p className="pb-2 font-semibold text-[18px] text-[#333]">{label}</p>
      <div className="grid md:grid-cols-2">
        {options.map((option) => (
          <div key={option.value} className="mb-2">
            <label>
              <input
                type="radio"
                value={option.value}
                name={name}
                onChange={onChange}
                {...props}
              />
              <span className="ml-2 font-normal">{option.label}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormRadio;
