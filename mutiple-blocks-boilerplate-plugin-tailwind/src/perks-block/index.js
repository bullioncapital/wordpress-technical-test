
const attributes = {
  subtitle: { type: "string" },
  mainHeading: { type: "string" },
};


const {registerBlockType} = wp.blocks;

registerBlockType("perks-block/perks-section-block", {
  title: "Perks Section Block",
  icon: "smiley",
  category: "layout",
  attributes,
  edit: EditPerksComponent,
  save:  ()=> null
});

function EditPerksComponent(props) {

  function updateHeading(e) {
    props.setAttributes({ mainHeading: e.target.value });
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
                value={props.attributes.mainHeading}
                onChange={updateHeading}
                className="bg-transparent border-b-2 border-white placeholder-gray px-2 w-full"
                placeholder="Enter Perks Block Heading"
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
