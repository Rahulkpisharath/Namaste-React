import {useRouteError} from 'react-router-dom';

const Error=()=>{
    const err = useRouteError();
    console.log(err);
    return (
        <div className='flex-center-aligned'>
            <h1>{err.status + ' ' + '!!!' }</h1>
            <h3>{err.data} </h3>
            <h4>
                <a href='/'>Home</a></h4>
        </div>
    )
}
export default Error;