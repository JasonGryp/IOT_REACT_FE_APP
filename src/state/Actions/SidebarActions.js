export const UPDATE_SIDEBAR_CONTENT = "UPDATE_SIDEBAR_CONTENT";
export const TOGGLE_MENU = "TOGGLE_MENU";

export const updateSidebarContent = (data) => ({
  type: UPDATE_SIDEBAR_CONTENT,
  payload: { data },
});
export const toggleMenuAction = () => {
  return { type: TOGGLE_MENU };
};
