const popupCheckBox = document.getElementById("popupActive");
const darkModeCheckBox = document.getElementById("darkModeActive");

// set the popup checkbox to the value stored in chrome storage or to true if it doesn't exist
const popupActiveCallback = (result) => {
  popupCheckBox.checked = result.popupActive ?? true;
};
chrome.storage.sync.get(["popupActive"], popupActiveCallback);

// set the dark mode checkbox to the value stored in chrome storage or to false if it doesn't exist
const darkModeActiveCallback = (result) => {
  darkModeCheckBox.checked = result.darkModeActive ?? false;
};
chrome.storage.sync.get(["darkModeActive"], darkModeActiveCallback);

// add an onchange event listener to the popup checkbox
const poupupCheckboxChangeEventHandler = () => {
  const value = popupCheckBox.checked;
  setPopup(value);
};
popupCheckBox.addEventListener("change", poupupCheckboxChangeEventHandler);

// add an onchange event listener to the dark mode checkbox
const darkModeCheckboxChangeEventHandler = () => {
  const value = darkModeCheckBox.checked;
  setDarkMode(value);
};
darkModeCheckBox.addEventListener("change", darkModeCheckboxChangeEventHandler);

// function to set the dark mode value
const setDarkMode = (value) => {
  chrome.storage.sync.set({ darkModeActive: value });
};

// function to set the popup value
const setPopup = (value) => {
  chrome.storage.sync.set({ popupActive: value });
};
