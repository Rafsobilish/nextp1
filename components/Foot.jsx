import styles from '../styles/Foot.module.css'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Foot = () => {
    const Channels = [
        {
            name: 'EgorSolo',
            category: 'Apex Huin9',
            viewers: 1920,
            img: 'https://avatars.mds.yandex.net/i?id=3fdbaac15943f749ff574d18e3dd6846-5235458-images-thumbs&n=13',
        },
        {
            name: 'Egoao',
            category: 'CsG0',
            viewers: 19202,
            img: 'https://avatars.mds.yandex.net/i?id=3fdbaac15943f749ff574d18e3dd6846-5235458-images-thumbs&n=13',
        },
        {
            name: 'EgorSs',
            category: 'DOTA3',
            viewers: 19203213,
            img: 'https://avatars.mds.yandex.net/i?id=3fdbaac15943f749ff574d18e3dd6846-5235458-images-thumbs&n=13',
        },
        {
            name: 'EgorSd',
            category: 'Minecraftblya',
            viewers: 11230,
            img: 'https://avatars.mds.yandex.net/i?id=3fdbaac15943f749ff574d18e3dd6846-5235458-images-thumbs&n=13',
        },
    ]
             const [IsOpen, setIsOpen] = useState(true);
             const togglePopup = () => {
                setIsOpen(prevIsOpen => !prevIsOpen)
                console.log (IsOpen)
             }
    return (
       <div className={IsOpen ? styles.Footopen : styles.Footclosed}>
            <div className={styles.Chanels}>
            {IsOpen? <div> 
                     <h2>Отслеживаемые каналы</h2> 
                </div> : null }
                <div className={IsOpen ? styles.ArrowLeft : styles.ArrowRight}>
                    {IsOpen ? <ArrowLeftIcon fontSize='large' color='primary' onClick={togglePopup} />
                        :
                            <ArrowRightIcon fontSize='large' color='primary' onClick={togglePopup} />}
                </div>
            </div>
            {IsOpen ? null : <div className={styles.heart}>  
                <FavoriteBorderIcon color='primary' fontSize='medium' />
                </div> }
            <div className={styles.Kanali}>
                {
                    Channels.map(Channel => (
                        <div key={Channel.viewers} className={IsOpen ? styles.Kanalys : styles.NeKanalys}>
                             <div>
                                <img src= {Channel.img}/>
                            </div>
                            {IsOpen ? <>
                             <div>
                               <h3>{Channel.name}</h3>
                               <p>{Channel.category}</p>
                            </div> 
                            <div>
                                <p className={styles.Viewers}>{Channel.viewers}</p>
                            </div> </> : null }
                        </div>
                    )
                    ) 
                }
            </div>
       </div> 
    )
}
export default Foot