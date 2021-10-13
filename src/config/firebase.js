import firestore from '@react-native-firebase/firestore';

export const data = firestore().collection('Data');
