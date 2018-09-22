import * as React from 'react';
import './css/ml.css';

interface ICandidateProps {
    data: ICandidate
}

interface ICandidate {
    candidateId: string,
    imgSrc: string,
    party: string,
    candidateName: string,
    candidateUrl: string,
    candidateUrlText: string,
    userNames: string,
    municipalLeagueRating: string
}

class Candidate extends React.Component<ICandidateProps> {
    public render() {
        return (
            <div className="seat" id={this.props.data.candidateId}>
                <img src={this.props.data.imgSrc} className="candidate-pic"/>
                <div className="seat-party">{this.props.data.party}</div>
                <div className="seat-name">{this.props.data.candidateName}</div>
                <a href={this.props.data.candidateUrl} target="_blank" className="seat-url">{this.props.data.candidateUrlText}</a>
                <div className="seat-divider"/>
                <div className="seat-endorsedBy">
                    <span className="seat-endorsedBy-head">Endorsed By:</span><br />
                    
                    <a className="endlink endlink" href='http://"rsEnd("endorserURL")' target='_blank'>{this.props.data.userNames}</a>
						<div className="endorserList">TODO ENDORSER LIST</div>
						</div>
					<div className="seat-verticalAlignment">
                    <div className="mlRating">
                        Municipal League Rating:
                        <br /><span>
                            <a>{this.props.data.municipalLeagueRating}</a></span>
                    </div>
						<button className="seat-select" id="seat-selectIDTODO">Pick</button>
					</div>
            </div>
        );
    }
}

export default Candidate;
