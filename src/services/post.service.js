import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const postService = {
    getAll: () => axiosService.get(urls.posts).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.posts}/${id}`).then(value => value.data),
    getByUserId: (id) => axiosService.get(`${urls.users}/${id}${urls.posts}`).then(value => value.data)
}