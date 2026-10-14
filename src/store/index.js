import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./slices/headerSlice";
import careerPathReducer from "./slices/careerPathSlice";
import roadmapReducer from "./slices/roadmapSlice";
import projectReducer from "./slices/projectSlice";
import jobReadyReducer from "./slices/jobReadySlice";
import aboutReducer from "./slices/aboutSlice";
import contactReducer from "./slices/contactSlice";
import registerReducer from "./slices/registerSlice";

export const store = configureStore({
  reducer: {
    header: headerReducer,
    careerPaths: careerPathReducer,
    roadmap: roadmapReducer,
    projects: projectReducer,
    jobReady: jobReadyReducer,
    about: aboutReducer,
    contact: contactReducer,
    register: registerReducer,
  },
});
