import Student from './Student';
import StudentDetails from './Student';
import About from './Student'

const Reducer =(state="",action)=>{
    switch(action){
        case StudentDetails : return <Student/>
        case About: return <Student/>
        default : return <Student/>
    }
}

export default Reducer;