import selectSong from "../actions";
import { combineReducers } from "redux";

const songList = [
  { name: "Uzbek", time: "3:15", author: "Uzim" },
  { name: "Russia", time: "3:55", author: "Ivan" },
  { name: "Kazak", time: "4:00", author: "Jilsinbay" },
  { name: "USA", time: "5:55", author: "Smit" },
  { name: "Korea", time: "3:05", author: "Li Sen" },
];

const songListReducer = (history = songList, song) => {
  return history;
};

const selsctedSongReducer = (history = [], selectSong) => {
  if (selectSong.type === "SELECTED") {
    return selectSong.payload;
  }
  return history;
};

const allReducers = combineReducers({
  songList: songListReducer,
  selectedReducer: selsctedSongReducer,
});

export default allReducers;
