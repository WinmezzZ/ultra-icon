/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const ChargingPileLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M14 19h1v2H2v-2h1V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v8h2a2 2 0 0 1 2 2v4a1 1 0 0 0 2 0v-7h-2a1 1 0 0 1-1-1V6.414l-1.657-1.657 1.414-1.414 4.95 4.95A.997.997 0 0 1 22 9v9a3 3 0 0 1-6 0v-4h-2v5zm-9 0h7V5H5v14zm4-8h3l-4 6v-4H5l4-6v4z" />
    </svg>
  );
};

ChargingPileLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ChargingPileLineIcon = withWrapper(ChargingPileLineIconComponent);
export default ChargingPileLineIcon;
