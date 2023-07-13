import { Link } from 'react-router-dom'
import './Cards.css'

export function Cards() {
    return (
        <div className='iconos'>
            <Link to= "#" className="microphone">
                <img src="/microphone.svg" alt="microphone" />
                <p>Charts</p>
            </Link>
            <Link to= "#" className="album">
                <img src="albums.svg" alt="albums" />
                <p>Albums</p>
            </Link>
            <Link to="#" className="more">
                <img src="/more.svg" alt="more" />
                <p>More</p>
            </Link>
        </div>
    )
}