import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import '../../../styles/SignUp.scss';

const EXPERIENCES = [
    {
        id: '001',
        value: 'Billboard / Public transit ad'
    },
    {
        id: '002',
        value: 'Software review sites'
    },
    {
        id: '003',
        value: 'Linkedln'
    },
    {
        id: '004',
        value: 'YouTube ad'
    },
    {
        id: '005',
        value: 'TV / Streaming service'
    },
    {
        id: '006',
        value: 'Search engine (Google, Bing, etc.)'
    },
    {
        id: '007',
        value: 'Social media (Facebook, Instagram, Reddit, etc.)'
    },
    {
        id: '008',
        value: 'Friend / Colleague'
    },
    {
        id: '009',
        value: 'Audio ad (Podcast, Spotify)'
    },
    {
        id: '010',
        value: 'Consultant'
    },
    {
        id: '011',
        value: 'Other'
    },
];

const CreateFourthPage = () => {

    const [showButtonStatus, setShowButton] = useState('#0173ea');

    const [colorText, setColorText] = useState('#ffffff');

    const handleSelected = (key, value) => {
    };

    return (
        <div className='view__container'>
            <div className='viewPage__content'>
                <div className="left">
                    <div className='left__content'>
                        <div className='viewPage__left__outside__second__page'>
                            <div className='logo'>
                                <img className="logo__img_second_page" alt="logo"
                                    src="https://cdn.monday.com/images/logos/logo-full-big.png"
                                />
                            </div>
                            <div className='form__info'>
                                <Formik
                                    initialValues={{
                                        checked: [],
                                    }}
                                    onSubmit={async (values) => {
                                        await new Promise((r) => setTimeout(r, 500));
                                        console.log(JSON.stringify(values));
                                    }}
                                >
                                    {({ values }) => (
                                        <Form className='radio__choose'>
                                            <div className='my__radio'>
                                                <div id="my__radio1__group" className='radio__1'>
                                                    <h2 className='title__radio'>
                                                        One last question, how did you hear about us?
                                                    </h2>
                                                    <div className='best__describes'>
                                                        {EXPERIENCES.map(item => (
                                                            <label className='checkbox' key={item.id}>
                                                                <Field className='field' type="checkbox" name="checked" value={item.value} onClick={() => handleSelected(item.key, item.value)} />
                                                                <p className='text'>{item.value}</p>
                                                            </label>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='div__button__back__continue'>
                                                <button
                                                    className='button__back'
                                                >
                                                    Back
                                                    <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true" class="icon_d24b689566 leftIcon_9131a496c3 noFocusStyle_07ecef1878" data-testid="icon"><path d="M7.46967 10.5303L8 10L7.46967 9.46967C7.17678 9.76256 7.17678 10.2374 7.46967 10.5303ZM9.06066 10L12.5303 6.53033C12.8232 6.23744 12.8232 5.76256 12.5303 5.46967C12.2374 5.17678 11.7626 5.17678 11.4697 5.46967L7.46967 9.46967L8 10L7.46967 10.5303L11.4697 14.5303C11.7626 14.8232 12.2374 14.8232 12.5303 14.5303C12.8232 14.2374 12.8232 13.7626 12.5303 13.4697L9.06066 10Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                                </button>
                                                <button
                                                    type="submit"
                                                    className='button__continue'
                                                >
                                                    Continue
                                                    <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true" class="icon_d24b689566 rightIcon_9e105f47e8 noFocusStyle_07ecef1878" data-testid="icon"><path d="M12.5303 9.46967L12 10L12.5303 10.5303C12.8232 10.2374 12.8232 9.76256 12.5303 9.46967ZM10.9393 10L7.46967 13.4697C7.17678 13.7626 7.17678 14.2374 7.46967 14.5303C7.76256 14.8232 8.23744 14.8232 8.53033 14.5303L12.5303 10.5303L12 10L12.5303 9.46967L8.53033 5.46967C8.23744 5.17678 7.76256 5.17678 7.46967 5.46967C7.17678 5.76256 7.17678 6.23744 7.46967 6.53033L10.9393 10Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                                </button>

                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='cover__image'>
                        <img className="full__screen__side__image" src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/how-did-you-hear-about-us-with-invite.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateFourthPage