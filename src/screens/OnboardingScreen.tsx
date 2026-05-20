import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  useWindowDimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Pressable
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const onboardingData = [
  {
    id: '1',
    image: require("@/assets/images/onboarding1.jpg")
  },
  {
    id: '2',
    image: require("@/assets/images/onboarding2.jpg")
  },
  {
    id: '3',
    image: require("@/assets/images/onboarding3.jpg")
  }
];

type OnboardingItem = typeof onboardingData[0];

export default function OnboardingScreen() {
  const insets = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  
  const navigation = useNavigation<any>();
  const flatListRef = useRef<FlatList<OnboardingItem>>(null);

  const renderItem = ({ item }: { item: OnboardingItem }) => {
    return (
      <View style={{ width, height }}>
        <Image source={item.image} style={styles.backgroundImageHome} />
      </View>
    );
  };

  const updateCurrentSlideIndex = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const onPressNext = () => {
    if (currentSlideIndex < onboardingData.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentSlideIndex + 1 });
    } else {
      navigation.replace("Auth");
    }
  };

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <View style={styles.background}>
        <FlatList
          ref={flatListRef}
          data={onboardingData}
          renderItem={renderItem}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={[styles.ButtonView, { bottom: 60 + insets.bottom }]}>
        <Pressable 
          onPress={onPressNext} 
          style={styles.NextButton}
        >
          <Text style={styles.buttonText}>
            {currentSlideIndex === onboardingData.length - 1 ? "Get Started" : "Next Page"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  backgroundImageHome: {
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  },
  ButtonView: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  NextButton: {
    backgroundColor: "rgba(207, 181, 181, 0.4)", 
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    width: 200,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)"
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: "600"
  }
});
