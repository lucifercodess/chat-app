import React from "react";

const GenderCheckbox = () => {
  return (
    <div className="flex ">
        <div className="form-control">
          <label className="label gap-2 cursor-pointer">
            <span className="label-text">male</span>
            <input type="checkbox"  className="checkbox" />
          </label>
        </div>
        <div>
          <div className="form-control">
            <label className="label gap-2  cursor-pointer">
              <span className="label-text">female</span>
              <input type="checkbox"  className="checkbox" />
            </label>
          </div>
        </div>
    </div>
  );
};

export default GenderCheckbox;
