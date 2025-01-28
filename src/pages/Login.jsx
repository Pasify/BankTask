import EmailField from "../components/EmailField";
import { FormProvider, useForm } from "react-hook-form";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  Typography,
} from "@material-tailwind/react";
import CustomButton from "../components/CustomButton";
import PasswordField from "../components/PasswordField";
import toast from "react-hot-toast";
import Rimage from "/images/bg_img.jpeg";

function Login() {
  const methods = useForm({
    mode: "onChange",
  });

  async function onLogin(data) {
    const toastId = toast.loading("Logging you in...");
    console.log(data);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // simulated async call

      const response = { success: true };
      if (response.success) {
        toast.success("Login successful!", { id: toastId });
        methods.reset();
      } else {
        throw new Error("Login failed. Please try again.");
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`, { id: toastId });
    } finally {
      toast.dismiss(toastId);
    }
  }

  return (
    <div className="flex h-dvh w-dvw flex-wrap">
      <div className="w-full md:w-1/2 flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-4 sm:w-[24rem] md:w-[28rem] lg:w-[32rem]">
          <CardHeader
            color="gray"
            className="grid mb-4 h-24 place-items-center shadow-none"
            floated={false}
          >
            <Typography
              variant="h3"
              color="white"
              className="text-center text-lg md:text-2xl lg:text-3xl"
            >
              Welcome back!
            </Typography>
          </CardHeader>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onLogin)}>
              <CardBody className="flex flex-col gap-5 p-2 justify-items-start">
                <Typography
                  variant="h5"
                  color="black"
                  className="text-center text-base md:text-lg lg:text-xl"
                >
                  Login to your account!
                </Typography>
                <EmailField />
                <PasswordField />
                <div className="-ml-2.5">
                  <Checkbox label="Remember Me" />
                </div>
              </CardBody>
              <CardFooter className="p-2">
                <CustomButton
                  ButtonText={
                    methods.formState.isSubmitting ? "Logging in..." : "Login"
                  }
                  isDisabled={
                    !methods.formState.isValid || methods.formState.isSubmitting
                  }
                  isLoading={methods.formState.isSubmitting}
                />
                <Typography
                  variant="small"
                  className="mt-6 flex justify-center text-center text-sm md:text-base lg:text-lg"
                >
                  Don&apos;t have an account?
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="ml-1 font-bold"
                  >
                    Sign up
                  </Typography>
                </Typography>
              </CardFooter>
            </form>
          </FormProvider>
        </Card>
      </div>
      <div
        className="hidden md:flex md:w-1/2 flex-col items-center justify-center bg-cover bg-center p-4"
        style={{ backgroundImage: `url(${Rimage})` }}
      >
        <div className="  text-white bg-opacity-75 p-4 rounded">
          <Typography
            variant="h4"
            className="text-lg font-semibold md:text-xl lg:text-6xl"
          >
            Welcome to our platform
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Login;
