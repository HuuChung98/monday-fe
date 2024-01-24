import React from 'react';
import { Input, Button } from 'antd';

const SignUp = () => {
  return (
        <div className='viewPage'>
            <div className='wellcome-signUp'>
                <div className='form__choose d-flex justify-content-center align-items-center flex-column'>
                    <div className='wellcome__heading'>
                        <h1 className=''> Welcome to monday.com </h1>
                        <h2 > Get started - it's free. No credit card needed. </h2>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button type="button" 
                            className='button__google d-flex justify-content-center align-items-center button__1'
                            aria-label="Continue with Google" 
                            aria-pressed="false"
                        >
                            <img className="Q2rN3" 
                            alt="Continue with Google" 
                            src="https://dapulse-res.cloudinary.com/image/upload/remote_logos/995426/google-icon.svg"/>
                            <span className='mx-1'>Continue with Google</span>
                        </button>
                    </div>
                    <div className='e6bug'>
                        <div className="line-1"></div> 
                            Or 
                        <div className="line-2"></div>
                    </div>
                    <div className='d-flex justify-content-center mx-2'>
                        <Input placeholder="name@company.com" className='button__1 inputEmail'/>
                    </div>
                    <div className='d-flex justify-content-center my-3'>
                        <Button type="primary" className='button__1 '> Continue </Button>
                    </div>
            
                    <div className='contextPolicyService'>
                        <div>
                            <span>
                                By proceeding, you agree to the
                            </span>
                        </div>
                        <div>
                            <span>
                                <a className='line'> Terms of Service </a> 
                                and 
                                <a href="" className='line'> Privacy Policy </a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center foot'>
                    <p> Already have an account? 
                        <a href='' className='line'> Log in </a>
                    </p>
                </div>
            </div>

                {/* Right  */}
            <div className='background-form '>
                <img className="O1nZl" src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/welcome-to-monday.png" alt="Background" data-testid="right-side-asset"/>
            </div>
        </div>
        // </div>
  )
}

export default SignUp