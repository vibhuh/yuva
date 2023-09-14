import type { QRL, QwikIntrinsicElements } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
type IInputField = QwikIntrinsicElements["input"] & {
    handleChange$?: QRL<(event: any) => void>;
    handleOnKeydown$?: QRL<(event: any) => void>;
    onInput$?(_: any, el: any): QRL<(_: any,  el: any) => void>;
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
}


export const InputField = component$((props: IInputField) => {
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
                    id={props.id}
                    type={props.type}
                    name={props.name}
                    required={props.isRequired}
                    placeholder={props.placeholder}
                    autoComplete="new-password"
                    onInput$={props.onInput$}
                    onKeyDown$={props.handleOnKeydown$}
                    pattern={props.pattern}
                    value={props.value}
                />
            </div>
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