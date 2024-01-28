import { Dimensions, StyleSheet } from "react-native";
import { useFonts } from 'expo-font';//react hook
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: 'black',
  },
  moviesContainer: {
    //flex: 2,
    alignItems: 'center',
    width: deviceWidth,
  },
  ItemContainer: {
    height: '12%',
    //justifyContent: 'space-evenly',
    //alignItems: "center",

  },
  ItemsContainers: {
   // flex: 1,
    //flexDirection: 'row',
    margin:5
  },
  Itemtext: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    padding:6,
  },
  ViewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding:5,
  },
  eveySingleItem:{
    padding:5,
  },
  TextContainer: {

    //alignItems: 'center',
    //justifyContent: 'center',

  },
  TextMoviesContainer: {
   
    height: 250,
    width: deviceWidth / 2.15,
    backgroundColor:'rgba(52,52,52,0.8)',
   // alignItems: 'center',
    borderTopWidth: 2,
    borderRadius:10,
    opacity: 0.75

  },
  textin: {
    width: '100%',
    marginLeft: 5,
    flexDirection: 'row',
    flex: 1,
  },
  icon: {
    marginLeft: 5,
  },
  textUnclicked: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 15,
    flexDirection: "row",
    //width: deviceWidth-5,
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  textClicked: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: 'space-between'
  },
  image: {
    
    width: '100%',
    height: '85%',
    borderRadius:10,

  },
  movieItem: {
    borderCurve: 15,
    //overflow: 'hidden',
    justifyContent:'center',
    //alignItems:'center',
    
  
  },
  outerContainerofGenres: {
    //flexDirection: 'row',
   
  },
  pressed: {
    opacity: 0.75,
  },
  clearGenre: {
    marginTop: 10,
  },
  noMatchingMoviesText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'

  },
  title: {
    //justifyContent:'center',
    //alignItems:'center',
    marginLeft:5
  },
  texttitle:{
    color:'white',
    fontSize:16,
    fontWeight:'bold',
    marginTop:5,
    
  }






});
export default styles;