import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../../../styles/SignUp.scss'


const CreateAccount = () => {
    const formik = useFormik({
        initialValues: {
            fullName: '',
            passWord: '',
            accountName: '',
        },
        validationSchema: Yup.object({
            fullName: Yup.string()
                .required('Enter your full name'),
            passWord: Yup.string()
                .min(8, 'Password must be 8 characters or more')
                .required('Create a password'),
            accountName: Yup.string()
                .required('Name your account')
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className='view__container'>
            <div className='viewPage__content'>
                <div className='left'>
                    <div className='viewPage__left__outside'>
                        <form onSubmit={formik.handleSubmit} className='formCover'>
                            <div className='formInfo'>
                                <div className='logo'>
                                    <img className="logo__img" alt="logo" src="https://cdn.monday.com/images/logos/logo-full-big.png" />
                                </div>
                                <div className='title'>
                                    <h2>
                                        Create your account
                                    </h2>
                                </div>
                                <label htmlFor="fullName" className='labelInput'>Full name</label>
                                <div className='forInput'>
                                    <input
                                        className='inputForm'
                                        placeholder='Enter your full name'
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.fullName}
                                        {...formik.getFieldProps('fullName')}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.fullName  ? (
                                        <div style={{ color: 'red' }}>{formik.errors.fullName}</div>
                                    ) : null}
                                </div>
                                <div>
                                    <label htmlFor="passWord" className='labelInput'>Password</label>
                                    <div className='forInput'>
                                        <input
                                            className='inputForm'
                                            placeholder='Enter at least 8 character'
                                            id="passWord"
                                            name="passWord"
                                            type="password"
                                            onChange={formik.handleChange}
                                            value={formik.values.passWord}
                                            {...formik.getFieldProps('passWord')}
                                        />
                                        {formik.touched.fullName || formik.dirty && formik.errors.passWord ? (
                                            <div style={{ color: 'red' }}>{formik.errors.passWord}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="accountName" className='labelInput'>Account name</label>
                                    <div className='forInput'>
                                        <input
                                            className='inputForm'
                                            placeholder="For example, company's or department's name"
                                            id="accountName"
                                            name="accountName"
                                            type="text"
                                            onChange={formik.handleChange}
                                            value={formik.values.accountName}
                                            {...formik.getFieldProps('accountName')}
                                        />
                                        {formik.touched.accountName && formik.errors.accountName ? (
                                            <div style={{ color: 'red' }}>{formik.errors.accountName}</div>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                            <div className='div__button'>
                                <button type="submit" className='button__continue'>
                                    Continue
                                    <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true" class="icon_d24b689566 rightIcon_9e105f47e8 noFocusStyle_07ecef1878" data-testid="icon"><path d="M12.5303 9.46967L12 10L12.5303 10.5303C12.8232 10.2374 12.8232 9.76256 12.5303 9.46967ZM10.9393 10L7.46967 13.4697C7.17678 13.7626 7.17678 14.2374 7.46967 14.5303C7.76256 14.8232 8.23744 14.8232 8.53033 14.5303L12.5303 10.5303L12 10L12.5303 9.46967L8.53033 5.46967C8.23744 5.17678 7.76256 5.17678 7.46967 5.46967C7.17678 5.76256 7.17678 6.23744 7.46967 6.53033L10.9393 10Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='right'>
                    <div className='cover__image'>
                        <img className="full__screen__side__image" src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/set-up-your-account.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount