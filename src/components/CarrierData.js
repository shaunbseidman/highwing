import React from 'react'
import Container from '@material-ui/core/Container';
import ChartItem from './ChartItem'
import PieChart from './PieChart'


export default function CarrierData(props) {
    return (
        <Container>
            {props.carrierdata.brokerDivision.map(division => (
                <ChartItem title={division.title} premium={division.premium} proportion={division.proportion}/>
            ))}
            <PieChart/>
            {props.carrierdata.industries.map(industry => (
                <ChartItem title={industry.title} premium={industry.premium} proportion={industry.proportion}/>
            ))}
            <PieChart/>
            {props.carrierdata.products.map(product => (
                <ChartItem title={product.title} premium={product.premium} proportion={product.proportion}/>
            ))}
            <PieChart/>
        </Container>
    )
}
