import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        { title: 'T-Shirt Weather', duration: '4:18' },
        { title: 'Rubberband Man', duration: '3:36' },
        { title: 'Mrs Jones', duration: '5:56' },
        { title: 'Olde English', duration: '2:46' }
    ];
};

const selectedSongReduces = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.playload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReduces
});