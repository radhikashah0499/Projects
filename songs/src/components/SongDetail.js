import React from 'react';
import {connect} from 'react-redux';
import {Detail} from '../Styled';

const SongDetail = ({song}) =>
{
    if(!song){
        return <Detail> Select a song!</Detail>
    }
   
    return (
    <Detail> 
        Title : {song.title} <br/>
        Duration : {song.duration}
    </Detail>
    )
}

const mapStateToProps = (state) => {
   return { song : state.selectedSong};
}


export default connect(mapStateToProps)(SongDetail);

