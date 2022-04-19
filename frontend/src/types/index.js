import PropTypes from 'prop-types';

export const ClientShape = {
  name: PropTypes.string,
  category: PropTypes.string,
  data: PropTypes.instanceOf(Date),
  status: PropTypes.string,
  address: PropTypes.string,
  value: PropTypes.number,
  alreadyPaid: PropTypes.number,
  info: PropTypes.string,
};
