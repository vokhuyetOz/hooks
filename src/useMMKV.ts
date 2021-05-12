import MMKVStorage, {useMMKVStorage} from 'react-native-mmkv-storage'

const MMKV = new MMKVStorage.Loader()
  .withInstanceID('mmkv-app-key-hook')
  .initialize()
// type LiteralUnion<T extends U, U = string> = T | (U & {})

export function useMMKV(key) {
  const [value, setValue] = useMMKVStorage(key, MMKV)
  return [value, setValue]
}
