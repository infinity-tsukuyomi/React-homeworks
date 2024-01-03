import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const userPostsService = {
    getById: (id) => axiosService.get(`${urls.users}/${id}${urls.posts}`).then(value => value.data)
}