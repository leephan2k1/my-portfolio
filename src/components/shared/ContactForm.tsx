import { FORM_ENDPOINT } from '~/constant';
import useFormState from '~/context/FormContext';

import { useForm, ValidationError } from '@formspree/react';
import { useEffect } from 'react';

export default function ContactForm() {
    const frmState = useFormState();
    const [state, handleSubmit] = useForm(FORM_ENDPOINT);

    useEffect(() => {
        if (state.succeeded) {
            frmState?.handleSetFormState('succeeded');
        }

        if (state.errors.length) {
            frmState?.handleSetFormState('error');
        }
    }, [state]);

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col w-3/4 md:w-1/3 mx-auto my-4 space-y-4"
        >
            <label htmlFor="name">Your name:</label>
            <input
                className="rounded-lg dark:text-gray-700 text-2xl px-6 py-4"
                id="name"
                type="text"
                name="name"
                required
                placeholder="John Wick..."
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <label htmlFor="email">Your email:</label>
            <input
                className="rounded-lg dark:text-gray-700 text-2xl px-6 py-4"
                id="email"
                type="email"
                name="email"
                placeholder="johnwickandhisdog@gmail.com"
                required
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <label htmlFor="email">Message:</label>
            <textarea
                className="rounded-lg min-h-[100px] max-h-[150px] dark:text-gray-700 text-2xl px-6 py-4"
                id="message"
                name="message"
                placeholder="Message..."
                required
                minLength={5}
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button
                className="rounded-lg bg-blue-500 p-2 w-3/4 hover:w-full transition-all duration-300 mx-auto"
                type="submit"
                disabled={state.submitting}
            >
                Submit
            </button>
        </form>
    );
}
