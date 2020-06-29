import React, {useState} from 'react'
import PieChart from './PieChart'
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {BREAKPOINTS} from './Styles'
import  '../styles/carrierdata.scss';

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

export default function CarrierData(props) {
    const classes = useStyles();

    //broker props
    const brokerPremium = props.brokerdata.premiumRange.map(premiums => (
        premiums.proportion
    ))
    const brokerPremiumTitle = props.brokerdata.premiumRange.map(premiums => (
        premiums.title
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
    const togglePremium = () => setIsPremium(!isPremium);
    const toggleMarket = () => setIsMarkets(!isMarket);
    const toggleIndustry = () => setIsIndustry(!isIndustry);
    const toggleProducts = () => setIsProdcuts(!isProducts);

    return (
        <React.Fragment>
            <div className="buttonFilters">
                <Button
                onClick={togglePremium}
                className={isPremium ? classes.clickedFilterButton: classes.filterButton}
                variant="outlined">
                Premium Range
                </Button>
                <Button
                    onClick={toggleMarket}
                    className={isMarket ? classes.clickedFilterButton: classes.filterButton}
                    variant="outlined">
                    Markets
                </Button>
                <Button
                    onClick={toggleIndustry}
                    className={isIndustry ? classes.clickedFilterButton: classes.filterButton}
                    variant="outlined">
                    Industries
                </Button>
                <Button
                    onClick={toggleProducts}
                    className={isProducts ? classes.clickedFilterButton: classes.filterButton}
                    variant="outlined">
                    Products
                </Button>
            </div>
            <div className={classes.carrierInfo}>
                <div className={classes.broker}>
                    <h1 className="brokerTitle">Broker Book</h1>
                    {isPremium &&
                        <div className="pieData">
                            <h3 className="categoryTitles">Broker Premium</h3>
                            <PieChart data={brokerPremium} title={brokerPremiumTitle}/>
                        </div>
                    }
                    {isMarket &&
                        <div className="pieData">
                            <h3 className="categoryTitles">Broker Markets</h3>
                            <PieChart data={brokerMarketData} title={brokerMarketTitle}/>
                        </div>
                    }
                    {isIndustry &&
                        <div className="pieData">
                            <h3 className="categoryTitles">Broker Industries</h3>
                            <PieChart data={brokerIndustryData} title={brokerIndustryTitle}/>
                        </div>
                    }
                    {isProducts &&
                        <div className="pieData">
                            <h3 className="categoryTitles">Broker Products</h3>
                            <PieChart data={brokerProductData} title={brokerProductTitle}/>
                        </div>
                    }
                </div>
                <div className={classes.carrier}>
                    <h1 className="carrierTitle">Carrier Placement</h1>
                    {isPremium &&
                        <div className="pieData">
                            <h3 className="categoryTitles">Carrier Premium</h3>
                            <PieChart data={premium} title={premiumTitle}/>
                        </div>
                    }
                    {isMarket &&
                        <div className="pieData">
                            <h3 className="categoryTitles">Carrier Markets</h3>
                            <PieChart data={marketData} title={marketTitle}/>
                        </div>
                    }
                    {isIndustry &&
                        <div className="pieData">
                            <h3 className="categoryTitles">Carrier Industries</h3>
                            <PieChart data={industryData} title={industryTitle}/>
                        </div>
                    }
                    {isProducts &&
                        <div className="pieData">
                            <h3 className="categoryTitles">Carrier Products</h3>
                            <PieChart data={productData} title={productTitle}/>
                        </div>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}
