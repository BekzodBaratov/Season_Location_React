const Redux = require("redux");

const addMusic = (name, time) => {
  return {
    type: "ADD",
    payload: {
      name,
      time,
    },
  };
};
const removeMusic = (name, info) => {
  return {
    type: "DEL",
    payload: {
      name,
      info,
    },
  };
};
const findMusic = (name, info) => {
  return {
    type: "FIND",
    payload: {
      name,
      info,
    },
  };
};
/////////////////////////////////////////
const addMusicReducer = (history = [], form) => {
  if (form.type === "ADD") {
    return (history = [...history, form]);
  }
  return history;
};
const findMusicReducer = (history = [], form) => {
  if (form.type === "FIND") {
    const musicName = form.payload.name;
    const obj = form.payload.info.addM.find(
      (val) => val.payload.name === musicName
    );
    return obj.payload.time;
  }
  return 1;
};
const delMusicReducer = (history = [], form) => {
  if (form.type === "DEL") {
    const musicName = form.payload.name;
    const arr = form.payload.info.addM.filter(
      (val) => val.payload.name !== musicName
    );
    return arr;
  }
  return 1;
};

///////////////////////////////////////////////////

const { createStore, combineReducers } = Redux;
const departaments = combineReducers({
  addM: addMusicReducer,
  findM: findMusicReducer,
  delM: delMusicReducer,
});

const store = createStore(departaments);
store.dispatch(addMusic("Uzbekistan", "3:44"));
store.dispatch(addMusic("Uzbekistan1", "3:22"));
store.dispatch(addMusic("Uzbekistan2", "3:11"));
store.dispatch(findMusic("Uzbekistan2", store.getState()));
store.dispatch(removeMusic("Uzbekistan1", store.getState()));
store.dispatch(removeMusic("Uzbekistan", store.getState()));

console.log(store.getState());
