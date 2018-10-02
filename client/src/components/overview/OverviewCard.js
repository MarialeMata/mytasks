import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Pluralize from 'react-pluralize';
import { 
  Button,
  Badge,
  Col, 
  Card, 
  CardTitle, 
  CardText,
  CardSubtitle, 
  CardBody,
  CardLink
} from 'reactstrap';
import OverviewList from './OverviewList';

const OverviewCard = ({ itemCount, source, items, itemType, loading }) => {  
  return (
    <Col md={{ size: 6 }}>
      <Card body outline className="p-3 mb-3">

        <CardTitle className="text-center text-capitalize mt-3">
          <strong>{itemType+"s"}</strong>
        </CardTitle>

        <CardSubtitle className="text-center p-3">
          <Badge className="p-2" color={itemCount === 0 ? "secondary" : "info"}>
            <Pluralize singular={itemType} count={itemCount} />
          </Badge>
        </CardSubtitle>

        <CardBody>
          { 
            itemCount === 0 
            ? (
              <div className="text-center mt-4 mb-4">
                <Button 
                  to={"/"+itemType+"s/new"} 
                  tag={Link} 
                  className="mx-auto text-center text-capitalize">
                  <i className="fas fa-plus"></i> {"Add "+itemType}
                </Button>
              </div>
              ) 
            : (
            <div>
              <CardText className="text-center">
                {
                  itemType === 'project' 
                    ? <i className="fas fa-eye fa-lg"></i>
                    : <i className="fas fa-clock fa-lg"></i>
                }
                <br/>
                {itemType === 'project' ? "Recently viewed:" : "Due soon:"}
              </CardText>

              <OverviewList items={items} 
                linkText={"/"+itemType+"s/"} 
                source={source} 
                itemType={itemType}
                itemIconClassName={itemType === 'project' ? "eye " : "clock "}
                dateType={itemType === 'project' ? "lastSeenAt" : "deadline"}
                itemText={itemType === 'project' ? " Last accessed: " : " Due "}
                loading={loading}
              />

              {
                items.length === 0 && itemType === 'task' 
                  ? <div className="text-center border">No items to show</div> 
                  : null
              }
              
              <div className="text-center mt-3">
                <CardLink 
                  to={itemType === 'project' ? "/projects" : "tasks"} 
                  tag={Link}>
                    {itemType === 'project' ? "All Projects" : "All Tasks"}
                </CardLink>
              </div>

            </div>
            )
          }
        </CardBody>

      </Card>
    </Col>
  );
};

OverviewCard.propTypes = {  
  itemCount: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  source: PropTypes.string.isRequired,
  itemType: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
};

export default OverviewCard;