import { useEffect, useState } from "react";
import { Checkbox, Col, Form, Input, message } from "antd";
import { useCookies } from "react-cookie";
import "./styles.scss";
import { useDataMutation } from "../../ReactQuery/ApiCrud/useDataMutation";
import Button from "../../Components/Atoms/Button/buttonContainer";
import { useRouter } from "next/router";

import { Title } from "../../Components/Atoms/Typography/Title";
import { Text } from "../../Components/Atoms/Typography/Text";
import Link from "next/link";
import LoginImage1 from "../../public/Assets/Images/page/login-register/img-4.svg";
import LoginImage2 from "../../public/Assets/Images/page/login-register/img-3.svg";
import Image from "next/image";
import {AuthData} from "./authData";
import {useUser} from "../../Context/User/userContext";
import {TotpInput} from "../../Components/Atoms/TotpInput";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [cookies, setCookie] = useCookies(["token"]);

  const [token, setToken] = useState(cookies?.token);

  const { asPath, query, push,pathname } = useRouter();
  const { setToken:setContextToken } = useUser();

  const mutation = useDataMutation<{ token: string }, { email: string; password: string }>('post', 'user_register/login_user', {
    onSuccess: (data) => {
      setCookie("token", data.token, { path: "/" });
      setToken(data.token);
      setContextToken(data.token)
      message.success("Login successful");
      setLoading(false);
    },
    onError: () => {
      message.error("Login failed");
      setLoading(false);
    },
  });

  const onFinish = (values: { email: string; password: string }) => {
    setLoading(true);
    mutation.mutate(values);
  };

  useEffect(() => {
    console.log(cookies);
    if (cookies?.token) {
      push("/");
    }
  }, [cookies?.token]);


  console.log(pathname,asPath?.replaceAll("/",""))

  const pathKey=asPath?.replaceAll("/","")

  return (
    <div className={`loginContainer ${pathKey}`}>
      <Col lg={7}>
        <Text
          typographyFontColor={"#3C65F5"}
          typographyType={{
            type: "regular-regular-regular",
            size: "14px-14px-14px",
          }}
        >
          {AuthData?.[pathKey]?.tag}
        </Text>
        <Title
          className="login-title"
          typographyType={{
            type: "semi-bold-semi-bold-semi-bold",
            size: "32px-24px-24px",
          }}
        >
          {AuthData?.[pathKey]?.title}
        </Title>
        <Text
          typographyFontColor={"#6c757d"}
          typographyType={{
            type: "regular-regular-regular",
            size: "14px-14px-14px",
          }}
        >
          {AuthData?.[pathKey]?.subtitle}
        </Text>
        <Form name="login" onFinish={onFinish} layout="vertical">
          <Form.Item
            requiredMark={false}
            label={ pathKey=="login"?"Username or Email address *":"Email address *"}
            name="login"
            rules={[
              {
                required: true,
                message: "Please input your email or username!",
              },
            ]}
          >
            <Input placeholder="Steven Job" />
          </Form.Item>
          {pathKey=="login" && <><Form.Item
              requiredMark={false}
              label="Password *"
              name="password"
              rules={[{required: true, message: "Please input your password!"}]}
          >
            <Input.Password placeholder="************"/>
          </Form.Item>
          <div className="remember-container">
            <Form.Item
              style={{ marginBottom: 0 }}
              name="remember"
              valuePropName="checked"
            >
              <Checkbox defaultChecked>Remember me</Checkbox>
            </Form.Item>
            <Link className="login-link" href={"reset-password"}>Forget Password</Link>
          </div>  </>
          }
          <Form.Item>

            <TotpInput
                digitCount={6}
                groupItems={3}
                separator={<div style={{width: "20px", display: "inline-flex"}}/>}
                onSubmit={()=>{}}
                // errorMessage={(error as string) ?? "error"}
                // isLoading={isLoading}
                // isError={isError}
                withButton
            />

            <Button
              type="primary"
              htmlType="submit"
              className="login-button"
              loading={loading}
            >
              {AuthData?.[pathKey]?.buttonText}
            </Button>
          </Form.Item>
        </Form>
        <div className="login-footer">
          <Text
            typographyType={{
              type: "regular-regular-regular",
              size: "14px-14px-14px",
            }}
          >
            Don&apos;t have an Account?
          </Text>

          <Text
            className="register-link"
            typographyType={{
              type: "regular-regular-regular",
              size: "14px-14px-14px",
            }}
          >
            <Link className="login-link" href={""}>New Employer</Link>
            <span>|</span>
            <Link className="login-link" href={""}>New Jobseeker</Link>
          </Text>
        </div>
      </Col>
      <Image className="login-image1" alt="login" src={AuthData?.[pathKey]?.image} />
      <Image className="login-image2" alt="login" src={LoginImage2} />
    </div>
  );
};

export default Login;
