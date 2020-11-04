import React from 'react'
import axios from 'axios'
import SearchBar from '../components/SearchBar'
import ImageList from '../components/ImageList'

class App extends React.Component{
    state =  {images: [] }

    onSearchSubmit = async term => {
        const response = await axios.get('https://api.unsplash.com/search/photos',{
            params: {query: term},
            headers: {
                Authorization: 
                'Client-ID FTjwDjxgLTDjR3UfxDV_lqPv8o9Tf_s9PTbOOnoZ7Xc' 
            }
        })
    
    this.setState({images: response.data.results})
    }

    render(){
        return(
            <div className="ui container" style={{marginTop:20}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images= {this.state.images}/>
            </div>
        )
    }
}

export default App