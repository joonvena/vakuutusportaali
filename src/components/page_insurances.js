import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';

class InsuranceIndex extends Component {

    render() {
        return (
            <Grid>
              
                <Jumbotron>
                    <h2>Tervetuloa vakuutuksiin</h2>
                    <p>Tervetuloa uuden ajan vakuutusyhtiöön</p>
                </Jumbotron>
             
            </Grid>
        );
    }

}

export default InsuranceIndex