import React from "react";

const GenderCheckbox = ({onCheckboxChange, selectedGender}) => {
  return (
    <div className="flex ">
        <div className="form-control">
          <label className={`label gap-2 cursor-pointer  ${selectedGender === "male" ? "selected" : " "}`}>
            <span className="label-text">male</span>
            <input type="checkbox"  className="checkbox"
              checked = {selectedGender == "male"} 
              onChange={()=> onCheckboxChange("male")}
             />
          </label>
        </div>
        <div>
          <div className="form-control">
            <label className={`label gap-2 cursor-pointer  ${selectedGender === "male" ? "selected" : " "}`} >
              <span className="label-text">female</span>
              <input type="checkbox"  className="checkbox" 
              checked = {selectedGender == "female"} 
              onChange={()=> onCheckboxChange("female")}
              />
              
            </label>
          </div>
        </div>
    </div>
  );
};

export default GenderCheckbox;
