import { createSlice } from "@reduxjs/toolkit";

export const dataStoreSlice = createSlice({
  name: "dataStore",
  initialState: {
    personalInfo: {
      firstName: "",
      lastName: "",
      Email: "",
      Mobile: "",
      Address1: "",
      Address2: "",
      City: "",
      State: "",
      Pin: "",
      Objective: "",
    },
    workEx: [
      {
        title: "",
        orgName: "",
        startYear: "",
        endYear: "",
        jobDescription: "",
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
      state.workEx = action.payload;
    },
    updateSkills: (state, action) => {
      state.skills = action.payload;
    },
  },
});

export const {
  updatePersonalInfo,
  updateWorkEx,
  updateEducation,
  updateSkills,
} = dataStoreSlice.actions;

export default dataStoreSlice.reducer;
