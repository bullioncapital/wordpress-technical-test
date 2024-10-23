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
						<span class=" elementor-animation-" style="
    margin-left: 24px;
    width: 36px;
">
				<svg aria-hidden="true" class="e-font-icon-svg e-fas-arrow-right" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor" style="
    width: 16px;
"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>				</span>

					</a>
                </div>}
               
            </div>

            <div className="half align-center item-center dragable">
                {rightImageUrl && <img src={rightImageUrl} alt="Right Image" />}
            </div>
        </div>
    );
}
