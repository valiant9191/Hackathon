import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './ButtonsWrap.css'

const ButtonWrap = () => {
  return (
    <div className="btn_wrap">
      <Button variant="contained" color="primary">
        HIRE
    </Button>
      <Link to="/artists">
        <Button variant="contained" color="primary">
          BACK
    </Button>
      </Link>

    </div>
  )
}

export default ButtonWrap;