import { getAllChapters, addSectiontoSectionList, getChapterByID , getChapterContentByID} from '../Actions/Actions';
import axios from 'axios';

export const getSections = () => {
	return (dispatch) => {
		let data = sectionsQuery();
		data.then((result) => {
			dispatch(getAllChapters(result));
		});
	};
};

const sectionsQuery = () => {
	return axios
		.get('http://localhost:8000/admin/sections/')
		.then((data) => {
			return data.data;
		})
		.catch((err) => console.log(err));
};

export const addChapter = (formData) => {
	return (dispatch) => {
		const data = axios.post('http://localhost:8000/add/section/', { formData });
		data.then((data) => {
			const form = {
				name: formData.name,
				description: formData.description,
				sort: formData.sort,
				id: data.data[0].id
			};
			console.log(form,'thunk form ');
			dispatch(addSectiontoSectionList(form));
		});
	};
};

export const deleteSection = (id) => {
	return (dispatch) => {
		const res = axios.delete(`http://localhost:8000/delete/section/${id}`);
		res.then((res) => {
			//console.log(res, 188);
			if (res.status === 200) {
				let data = sectionsQuery();
				data.then((result) => {
					dispatch(getAllChapters(result));
				});
			}
		});
	};
};

export const getSectionById = (id) => {
	return (dispatch) => {
		const res = axios.get(`http://localhost:8000/get/section/${id}`).then((res) => {
			if (res.status === 200) {
				const data = res.data[0];
				
				dispatch(getChapterByID(data));
			}
			
		})//.catch(e) {return console.log(e)}
	};
};



export const getSectionContentById = (id) => {
	console.log(id,228)
	return(dispatch) => {
		const res = axios.get(`http://localhost:8000/get/section/content/${id}`)
		.then((res) => res.data.length !== 0 && dispatch(getChapterContentByID(res.data)))
		
		
	}

}