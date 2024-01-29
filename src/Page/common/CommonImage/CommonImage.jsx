import './commonImage.scss'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const CommonIamge = ({image, text}) => {
    return (
        <div className='container_card'>
            <Card>
                    <CardMedia
                    component="img"
                    width="300"
                    height="400"
                    image={image}
                    />
                <CardContent sx={{ backgroundColor: '#000000' }}>
                    <Typography sx={{ color: 'white' , fontSize : '20px' }} align="center">
                        {text}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
export default CommonIamge;