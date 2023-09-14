import type { QRL} from "@builder.io/qwik";
import { $, component$, useSignal } from "@builder.io/qwik";

export interface IPasswordInputField {
    handleChange$?: QRL<(event: any) => void>;
    handleOnKeydown$?: QRL<(event: any) => void>;
    onInput$?: QRL<(event: any) => void>;
    value?: string;
    labelText: string;
    labelFor: string;
    id: string;
    type: 'text' | 'check' | 'select' | 'password';
    isRequired: boolean;
    isDisabled?: boolean;
    placeholder?: string;
    classDef?: string;
    name: string;
    fieldError?: boolean;
    fieldErrorMessage?: string;
    fieldSuccessMessage?: string;
    pattern?: string;
    isValid?: boolean | undefined;
    isConfirmPasswordField?: boolean;
    passwordFieldValue?: string;
}


export const PasswordInputField = component$<IPasswordInputField>((props) => {
    const passwordFieldHasFocus = useSignal<boolean>(false);
    const isPasswordVisible = useSignal<boolean>(false);
    const hasUppercase = useSignal<boolean>(false);
    const hasLowercase = useSignal<boolean>(false);
    const hasDigit = useSignal<boolean>(false);
    const hasMinimumLength = useSignal<boolean>(false);
    const hasSpecialCharacter = useSignal<boolean>(false);
    const matchPassword = useSignal<boolean>(false);
    const rules = [
        { id: 1, label: "One Uppercase", valid: hasUppercase.value },
        { id: 2, label: "One Lowercase", valid: hasLowercase.value },
        { id: 3, label: "One Number", valid: hasDigit.value },
        { id: 4, label: "Minimum 8 characters", valid: hasMinimumLength.value },
        { id: 5, label: "One Special character", valid: hasSpecialCharacter.value }

    ];
    if (props.isConfirmPasswordField) {
        rules.push({ id: 6, label: "Match password", valid: matchPassword.value });
    }

    const handleValidation = $((evnt: any) => {
        const passwordInputValue = evnt.target.value.trim();
        
    });

    const togglePasswordVisibility$ = $(() => {
        alert("togglePasswordVisibility");
        isPasswordVisible.value = !isPasswordVisible.value;
    });

    return (
        <div class="mb-4">
            <label
                for={props.labelFor} >
                {props.labelText}
            </label>
            <div class="relative">
                <input
                    onChange$={props.handleChange$}
                    disabled={props.isDisabled}
                    value={props.value}
                    id={props.id}
                    type={isPasswordVisible.value ? "text" : "password"}
                    name={props.name}
                    required={props.isRequired}
                    
                    placeholder={props.placeholder}
                    autoComplete="new-password"
                    onInput$={props.onInput$}
                    onFocus$={() => passwordFieldHasFocus.value = true}
                    onBlur$={() => passwordFieldHasFocus.value = false}
                    onKeyDown$={(event) => handleValidation(event)}
                    pattern={props.pattern}
                />
                <button
                    class="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                    tabIndex={-1}
                    //onClick$={()=>togglePasswordVisibility$}
                >
                    {isPasswordVisible.value ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            class="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            class="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                    )}
                </button>

            </div>


            {(passwordFieldHasFocus.value) && (
                <div class="pl-2 mt-2">
                    <ul role="list" class="marker:text-sky-900 list-disc pl-2 space-y-2 text-slate-500">
                        {rules.map((rule) => {
                            //return <p class='text-red-500 text-sm italic'>{rule.label}</p>
                            //return <li key={rule.id} class={`${!rule.valid ? "text-red-500 text-sm italic" : "text-green-500 text-sm italic"}`}>{rule.label}</li>
                            return (<div key={rule.id} class={`flex items-center mt-1 ${!rule.valid ? "text-red-700" : "text-green-600"}`}>
                                {rule.valid ?
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    :
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                }
                                <p class="ml-2 text-sm">{rule.label}</p>
                            </div>)
                        })
                        }
                    </ul>
                </div>)
            }
            {props.fieldError && (
                <p class='text-red-500 text-sm italic'>
                    {props.fieldErrorMessage ? props.fieldErrorMessage : ''}
                </p>
            )}
            {props.fieldSuccessMessage && (
                <p class='text-green-600 text-sm italic'>
                    {props.fieldSuccessMessage ? props.fieldSuccessMessage : ''}
                </p>
            )}
        </div>

    );
});