//import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import '../style/signup-form.css'
import {
  Button,
  Form,
  Input,
  Modal,
} from 'antd';

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
function SignUpModal({open, onOk, onCancel}) {
    const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const navigate = useNavigate();
  


  const handleSignup = (e) => {
    navigate("/crosswordpage")

  };

//   const [signUpArrayMail, setSignUpArrayMail] = useState([]);
//   const handleSignUpButton = () => {
//     setSignUpArrayMail.push(email.target

    return(
    <Modal open={open} onOk={onOk} onCancel={onCancel} footer={null}>
        <Form
        className='signup-form'
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
        <Form.Item className='signup-title-container'>
            <h2 className='signup-title'>Sign Up</h2>
        </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
        
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button className='sign-up-button' type="primary" htmlType="submit" style={{backgroundColor:"#F7C873"}} onClick={handleSignup}>
          Sign up
        </Button>
      </Form.Item>
    </Form>
    </Modal>
    );
  }
export default SignUpModal;