import ContactForm from '~/components/shared/ContactForm';
import { memo } from 'react';

function Contact() {
    return (
        <div className="w-full min-h-[500px] h-[600px]  py-20 md:py-32 px-10">
            <h2 className="text-center text-2xl md:text-4xl md:w-1/2 lg:w-1/3 mx-auto font-bold font-secondary">
                I can’t wait to hear from you. Fill out the form below and i'll
                get back to you shortly!
            </h2>

            <ContactForm />
        </div>
    );
}
export default memo(Contact);
