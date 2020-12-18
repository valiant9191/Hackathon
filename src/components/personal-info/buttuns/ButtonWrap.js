import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './ButtonsWrap.css'

const ButtonWrap = ({ action }) => {
  return (
    <div className="btn_wrap">
       <button
      onClick={() => action()}
       >
       HIRE
    </button>
      <Link to="/artists">
        <Button variant="contained" color="primary">
          BACK
    </Button>
      </Link>

    </div>
  )
}

export default ButtonWrap;