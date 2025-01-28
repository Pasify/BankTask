import { Input } from "@material-tailwind/react";
import { useFormContext } from "react-hook-form";

function InputField({
  label,
  inputName,
  type = "text",
  validationRule,
  placeHolder,
  ...otherProps
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="flex flex-col gap-2 align-start">
      <Input
        containerProps={{
          className: "shadow-sm caret-black ",
        }}
        label={label}
        type={type}
        placeholder={placeHolder}
        size="lg"
        variant="outlined"
        {...register(inputName, validationRule)}
        {...otherProps}
      />

      {errors[inputName] && (
        <p className="text-xs text-start text-red-500">
          {errors[inputName].message}
        </p>
      )}
    </div>
  );
}
// function InputField({
//   label,
//   type = "text",
//   inputName,
//   validationRule,
//   ...otherProps
// }) {
//   const {
//     register,
//     formState: { errors },
//   } = useFormContext();
//   return (
//     <div className="flex flex-col gap-2">
//       <Input
//         containerProps={{
//           className: "shadow-sm caret-green-700",
//         }}
//         type={type}
//         label={label}
//         size="lg"
//         {...register(inputName, validationRule)}
//         {...otherProps}
//       />
//       {errors[inputName] && (
//         <p className="text-xs text-red-500">{errors[inputName].message}</p>
//       )}
//     </div>
//   );
// }

export default InputField;
