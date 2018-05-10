import axios from "axios";
import { baseUrl } from '../constants/config'

export const requestDashboard = () => ({
	type:'REQUEST_DASHBOARD',
	payload:axios.get(baseUrl()+'dashboard')
});

