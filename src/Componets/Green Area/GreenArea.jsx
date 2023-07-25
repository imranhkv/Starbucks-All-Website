import React, { useContext } from 'react';
import { GlobalContext } from '../ContentAPI/Context';
import './GreenArea.css';
import { Link } from 'react-router-dom';

function GreenArea() {
    // context api
    const { green, setGreen, orders } = useContext(GlobalContext);
    // son
    // seçili mağazanın qalması
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setGreen(selectedValue);
    };
    // son

    // əgər səbətdə məhsul varsa icon içinde rəqəm görsənir yoxdusa sadəcə icon
    const renderCartIcon = () => {
        if (orders.length > 0) {
            return (
                <>
                    <i id='active-icon' className="fa-sharp fa-solid fa-bag-shopping"><span>{orders.length}</span></i>

                </>
            );
        } else {
            return (
                <i className="fa-sharp fa-solid fa-bag-shopping"></i>
            );
        }
    };
    // son

    return (
        <div className='green-area'>
            <div className="container">
                <div className="green-area-content">
                    <div className="green-area-content-left">
                        <label>
                            <h4>For item availability</h4>
                            <select value={green} onChange={handleSelectChange} placeholder='Choose a store'>
                                <option>Choose a store</option>
                                <option value="a">28 Mall </option>
                                <option value="b">Port Baku</option>
                                <option value="c">Globus Center</option>
                                <option value="d">Ganjlik Mall</option>
                                <option value="e">Park Bulvar</option>
                            </select>
                        </label>
                    </div>
                    <div className="green-area-content-right">
                        <Link to='/menu/cart'>
                            {renderCartIcon()}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GreenArea;
