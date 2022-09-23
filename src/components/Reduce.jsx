import About from './Student';


const Reducer = (state="",action) =>{
    switch(action){
     case About : return <Student/>
     default : return state
    }
}

export default Reducer;