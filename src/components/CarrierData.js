import React from 'react'
import Container from '@material-ui/core/Container';
import ChartItem from './ChartItem'
import PieChart from './PieChart'
import {makeStyles} from '@material-ui/core/styles';
import {BREAKPOINTS} from './Styles'

const useStyles = makeStyles({
    carrierInfo: {
        backgroundColor: '#ebeeef',
        // display: 'grid',
        // gridTemplateColumns: '1fr 1fr',
        margin: '1rem',
        [BREAKPOINTS.down('md')]: {
            display: 'block',
        },
    }
  });

export default function CarrierData(props) {
    const classes = useStyles();
    //broker
    const brokerPremium = props.brokerdata.premiumRange.map(division => (
        division.premium
    ))
    const brokerPremiumTitle = props.brokerdata.premiumRange.map(division => (
        division.title
    ))
    const brokerDivisionData = props.brokerdata.brokerDivision.map(division => (
        division.proportion
    ))
    const brokerDivisionTitle = props.brokerdata.brokerDivision.map(division => (
        division.title
    ))
    const brokerIndustryData = props.brokerdata.industries.map(industry => (
        industry.proportion
    ))
    const brokerIndustryTitle = props.brokerdata.industries.map(industry => (
        industry.title
    ))
    //carieer
    const divisionData = props.carrierdata.brokerDivision.map(division => (
        division.proportion
    ))
    const productData = props.carrierdata.products.map(industry => (
        industry.proportion
    ))
    const industryData = props.carrierdata.industries.map(division => (
        division.proportion
    ))
    const divisionTitle = props.carrierdata.brokerDivision.map(division => (
        division.title
    ))
    const productTitle = props.carrierdata.products.map(industry => (
        industry.title
    ))
    const industryTitle = props.carrierdata.industries.map(division => (
        division.title
    ))

    return (
        <div className={classes.carrierInfo}>
            broker premium
            <div>
                <PieChart data={brokerPremium} title={brokerPremiumTitle}/>
            </div>
            <div>
                broker industries  - chore
                <PieChart data={brokerIndustryData} title={brokerIndustryTitle}/>
            </div>
            <div>
                broker divisions
                <PieChart data={brokerDivisionData} title={brokerDivisionTitle}/>
            </div>

            carrier division
            <div>
                {props.carrierdata.brokerDivision.map(division => (
                    <ChartItem title={division.title} premium={division.premium} proportion={division.proportion}/>
                ))}
                <PieChart data={divisionData} title={divisionTitle}/>
            </div>
            carrier industries
            <div>
                {props.carrierdata.industries.map(industry => (
                    <ChartItem title={industry.title} premium={industry.premium} proportion={industry.proportion}/>
                ))}
                <PieChart data={industryData} title={industryTitle}/>
            </div>
            carrier products
            <div>
                {props.carrierdata.products.map(product => (
                    <ChartItem title={product.title} premium={product.premium} proportion={product.proportion}/>
                ))}
                <PieChart data={productData} title={productTitle}/>
            </div>
        </div>
    )
}
