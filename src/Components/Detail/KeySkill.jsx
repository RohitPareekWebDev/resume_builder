import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSkills } from "../../Store/dataStoreSlice";

function Education() {
  const dispatch = useDispatch();

  const [skills, setSkills] = useState([""]); // Initial state with one empty skill
  const inputCss = "w-full border rounded-lg p-2 shadow-blue-950 shadow-sm";

  const addSkills = (e) => {
    e.preventDefault();
    dispatch(updateSkills([skills]));
    console.table(skills);
    setSkills([""])
  }

  const handleAddItem = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setSkills([...skills, ""]);

  };

  const handleRemoveItem = (index) => {
    if (skills.length > 1) {
      const newSkills = [...skills];
      newSkills.splice(index, 1);
      setSkills(newSkills);

    }
  };

  const handleSkillChange = (index, value) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);

  };

  return (
    <div className="flex w-3/4 flex-col p-5 shadow-gray-500 shadow-xl">
      <h1 className="text-2xl font font-bold text-justify mt-10 border-b-2 border-blue-400">
        Key Skills
      </h1>
      <form onSubmit={addSkills}>
        <div className="grid grid-cols-2 mt-10 gap-4">
          {skills.map((skill, index) => (
            <input
              key={index}
              className={inputCss}
              placeholder="Enter Skill"
              type="text"
              value={skill}
              onChange={(e) => handleSkillChange(index, e.target.value)}
            />
          ))}
        </div>

        <div className="flex justify-center mt-5 gap-5 font-bold text-blue-500">
          <button type="button" onClick={handleAddItem}>
            Add Item
          </button>
          <button type="button" onClick={() => handleRemoveItem(skills.length - 1)}>
            Remove Item
          </button>
        </div>

        <button type="submit">
          next
        </button>
      </form>
    </div>
  );
}

export default Education;
