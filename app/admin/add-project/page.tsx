import AddProjectForm from "@/Components/AddProjectForm";

function AddProject() {
  return (
    <main className="mt-12 md:mt-10">
      <div className="w-full flex flex-col justify-center md:max-w-3xl md:mx-auto">
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
          <AddProjectForm />
        </div>
      </div>
    </main>
  );
}

export default AddProject;
