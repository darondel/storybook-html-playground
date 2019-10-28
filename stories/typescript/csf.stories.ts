import { select, text } from '@storybook/addon-knobs';
import readme from './readme.md';

export default {
    title: 'Typescript|CSF/Demo',
    parameters: { notes: readme }
};

export const heading = (): string => `<h1>${text('Text', 'Hello World')}</h1>`;

export const button = (): HTMLButtonElement => {
    const button = document.createElement('button');

    button.type = select('Type', ['button', 'reset', 'submit'], 'button');
    button.innerText = text('Text', 'Hello World');
    button.addEventListener('click', e => console.log(e));

    return button;
};
