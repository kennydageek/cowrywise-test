import { http } from '@/http/index.js';
// import { resolveRequestError } from '@/utils/auth.js';
// import app from '@/main';
import { useToastStore } from '@/stores/toastStore';
import * as ENDPOINTS from './endpoints';

export default class FetchPhotoService {
  static async fetchPhotos(params) {
    const toast = useToastStore();

    try {
      const { data } = await http.get(ENDPOINTS.GET_PHOTOS, { params });

      return data;
    } catch (err) {
      console.log(err);
      toast.success(err.response.data.errors[0], 3000);
    }
  }

  static async fetchSearchPhotos(params) {
    try {
      const { data } = await http.get(ENDPOINTS.GET_SEARCH_PHOTOS, { params });

      return data;
    } catch (err) {
      toast.success(err.response.data.errors[0], 3000);
    }
  }
}
