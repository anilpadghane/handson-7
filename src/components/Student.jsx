import React,{useState} from 'react'

let studentDetails = {
  Name:'',
  Age:'',
  Course:'',
  Batch:''
}
const About = () => {
  const [store,setStore] = useState(studentDetails);
  const [data,setData] = useState([]);
  const [edit,setEdit] = useState(false);
  const [hide,setHide] = useState(false);

  const editHandler = (e) => {
    const value = e.target.value
    setStore(store =>({...store,[e.target.name] : value}))
  }
  const addData = () => {
    if(edit){
      const updateData = data.map((row)=>row.id=== store.id ? store:row);
      setData(updateData);
      setEdit(false);
      setStore(studentDetails)
      setHide(!hide)
    }
    else{
      let listItems = data;
       const item = {
        id:data.length,
        ...store
       }
       listItems = [...data,item];
       setData(listItems);
       clearData();
       setHide(!hide)
    }
  }
  const clearData = () => {
    setStore(studentDetails);
  }
  const editRow = (row) => {
    setStore(row);
    setEdit(true);
    setHide(!hide)
  }
  const deleteRow = (id) =>{
    const filtered = data.filter(item=>item.id !== id);
    console.log(filtered);
    setData(filtered);
    }
  return (
    <>
    {hide ? null : <><div>
      
        <button onClick={()=>{setHide(!hide)}}>Add New Student</button>
        <caption>Student Details</caption>
      </div>
      <div className='tab'>
        <table className="table caption-top">
          <thead>
            <tr >
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Course</th>
              <th scope="col">Batch</th>
              <th scope="col">Change</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
          {data && data.map((row,i) =>
            <tr>
              <th scope="row">{row.Name}</th>
              <td>{row.Age}</td>
              <td>{row.Course}</td>
              <td>{row.Batch}</td>
              <td><button onClick={()=>{editRow(row)}} className="btn1">Edit</button></td>
              <td><button onClick={()=>{deleteRow(row.id)}} className="btn2">Delete</button></td>
            </tr>
          )}
          </tbody>
        </table>
      </div></> }
      {hide ? <div>
        <div className='con'>
          <input name='Name' value={store.Name} label='Name' placeholder='Name' onChange={editHandler}  className='input'/>
          <input type={'number'} name='Age' value={store.Age} label='Age' placeholder='Age' onChange={editHandler}  className='input'/>
          <input name='Course' value={store.Course} label='course' placeholder='Course' onChange={editHandler}  className='input' />
          <input name='Batch' value={store.Batch} label='Batch' placeholder='Month' onChange={editHandler}  className='input'/>
        </div>
        <div>
          <button onClick={addData} className="btn btn-success button">{edit ? 'Update' : 'submit'}</button>
          <button onClick={clearData} className="btn btn-danger button">Clear</button>
        </div>
      </div> : null}
    </>

  )
}


export default About