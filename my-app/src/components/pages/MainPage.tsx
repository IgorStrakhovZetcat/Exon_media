import styles from './MainPage.module.scss'

type props = {
    windowSize: number;
}
const MainPage: React.FC<props> = ({windowSize}) => {
    const baseURL = 'https://s3-alpha-sig.figma.com/img/73bf/d2b4/688737d2a93135e36e9bac5b0eff4462?Expires=1663545600&Signature=bKWyJiwSz4xoSmPDN9WRD1eXgAXb00aIXri810Tvp5-x9ZGn5fIqqvKxO9Pu055mtdGel50oGATdx-t7ussXopEnHPNxOZsJwowXKJNiz3BEGygy7DsfkppfJUBmzkkuHTuyuEg6EoVd44AO6TBfKsKOma8~aLI0aNs2mmTdSITMpdRaOIx~LiooQj6xAxv7ZlPIWpDyeoAb9tbR5KaSup6AtY6g0bZpCPq6NElx-MrFTiSMxw3ZyPZQIFqXHh6NUa1RVZIzOq-oz4tIust6VK~VYsfdz0uu1wfIaijx1qkMbD2cmajGpTyeS6ZjTJ-KvgqnStNmV6JXZ-D4orxtbg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'


    return <div className={styles.root}>
        {/* <span className={styles.top10}>Top 10 Desktop</span> */}


        <div className={styles.product}>
            <div className={styles.frame_361}>
                <div className={styles.fire}>
                    {windowSize < 721 ? 'Best Choice': 'Best Value'}
                </div>

               
            </div>


            <div className={styles.numberProduct}>
                01
            </div>

            <img className={styles.images} src={baseURL} alt={baseURL}/>

            <div className={styles.frame_18078}>
                <div className={styles.frame_17908}>
                    <div className={styles.group_17625}>
                        <div className={styles.description}>
                            Sony X95J 85 Inch TV: BRAVIA XR Full Array LED 4K Ultra HD Smart
                        </div>
                    </div>

                    <div className={styles.titleCompany}>
                        SONY
                    </div>
                </div>



                <div className={styles.frameSale}>
                    <div className={styles.sale}>
                        50% OFF
                    </div>
                </div>

            </div>

            <div className={styles.review}>
                9.8
            </div>
            
            <div className={styles.frame_18079}>
                <div className={styles.frame_360}>
                    <div className={styles.viewDeal}>View Deal</div>
                </div>
                
            </div>

            <div className={styles.frame_17910}> 
                <div className={styles.amazon}>On Amazon</div>

                <div className={styles.showMore}>Show more</div>
            </div>

            
            

        </div>
    </div>
}

export default MainPage;