import './App.css'
import Button from './components/Button'
import Product from './components/Product'
import Tile from './components/Tile'
import bag1 from './assets/bag_1.png'
import bag2 from './assets/bag_2.png'
import bag3 from './assets/bag_3.png'
import bag4 from './assets/bag_4.png'
import brand from './assets/brand.png'
import our_story from './assets/our_story.png'


function App() {
    return (
        <>
            <nav>
                <Button text="to the collection"/>
                <Button text="shop all bags"/>
                <Button text="pre-orders" disabled/>
            </nav>
            <main>
                <Product label="Best seller" picture={bag1} name="The handy bag" price={400}/>
                <Product label="Best seller" picture={bag2} name="The stylish bag" price={400}/>
                <Product label="New collection" picture={bag3} name="The simple bag" price={400}/>
                <Product label="New collectio" picture={bag4} name="The trendy bag" price={400}/>
            </main>
            <footer>
                <Tile title="The brand" >
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim
                        excepturi.</p>
                </Tile>
                <Tile image={brand} imageDescription="The brand logo"/>
                <Tile image={our_story} imageDescription="Our Story"/>
                <Tile title="The brand">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim
                        excepturi.</p>
                </Tile>
            </footer>
        </>
    );
}

export default App;


