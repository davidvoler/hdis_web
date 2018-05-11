import axios from "axios";
import { baseUrl } from '../constants/config'

export const purchaseContent = (contentId) => ({
	type:'PURCHASE',
	payload:axios.get(baseUrl()+'purchase?content_id='+contentId)
});