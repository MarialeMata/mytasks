import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';
import OverviewCard from './OverviewCard';

const OverviewPage = ({ 
  projects, 
  tasks, 
  projectCount, 
  taskCount, 
  projectsLoading, 
  tasksLoading
}) => { 
  return (
    <Row>
      <OverviewCard 
        itemCount={projectCount} 
        items={projects} 
        source="/overview" 
        itemType="project"
        loading={projectsLoading} 
      />
      <OverviewCard 
        itemCount={taskCount} 
        items={tasks} 
        source="/overview" 
        itemType="task"
        loading={tasksLoading}
      />
    </Row>
  );
};

OverviewPage.propTypes = {  
  projects: PropTypes.array.isRequired,
  tasks: PropTypes.array.isRequired,
  projectCount: PropTypes.number.isRequired,
  taskCount: PropTypes.number.isRequired,
  projectsLoading: PropTypes.bool.isRequired,
  tasksLoading: PropTypes.bool.isRequired
};

export default OverviewPage;
