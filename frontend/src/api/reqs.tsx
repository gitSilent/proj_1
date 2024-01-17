import axios from "axios"
import { IAppeals, ICourses, IRewiewCard, ITeachersList, IWordDay } from "./models"

const domain = ""

interface IQueryParams {
    limit?: number,
    language: string,
    offset: number
}
// GET FUNCS
export const getCourses = async () => {
    const { data } = await axios.get<ICourses[]>(domain + "")
    return data
}

export const getContacts = async () => {
    const { data } = await axios.get(domain + "")
    return data
}

export const getTags = async () => {
    const { data } = await axios.get(domain + "")
    return data
}

export const getNotifications = async () => {
    const { data } = await axios.get<IWordDay>(domain + "")
    return data
}

export const getRewiews = async () => {
    const { data } = await axios.get<IRewiewCard[]>(domain + "")
    return data
}

export const getTeachers = async (language?: string) => {
    const { data } = await axios.get<ITeachersList>(domain + `${language ? "?language=" + language + "&" : "?"}limit=10`)
    return data
}

export const getTeachersForId = async (id: number) => {
    const { data } = await axios.get(domain + `/`)
    return data
}

export const getTeachersAudio = async (id: number) => {
    const { data } = await axios.get(domain + ``)
    return data
}

// POST FUNCS
export const postAppeals = async (data: IAppeals) => {
    return await axios.post(domain + ``, data)
}

export const postVerifyCaptcha = async (key: string) => {
    return await axios.post(domain + ``)
}

export const postFeedback = async (data: { email: string }) => {
    return await axios.post(domain + ``, data)
} 