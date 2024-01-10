import {Form, Link, useActionData} from '@remix-run/react';
import React, {useState} from 'react';
import {routeHeaders} from '~/data/cache';
import {getInputStyleClasses} from '~/lib/utils';

export async function loader({context, params}) {
  const customerAccessToken = await context.session.get('customerAccessToken');

  if (customerAccessToken) {
    return redirect(params.locale ? `${params.locale}/account` : '/account');
  }

  return new Response(null);
}

export const meta = () => {
  return [{title: 'Recover Password'}];
};

function ChangePassword({
  isChangePasswordPopupOpen,
  setChangePasswordPopupOpen,
}) {
  const actionData = useActionData();
  const [nativeEmailError, setNativeEmailError] = useState(null);
  const [email, setEmail] = useState('');

  const isSubmitted = actionData?.resetRequested;
  console.log('isSubmitted', isSubmitted);
  console.log('email', email);
  console.log('actionData', actionData);

  return (
    <div
      className="cst-chng-password"
      style={{display: isChangePasswordPopupOpen ? 'block' : 'none'}}
    >
      <h4>Change your password</h4>
      <p>We will send you an email to change your password.</p>

      <Form method="post" noValidate>
        {actionData?.formError && (
          <div className="flex items-center justify-center mb-6 bg-zinc-500">
            <p className="m-4 text-s text-contrast">{actionData.formError}</p>
          </div>
        )}
        <div className="input-field">
          <label>
            <strong>Email Id</strong>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="recover-email"
            placeholder="Enter your email address..."
            autoCorrect="off"
            autoCapitalize="off"
            className={`${getInputStyleClasses(nativeEmailError)}`}
            autoFocus
            onBlur={(event) => {
              setNativeEmailError(
                event.currentTarget.value.length &&
                  !event.currentTarget.validity.valid
                  ? 'Invalid email address'
                  : null,
              );
            }}
          />
          {nativeEmailError && (
            <p className="text-red-500 text-xs">{nativeEmailError} &nbsp;</p>
          )}
        </div>
        <div className="error recover_password_error"></div>
        <div className="input-subtn dfx">
          <button
            className="btn"
            type="submit"
            onClick={() =>
              setChangePasswordPopupOpen(setChangePasswordPopupOpen)
            }
          >
            submit
          </button>

          <Link
            className="change-psw-close lp-05 text-up"
            onClick={() =>
              setChangePasswordPopupOpen(!setChangePasswordPopupOpen)
            }
          >
            Cancle
          </Link>
        </div>
      </Form>
    </div>
  );
}

export default ChangePassword;
