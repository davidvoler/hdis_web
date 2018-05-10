import axios from "axios";
import { baseUrl } from '../constants/config'

export const requestStudents = () => ({
	type:'REQUEST_STUDENTS',
	payload:axios.get(baseUrl()+'students')
});
export const requestContents = () => ({
	type:'REQUEST_CONENTS',
	payload:axios.get(baseUrl()+'contents')
});
export const requestPayments = () => ({
	type:'REQUEST_PAYMENTS',
	payload:axios.get(baseUrl()+'payments')
});
