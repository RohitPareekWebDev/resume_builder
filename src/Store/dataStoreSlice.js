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
        endYear: "",
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
      const exp = {
        id: nanoid(),
        title: action.payload.title,
        orgName: action.payload.orgName,
        startYear: action.payload.startYear,
        endYear: action.payload.endYear,
      };
      state.workEx.push(exp);
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
