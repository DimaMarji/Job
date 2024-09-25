import { useEffect, useState } from 'react';
import { Form, Input, message } from 'antd';
import { useCookies } from 'react-cookie';
import './styles.scss';
import { useDataMutation } from '../../ReactQuery/ApiCrud/useDataMutation';
import Button from '../../Components/Atoms/Button/buttonContainer';
import { useRouter } from 'next/router';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [cookies, setCookie] = useCookies(['token']);

  
  const [token, setToken] = useState(cookies?.token);

  const {asPath, query, push} = useRouter()

  const mutation = useDataMutation<{ token: string }, { email: string; password: string }>('post', 'user_register/login_user', {
    onSuccess: (data) => {
      setCookie('token', data.token, { path: '/' });
      setToken(data.token)
      message.success('Login successful');
      setLoading(false);
    },
    onError: () => {
      message.error('Login failed');
      setLoading(false);
    }
  });

  const onFinish = (values: { email: string; password: string }) => {
    setLoading(true);
    mutation.mutate(values);
  };

  useEffect(()=>{
    console.log(cookies)
    if(cookies?.token){
        push("/")
    }
    },[cookies?.token])
  
  return (
    <div className={"loginContainer"}>
      <Form name="login" onFinish={onFinish} layout="vertical">
        <Form.Item
          label="Email or username"
          name="login"
          rules={[{ required: true, message: 'Please input your email or username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
