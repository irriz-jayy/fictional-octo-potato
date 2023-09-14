import React from "react";

const Create = () => {
  return (
    <>
      <div className="bg-orange-500 min-h-[80vh]">
        <p className="p-2 border text-center font-bold text-2xl">
          Create your recipe
        </p>
        <div className="flex items-center justify-center p-2">
          <form className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label>Recipe name</label>
              <input type="text" className="rounded-md" />
            </div>
            <div className="flex flex-col">
              <label>Country of origin</label>
              <input type="text" className="rounded-md"></input>
            </div>
            <div className="flex flex-col">
              <label>Servings</label>
              <input type="number" className="rounded-md"></input>
            </div>
            <div className="flex flex-col">
              <label>Number of people served</label>
              <input type="text" className="rounded-md"></input>
            </div>
            <div className="flex flex-col">
              <label>Cooking time</label>
              <input type="text" className="rounded-md"></input>
            </div>
            <div className="flex flex-col">
              <label>Cooking time</label>
              <input type="text" className="rounded-md"></input>
            </div>
            <div className="flex flex-col col-span-2">
              <label>Description</label>
              <textarea
                id="description"
                rows={4}
                className="rounded-md"
              ></textarea>
            </div>
            <div className="flex flex-col col-span-2">
              <label>Ingriedients</label>
              <textarea
                id="ingriedients"
                rows={4}
                className="rounded-md"
              ></textarea>
            </div>
            <div className="flex flex-col col-span-2">
              <label>Procedure</label>
              <textarea
                id="procedure"
                rows={4}
                className="rounded-md"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
