import React, {useEffect, useState} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const PostFooter = ({likesCount: likesCountProp, caption, postedAt}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const onLikePressed = () => {
    const amount = isLiked ? 0 : 1;
    setLikesCount(likesCountProp+amount)
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    setLikesCount(likesCountProp);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <View style={styles.leftIcons}>
          <TouchableWithoutFeedback onPress={() => onLikePressed()}>
            {isLiked ? (
              <AntIcon name="heart" size={25} color="#e73838" />
            ) : (
              <AntIcon name="hearto" size={25} color="#545454" />
            )}
          </TouchableWithoutFeedback>

          <FontistoIcon name="comment" size={23} color="#545454" />
          <IonIcon name="paper-plane-outline" size={25} color="#545454" />
        </View>
        <FontAwesomeIcon name="bookmark-o" size={25} color="#545454" />
      </View>
      <Text style={styles.likes}>{likesCount} Likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.postedAt}>{postedAt}</Text>
    </View>
  );
};

export default PostFooter;
