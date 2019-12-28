import React from "react";
import { StyleSheet, Text, View, Image ,SearchBar} from "react-native";
// import { SearchBar } from 'react-native-elements';

export default class account extends React.Component {
  state = {
    search: '',
};

  updateSearch = search => {
    this.setState({ search });
  };
	render() {
		const { search } = this.state;
		return (
			<View>
			<SearchBar
				style={{
				justifyContent: "right"
				}}
       			placeholder="Type Here..."
       			onChangeText={this.updateSearch}
       			value={search}
      			/>
      			
			
				<Image
					style={{
					width: 100,
					height: 100,
					justifyContent: "left"
					}}
					source={require("./assets/the.jpg")}
					/>
				<Image
					style={{
					width: 100,
					height: 100,
					marginTop:500,
					justifyContent: "right"
					}}
					source={require("./assets/download.jpg")}
					/>  

				<SearchBar
					style={{
					justifyContent: "right"
					}}
       				 placeholder="Type Here..."
       				 onChangeText={this.updateSearch}
       				 value={search}
      						/>
      						</View>
      			
	);
  }
}


