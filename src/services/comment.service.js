import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const commentService = {
    getAll: () => axiosService.get(`${urls.comments}?_start=0&_limit=30`).then(value => value.data),
    create: (comment) => axiosService.post(`${urls.comments}?_start=0&_limit=30`, comment).then(value => value.data),
    deleteById: (id) => axiosService.delete(`${urls.comments}?_start=0&_limit=30/${id}`)
}