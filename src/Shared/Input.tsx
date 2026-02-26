import React, { useState, type ReactElement } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

type FormInputProps = {
  label?: string;
  name: string;
  type?: string;
  padding?: string;
  placeholder?: string;
  icon?: ReactElement;
  BG?: string;
  width: string;
  error?: string;
};

const Input: React.FC<FormInputProps> = ({
  label,
  name,
  BG,
  padding,
  type = "text",
  placeholder,
  width,
  icon,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="flex flex-col gap-1 w-full">
      {/* Label */}
      <label htmlFor={name} className="text-sm font-medium text-[#3B4758]">
        {label}
      </label>

      {/* Input Wrapper */}
      <div className="relative">
        {/* Left Icon */}
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#616161]">
            {icon}
          </span>
        )}

        {/* Input */}
        <input
          id={name}
          name={name}
          type={isPassword && showPassword ? "text" : type}
          placeholder={placeholder}
          className={` border rounded-lg ${padding} 
            ${icon ? "pl-10" : "pl-3"} 
            ${isPassword ? "pr-10" : "pr-3"} 
           ${width} border-gray-300  focus:outline-none ${type !== "checkbox" ? "focus:ring-2":""} focus:ring-blue-500 ${BG}`}
        />

        {/* Password Toggle */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#616161] cursor-pointer"
          >
            {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
          </button>
        )}
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default Input;
