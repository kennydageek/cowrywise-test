import { http } from '@/http/index.js';
import { useToastStore } from '@/stores/toastStore';
import * as ENDPOINTS from './endpoints';

export default class FetchPhotoService {
  static async fetchPhotos(params) {
    const toast = useToastStore();

    try {
      const { data } = await http.get(ENDPOINTS.GET_PHOTOS, { params });

      return data;
    } catch (err) {
      toast.error(err.response.data.errors[0], 3000);
    }
  }

  static async fetchSearchPhotos(params) {
    const toast = useToastStore();

    try {
      const { data } = await http.get(ENDPOINTS.GET_SEARCH_PHOTOS, { params });

      return data;
    } catch (err) {
      toast.error(err.response.data.errors[0], 3000);
    }
  }
}
