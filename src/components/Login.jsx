import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {Modal} from 'antd';
import '../style/login-form.css';
//import { Link } from "react-router-dom";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function LogInModal({open, onOk, onCancel, onLogin}) {
  const [form] = Form.useForm();
    const onFinish = (values) => {
       // console.log('Received values of form: ', values);
    }

    return(
    <Modal open={open} onOk={onOk} onCancel={onCancel} footer={null}>
      <Form
        name="normal_login"
        {...formItemLayout}
        form={form}
        className="login-form"
        initialValues={{
          remember: true,
        }}
        style={{
          maxWidth: 600,
        }}
        onFinish={onFinish}
      >
        <Form.Item className='login-title-container'>
            <h2 className='login-title'>Log in</h2>
        </Form.Item>
        <Form.Item
          className='email-container'
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input className='email-input' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email"  />
        </Form.Item>
        <Form.Item
        className='password-container'
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            className='password-input'
          />
        </Form.Item>
        <Form.Item>
          <Form.Item className='checkbox-container' name="remember" valuePropName="checked">
            <Checkbox className='remember-me-checkbox'>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button  type="primary" htmlType="submit" className="login-form-button" style={{backgroundColor:"#F7C873"}}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </Modal>
    );
  }
export default LogInModal;