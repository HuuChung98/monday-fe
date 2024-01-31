import React from 'react';
import { Input, Form, Button, message } from 'antd';

import '../../../styles/SignUp.scss'


const onFinish = (value) => {

};

const validateEmail = (rule, value, callback) => {
    if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        callback('Please enter a valid email address');
    } else {
        callback();
    }
};

const handleEmail = (value) => {
    if (!value) {
        return 'Please enter a valid email address'
    }
    else {
        console.log(value);
    }
}

const SignUp = () => {

    return (
        <div className='viewPage'>
            <div className='wellcome__signUp'>
                <div className='form__choose '>
                    <div className='wellcome__heading'>
                        <h1 className=''> Welcome to monday.com </h1>
                        <h2 > Get started - it's free. No credit card needed. </h2>
                    </div>
                    <div className='wellcome__content'>
                        <button type="button"
                            className='button__google button__1'
                            aria-label="Continue with Google"
                            aria-pressed="false"
                        >
                            <img className="Q2rN3"
                                alt="Continue with Google"
                                src="https://dapulse-res.cloudinary.com/image/upload/remote_logos/995426/google-icon.svg" />
                            <span className='google__icon'>Continue with Google</span>
                        </button>
                    </div>
                    <div className='e6bug'>
                        <div className="line-1"></div>
                        Or
                        <div className="line-2"></div>
                    </div>
                    <div className='content__form'>
                        {/* <Input placeholder="name@company.com" className='button__1 inputEmail'/> */}
                        <Form
                            name='email'
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            // onFinishFailed={onFinishFailed}
                            autoComplete='off'
                        // validateMessages={validateMessages}
                        >
                            <Form.Item
                                // label="name@company.com"
                                name={['email']}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter a valid email address',
                                    },
                                    {
                                        validator: validateEmail,
                                    },
                                ]}
                            >
                                <Input placeholder="name@company.com" className='button__1 inputEmail' />

                            </Form.Item>
                            <div className='div__continue'>
                                <Button type="primary" className='button__1 ' htmlType="submit" onClick={handleEmail}> Continue </Button>
                            </div>

                        </Form>
                    </div>

                    <div className='contextPolicyService'>
                        <div>
                            <span>
                                By proceeding, you agree to the
                            </span>
                        </div>
                        <div>
                            <span>
                                <a href='' className='line'> Terms of Service </a>
                                and
                                <a href="" className='line'> Privacy Policy </a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='foot'>
                    <p> Already have an account?
                        <a href='' className='line'> Log in </a>
                    </p>
                </div>
            </div>

<<<<<<< HEAD
            {/* Right  */}
            <div className='background-form '>
                <img className="O1nZl" src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/welcome-to-monday.png" alt="Background" data-testid="right-side-asset" />
=======
                {/* Right  */}
            <div className='background-form'>
                <img className="O1nZl" src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/welcome-to-monday.png" alt="Background" data-testid="right-side-asset"/>
>>>>>>> chungDev/createAccount-page
            </div>
        </div>
        // </div>
    )
}

export default SignUp