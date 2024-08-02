import { Options } from 'typewriter-effect';

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

export const coverWrappers = [
    'Fastify',
    'dotNet Core',
    'Bootstrap',
    'JQuery',
    'SQL Server',
    'EF Core',
    'Azure DevOps',
    'Microsoft Graph API',
    'Salesforce',
    'AWS Lambda',
    'XUnit',
];

export const blackIcons = ['Fastify'];

export const typewriterOptions: Partial<Options> = {
    wrapperClassName: `bg-gradient-to-r bg-clip-text text-transparent
    from-green-400 to-blue-500 animate-text inline-block`,
    strings: ['Full stack ', 'TypeScript ', 'JavaScript ', 'CSharp '],
    autoStart: true,
    loop: true,
    cursor: ' ',
};
