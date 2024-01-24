const Settings = () => {
    return (
        <div className="settings">
            <div className="settings-wrapper">

                <div className="settings-header">
                    <button className="">Close</button>
                </div>

                <div className="settings-content">
                    <div className="settings__menu">
                        <ul>
                            <li className="settings__menu-item">
                                <div className="settings__menu-title">
                                    Mode
                                </div>
                            </li>
                            <li className="settings__menu-item">
                                <div className="settings__menu-title">
                                    Logout
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="settings-footer">

                </div>

            </div>
        </div>
    )
}

export default Settings