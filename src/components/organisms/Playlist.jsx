import React from "react";
import axios from "axios";
class Playlist extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
        this.getPlateformContext = this.getPlateformContext.bind(this);
    }


    adaptor(data){
    }

    getPlateformContext(){
        //Choose the good configurator TODO: Make many configurator object
        const spotify = () => {
            const config = {
                baseUrl:"https://api.spotify.com/",
                path:"v1/me/playlists",
                token:"token"
            }

            let url = () => {
                return config.baseUrl + config.path
            }
            
            let headers = () => {
                
                return {
                    'Authorization': `Bearer ${config.token}`
                }
            }
            return {
                method: 'get',
                url: url(),
                headers: headers()
              };
        }

        return spotify()

    }

    getPlateformAdaptor(response) {
        if( 200 === response?.status ){
        
            const spotify = (response) => {



                const row = (item) => {
                    console.log(item)
                    if(item) {
                        return{
                            id:item.id,
                            picture:{
                                custom: item.images[0],
                                generated: item.images[1],
                            },
                            name:item?.name,
                            owner:{
                                picture:{

                                }
                            }
                        }
                    } 
                    else {
                        return 
                    }
                }



                return {
                    data:{
                        rows:response.data.items.map((item) => {
                            // console.log("Medium",item.images)
                            return row(item)})
                    }
                }
            }

            let datas = spotify(response);
            console.log(datas)
            this.setState({items:datas.data.rows })
            this.setState({DataisLoaded: true})
       }
    }

    
  


    get(){

        let config = this.getPlateformContext();
          axios(config)
          .then((response) => {
            this.getPlateformAdaptor(response)
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        this.get();
    }


    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
            <div style={{
            
            }}>
            {
                items.map((item, i) => {
                    return ( 
                 
                <li style={{
         
                    width:"100vw",
                    listStyle:'none',
                    backgroundColor: i % 2 ?  'rgba(255,255,255, .05)' :'transparent',
                    display:'flex'
                }} key = { item.id } >
                    <div style={{
                        maxWidth:"20vw",
                        width:"20vw",
                    }}>
                        {item?.picture?.custom?.url ? (<img style={{
                            width: "inherit",
                            height:"inherit",
                            borderRadius:"10px"
                        }}src={item.picture.custom.url}/>) : <img src={item.picture.custom.url}/>}
                    </div>
                    <div   
                        style={
                            {
                                color:"white"
                            }
                        }
                        >
                        <p>{item.name}</p>
                        {}
                    </div>
                </li>
                )})
            }
        </div>
    );
}
}
   
export default Playlist;