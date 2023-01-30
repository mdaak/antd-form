import { Button, Form, Input } from 'antd';
import Checkbox from 'antd/es/checkbox/Checkbox';
import React from 'react';
import '../styles/form.css';

import { Space, Typography } from 'antd';
import { FacebookOutlined, GoogleOutlined, LinkedinOutlined } from '@ant-design/icons';
const { Text, Link } = Typography;
const MyFormItemContext = React.createContext([]);
function toArr(str) {
    return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
    return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};
const MyFormItem = ({ name, ...props }) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
    return <Form.Item name={concatName} {...props} />;
};
const SignUp = () => {
    const onFinish = (value) => {
        console.log(value);
    };
    return (
        <Form style={{minHeight:"80%"}} className="login-form" name="form_item_path" layout="vertical" onFinish={onFinish}>

            <MyFormItemGroup prefix={['user']}>
                <MyFormItemGroup prefix={['name']}>
                    <MyFormItem allowClear name="firstName" label="First Name">
                        <Input />
                    </MyFormItem>
                    <MyFormItem allowClear name="lastName" label="Last Name">
                        <Input allowClear />
                    </MyFormItem>
                    <MyFormItem style={{marginBottom:"0"}}>
                        <Checkbox checked className='ant-checkbox-checked ant-checkbox-inner' /><label>Remamber me?</label>
                    </MyFormItem>
                </MyFormItemGroup>
                <Button block danger type="primary" htmlType="submit">
                    Submit
                </Button>
                <Text>

                </Text>
                <MyFormItemGroup>
                    <MyFormItem className="bottomMarginZero">
                        <Link style={{ float: 'right' }} href="https://www.google.com" target="_blank">
                            Forgate password
                        </Link>
                    </MyFormItem>
                    <MyFormItem
                    className="bottomMarginZero"
                    style={{
                        color: 'blue',
                        
                    }}>
                        <span className="orLine" >OR</span>
                        <span
                            style={{
                                borderTop: "1px solid lightGray",
                                width: "100%",
                                position: "absolute",
                                left: "0", top: "50%"
                            }}
                        ></span>
                    </MyFormItem>
                    <MyFormItem
                        className="bottomMarginZero">
                        <GoogleOutlined className='social-icone' />
                        <FacebookOutlined className='social-icone' />
                        <LinkedinOutlined className='social-icone' />
                    </MyFormItem>
                    <MyFormItem className="bottomMarginZero">
                        <Text>
                            Need an account <span>SIGN UP</span>
                        </Text>
                    </MyFormItem>

                </MyFormItemGroup>
            </MyFormItemGroup>
        </Form>
    );
};
export default SignUp;