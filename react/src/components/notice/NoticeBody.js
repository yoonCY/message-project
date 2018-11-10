import React from 'react'

import { Media, Nav } from 'reactstrap';

import styled from 'styled-components';

const NotifyBody = styled.div`
    font-size : 12px;
`

const NotifyMedia = styled( Media )`
    ${'' /* background : #e5eaf2; */}
    ${'' /* dddfe2 */}
    background : #edf2fa;
    padding : 6px;
    border-bottom : 1px solid #dddfe2;
`

const BodyImage = styled.img`
    border-radius: 50%;
    overflow: hidden;
`

export default () => {
    return (
        <NotifyBody>
            
            <NotifyMedia>
                    <Media body>
                        <Media>
                            알림 타이틀
                        </Media>
                        알림내용
                    </Media>
                </NotifyMedia>


            <NotifyMedia>
                    <Media body>
                        <Media>
                            알림 타이틀
                        </Media>
                        알림내용
                    </Media>
                </NotifyMedia>
            
        </NotifyBody>
    )
}
