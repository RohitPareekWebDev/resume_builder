import React, { useState } from 'react';

function Education() {
    const [skills, setSkills] = useState(['', '']); // Initial state with two empty skills
    const inputCss = 'w-full border rounded-lg p-2 shadow-blue-950 shadow-sm';

    const handleAddItem = () => {
        setSkills([...skills, '']);
    };

    const handleRemoveItem = (index) => {
        const newSkills = [...skills];
        newSkills.splice(index, 1);
        setSkills(newSkills);
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
                <button onClick={handleAddItem}>Add Item</button>
                <button
                    onClick={() => {
                        // Remove the last item only if there are more than two skills
                        if (skills.length > 2) {
                            handleRemoveItem(skills.length - 1);
                        }
                    }}
                >
                    Remove Item
                </button>
            </div>
        </div>
    );
}

export default Education