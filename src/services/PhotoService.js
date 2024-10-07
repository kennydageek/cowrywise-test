import { http } from '@/http/index.js';
// import { resolveRequestError } from '@/utils/auth.js';
// import app from '@/main';
import { useToast } from 'vue-toastification';
import * as ENDPOINTS from './endpoints';

const toast = useToast();

export default class FetchPhotoService {
  static async fetchPhotos(params) {
    try {
      const { data } = await http.get(ENDPOINTS.GET_PHOTOS, { params });

      return data;
    } catch (err) {
      toast.error(err.message);
    }
  }

  static async fetchSearchPhotos(params) {
    try {
      const { data } = await http.get(ENDPOINTS.GET_SEARCH_PHOTOS, { params });

      return data;
    } catch (err) {
      toast.error(err.message);
    }
  }
}
