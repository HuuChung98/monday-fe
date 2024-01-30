import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import '../../../styles/SignUp.scss';

const PURPOSE = [
  {
    key: 'Work',
    value: [
      'Business owner',
      'Team leader',
      'Team member',
      'Freelancer',
      'Director',
      'C-level',
      'VP'
    ]
  },
  { key: 'Personal', value: [] },
  {
    key: 'School',
    value: [
      'Undergraduate student',
      'Graduate student',
      'Faculty member',
      'Other'
    ]
  },
  {
    key: 'Nonprofit',
    value: [
      'Board member',
      'Executive',
      'Employee',
      'Volunteer',
      'IT staff',
      'Other'
    ]
  }
];



const CreateSecondPage = () => {

  const [toggleShow, setToggleShow] = useState(0);

  const [isRoleSelected, setRoleSelected] = useState('true');

  const [showButtonStatus, setShowButton] = useState('#ebedf5');

  const [colorText, setColorText] = useState('#a4a6ac');

  const [showRole, setShowRole] = useState([]);

  const handleSelected = (key, value) => {
    if (key !== 'Personal') {
      setShowRole(value);
      setToggleShow(1);
      setShowButton('#ebedf5');
      setRoleSelected('true');
    } else {
      setToggleShow(0);
      setShowButton('#0173ea');
      setColorText('#ffffff');
    }
  };

  const handleSelectedRole = (event) => {
    setShowButton('#0173ea');
    setRoleSelected(!setRoleSelected);
    setColorText('#ffffff');
  };
  return (
    <div className='view__container'>
      <div className='viewPage__content'>
        <div className="left">
          <div className='left__content'>
            <div className='viewPage__left__outside__second__page'>
              <div className='logo'>
                <img className="logo__img_second_page" alt="logo" src="https://cdn.monday.com/images/logos/logo-full-big.png" />
              </div>
              <div className='form__info'>
                <Formik
                  initialValues={{
                    picked: '',
                    picked1: ''
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
                            Hey there, what brings you here today?
                          </h2>
                          <div className='best__describes'>
                            {PURPOSE.map(item => (
                              <label className='radio'>
                                <Field className='field' type="radio" name="picked" value={item.key} onClick={() => handleSelected(item.key, item.value)} />
                                <p className='text'>{item.key}</p>
                              </label>
                            ))}
                          </div>
                        </div>
                        <div id="my-radio2-group" className='radio__2' style={{ opacity: toggleShow }}>
                          <h2 className='title__radio'>
                            What best describes your current role?
                          </h2>
                          <div className='best__role'>
                            {showRole.map(item => (
                              <label className='radio radio_role'>
                                <Field className='field' type="radio" name="picked1" value={item} onClick={handleSelectedRole} />
                                <p className='text'>{item}</p>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className='div__button'>
                        <button
                          type="submit"
                          className='button__continue'
                          disabled={isRoleSelected}
                          style={{ backgroundColor: showButtonStatus, color: colorText }}
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
            <img className="full__screen__side__image" src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/what-brings-you-here-today.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateSecondPage