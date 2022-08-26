import { getFirestore } from 'firebase-admin/firestore';

export function sampleNodeLibrary(): unknown {
  return getFirestore().doc('collection/document');
}
