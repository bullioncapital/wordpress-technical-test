
const attributes = {
  textblock: { type: "string" },
};

const {registerBlockType} = wp.blocks;

registerBlockType("cta-block/cta-section-block", {
  title: "CTA  Section Block",
  icon: "smiley",
  category: "layout",
  attributes,
  edit: EditCtaComponent,
  save:  ()=> null
});

function EditCtaComponent(props) {

  function updateTextblock(e) {
    props.setAttributes({ textblock: e.target.value });
  }

  return (
    <>
      <div className="bg-gray-100 border border-slate-100 p-5">
        <div className="">
          <div className="flex flex-col space-y-2">
            <h2 className="text-5xl text-gray font-bold tracking-tight mb-6">
              <input
                type="text"
                value={props.attributes.textblock}
                onChange={updateTextblock}
                className="bg-transparent border-b-2 border-white placeholder-gray px-2 w-full"
                placeholder="Enter CTA Block Text..."
              />
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
