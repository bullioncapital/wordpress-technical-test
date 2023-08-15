
const attributes = {
  heading: { type: "string" },
  description: { type: "string" },
};

const {registerBlockType} = wp.blocks;

registerBlockType("zigzag-block/zigzag-section-block", {
  title: "Zigzag Section Block",
  icon: "smiley",
  category: "layout",
  attributes,
  edit: EditZigzagComponent,
  save:  ()=> null
});

function EditZigzagComponent(props) {
  console.log('editing-zigzag-block-component', props);

  function updateHeading(e) {
    props.setAttributes({ heading: e.target.value });
  }

  function updateDescription(e) {
    props.setAttributes({ description: e.target.value });
  }

  return (
    <>
      <div className="bg-neutral-100 border border-slate-200  p-5">
        <div className="">
          <div className="flex flex-col space-y-2">

            <h1 className="text-5xl text-gray font-bold tracking-tight mb-6">
              <input
                type="text"
                value={props.attributes.heading}
                onChange={updateHeading}
                className="bg-transparent border-b-2 border-white placeholder-gray px-2 w-full"
                placeholder="Enter Zigzag Block Heading"
              />
            </h1>
            <textarea
              type="textarea"
              value={props.attributes.description}
              onChange={updateDescription}
              className="bg-transparent border-b-2 border-white placeholder-gray px-2"
              placeholder="Enter Description"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}
