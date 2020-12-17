import Button from '@material-ui/core/Button';
import './ButtonsWrap.css'

const ButtonWrap = () => {
  return (
    <div className="btn_wrap">
      <Button variant="contained" color="primary">
        HIRE
    </Button>
      <Button variant="contained" color="primary">
        BACK
    </Button>
    </div>
  )
}

export default ButtonWrap;