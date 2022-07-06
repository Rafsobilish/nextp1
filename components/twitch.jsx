import Link from 'next/link'
import styles from '../styles/Shapka.module.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TextField from '@mui/material/TextField';
import InboxIcon from '@mui/icons-material/Inbox';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import DiamondIcon from '@mui/icons-material/Diamond';
function Twitch() {
    return(
        <div div className={styles.papa}>
            <div className={styles.Left}>
             <div className={styles.logo}>
    <img src ="https://pngicon.ru/file/uploads/Twitch.png" />       
            </div>
            <div className={styles.words}>
                <Link href='/#'>
                    <a>
                        Отслеживаемое
                    </a>
                </Link>
                </div>
                <div className={styles.wards}>
                <Link href='/#'>
                    <a>
                        Просмотр
                    </a>
                </Link>
            </div>
            <div className={styles.icon}>
                <MoreVertIcon fontSize='medium'/>
             </div>
            </div>
            <div className={styles.centr}>
                <TextField id="outlined-basic" label="" variant="outlined" size='small'  text="поиск" placeholder='поиск' color='secondary'/>
                </div>
            <div className={styles.right}>
                    <div className={styles.Inbox}>
                        <InboxIcon />
                    </div>
                    <div>
                        <ChatBubbleOutlineIcon />
                    </div>
                    <div className={styles.Bits}>
                        <DiamondIcon />
                         <p>Купить Bits</p>
                    </div>
                    <div className={styles.Photo}>
                        <img src = 'https://avatars.mds.yandex.net/i?id=1d2e8e534cb51f55f1b571cec0e570d2-5225975-images-thumbs&n=13' />
                    </div>
            </div>
        </div>
)
}
export default Twitch 