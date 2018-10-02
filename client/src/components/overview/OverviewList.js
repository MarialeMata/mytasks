import React from 'react';
import { 
  ListGroup, 
  ListGroupItem, 
  ListGroupItemHeading, 
  ListGroupItemText 
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { CustomLoader } from '../common';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Badge } from 'reactstrap';

const OverviewList = ({ 
  items, 
  linkText, 
  source, 
  itemType, 
  itemIconClassName, 
  dateType, 
  itemText, 
  loading 
}) => {  
  if (loading) {
    return <CustomLoader />;
  } else {
    return (
      <ListGroup>
        {items.map(item => 
          <ListGroupItem 
            to={linkText+item.id+source} 
            tag={Link} 
            className="shadow-sm mb-3 bg-white project-item" 
            key={item.id}>
          
            <ListGroupItemHeading>
              {
                itemType === 'project' 
                ? (<strong>{item.name}</strong>) 
                : (<small><strong>{item.title}</strong></small>)
              }
              <span className="float-right">
                <small>
                  {
                    itemType === 'project' 
                    ? (
                      <h5 title={item.taskCount + " tasks"}>
                        <Badge color="info" className="p-2">
                          <i className="fas fa-tasks"></i> {item.taskCount}
                        </Badge>
                      </h5>
                      ) 
                    : ("In "+item.projectName) 
                  }
                </small>
              </span>
            </ListGroupItemHeading>

            <ListGroupItemText>
              <em><small>
                <i className={"fas fa-"+itemIconClassName}></i> {itemText}
                <Moment fromNow>{item[dateType]}</Moment>
              </small></em>
            </ListGroupItemText>
          </ListGroupItem>

        )}
      </ListGroup>
    );
  }

};

OverviewList.propTypes = {  
  items: PropTypes.array.isRequired,
  linkText: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  itemType: PropTypes.string.isRequired,
  itemIconClassName: PropTypes.string.isRequired,
  dateType: PropTypes.string.isRequired,
  itemText: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
};

export default OverviewList;