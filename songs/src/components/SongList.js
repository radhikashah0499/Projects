import React , {Component}from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions';
import {List,Title,Select} from '../Styled';

class SongList extends Component {

    renderList(){
        return this.props.songs.map((song) =>{
            return (
                <List> 
                    
                    <Title key={song.title} >
                        {song.title}
                    </Title>
                    <Select>
                        <button onClick = {()=>this.props.selectSong(song)}> 
                            Select
                        </button>
                    </Select>
                </List>
            )
        });
    };
    render(){
        
    return (
        <div>
            {this.renderList()}
        </div>
    )
    }

}


const mapStateToProps = (state) =>{
    
    return {songs : state.songs};
}
export default connect(mapStateToProps, {selectSong})(SongList);