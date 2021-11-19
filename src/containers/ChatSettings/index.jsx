import React, { useState } from 'react';

import { ChatSettings } from 'components';

const ChatSettingsContainer = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };

    return <ChatSettings togglePopup={togglePopup} isPopupVisible={isPopupVisible} />;
};

export default ChatSettingsContainer;
