import { storiesOf } from '@storybook/html';
import { select, text } from '@storybook/addon-knobs';
import readme from './readme.md';

storiesOf('Javascript|Legacy/Demo', module)
    .addParameters({ notes: readme })
    .add('heading', () => `<h1>${text('Text', 'Hello World')}</h1>`)
    .add('button', () => {
        const button = document.createElement('button');

        button.type = select('Type', ['button', 'reset', 'submit'], 'button');
        button.innerText = text('Text', 'Hello World');
        button.addEventListener('click', e => console.log(e));

        return button;
    });
