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
const RomperIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m6.572 19.575-2.165-7.217c-.244-.813.048-1.696.765-2.15C8.057 8.377 14.642 5 24 5c9.343 0 15.8 3.366 18.759 5.198.748.463 1.068 1.377.816 2.22l-2.147 7.157A2 2 0 0 1 39.512 21H36c-1.105 0-2 .891-2 1.996v10.006c0 1.104-.905 2.011-1.973 2.295-1.299.345-2.952 1.09-4.027 2.703-2 3-2 6-2 6h-4s0-3-2-6c-1.075-1.613-2.728-2.358-4.027-2.703-1.068-.284-1.973-1.19-1.973-2.295V22.996A1.996 1.996 0 0 0 12 21H8.488a2 2 0 0 1-1.916-1.425Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M29.811 5.5a6 6 0 1 1-11.622 0"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M13.5 6.494A37.093 37.093 0 0 1 24 5c4.043 0 7.545.63 10.457 1.494"
      />
    </svg>
  );
};

RomperIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const RomperIcon = withWrapper(RomperIconComponent);
export default RomperIcon;
