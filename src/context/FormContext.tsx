import { createContext, ReactNode, useContext, useState } from 'react';
import { FormState } from 'types';

interface FormContextProps {
    children: ReactNode;
}

interface FormContextType {
    formState: FormState | string;
    handleSetFormState: (state: FormState) => void;
}

const FormContext = createContext<FormContextType | null>(null);

export const FormContextProvider = ({ children }: FormContextProps) => {
    const [formState, setFormState] = useState<FormState>('default');

    const handleSetFormState = (state: FormState) => {
        setFormState(state);
    };

    const value = {
        formState,
        handleSetFormState,
    } as const;

    return (
        <FormContext.Provider value={value}>{children}</FormContext.Provider>
    );
};

export default function useFormState() {
    return useContext(FormContext);
}
