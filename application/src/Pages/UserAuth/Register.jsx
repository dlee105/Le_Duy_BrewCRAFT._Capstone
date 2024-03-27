import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

import axios from "axios";

function Register() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeFN = ({ target }) => setFirstName(target.value);
  const onChangeLN = ({ target }) => setLastName(target.value);
  const onChangeUN = ({ target }) => setUsername(target.value);
  const onChangeEM = ({ target }) => setEmail(target.value);
  const onChangePW = ({ target }) => setPassword(target.value);
  ////////////////////////////////////////////////

  // External Quote API call

  const handleRegister = async () => {
    const body = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: password,
      userType: "regular",
    };

    axios
      .post("http://localhost:3000/api/users", body)
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-cp-light">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              First Name
            </Typography>
            <Input
              size="lg"
              placeholder="Jon"
              value={firstName}
              onChange={onChangeFN}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Last Name
            </Typography>
            <Input
              size="lg"
              placeholder="Jones"
              value={lastName}
              onChange={onChangeLN}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Username
            </Typography>
            <Input
              size="lg"
              placeholder="jonjones"
              value={username}
              onChange={onChangeUN}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              value={email}
              onChange={onChangeEM}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              value={password}
              onChange={onChangePW}
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6" fullWidth onClick={() => handleRegister()}>
            sign up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a
              href="#"
              className="font-medium text-gray-900"
              onClick={() => navigate("/login")}
            >
              Sign In
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
}

export default Register;
