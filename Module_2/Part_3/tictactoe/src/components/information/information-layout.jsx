import PropTypes from 'prop-types';

export const InformationLayout = ({ information }) => <div>{information}</div>;

InformationLayout.PropTypes = {
  information: PropTypes.string,
};
