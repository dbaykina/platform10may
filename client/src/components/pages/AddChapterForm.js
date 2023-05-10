import GoBackNavElement from '../GoBackNavElement';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux'
import { addChapter, getSectionById} from '../../store/thunk';


const AddChapterForm = () => {
    const {id} = useParams('id');

    
    const dispatch = useDispatch();

    
const [editMode, setEditMode] = useState('')

    
    const { editingChapter } = useSelector((state) => ({
		editingChapter: state.ChaptersReducer.editingChapter,
      }));
      console.log(editingChapter,12)
    //const { name, description, sort} = editingChapter;


    useEffect(() =>{
       
        if(id){
            if(Object.keys(editingChapter).length === 0 || editingChapter.id != id){
                dispatch(getSectionById(id))
            }else{
                console.log(editingChapter, 777)
                setFormData(editingChapter)
            }
        }
    }, [editingChapter])
    




const initForm = {
    
    name:'',
    description:'',
    sort:''


}


const [formData, setFormData] = useState(initForm) 



    const navigate = useNavigate();
    


    const handleSubmit = (e) => {

   
        e.preventDefault()
        dispatch(addChapter(formData))
        navigate('/admin/sections/')
       
   

    }

    const handleChange = (e) => {
   
        const name = e.target.name;
        const value = e.target.value;
       
        setFormData((prevState) => ({
            ...prevState, 
            [name]:value
        }))
    }
    return (
        <>
        <GoBackNavElement/>
       {id ? <h2>Редактировать главу</h2> : <h2>Добавить новую главу</h2>}
        
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Название</label>
                        <input
                            id="name"
                            type='text'
                            name="name"
                            required={true}
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <label htmlFor="description">Описание</label>
                        <input
                            id="description"
                            type='text'
                            name="description"
                            required={true}
                            value={formData.description}
                            onChange={handleChange}
                        />
                         <label htmlFor="sort">Сортировка</label>
                        <input
                            id="sort"
                            type='text'
                            name="sort"
                            value={formData.sort}
                            onChange={handleChange}
                        />
                        <button>Добавить</button>
        </form>
</>
    )


}

export default AddChapterForm;