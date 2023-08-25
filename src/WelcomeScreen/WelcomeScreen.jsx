/* eslint-disable react/prop-types */
const WelcomeScreen = ({constUser}) => {

    return <>
        <section id="id_welcome" className="welcome">
            <div className="welcome__container">
                <p className="welcome__hdl hdl__big">Witaj,</p>
                <p className="welcome__hdl hdl__medium">
                    Podaj nam swoje imię, a stworzymy dla Ciebie konto rodzica. :)
                </p>
                <form>
                    <div className="welcome__form">
                        <label className="" htmlFor="welcomeName"></label>
                        <input
                            type="text"
                            className="welcome__input"
                            id="welcomeName"
                            placeholder="tutaj wpisz jak masz na imię"
                            onBlur ={(e) => constUser(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn welcome__btn">Gotowe!</button>
                </form>
            </div>
        </section>
    </>
}

export default WelcomeScreen