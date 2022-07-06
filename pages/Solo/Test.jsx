import { chainPropTypes } from "@mui/utils"
import axios from "axios"
import styles from "../../styles/Test.module.css"

export const getServerSideProps = async () => {
const res = await axios.get ('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
 return {props: {res: res.data}}
}
const Home = (props) => {
    return (
        <div className={styles.Test}>
        <div>
            {props.res.map ((c) => (
            <div key={c.id}>
            <div>
                {c.name}
            </div>
            <div>
                <img src={c.image}/>
            </div>
           </div> 
        ))}
        </div>
        <div>
            {props.res.map ((c) => (
                <div key= {c.id} className={styles.Testjpg}>
                    {c.max_supply}
                </div>
            ))}
        </div>
        </div>
    )
} 
export default Home