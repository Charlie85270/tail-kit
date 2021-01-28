const EDITOR_THEME: any = { //eslint-disable-line
    plain: {
        color: '#9CDCFE',
        backgroundColor: '#1E1E1E',
    },
    styles: [
        {
            types: ['prolog'],
            style: {
                color: 'rgb(0, 0, 128)',
            },
        },
        {
            types: ['comment'],
            style: {
                color: 'rgb(106, 153, 85)',
            },
        },
        {
            types: ['builtin', 'changed', 'keyword'],
            style: {
                color: 'rgb(86, 156, 214)',
            },
        },
        {
            types: ['number', 'inserted'],
            style: {
                color: 'rgb(181, 206, 168)',
            },
        },
        {
            types: ['constant'],
            style: {
                color: 'rgb(100, 102, 149)',
            },
        },
        {
            types: ['attr-name', 'variable'],
            style: {
                color: '#ffe484',
            },
        },
        {
            types: ['deleted', 'string', 'attr-value'],
            style: {
                color: '#b5f4a5',
            },
        },
        {
            types: ['selector'],
            style: {
                color: 'rgb(215, 186, 125)',
            },
        },
        {
            // Fix tag color
            types: ['tag'],
            style: {
                color: 'rgb(78, 201, 176)',
            },
        },
        {
            // Fix tag color for HTML
            types: ['tag'],
            languages: ['markup'],
            style: {
                color: '#ff8383',
            },
        },
        {
            types: ['punctuation', 'operator'],
            style: {
                color: 'rgb(212, 212, 212)',
            },
        },
        {
            // Fix punctuation color for HTML
            types: ['punctuation'],
            languages: ['markup'],
            style: {
                color: '#fff',
            },
        },
        {
            types: ['function'],
            style: {
                color: 'rgb(220, 220, 170)',
            },
        },
        {
            types: ['class-name'],
            style: {
                color: 'rgb(78, 201, 176)',
            },
        },
        {
            types: ['char'],
            style: {
                color: '#fff',
            },
        },
    ],
};

export default EDITOR_THEME;
