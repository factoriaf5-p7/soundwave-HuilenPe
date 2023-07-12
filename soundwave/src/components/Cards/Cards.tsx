import './Cards.css'

export function Cards() {
    return (
        <div className='iconos'>

            <a className="microphone">
                <img src="/microphone.svg" alt="microphone" />
                <p>Charts</p>
            </a>

            <div className="album">
                <img src="albums.svg" alt="albums" />
                <p>Albums</p>
            </div>

            <div className="more">
                <img src="/more.svg" alt="more" />
                <p>More</p>
            </div>

        </div>
    )
}