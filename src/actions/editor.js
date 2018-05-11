import axios from "axios";
import { baseUrl } from '../constants/config'

export const requestLessonList = () => ({
	type:'REQUEST_LESSON_LIST',
	payload:axios.get(baseUrl()+'lesson')
});
export const requestLessonById = (lesson_id) => ({
	type:'REQUEST_LESSON_BY_ID',
	payload:axios.get(baseUrl()+'lesson?id='+lesson_id)
});
export const updateLesson = (lesson_id, data) => ({
	type:'UPDATE_LESSON',
	payload:axios.post(baseUrl()+'lesson?id='+lesson_id, data)
});
export const createLesson = (data) => ({
	type:'CREATE_LESSON',
	payload:axios.post(baseUrl()+'lesson', data)
});
