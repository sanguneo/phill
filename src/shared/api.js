import { auth, db, storage } from './firebase';

export const uploadImage = async (path, file) => {
  const isFileObject = file instanceof File;
  const ref = storage().ref().child(path);
  const ret = await ref[isFileObject ? 'put' : 'putString'](file, isFileObject ? undefined : 'data_url').catch(e => ({ error: e, message: 'Upload Failed' }));
  return ret;
};
export default {
  uploadImage,
};
