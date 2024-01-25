import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const postService = {
    getAll: () => axiosService.get(urls.posts).then(value => value.data),
    create: (post) => axiosService.post(urls.posts, post).then(value => value.data),
    deleteById: (id) => axiosService.delete(`${urls.posts}/${id}`)
}