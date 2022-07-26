export const REVALIDATE_TIME = 60 * 60 * 24; //1 day

//ref configs: https://github.com/Stanko/react-plx#props
export const skillDescPlx = [
    {
        start: 0,
        end: 1000,
        properties: [
            {
                startValue: 0.3,
                endValue: 1,
                property: 'scale',
            },
        ],
    },
];

export const WEBSITE_URL = 'https://trietlydev.com';

export const RESUME_URL = process.env.NEXT_PUBLIC_RESUME_URL as string;

export const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT as string;
