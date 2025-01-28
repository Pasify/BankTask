import { useState } from "react";
import InputField from "./InputField";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function PasswordField() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <InputField
      label="Password"
      type={showPassword ? "text" : "password"}
      inputName="password"
      icon={
        showPassword ? (
          <FaRegEyeSlash onClick={togglePasswordVisibility} />
        ) : (
          <FaRegEye onClick={togglePasswordVisibility} />
        )
      }
      placeHolder="********"
      validationRule={{
        required: "Password is required",
        minLength: {
          value: 6,
          message: "Password must be at least 6 characters long",
        },
        maxLength: {
          value: 12,
          message: "Password cannot exceed 12 characters",
        },
      }}
    />
  );
}

export default PasswordField;
