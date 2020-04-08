import React from 'react';
import Wrapper from './Wrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStepBackward, faStepForward, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import PlayerButton from './PlayerButton'

function PlayerButtons({
    playing,
    onPrevClick,
    onNextClick,
    onPauseClick,
    onPlayClick
}) {
    

    return (
        <Wrapper>
            <PlayerButton variant="outline-primary" onClick={onPrevClick}>
                <FontAwesomeIcon icon={faStepBackward}/>
            </PlayerButton>
            {(() => {
                if (playing) {
                    return (
                        <PlayerButton variant="outline-primary" onClick={onPauseClick}>
                            <FontAwesomeIcon icon={faPause}/>
                        </PlayerButton>
                    )
                } else {
                    return (
                        <PlayerButton variant="outline-primary" onClick={onPlayClick}>
                            <FontAwesomeIcon icon={faPlay}/>
                        </PlayerButton>
                    )
                }
            })()}
            <PlayerButton variant="outline-primary" onClick={onNextClick}>
                <FontAwesomeIcon icon={faStepForward}/>
            </PlayerButton>
        </Wrapper>
    )
}

export default PlayerButtons;