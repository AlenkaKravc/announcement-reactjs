import React from 'react';

import styles from './styles.scss';

export class Footer extends React.Component {


    render() {
        return <div className={styles.footer}>
            <div className={styles.footerLine}>
                <div className={styles.footerText}>
                    ©2018 All rights reserved
                </div>
            </div>
        </div>
    }
}