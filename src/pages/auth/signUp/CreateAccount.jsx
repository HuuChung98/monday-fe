import React from 'react';
import { Form, Input, Button } from 'antd';
import '../../../styles/SignUp.scss'

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

const onFinish = () => { }

const CreateAccount = () => {
    return (
        <div className='view'>
            <div className='viewPage__left_outside'>
                <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
                    <div className='viewPage__left d-flex'>
                        <div className='create__info'>
                            <div className='left__create__info'>
                                <div className='logo'>
                                    <img className="logo-img" alt="logo" src="https://cdn.monday.com/images/logos/logo-full-big.png" />
                                </div>
                                <div className='title'>
                                    <h2>
                                        Create your account
                                    </h2>
                                </div>
                                <MyFormItemGroup prefix={['user']}>
                                    <MyFormItemGroup prefix={['name']}>
                                        <MyFormItem name="firstName" label="First Name">
                                            <Input className='fill-input' />
                                        </MyFormItem>
                                        <MyFormItem name="lastName" label="Last Name">
                                            <Input className='fill-input' />
                                        </MyFormItem>
                                    </MyFormItemGroup>

                                    <MyFormItem name="age" label="Age">
                                        <Input className='fill-input' />
                                    </MyFormItem>
                                </MyFormItemGroup>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-end submit-button'>
                        <Button type="primary" htmlType="submit" className='button__continue'>
                            Continue
                            <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true" class="icon_d24b689566 rightIcon_9e105f47e8 noFocusStyle_07ecef1878" data-testid="icon"><path d="M12.5303 9.46967L12 10L12.5303 10.5303C12.8232 10.2374 12.8232 9.76256 12.5303 9.46967ZM10.9393 10L7.46967 13.4697C7.17678 13.7626 7.17678 14.2374 7.46967 14.5303C7.76256 14.8232 8.23744 14.8232 8.53033 14.5303L12.5303 10.5303L12 10L12.5303 9.46967L8.53033 5.46967C8.23744 5.17678 7.76256 5.17678 7.46967 5.46967C7.17678 5.76256 7.17678 6.23744 7.46967 6.53033L10.9393 10Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                        </Button>
                    </div>
                </Form>
            </div>
            <div className='right__create__info background-form d-flex justify-content-center'>
                <img src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/set-up-your-account.png" alt="" className="full-screen-side-image" />
            </div>
        </div>
    )
}

export default CreateAccount