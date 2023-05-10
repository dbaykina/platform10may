import AddChapterForm from '../pages/AddChapterForm';
import SectionContent from '../pages/SectionContent';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Text from './ChapterElements/Text';
import Picture from './ChapterElements/Picture';
import Video from './ChapterElements/Video';
import PopUp from './ChapterElements/PopUp';
import Task from './ChapterElements/Task';
import { getSectionContentById } from '../../store/thunk';

const EditChapterForm = () => {
	const [ activeBlock, setActiveBlock ] = useState('');
	console.log(activeBlock, 9999);

	const { editingChapter, content } = useSelector((state) => ({
		editingChapter: state.ChaptersReducer.editingChapter,
		content: state.ChaptersReducer.content
	}));


	let { id } = useParams('id');

	const handleClick = (e) => {
		const val = e.target.id;
		
		setActiveBlock(val);
	};

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getSectionContentById(id));
	}, []);




	const renderContent = (с) => {
		console.log(с.content_type)
		if(с.content_type == 'text'){
			return <Text text={с}/>
		}
		/*switch (сс.content_type) {
			case 'text':
				return <Text text={cc.text_content} />;
			case 'video':
				return <Video video={cc.video} />;
			case 'textVideo':
				
				<div className="composite-block">
					<Text props={cc.text_content} />
					<Video props={cc.video} />
				</div>;
				break;
			case 'img':
				<Picture props={cc.img} />;
				break;
			case 'textPicture':
				<div className="composite-block">
					<Text props={cc.text_content} />
					<Picture props={cc.img} />
				</div>;	
				break;

		}*/
		
	}
	return (
		<div>
			<AddChapterForm />
			<div className="add-block">
				<div className="block-types" onClick={handleClick}>
					<h3>Добавить блок:</h3>
					<button id="text">Текст</button>
					<button id="textVideo">Текст и видео</button>
					<button id="textPicture">Текст и картинка</button>
					<button id="picture">Картинка</button>
					<button id="video">Видео</button>
					<button id="taskText">Задание:текст</button>
					<button id="taskTextPicture">Задание:текст и картинка</button>
					<button id="popUp">Всплывающее окно</button>
				</div>
				<div className="new-block">
					<form>
						<input type="hidden" name="section_id" value={id} />
						{activeBlock === 'text' && <Text />}
						{activeBlock === 'picture' && <Picture />}
						{activeBlock === 'video' && <Video />}

						{activeBlock === 'textVideo' && (
							<div className="composite-block">
								<input type="hidden" name="content_type" value="textVideo" />
								<Text />
								<Video />
							</div>
						)}
						{activeBlock === 'textPicture' && (
							<div className="composite-block">
								<input type="hidden" name="content_type" value="textPicture" />
								<Text />
								<Picture />
							</div>
						)}
						{activeBlock === 'taskText' && (
							<div className="composite-block">
								<Task />
								<Text />
							</div>
						)}
						{activeBlock === 'taskTextPicture' && (
							<div className="composite-block">
								<Task />
								<Text />
								<Picture />
							</div>
						)}
						<button>Добавить</button>
					</form>
				</div>
				<div className="chapter-content">
					{content.map((c) => (
						renderContent(c)
					))}
				</div>
			</div>
		</div>
	);
};

export default EditChapterForm;
