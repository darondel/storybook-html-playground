import { storiesOf } from '@storybook/html';
import { select, text } from '@storybook/addon-knobs';
import readme from './readme.md';

storiesOf('Typescript|Legacy/Demo', module)
    .addParameters({ notes: readme })
    .add('heading', (): string => `<h1>${text('Text', 'Hello World')}</h1>`)
    .add('button', (): HTMLButtonElement => {
        const button = document.createElement('button');

        button.type = select('Type', ['button', 'reset', 'submit'], 'button');
        button.innerText = text('Text', 'Hello World');
        button.addEventListener('click', e => console.log(e));

        return button;
    });
