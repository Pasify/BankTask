import InputField from "./InputField";
function EmailField() {
  return (
    <InputField
      label="Email Address"
      type="email"
      inputName="email"
      placeHolder="elonMusk@pluto.com"
      validationRule={{
        required: "Email Address is required",
        pattern: {
          value: /^\S+@\S+\.\S+$/i,
          message: "Please enter a valid email address",
        },
      }}
    />
  );
}

export default EmailField;
