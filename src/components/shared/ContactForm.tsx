import { FORM_ENDPOINT } from '~/constant';
import toast from 'react-hot-toast';
import { useForm, ValidationError } from '@formspree/react';
import { useEffect } from 'react';

export default function ContactForm() {
    const [state, handleSubmit] = useForm(FORM_ENDPOINT);

    useEffect(() => {
        if (state.succeeded && !state.submitting) {
            toast.success('submitted successfully', {
                style: {
                    zIndex: 999,
                },
                duration: 3000,
            });
        } else if (state.errors.length && !state.submitting) {
            toast.error('Oops! Please try again in a few minutes', {
                style: {
                    zIndex: 999,
                },
                duration: 3000,
            });
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
                className="rounded-lg bg-blue-500 p-2 w-3/4 hover:w-full transition-all duration-300 mx-auto absolute-center"
                type="submit"
                disabled={state.submitting}
            >
                {state.submitting ? (
                    <svg
                        className="animate-spin -ml-1 mr-3 h-10 w-10 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            stroke-width="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                    </svg>
                ) : (
                    'Submit'
                )}
            </button>
        </form>
    );
}
