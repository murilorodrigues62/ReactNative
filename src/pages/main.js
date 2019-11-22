import React, {Component } from 'react';
import api from '../services/api';
import { View, Text, FlatList, Button} from 'react-native';

export default class Main extends Component{
    static navigationOptions = {
        title: "MyApp"
    };

    state = {
        /* State é observado pelo react e dispara o render de novo caso haja alteração */
        docs: []
    };

    componentDidMount(){
        /* Metodo executado inicialmente */
        this.loadDocs();
    }

    loadDocs = async () => {
        const response = await api.get("/products");

        const {docs} = response.data;

        this.setState({docs});
    };

    renderItem = ({item}) => (
        <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
        </View>
    );

    render(){
        return(
            <View>
                <FlatList 
                    data={this.state.docs}
                    keyExtractor={item => item._id}
                    renderItem={this.renderItem} />                               
                
            </View>
        );
    }
}