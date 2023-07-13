import './Cards.css'

export function Cards() {
    return (
        <div className='iconos'>
            <a href= "#" className="microphone">
                <img src="/microphone.svg" alt="microphone" />
                <p>Charts</p>
            </a>
            <a href= "#" className="album">
                <img src="albums.svg" alt="albums" />
                <p>Albums</p>
            </a>
            <a href="#" className="more">
                <img src="/more.svg" alt="more" />
                <p>More</p>
            </a>
        </div>
    )
}