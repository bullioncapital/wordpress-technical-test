const attributes = {
  subtitle: { type: "string" },
  title: { type: "string" },
  description: { type: "string" },
  content: {
    type: 'string',
    source: 'html',
    selector: 'h2',
},
  url: {
    type: "string",
    source: "attribute",
    selector: "img",
    attribute: "src",
  },
};
wp.blocks.registerBlockType("landingpage/landing-page-block", {
  title: "Landing Page Boilerplate Block",
  icon: "admin-plugins",
  category: "common",
  attributes,
  edit: EditComponent,
  save: function () {
    return null;
  }
});

function EditComponent(props) {
  function updateTitle(e) {
    props.setAttributes({ title: e.target.value });
  }
  function updateSubTitle(e) {
    props.setAttributes({ subtitle: e.target.value });
  }

  function updateDescription(e) {
    props.setAttributes({ description: e.target.value });
  }

  return (
      <div className="bg-neutral-100 border border-slate-200  p-5">
        <div className="">
          <div className="flex flex-col space-y-2">
            <span className="uppercase text-gray-500">
              <input
                type="text"
                value={props.attributes.subtitle}
                onChange={updateSubTitle}
                className="bg-transparent border-b-2 border-white placeholder-gray px-2 w-full"
                placeholder="Enter Subtitle"
              />
            </span>
            <h1 className="text-5xl text-gray font-bold tracking-tight mb-6">
              <input
                type="text"
                value={props.attributes.title}
                onChange={updateTitle}
                className="bg-transparent border-b-2 border-white placeholder-gray px-2 w-full"
                placeholder="Enter Title"
              />
            </h1>
            <textarea
              type="textarea"
              value={props.attributes.description}
              onChange={updateDescription}
              className="bg-transparent border-b-2 border-white placeholder-gray px-2"
              placeholder="Enter Description"
              rows="4"
              cols="70"
            ></textarea>
          </div>
        </div>
      </div>
  );
}
