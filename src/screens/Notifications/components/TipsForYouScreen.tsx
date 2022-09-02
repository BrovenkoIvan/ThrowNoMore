import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Colors } from '../../../styles';
import { blog_list } from '../../../product_list';

const TipsForYouScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Blog</Text>
      {blog_list.map((blogIgtem) => {
        return (
          <View key={blogIgtem.id} style={styles.blogItemContainer}>
            <View>
              <Image
                source={blogIgtem.image}
                style={{ width: 50, height: 50 }}
                // resizeMode={'contain'}
              />
            </View>
            <View style={{ paddingRight: 40, paddingLeft: 12 }}>
              <Text style={styles.blogItemTitle}>{blogIgtem.title}</Text>
              <Text style={styles.blogItemTime}>{blogIgtem.time}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.MAIN,
    margin: 20,
    marginTop: 0,
  },
  blogItemContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    minHeight: 60,
    paddingVertical: 20,
    paddingHorizontal: 24,
    backgroundColor: 'white',
    marginHorizontal: 12,
    shadowColor: Colors.MAIN,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.84,

    elevation: 5,
    borderRadius: 24,
    marginBottom: 24,
  },
  blogItemTitle: { fontSize: 18, marginBottom: 8 },
  blogItemTime: { color: Colors.DARKGREY },
});

export default TipsForYouScreen;
