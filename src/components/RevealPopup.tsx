import React from 'react';
import { Modal, View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface RevealPopupProps {
  visible: boolean;
  image: any;
  onClose: () => void;
}

export function RevealPopup({ visible, image, onClose }: RevealPopupProps) {
  const scaleAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (visible) {
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }).start();
    } else {
      scaleAnim.setValue(0);
    }
  }, [visible]);

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
    >
      <View style={styles.modalOverlay}>
        <Animated.View style={[
          styles.modalContent,
          {
            transform: [{ scale: scaleAnim }]
          }
        ]}>
          <LinearGradient
            colors={['#FF6B6B', '#4ECDC4']}
            style={styles.gradientContainer}
          >
            <View style={styles.imageContainer}>
              <Image 
                source={image}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
            
            <Text style={styles.congratsText}>
              🎉 Hey Congrats! 🎉
            </Text>
            <Text style={styles.messageText}>
              You guys enjoy this position today!
            </Text>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={onClose}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </LinearGradient>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '85%',
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 5,
  },
  gradientContainer: {
    padding: 20,
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  congratsText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  messageText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
    elevation: 2,
  },
  closeButtonText: {
    color: '#FF6B6B',
    fontSize: 16,
    fontWeight: 'bold',
  },
});