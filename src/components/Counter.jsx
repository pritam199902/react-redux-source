import { useDispatch, useSelector } from 'react-redux';
import { handleAdd, handleRemove } from '../store/action/action'

function Counter() {
    const dispatch = useDispatch()
    const { count, loading } = useSelector(state => state.counter)

    const handleClickAdd = () => {
        dispatch(handleAdd(count + 1))
    }

    const handleClickRemove = () => {
        dispatch(handleRemove(count > 0 ? count - 1 : 0))
    }

    return (
        <div>
            <h1>Counter App (react:redux) </h1>
            <h1>{count}</h1>
            <small>{loading && "Processing..."}</small>
            <div>
                <button disabled={loading} className='btn' onClick={handleClickAdd} >+</button>
                <button disabled={loading} className='btn' onClick={handleClickRemove} >-</button>
            </div>
        </div>
    );
}

export default Counter;
