import { Link } from 'react-router-dom'
import {deleteSection} from '../store/thunk/'
import {useDispatch, useSelector } from 'react-redux'

const ChapterItem = ({ item }) => {
	const dispatch = useDispatch();

	const { id, name, description } = item; 

	  
	


	return (
		<div className="chapter">
			<p>{name}</p>
			<span onClick={() =>  dispatch(deleteSection(id))}>x</span>
			<Link to={`/admin/edit/section/${item.id}`} id="link">
			<span>Редактировать</span>
			</Link>
		</div>
	);
};

export default ChapterItem;
