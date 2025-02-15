import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css";

export default function InfoBox({info}) {
    
    const HOT_URL = "https://media.istockphoto.com/id/1137759901/photo/summer-hot-weather-season-high-temperature-thermometer-with-city-view.jpg?s=612x612&w=is&k=20&c=BGUWvOZp-tqxGzKABRNgMbBQUeNeirukuJqfP9Bf324=";
    const COLD_URL ="https://media.istockphoto.com/id/868098786/photo/thermometer-on-snow-shows-low-temperatures-zero-low-temperatures-in-degrees-celsius-and.jpg?s=612x612&w=is&k=20&c=lsDd6JzAZdAsa28VyUzTBtXsjwakqOM0DTkMmEEP6Go=";
    const RAIN_URL ="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";

  return (
        <div className="infoBox">
            <Card style={{color: "blueviolet"}}
            sx={{ maxWidth: 345 }}>
      <CardMedia  
        sx={{ height: 140 }}
        image={
          info.humidity > 80 
          ? RAIN_URL
          : info.temp > 15 
          ? HOT_URL 
          : COLD_URL
        }
        title="green iguana"
      />
      <CardContent className='card'>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} 
          <br></br> {
          info.humidity > 80 
          ?  <ThunderstormIcon/>
          : info.temp > 15 
          ? <WbSunnyIcon/> 
          :  <AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" color="black" component={"span"} >
          <p>Temperature = {info.temp}&deg;C </p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>The weather can be described as <i>{info.weather} </i>and feels like = {info.feelslike} &deg;C</p>
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
}