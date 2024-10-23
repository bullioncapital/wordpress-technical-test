/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */

import { useBlockProps, RichText,MediaUpload, MediaReplaceFlow, InspectorControls } from '@wordpress/block-editor';
import { Button, IconButton, PanelBody, TextControl  } from '@wordpress/components';
import { Fragment } from '@wordpress/element';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { title, description, rightImageUrl, rightImageId, rowItems,  link} = attributes;

    const onSelectRightImage = (media) => {
        setAttributes({
            rightImageUrl: media.url,
            rightImageId: media.id
        });
    };

    const removeRightImage = () => {
        setAttributes({
            rightImageUrl: '',
            rightImageId: ''
        });
    };

    const onSelectRowImage = (index, media) => {
        const newItems = [...rowItems];
        newItems[index].icon = { url: media.url, id: media.id };
        setAttributes({ rowItems: newItems });
    };

    const removeRowImage = (index) => {
        const newItems = [...rowItems];
        newItems[index].icon = { url: '', id: 0 };
        setAttributes({ rowItems: newItems });
    };


	const onChangeRowItem = (index, newContent) => {
            // Clone the rowItems array before modifying it
            const newRowItems = [...rowItems];
            newRowItems[index] = { ...newRowItems[index], ...newContent };
            setAttributes({ rowItems: newRowItems });
     };


    return (
        <div className="flex-container">
            {/* Left Side */}
            <div className="half">
                {/* Main Title and Description */}
                <TextControl
                    label="Title"
                    value={title}
                    onChange={(newTitle) => setAttributes({ title: newTitle })}
                />

 <RichText
                            tagName="p"
                            value={description}
                           onChange={(newDescription) => setAttributes({ description: newDescription })}
                            placeholder={__('Description', 'custom')}
                        />

                {/* Row Items */}
                {rowItems.map((row, index) => (
                    <div className="row" key={index}>
                        <div className="icon">
                            {row.icon.url &&
                                 <img src={row.icon.url} alt={`Row Icon ${index + 1}`} />
                            }
                        </div>
                        <div className="content flex-column">
                            <TextControl
                                label="Row Title"
                                value={row.title}
                               /* onChange={(newTitle) => updateRowItemTitle(index, newTitle)}*/
								onChange={(newTitle) => onChangeRowItem(index, { title: newTitle })}
                            placeholder="Enter the title"
                            />
                            <RichText
                                label="Row Description"
                                value={row.description}
                                /*onChange={(newDescription) => updateRowItemDescription(index, newDescription)}*/
								onChange={(newDescription) => onChangeRowItem(index, { description: newDescription })}
                            />
                        </div>
                    </div>
                ))}

                {/* Button Text */}
                <TextControl
                    label="Sign Up link"
                    value={ link}
                    onChange={(newText) => setAttributes({  link: newText })}
                />
            </div>

            {/* Right Side Image */}
            <div className="half align-center item-center">
                {rightImageUrl ? (
                    <div className="right-image">
                        <img src={rightImageUrl} alt="Right Image" />
                        <Button
                            className="button button-large"
                            onClick={removeRightImage}
                            isDestructive
                        >
                            Remove Image
                        </Button>
                    </div>
                ) : (
                    <MediaUpload
                        onSelect={onSelectRightImage}
                        allowedTypes={['image']}
                        value={rightImageId}
                        render={({ open }) => (
                            <Button onClick={open} className="button button-large">
                                Select Right Image
                            </Button>
                        )}
                    />
                )}
            </div>
        </div>
    );
}
