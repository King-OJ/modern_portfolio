import FloatingLabel from "@/Components/FloatingLabel";
import ImagePreview from "@/Components/ImageInputField";

function AddProject() {
  return (
    <main className="mt-12 md:mt-10">
      <div className="w-full flex flex-col justify-center md:max-w-4xl md:mx-auto">
        <h2 className="text-2xl font-extrabold my-4 md:my-8 ">Add Project</h2>
        <div className="relative inset-0">
          <div
            className={`absolute inset-0 
                   bg-gradient-to-tr -mr-[2px] -rotate-[0.2deg]
               from-80%
               from-transparent to-primary rounded-xl mb-[2px]`}
          ></div>
          <div
            className={`absolute inset-0 
                   bg-gradient-to-bl mt-[1px] -ml-[2px] -rotate-[0.2deg]
               from-80%
               from-transparent to-primary rounded-xl`}
          ></div>
          <div
            className={`absolute inset-0
               border space-y-1 flex flex-col justify-center items-center bg-muted/95 rounded-xl`}
          ></div>
          <form
            encType="multipart/form-data"
            action=""
            className="text-black h-full rounded-xl p-6 flex items-center"
          >
            <div className="space-y-10 w-full">
              <FloatingLabel type="text" label="project title" name="name" />
              <FloatingLabel
                type="text"
                label="project subtitle"
                name="email"
              />
              <FloatingLabel type="text" label="live link" name="name" />
              <FloatingLabel type="text" label="code link" name="email" />

              <div className="relative">
                <label htmlFor="type" className="sr-only">
                  Underline select
                </label>

                <select
                  name="type"
                  id="type"
                  defaultValue={undefined}
                  className="focus:outline-none py-2.5 border-b-2 block px-0 w-full bg-transparent text-accent-foreground border-accent-foreground"
                >
                  <option value={undefined}>Choose project type</option>
                  <option value="webApp">Web App</option>
                  <option value="mobileApp">Mobile App</option>
                </select>
              </div>

              <ImagePreview />

              <div className="relative">
                <label
                  htmlFor="description"
                  className="text-sm pb-2.5 text-accent-foreground block"
                >
                  Project description
                </label>
                <textarea
                  name="description"
                  id="description"
                  className="outline-none text-[16px] md:text-sm text-foreground border-2 p-2 h-24 md:h-32 border-accent-foreground rounded-xl bg-transparent w-full"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-bold relative"
              >
                Add Project
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default AddProject;
