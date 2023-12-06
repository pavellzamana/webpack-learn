import {useState} from 'react';
import classes from './App.module.scss'
import {Link, Outlet} from "react-router-dom";
import PngAsset from '../assets/png_asset.png'
import JpgAsset from '../assets/jpg_asset.jpeg'
import SvgAsset from '../assets/svg_asset.svg'

const App = () => {
    const [count, setCount] = useState<number>(0);
    const platform = () => {
        if(__platform__ === 'mobile') {
            return <div>ISMOBILE</div>
        }
        if(__platform__ === 'desktop') {
            return <div>ISDESKTOP</div>
        }
    }


    return (
        <div data-testid='App'>
            <h1 data-testid='Platform'>{platform()}</h1>
            <img src={JpgAsset} width={40} height={40} alt='jpg-asset'/>
            <img src={PngAsset} width={40} height={40} alt='png-asset'/>
            <SvgAsset  width={100} style={{color: 'red'}} height={100}  />
            <Link to='/about'>about</Link>
            <br />
            <Link to='/shop'>shop</Link>
            <br />
            <button className={classes.container} onClick={() => setCount(prevState => prevState+1)}>+</button>
            <span className={classes.value}>{count}</span>
            <Outlet />
        </div>
    );
};

export default App;
