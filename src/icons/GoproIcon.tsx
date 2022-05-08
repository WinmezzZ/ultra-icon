/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}
const GoproIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 7h13v34H5z" />
      <rect width={19} height={22} x={24} y={13} fill="null" stroke="#000" strokeWidth={4} rx={3} />
      <circle cx={33.5} cy={24.5} r={3.5} fill="null" stroke="#333" strokeWidth={4} />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M18 24h6" />
      <rect width={5} height={5} x={9} y={15} fill="#000" rx={2.5} />
    </svg>
  );
};

GoproIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const GoproIcon = withWrapper(GoproIconComponent);
export default GoproIcon;
