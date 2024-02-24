import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from '../constants/Colors';
import { Product } from '../types';

export const defaultPizzaImages =
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/extravaganzza.png';

type ProdcutListItemProps = {
    product: Product;
}

const ProductListItem = ({ product }: ProdcutListItemProps ) => {
    return (
      <View style={styles.container}>
        <Image 
        source={{ uri: product.image || defaultPizzaImages }} 
        style={styles.image} 
        />
        
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
    );
  };

  export default ProductListItem;
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 20,
    },
  
    image: {
      width: '100%',
      aspectRatio: 1,
    },
  
    title: { 
      fontSize: 18, 
      fontWeight: '600', 
      marginVertical: 10,
    },
    price: {
      color: Colors.light.tint,
      fontWeight: 'bold',
    },
  });
  