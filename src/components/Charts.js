import React, { Component, Fragment } from 'react'
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import BrokerTitle from './BrokerTitle'
import CarrierData from './CarrierData'

const CHART_QUERY = gql`
query ChartQuery {
    mostRecentSnapshot {
        year
        broker {
            name
            description
        }
        carrier {
            name
        }
        brokerSlice {
            premiumRange {
              title
              premium
              proportion
            }
            products {
              title,
              premium
              proportion
            }
            industries {
              title
              premium
              proportion
            }
            brokerDivision {
              title
              premium
              proportion
            }
          }
        carrierSlice {
            premiumRange {
                title
                premium
                proportion
              }
            products {
                title
                premium
                proportion
            }
            industries {
                title
                premium
                proportion
            }
            brokerDivision {
                title
                premium
                proportion
            }
        }
    }
}`

export const BROKER_PREMIUM = 'premium';
export const BROKER_DIVISIONS = 'divisiouns';
export const BROKER_INDUSTRY = 'industry';
export const CARRIER_PREMIUM = 'premium';
export const CARRRIER_DIVISIONS = 'divisiouns';
export const CARRIER_INDUSTRY = 'industry';

export class Charts extends Component {
    render() {
        return (
            <Fragment>
                <Query query={CHART_QUERY}>
                    {
                        ({loading, error, data}) => {
                            if(loading) return <h3>Data loading...</h3>
                            if(error)console.log(error)
                            console.log(data)
                            return <Fragment>
                                <BrokerTitle title={data.mostRecentSnapshot.broker.name} description={data.mostRecentSnapshot.broker.description}/>
                                <CarrierData carrierdata={data.mostRecentSnapshot.carrierSlice} brokerdata={data.mostRecentSnapshot.brokerSlice}/>
                            </Fragment>
                        }
                    }
                </Query>
            </Fragment>
        )
    }
}

export default Charts
