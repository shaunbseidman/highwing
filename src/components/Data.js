import React, {useState} from 'react'
import DoughnutChart from './DoughnutChart'
import {makeStyles} from '@material-ui/core/styles';
import {BREAKPOINTS} from './Styles'
import  '../styles/data.scss';
import FilterButtons from './FilterButtons'

const useStyles = makeStyles({
    carrierInfo: {
        backgroundColor: '#EAEEEF',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        marginLeft: '1rem',
        marginRight: '1rem',
        marginBottom: '1rem',
        [BREAKPOINTS.down('md')]: {
            display: 'block',
        },
    },
    clickedFilterButton:{
        backgroundColor: '#00E0C2',
        fontSize: '12px',
        fontWeight: '500',
        letterSpacing: '0.24px',
        lineHeight: '15px',
        textTransform: 'none',
        marginLeft: '35px',
        marginRight: '-25px',
        marginTop: '4rem',
        marginBottom: '3.2rem',
        [BREAKPOINTS.down('sm')]: {
            marginLeft: '.2rem',
            marginRight: '.2rem',
            marginBottom: '.3rem',
            marginTop: '.3rem'
        },
    },
    filterButton: {
        fontSize: '12px',
        fontWeight: '500',
        letterSpacing: '0.24px',
        lineHeight: '15px',
        textTransform: 'none',
        marginLeft: '35px',
        marginRight: '-25px',
        marginTop: '4rem',
        color: "#6D7777",
        marginBottom: '3.2rem',
        "&:active": {
            backgroundColor: "rgb(99, 217, 193)"
        },
        [BREAKPOINTS.down('sm')]: {
            marginLeft: '.2rem',
            marginRight: '.2rem',
            marginBottom: '.3rem',
            marginTop: '.3rem'
        },
    }
  });

export default function Data(props) {
    const classes = useStyles();

    //broker props
    const brokerPremium = []
    const brokerPremiumTitle = []
    for(const premium of props.brokerdata.premiumRange) {
        brokerPremium.push(premium.proportion)
        brokerPremiumTitle.push(premium.title)
    }

    const brokerMarketData = []
    const brokerMarketTitle = []
    for(const division of props.brokerdata.brokerDivision) {
        brokerMarketData.push(division.proportion)
        brokerMarketTitle.push(division.title)
    }

    const brokerProductData = []
    const brokerProductTitle = []
    for(const product of props.brokerdata.products) {
        brokerProductData.push(product.proportion)
        brokerProductTitle.push(product.title)
    }

    const brokerIndustryData = []
    const brokerIndustryTitle = []
    for(const industry of props.brokerdata.industries) {
        brokerIndustryData.push(industry.proportion)
        brokerIndustryTitle.push(industry.title)
    }

    //carieer props
    const carrierPremium = []
    const carrierPremiumTitle = []
    for(const premium of props.carrierdata.premiumRange) {
        carrierPremium.push(premium.proportion)
        carrierPremiumTitle.push(premium.title)
    }

    const carrierMakertData = []
    const carrierMarketTitle = []
    for(const division of props.carrierdata.brokerDivision) {
        carrierMakertData.push(division.proportion)
        carrierMarketTitle.push(division.title)
    }

    const carrierProductData = []
    const carrierProductTitle = []
    for(const product of props.carrierdata.products) {
        carrierProductData.push(product.proportion)
        carrierProductTitle.push(product.title)
    }

    const carrierIndustryData = []
    const carrierIndustryTitle = []
    for(const industry of props.carrierdata.industries) {
        carrierIndustryData.push(industry.proportion)
        carrierIndustryTitle.push(industry.title)
    }

    const [isPremium, setIsPremium] = useState(false);
    const [isIndustry, setIsIndustry] = useState(false);
    const [isMarket, setIsMarkets] = useState(false);
    const [isProducts, setIsProdcuts] = useState(false);
    const togglePremium = () => setIsPremium(!isPremium);
    const toggleIndustry = () => setIsIndustry(!isIndustry);
    const toggleMarket = () => setIsMarkets(!isMarket);
    const toggleProducts = () => setIsProdcuts(!isProducts);

    return (
        <React.Fragment>
            <div className="buttonFilters">
                <FilterButtons
                    onClick={togglePremium}
                    className={isPremium ? classes.clickedFilterButton: classes.filterButton}
                    variant="outlined"
                    title='Premium Range'
                />
                <FilterButtons
                    onClick={toggleMarket}
                    className={isMarket ? classes.clickedFilterButton: classes.filterButton}
                    variant="outlined"
                    title='Markets'
                />
                <FilterButtons
                    onClick={toggleIndustry}
                    className={isIndustry ? classes.clickedFilterButton: classes.filterButton}
                    variant="outlined"
                    title='Industries'
                />
                <FilterButtons
                    onClick={toggleProducts}
                    className={isProducts ? classes.clickedFilterButton: classes.filterButton}
                    variant="outlined"
                    title='Products'
                />
            </div>
            <div className={classes.carrierInfo}>
                <div className={classes.broker}>
                    <h1 className="brokerTitle">Broker Book</h1>
                    {isPremium &&
                        <div className="pieData">
                            <DoughnutChart data={brokerPremium} title={brokerPremiumTitle} chartTitle='Broker Premium'/>
                        </div>
                    }
                    {isMarket &&
                        <div className="pieData">
                            <DoughnutChart data={brokerMarketData} title={brokerMarketTitle} chartTitle='Broker Markets'/>
                        </div>
                    }
                    {isIndustry &&
                        <div className="pieData">
                            <DoughnutChart data={brokerIndustryData} title={brokerIndustryTitle} chartTitle='Broker Industries'/>
                        </div>
                    }
                    {isProducts &&
                        <div className="pieData">
                            <DoughnutChart data={brokerProductData} title={brokerProductTitle} chartTitle='Broker Products'/>
                        </div>
                    }
                </div>
                <div className={classes.carrier}>
                    <h1 className="carrierTitle">Carrier Placement</h1>
                    {isPremium &&
                        <div className="pieData">
                            <DoughnutChart data={carrierPremium} title={carrierPremiumTitle} chartTitle='Carrier Premium'/>
                        </div>
                    }
                    {isMarket &&
                        <div className="pieData">
                            <DoughnutChart data={carrierMakertData} title={carrierMarketTitle} chartTitle='Carrier Markets'/>
                        </div>
                    }
                    {isIndustry &&
                        <div className="pieData">
                            <DoughnutChart data={carrierIndustryData} title={carrierIndustryTitle} chartTitle='Carrier Industries'/>
                        </div>
                    }
                    {isProducts &&
                        <div className="pieData">
                            <DoughnutChart data={carrierProductData} title={carrierProductTitle} chartTitle='Carrier Products'/>
                        </div>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}
