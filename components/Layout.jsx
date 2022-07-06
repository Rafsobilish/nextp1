import Twitch from "./twitch"
import Foot from './Foot'
import styles from '../styles/Lauout.module.css'


const Layout = ({children}) => {
    return (
    <div className={styles.Layout}>
       <div><Twitch/></div>
        <div className={styles.content}>{children}</div>
    <div className={styles.Foot}><Foot/></div>
    </div>
    )
}
export default Layout