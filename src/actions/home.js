import axios from "axios";
import { baseUrl } from '../../constants/config'

export const requestLessons = () => ({
	type:'REQUEST_SOMETHING',
	payload:axios.get(baseUrl()+'lessons')
});