

import styles from './Header.module.scss'

type props = {
    windowSize: number;
}
const Header: React.FC<props> = ({windowSize}) => {
    

    function getTitle() {
        if (windowSize >= 1024) {
            return 'Desktop'
        } else if (windowSize > 720 && windowSize < 1024) {
            return 'Tablet'
        } else {
            return 'Mobile'
        }
    }

    return <div className={styles.root}>

        <label className={styles.title}>{getTitle()}</label>

    </div>
}

export default Header