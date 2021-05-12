import MMKVStorage , {useMMKVStorage} from 'react-native-mmkv-storage'

const MMKV: MMKVStorage.API = new MMKVStorage.Loader()
  .withInstanceID('mmkv-app-key-hook').initialize()
type LiteralUnion<T extends U, U = string> = T | (U & {})

export const useMMKV = (key: LiteralUnion<string>) => {
  const [value, setValue] = useMMKVStorage(key, MMKV);
  return [value, setValue];
};
