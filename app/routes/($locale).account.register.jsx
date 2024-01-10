import {redirect, json} from '@shopify/remix-oxygen';
import {Form, useActionData} from '@remix-run/react';
import {useState} from 'react';

import {getInputStyleClasses} from '~/lib/utils';
import {Link} from '~/components';

import {doLogin} from './($locale).account.login';

export async function loader({context, params}) {
  const customerAccessToken = await context.session.get('customerAccessToken');

  if (customerAccessToken) {
    return redirect(params.locale ? `${params.locale}/account` : '/account');
  }

  return new Response(null);
}

const badRequest = (data) => json(data, {status: 400});

export const action = async ({request, context, params}) => {
  const {session, storefront} = context;
  const formData = await request.formData();

  const email = formData.get('email');
  const password = formData.get('password');

  if (
    !email ||
    !password ||
    typeof email !== 'string' ||
    typeof password !== 'string'
  ) {
    return badRequest({
      formError: 'Please provide both an email and a password.',
    });
  }

  try {
    const data = await storefront.mutate(CUSTOMER_CREATE_MUTATION, {
      variables: {
        input: {email, password},
      },
    });

    if (!data?.customerCreate?.customer?.id) {
      /**
       * Something is wrong with the user's input.
       */
      throw new Error(data?.customerCreate?.customerUserErrors.join(', '));
    }

    const customerAccessToken = await doLogin(context, {email, password});
    session.set('customerAccessToken', customerAccessToken);

    return redirect(params.locale ? `${params.locale}/account` : '/account', {
      headers: {
        'Set-Cookie': await session.commit(),
      },
    });
  } catch (error) {
    if (storefront.isApiError(error)) {
      return badRequest({
        formError: 'Something went wrong. Please try again later.',
      });
    }

    /**
     * The user did something wrong, but the raw error from the API is not super friendly.
     * Let's make one up.
     */
    return badRequest({
      formError:
        'Sorry. We could not create an account with this email. User might already exist, try to login instead.',
    });
  }
};

export const meta = () => {
  return [{title: 'Register'}];
};

export default function Ragister() {
  const actionData = useActionData();
  const [nativeEmailError, setNativeEmailError] = useState(null);
  const [nativePasswordError, setNativePasswordError] = useState(null);

  console.log('actionData', actionData);

  return (
    <section>
      <div class="container">
        <div class="spacer">
          <div class="section_title">
            <h2>Sign Up & Get 10% off</h2>
          </div>
          <div class="register_frm">
            <div class="right_contact_form">
              <form action="">
                <div class="contact_name flex">
                  <div class="first_name">
                    <label for="">First Name</label>
                    <br />
                    <input type="text" />
                  </div>
                  <div class="last_name">
                    <label for="">Last Name</label>
                    <br />
                    <input type="text" />
                  </div>
                </div>
                <div class="contact_email">
                  <label for="">E-mail Address </label>
                  <br />
                  <input type="email" />
                </div>
                <div class="contact_email">
                  <label for="">Mobile Number </label>
                  <br />
                  <input type="tel" />
                </div>
                <div class="contact_email">
                  <label for="">Password </label>
                  <br />
                  <input type="password" />
                </div>
                <div class="contact_email">
                  <label for="">Re-enter Password</label>
                  <br />
                  <input type="password" />
                </div>
                <div class="register_btn">
                  <a href="" class="btn">
                    Sign Up
                  </a>
                </div>
                <span>
                  Already registered? <Link to="/account/login"> Login </Link> here
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const CUSTOMER_CREATE_MUTATION = `#graphql
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;
