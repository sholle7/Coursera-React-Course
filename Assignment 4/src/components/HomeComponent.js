import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform } from 'react-animation-components';


function RenderCard( props ) {

    if (props.isLoading) {
        return (
            <Loading />
        );
    }
    else if (props.errMess) {
        return (
            <h4>{props.errMess}</h4>
        );
    }
    else{
        return(
            <FadeTransform in transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
            }}>
                <Card>
                    <CardImg width="100%" src={baseUrl + props.item.image} alt={props.item.name} />                
                    <CardBody>
                        <CardTitle> {props.item.name} </CardTitle>      
                        {props.item.designation ? <CardSubtitle>{props.item.designation}</CardSubtitle> : null }      
                        <CardText>{props.item.description}</CardText>
                    </CardBody>
        
                </Card>
            </FadeTransform>
        );

    }
}



function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start">

                <div className="col-12 col-md m-1">
                    <RenderCard
                        item={props.dish}
                        isLoading={props.dishesLoading}
                        errMess={props.dishErrMess}
                    />
                </div>

                <div className="col-12 col-md m-1">
                    <RenderCard 
                        item={props.promotion} 
                        isLoading={props.promoLoading}
                        errMess={props.promoErrMess} 
                    />
                </div>

                <div className="col-12 col-md m-1">
                    <RenderCard 
                        item={props.leader} 
                        isLoading={props.leaderLoading}
                        errMess={props.leaderErrMess} 
                    />
                </div>

            </div>
        </div>
    );
}

export default Home;