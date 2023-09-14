import React from "react";

const Create = () => {
  return (
    <>
      <div className="min-h-[80vh]">
        <p className="p-2 text-center font-bold text-2xl">Create your recipe</p>
        <div className="flex items-center justify-center p-2">
          <form className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label>Recipe name</label>
              <input type="text" className="rounded-md" placeholder="Chapati" />
            </div>
            <div className="flex flex-col">
              <label>Country of origin</label>
              <input
                type="text"
                className="rounded-md"
                placeholder="Kenya"
              ></input>
            </div>
            <div className="flex flex-col col-span-2">
              <label>Description</label>
              <textarea
                id="description"
                rows={4}
                className="rounded-md"
                placeholder="Flat and round..."
              ></textarea>
            </div>
            <div className="flex flex-col col-span-2">
              <label>Ingriedients</label>
              <textarea
                id="ingriedients"
                rows={4}
                className="rounded-md"
                placeholder="Flour, warm water..."
              ></textarea>
            </div>
            <div className="flex flex-col col-span-2">
              <label>Directions</label>
              <textarea
                id="directions"
                rows={4}
                className="rounded-md"
                placeholder="1. Knead the..."
              ></textarea>
            </div>
            <div className="flex flex-col">
              <label>Image</label>
              <input
                type="file"
                // className="rounded-md"
                accept="image/*"
              ></input>
            </div>
            <div className="flex flex-col">
              <label>Number of people served</label>
              <input type="number" className="rounded-md"></input>
            </div>
            <div className="flex flex-col col-span-2">
              <label>Cooking time</label>
              <input
                type="text"
                className="rounded-md"
                placeholder="120 mins"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
