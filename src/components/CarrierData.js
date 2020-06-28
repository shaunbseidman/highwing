import React from 'react'
import Container from '@material-ui/core/Container';
import ChartItem from './ChartItem'
import PieChart from './PieChart'

export default function CarrierData(props) {
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
        <Container>
            <div>
                {props.carrierdata.brokerDivision.map(division => (
                    <ChartItem title={division.title} premium={division.premium} proportion={division.proportion}/>
                ))}
                <PieChart data={divisionData} title={divisionTitle}/>
            </div>
            <div>
                {props.carrierdata.industries.map(industry => (
                    <ChartItem title={industry.title} premium={industry.premium} proportion={industry.proportion}/>
                ))}
                <PieChart data={industryData} title={industryTitle}/>
            </div>
            <div>
                {props.carrierdata.products.map(product => (
                    <ChartItem title={product.title} premium={product.premium} proportion={product.proportion}/>
                ))}
                <PieChart data={productData} title={productTitle}/>
            </div>
        </Container>
    )
}
