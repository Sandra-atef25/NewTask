
import { ReactNode } from 'react';
import { View, FlatList, Text } from 'react-native';
import LoadingOverlay from '../UIStyling/MoviesAndTVStyling/LoadingOverlay';
import styles from '../UIStyling/MoviesAndTVStyling/MoviesAndTVScreenStyling';
const Listing = ({ children, noMatchingData, fetchedData, renderData, handleEndReached, isFetching, title }: { children: ReactNode, noMatchingData: boolean, fetchedData: any[], renderData: any, handleEndReached: any, isFetching: boolean, title: string }) => {
    return (
        <View style={styles.container}>
            {children}

            <View style={styles.moviesContainer}>

                {
                    !noMatchingData &&

                    <FlatList<any> data={fetchedData} renderItem={renderData} keyExtractor={(item) => item.id} numColumns={2}
                        onEndReached={handleEndReached} ListFooterComponent={
                            isFetching ? <LoadingOverlay /> : null
                        } ></FlatList>


                }
                {
                    noMatchingData &&!isFetching&&
                    <View>
                        <Text style={styles.noMatchingMoviesText}> {title}</Text>
                    </View>
                }
            </View>
            


        </View>

    );

}
export default Listing;
