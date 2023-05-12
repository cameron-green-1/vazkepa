import React from 'react'
import styles from '../../../../styles/LearnMore.module.scss';
import Footer from '../../../../components/footer';
import ArrowButtons from '../../../../components/ArrowButtons';
import Sidebar from '../../../../components/sidebar'

export default function VazkepaReduced() {

    const [showPopup, setShowPopup] = React.useState(false)
    const [popupIndex, setPopupIndex] = React.useState(0);



    return (
        <div >

            <Sidebar
                navItems={[
                    {
                        title: 'BACK TO PATIENTS',
                        link: '/learn-more',
                    },
                    {
                        title: 'MEET KARIN',
                        link: '/learn-more/patients/Karin',
                    },
                    {
                        title: 'MEDICAL INFO',
                        link: '/learn-more/patients/Karin/Medical-Info',
                    },
                    {
                        title: 'SUBGROUP PRIOR PCI',
                        link: '/learn-more/patients/Karin/VazkepaReduced',
                    },
                ]}
            />


            <div className={` content`} style={{ height: '80%' }}>
                <h1>

                    <span className='blue'>VAZKEPA</span> REDUCED THE RISK OF MAJOR CV EVENTS<br />IN PATIENTS WITH <span style={{ fontWeight: '500' }}>PRIOR MI<sup style={{ fontSize: '15px', position: 'relative', top: '-10px' }}>1,2</sup></span>

                </h1>
                <h2 style={{ fontWeight: 500 }}>Prespecified and post hoc analysis of REDUCE-IT in patients with prior MI<sup style={{ fontSize: '15px', position: 'relative', top: '-5px' }}>1,2*</sup></h2>



                <div className={`${styles.mainComponentVazkRedu}`} >
                    <div className={styles.graph}>
                        <h2>Primary endpoint<sup style={{ fontSize: '15px', position: 'relative', top: '-1px' }}>1*,†</sup></h2>
                        <p>5-point MACE: a composite of CV death, nonfatal MI, nonfatal stroke, coronary revascularisation, or unstable angina requiring hospitalisation
                        </p>
                        <img src="\images\learn-more\David\David_Reduced_Graphic.svg" alt="" />
                        <span>
                            <table>
                                <tbody>
                                    <th>
                                        <tr><th style={{ fontWeight: '550' }}>No. at Risk:</th><th>{ }</th><th>{ }</th><th>{ }</th><th>{ }</th><th>{ }</th><th>{ }</th></tr>
                                        <tr><th>Placebo</th><th>1823</th><th>1757</th><th>1637</th><th>1404</th><th>1167</th><th>667</th></tr>
                                        <tr><th>VAZKEPA</th><th>1870</th><th>1812</th><th>1691</th><th>1440</th><th>1237</th><th>698</th></tr>
                                    </th>
                                </tbody>
                            </table>
                        </span>

                    </div>
                    <div className={styles.arrow}>
                        <img src="\images\learn-more\Karin\Karin_Reduced_Arrow.jpg" alt="" />
                    </div>
                </div>
                <div className={styles.bottomReducedRisk} >
                    <button
                        onClick={() => {
                            setShowPopup(true);
                            setPopupIndex(0);
                        }}
                    >
                        Total events
                        <img src="\images\Pop_up_button.png" alt="" />
                    </button>
                    <button onClick={() => {
                        setShowPopup(true);
                        setPopupIndex(1);
                    }}>
                        Safety in ACS subgroup
                        <img src="\images\Pop_up_button.png" alt="" />
                    </button>
                </div>
                <p style={{ position: 'relative', top: '3vh', left: '2.5vw', fontSize: '0.8rem', }}>
                    * REDUCE-IT was not powered for subgroup analyses.<br />† Time-to-event analysis. The incidence (N%) of primary events was 17.2% in the icosapent ethyl arm vs 22% in the placebo arm, over a median of 4.9 years.1
                </p>

                <ArrowButtons left />

                <Footer imgSrc='reference-5.2.3.3.png'
                    popupImgSrc={['/images/reference-5.2.3.1.png', '/images/reference-5.2.3.2.png']}
                    showPopup={showPopup}
                    setShowPopup={setShowPopup}
                    popupIndex={popupIndex}
                />
            </div>





        </div>


    )
}
