import React from 'react'

const SignUp = () => {
  return (
    <div>
        <div className='row d-flex'>
            <div className='wellcome-signUp col-sm-7 bg-success'>
                <div>
                    <h1> Welcome to monday.com </h1>
                    <h3> Get started - it's free. No credit card needed. </h3>
                    <button type="button" 
                        aria-label="Continue with Google" 
                        aria-pressed="false"><img class="Q2rN3" 
                        alt="Continue with Google" 
                        src="https://dapulse-res.cloudinary.com/image/upload/remote_logos/995426/google-icon.svg"/>
                        <span>Continue with Google</span>
                    </button>
                </div>

            </div>
            <div className='background-form col-sm-5 bg-warning'>
                <img class="O1nZl" src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/welcome-to-monday.png" alt="Background" data-testid="right-side-asset"/>
            </div>
        </div>
    </div>
  )
}

export default SignUp