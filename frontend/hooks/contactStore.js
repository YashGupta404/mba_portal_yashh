let contactData = {};

export const setContactDataGlobal = (data) => {
  contactData = data;
  window.dispatchEvent(new Event("contactDataUpdated"));
};

export const getContactDataGlobal = () => {
  return contactData;
};
