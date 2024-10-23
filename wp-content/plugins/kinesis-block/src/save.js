/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	 const { title, description, rightImageUrl, rowItems, link } = attributes;

    return (
        <div className="flex-container">
            <div className="half dragable">
                <h2>{title}</h2>
                <p class="main-desc">{description}</p>

                {rowItems.map((row, index) => (
                    <div className="row" key={index}>
                        <div className="icon">
                            {row.icon.url && <img src={row.icon.url} alt={`Row Icon ${index + 1}`} />}
                        </div>
                        <div className="content flex-column">
                            <h3>{row.title}</h3>
                            <p>{row.description}</p>
                        </div>
                    </div>
                ))}


				{link &&  <div className="link">
                    <a href={link}>Sign Up
						
					</a>
                </div>}
               
            </div>

            <div className="half align-center item-center dragable">
                {rightImageUrl && <img src={rightImageUrl} alt="Right Image" />}
            </div>
        </div>
    );
}
