import { createSlice, nanoid } from "@reduxjs/toolkit";

export const dataStoreSlice = createSlice({
  name: "dataStore",
  initialState: {
    personalInfo: {
      firstName: "",
      lastName: "",
      Email: "",
      Mobile: "",
      Address: "",
      City: "",
      State: "",
      Pin: "",
      Objective: "",
    },
    workEx: [
      {
        id: 1,
        title: "",
        orgName: "",
        startYear: "",
<<<<<<< HEAD
        endYear: "",
=======
        endYear: ""
>>>>>>> 68d25688482fa4226cbcfdadc5b3f78aedeead4e
      },
    ],
    education: [
      {
        Type: "Graduation",
        University: "",
        Degree: "",
        Start: "",
        End: "",
      },
    ],
    skills: [{ skillName: "" }],
    selectedTemplate: "",
    imageFile: null,
    errorMessages: {},
    showErrorMessages: false,
  },

  reducers: {
    updatePersonalInfo: (state, action) => {
      //this function updates the targeted key of the personalInfo element of dataStore //
      state.personalInfo = action.payload;
    },

    updateWorkEx: (state, action) => {
      //this function updates the targeted key of the workEx element of dataStore //
<<<<<<< HEAD
      const exp = {
        id: nanoid(),
        title: action.payload.title,
        orgName: action.payload.orgName,
        startYear: action.payload.startYear,
        endYear: action.payload.endYear,
      };
      state.workEx.push(exp);
=======
      state.workEx = action.payload;
    },
    updateEducation: (state, action) => {
      //this function updates the targeted key of the education element of dataStore //
      state.education[action.payload.index][action.payload.key] =
        action.payload.value;
    },
    updateKeySkills: (state, action) => {
      //this function updates the targeted key of the keySkills element of dataStore //
      state.skills[action.payload.index][action.payload.key] =
        action.payload.value;
    },
    updateState: (state, action) => {
      //this function can be called to update any targeted element of dataStore //
      state[action.payload.key] = action.payload.value;
>>>>>>> 68d25688482fa4226cbcfdadc5b3f78aedeead4e
    },

    removeWorkEx: (state, action) => {
      state.workEx = state.workEx.filter(
        (workEx) => workEx.id !== action.payload
      );
    },
    updateSkills: (state, action) => {
      state.skills = action.payload;
    },
  },
});

export const { updatePersonalInfo, updateWorkEx, updateSkills } =
  dataStoreSlice.actions;

export default dataStoreSlice.reducer;
