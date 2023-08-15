
const attributes = {
  tableHeading: { type: "string" },
};

const {registerBlockType} = wp.blocks;
const { RichText } = wp.editor;

registerBlockType("table-block/table-section-block", {
  title: "Table Section Block",
  icon: "admin-plugins",
  category: "layout",
  attributes,
  edit: EditTableComponent,
  save:  ()=> null
});

function EditTableComponent(props) {
  // console.log('table-edit-props', props);

  function updateTitle(e) {
    props.setAttributes({ tableHeading: e.target.value });
  }


  return (
    <>
      <div className="bg-neutral-100 border border-slate-200  p-5">
        <div className="">
          <div className="flex flex-col space-y-2">
            <h2 className="text-5xl text-gray font-bold tracking-tight mb-6">
              <input
                type="text"
                value={props.attributes.tableHeading}
                onChange={updateTitle}
                className="bg-transparent border-b-2 border-white placeholder-gray px-2 w-full"
                placeholder="Enter Table Block Heading"
              />
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
