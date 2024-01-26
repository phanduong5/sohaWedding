import Cinemactor from '../../assets/img/chupanhCuoi/chupanhcuoi1.jpg'
import './commonImage.scss'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CommonIamge = (image, text) => {
    return (
        <div className='container_card'>
            <Card sx={{ minWidth: 275 }} className='Card'>
                <CardContent>
                    <img src={Cinemactor} alt="" />
                </CardContent>
            </Card>
        </div>
    )
}
export default CommonIamge;