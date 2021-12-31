import React from 'react'
import Product from './Product'
import "./home.css"
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                {/* <img className='home__image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4K5ptmYCs3r9bfxF7_82_gu3qliVCmdj4qw&usqp=CAU"/> */}
                <img className='home__image' src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2016/08/1100x700_banner.jpg?fit=1100%2C600&ssl=1"/>
            </div>

            <div className='home__row'>
                <Product id="1" title="The Lean startup" price={29.99} image="https://www.montblanc.com/variants/images/46353151655575960/A/w2500.jpg" rating={5}/>
                <Product id="2" title="The Lean startup" price={10.50} image="https://www.montblanc.com/variants/images/46353151655575960/A/w2500.jpg" rating={1}/>
            </div>
            <div className='home__row'>
                <Product id="3" title="The Lean startup" price={100.00} image="https://www.montblanc.com/variants/images/46353151655575960/A/w2500.jpg" rating={3}/>
                <Product id="4" title="The Lean startup" price={269.69} image="https://www.montblanc.com/variants/images/46353151655575960/A/w2500.jpg" rating={2}/>
                <Product id="5" title="The Lean startup" price={109.99} image="https://www.montblanc.com/variants/images/46353151655575960/A/w2500.jpg" rating={4}/>
            </div>
            <div className='home__row'>
            <Product id="5" title="The Lean startup" price={109.99} image="https://www.montblanc.com/variants/images/46353151655575960/A/w2500.jpg" rating={4}/>
            </div>
        </div>
    )
}

export default Home
