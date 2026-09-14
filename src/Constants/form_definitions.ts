export const FORM_DEFINITIONS = [
    {
        label: 'Email address',
        type: 'email',
        isOptional: false,
        isHidden: false,
    },
    {
        label: 'Gender',
        type: 'radio',
        value: [
            'M (Male)',
            'F (Female)',
            'X (Indeterminate/Intersex/Unspecified)',
        ],
        isOptional: true,
    },
    {
        label: 'State',
        type: 'select',
        value: ['NSW', 'QLD', 'SA', 'TAS', 'VIC', 'WA', 'NT', 'ACT'],
        default: 'ACT',
    },
    { label: 'Contact number', type: 'telephone' },
    { type: 'hidden', value: 1653793817719, isHidden: true },
]
// __afill_20260605_1813__
// __afill_20260721_1634__
// __afill_20260406_2023__
// __afill_20260629_126__
