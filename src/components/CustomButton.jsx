import { Button } from "@material-tailwind/react";
function CustomButton({ isDisabled, isLoading, ButtonText }) {
  return (
    <div>
      <Button
        variant="filled"
        fullWidth
        type="submit"
        disabled={isDisabled}
        size="lg"
        loading={isLoading}
      >
        {ButtonText}
      </Button>
    </div>
  );
}

export default CustomButton;
