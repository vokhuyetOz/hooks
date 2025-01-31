import {useState} from 'react'
import {CameraRoll, GetPhotosParams,PhotoIdentifiersPage,} from '@react-native-camera-roll/camera-roll'


const initialState: PhotoIdentifiersPage = {
  edges: [],
  page_info: {
    end_cursor: '',
    has_next_page: false,
    start_cursor: '',
  },
}

const defaultConfig: GetPhotosParams = {
  first: 20,
  groupTypes: 'All',
}

export function useCameraRoll() {
  const [photos, setPhotos] = useState(initialState)

  async function getPhotos(config = defaultConfig) {
    try {
      const result = await CameraRoll.getPhotos(config)
      setPhotos(result)
    } catch (err) {
      console.log('error: ', err)
    }
  }

  async function saveToCameraRoll(tag: string, type?: 'photo' | 'video') {
    try {
      await CameraRoll.saveToCameraRoll(tag, type)
    } catch (err) {
      console.log('error saving to camera roll: ', err)
    }
  }

  return [photos, getPhotos, saveToCameraRoll]
}
