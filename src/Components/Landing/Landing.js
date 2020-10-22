import React from 'react';
import drumImage from '../../assets/cajon-dummy-image.png';
import './Landing.scss';

export default props => (
    <main>
        <section className='intro-section'>
            <div>
                <h1>Text Here</h1>
                <p>And even more text here</p>
            </div>
            <img src={drumImage} alt='Cajon Drum' className='landing-image'/>
        </section>
        <section className='selling-points-section'>
            <h1>What we offer</h1>
            <section className='selling-points-flex'>
                <div className='selling-point'></div>
                <div className='selling-point'></div>
                <div className='selling-point'></div>
            </section>
        </section>
    </main>
)