import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ContentItem from '../ChapterItem';
import { nanoid } from 'nanoid';

import {useDispatch, useSelector } from 'react-redux'
import { getSections } from '../../store/thunk';
import ChapterItem from '../ChapterItem';


//import axios from 'axios'

const TableOfChapters = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();



	/*

	получение с бэк глав перенести в санк

    const getAllChapters = async () =>{

    const response = await axios.get('http://localhost:8000/sections')
	....
 

	из санка отправить в экшн из экшн в редьюсер там обновление стора. 
    dispatch()

    }

    //при закгрузке стр  получение секций 

   

*/

useEffect(()=>{
	
	dispatch(getSections())
}, [])



const { chapters } = useSelector((state) => ({
    chapters: state.ChaptersReducer.chapters,
  }));
 
  console.log(chapters, 99)

const handleClick = () => {
	navigate('/admin/add/section')

}
	return (
		<div>
			<button onClick={handleClick}>Добавить главу</button>
			<h1>Оглавление</h1>
			{chapters && chapters.map((c) => (
				<ChapterItem key={c.id} item={c} />
			)
			)}
			
			
		</div>
	);
};

export default TableOfChapters;
