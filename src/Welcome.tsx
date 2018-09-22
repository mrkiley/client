import * as React from 'react';

class Welcome extends React.Component {
    public render() {
        return (
            <div className="welcomeBG">
                <div className="welcome">
                    {/* TODO - Switch from an image to styled text */}
                    <img src="img/rsvLogo-new.svg" alt="ReadySetVote.org" className="welcome-logo" />
                    <p>The easiest, fastest way to decide how you will vote. Create a personalized ballot guide and view recommendations from sources that you trust. You’ll be ready to vote quickly, easily and with total confidence.</p>
                    <h2>This confidential tool is provided by the Municipal League, a nonpartisan, volunteer organization that has been promoting good government for over 100 years in King County.</h2>
                    <a href="address/" className="btn-start">Get Started</a>
                    <a href="es/start" className="spanish-start">Disponible en español</a>
                    <a href="cn/start" className="spanish-start">中文</a>
                </div>
            </div>
        );
    }
}

export default Welcome;
