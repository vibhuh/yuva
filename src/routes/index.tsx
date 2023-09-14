import { component$, useSignal, useStore } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { InputField } from "~/components/inputField";

export interface ISignupForm {
  email: string;
  mobile_number: string;
  entity: string;
  password: string;
  confirm_password: string;
  isValidEmail: boolean | undefined;
  isValidMobileNumber: boolean | undefined;
  isValidEntity: boolean;
  isValidPassword: boolean;
  isAgreedTerms: boolean;
}

const signupFormData: ISignupForm = {
  email: '',
  mobile_number: '',
  entity: '',
  password: '',
  confirm_password: '',
  isValidEmail: undefined,
  isValidMobileNumber: undefined,
  isValidPassword: false,
  isAgreedTerms: false,
  isValidEntity: false
}

export default component$(() => {
  const isValidForm = useSignal<boolean>(false);

  const signupStore = useStore(signupFormData);

  isValidForm.value = true; //signupStore.isValidEmail == true && signupStore.isValidEntity == true && signupStore.isValidMobileNumber == true && signupStore.isValidPassword && signupStore.isAgreedTerms

  return (
    <Form
      id="signUpForm"
      class=""
      onSubmitCompleted$={() => {

      }}
      spaReset
    >
      <InputField
        labelText="Email"
        labelFor="email"
        id="email"
        type="text"
        isRequired={true}
        placeholder="Email"
        name="email"
        onInput$={(_, el)=> signupStore.email = el.value}
      />
      

      <div class="mt-4">
        <button
          form="estimateForm"
          disabled={!isValidForm.value}
          type="submit"
          onClick$={async () => {
          }}
        >
          Create Account
        </button>

      </div>
      
    </Form>
  );
});
