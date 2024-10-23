/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';
const blockAttributes = {
    title: {
        type: 'string',
        default: 'Lorem ipsum dolor sit amet, consectetur'
    },
    description: {
        type: 'string',
        default: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...'
    },
    rightImageUrl: {
        type: 'string',
        default: ''
    },
    rightImageId: {
        type: 'number',
        default: 0
    },
    rowItems: {
        type: 'array',
        default: [
            {
                icon: {
                    url: '',
                    id: 0
                },
                title: 'Lorem ipsum dolor sit',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
            },
            {
                icon: {
                    url: '',
                    id: 0
                },
                title: 'Lorem ipsum dolor sit',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
            }
        ]
    },
    link: {
        type: 'string',
        default: '#'
    }
};

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	attributes: blockAttributes, 
	/**
	 * @see ./save.js
	 */
	save,
} );
