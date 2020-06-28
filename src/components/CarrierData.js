import React, {useState} from 'react'
import Container from '@material-ui/core/Container';
import PieChart from './PieChart'
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {BREAKPOINTS} from './Styles'
import  '../styles/carrierdata.scss';

const useStyles = makeStyles({
    carrierInfo: {
        backgroundColor: '#ebeeef',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        marginLeft: '1rem',
        marginRight: '1rem',
        marginBottom: '1rem',
        [BREAKPOINTS.down('md')]: {
            display: 'block',
        },
    },
    filterButton: {
        marginLeft: '1rem',
        marginRight: '.3rem',
        marginTop: '4rem',
        marginBottom: '4rem',
        "&:active": {
            backgroundColor: "rgb(99, 217, 193)"
        },
        [BREAKPOINTS.down('sm')]: {
            marginLeft: '.2rem',
            marginRight: '.2rem',
            marginBottom: '.3rem',
            marginTop: '.3rem'
        },
    },
  });

export default function CarrierData(props) {
    const classes = useStyles();

    //broker props
    const brokerPremium = props.brokerdata.premiumRange.map(premiums => (
        premiums.proportion
    ))
    const brokerPremiumTitle = props.brokerdata.premiumRange.map(premiums => (
        premiums.title
    ))
    const brokerPremiumTotal = props.brokerdata.premiumRange.map(premiums => (
        premiums.premium
    ))
    const brokerMarketData = props.brokerdata.brokerDivision.map(division => (
        division.proportion
    ))
    const brokerMarketTitle = props.brokerdata.brokerDivision.map(division => (
        division.title
    ))
    const brokerProductData = props.brokerdata.products.map(product => (
        product.proportion
    ))
    const brokerProductTitle = props.brokerdata.products.map(product => (
        product.title
    ))
    const brokerIndustryData = props.brokerdata.industries.map(industry => (
        industry.proportion
    ))
    const brokerIndustryTitle = props.brokerdata.industries.map(industry => (
        industry.title
    ))

    //carieer props
    const premium = props.carrierdata.premiumRange.map(division => (
        division.proportion
    ))
    const premiumTitle = props.carrierdata.premiumRange.map(division => (
        division.title
    ))
    const marketData = props.carrierdata.brokerDivision.map(division => (
        division.proportion
    ))
    const marketTitle = props.carrierdata.brokerDivision.map(division => (
        division.title
    ))
    const productData = props.carrierdata.products.map(product => (
        product.proportion
    ))
    const productTitle = props.carrierdata.products.map(product => (
        product.title
    ))
    const industryData = props.carrierdata.industries.map(industry => (
        industry.proportion
    ))
    const industryTitle = props.carrierdata.industries.map(industry => (
        industry.title
    ))

    const [isPremium, setIsPremium] = useState(false);
    const [isIndustry, setIsIndustry] = useState(false);
    const [isMarket, setIsMarkets] = useState(false);
    const [isProducts, setIsProdcuts] = useState(false);
    const [isActive, setIsActive] = useState(false);

    return (
        <React.Fragment>
            <div className="buttonFilters">
                <Button
                onClick={() => {
                    setIsPremium(!isPremium)
                }}
                className={classes.filterButton}
                variant="outlined">
                Premium Range
                </Button>
                <Button
                    onClick={() => {
                        setIsMarkets(!isMarket)
                    }}
                    className={classes.filterButton}
                    variant="outlined">
                    Markets
                </Button>
                <Button
                    onClick={() => {
                        setIsIndustry(!isIndustry)
                    }}
                    className={classes.filterButton}
                    variant="outlined">
                    Industries
                </Button>
                <Button
                    onClick={() => {
                        setIsProdcuts(!isProducts)
                    }}
                    className={classes.filterButton}
                    variant="outlined">
                    Products
                </Button>
            </div>
            <div className={classes.carrierInfo}>
                <div className={classes.broker}>
                    <h1 className="brokerTitle">Broker Book</h1>
                    {isPremium &&
                        <div className="pieData">
                            <h3>Broker Premium</h3>
                            <PieChart data={brokerPremium} title={brokerPremiumTitle}/>
                            <span>Total Premiums</span>
                        </div>
                    }
                    {isMarket &&
                        <div className="pieData">
                            <h3>Broker Markets</h3>
                            <PieChart data={brokerMarketData} title={brokerMarketTitle}/>
                        </div>
                    }
                    {isIndustry &&
                        <div className="pieData">
                            <h3>Broker Industries</h3>
                            <PieChart data={brokerIndustryData} title={brokerIndustryTitle}/>
                        </div>
                    }
                    {isProducts &&
                        <div className="pieData">
                            <h3>Broker Products</h3>
                            <PieChart data={brokerProductData} title={brokerProductTitle}/>
                        </div>
                    }
                </div>
                <div className={classes.carrier}>
                    <h1 className="carrierTitle">Carrier Placement</h1>
                    {isPremium &&
                        <div className="pieData">
                            <h3>Carrier Premium</h3>
                            <PieChart data={premium} title={premiumTitle}/>
                            <span>Total Premiums</span>
                        </div>
                    }
                    {isMarket &&
                        <div className="pieData">
                            <h3>Carrier Markets</h3>
                            <PieChart data={marketData} title={marketTitle}/>
                        </div>
                    }
                    {isIndustry &&
                        <div className="pieData">
                            <h3>Carrier Industries</h3>
                            <PieChart data={industryData} title={industryTitle}/>
                        </div>
                    }
                    {isProducts &&
                        <div className="pieData">
                            <h3>Carrier Products</h3>
                            <PieChart data={productData} title={productTitle}/>
                        </div>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}
