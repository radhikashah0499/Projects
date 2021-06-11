import {combineReducers} from 'redux';

const songsReducer = () =>{
   return [
       { title : 'Peaches' , duration : '3:17 min'},
       { title : 'Gone' , duration : '3:41 min'},
       {title : 'I want it That way' , duration : '5:04 min'},
       {title : 'All of me ' , duration : '3:00'},
       {title : 'Perfect' , duration: '4:34'}

   ];
};

const selectedSongReducer = (selectedSong = null , action) =>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs : songsReducer,
    selectedSong : selectedSongReducer
});