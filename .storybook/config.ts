import { addDecorator, configure } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);

// automatically import all files ending in *.stories.js or *.stories.mdx
configure(require.context('../stories', true, /\.stories\.(js|ts|mdx)$/), module);
