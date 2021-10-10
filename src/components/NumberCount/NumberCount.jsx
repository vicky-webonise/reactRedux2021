import { useSelector, useDispatch } from "react-redux";
import { decNumberActionCreator, incNumberActionCreator } from "../../actions/noCount.action";

const NumberCount = () => {

  const count = useSelector((state) => {
    console.log(state.changeNumber);
    return state.changeNumber;
  });

  const dispatch = useDispatch();

  return (
    <div className="App-header">
      <div>
        <h1>{count}</h1>
        <div className="input-group">
          <div className="input-group-prepend">
            <button
              type="button"
              onClick={() => dispatch(decNumberActionCreator())}
              className="btn btn-danger"
            >
              -
            </button>
          </div>
          <input
            type="text"
            value={count}
            className="form-control"
            placeholder="No"
            readOnly
          />
          <div className="input-group-apend">
            <button
              type="button"
              onClick={() => dispatch(incNumberActionCreator(5))}
              className="btn btn-danger"
            >
              +
            </button>
          </div>
        </div>
      </div>

    </div>
  );

}

export default NumberCount;
