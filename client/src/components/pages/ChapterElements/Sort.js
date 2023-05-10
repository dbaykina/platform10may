const Sort = () => {

    const [sort, setSort] = useState('');

    return (
        <>
        
        <label htmlFor="sorting">Сортировка</label>
        <input
              id="sorting"
              name="sorting"
              type="number"
              value="sort"

         />
        </>
    )
}

export default Sort;