import { action } from "actions";

export const UPDATE_PROFILE = "update_profile";
export const update_profile = (data = {}) => action(UPDATE_PROFILE, { data });