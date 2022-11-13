import React from "react";
import axios from "axios";
import PlayListRow from "../molecules/PlaylistRow";
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
                token:"BQB-t1d75r1EfgvrJ0tAYt1z5me1iI1Lr0LFq09Evb3E8OcUN8D2OG9A_3brllKSRTBQL8r_qTVmsrGI2-kdkD-ct54RAHWm65er0vRsMEI8RwWWci4BmhD2wUk43CRd0SUHgQdeYxxKv2Vwy-voQTZ-vqITCywBe2Si2HJGxhL3ALiaasWLfQW-GEsTpZyMbRg9mbHQZniDysek"
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
                        <PlayListRow item={item} i={i} key={item.id}></PlayListRow>                 
                )})
            }
        </div>
    );
}
}
   
export default Playlist;