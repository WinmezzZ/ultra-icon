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
const TelescopeIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <rect width={12} height={38} x={6} y={5} stroke="#000" strokeLinejoin="round" strokeWidth={4} rx={6} />
      <rect width={12} height={38} x={30} y={5} stroke="#000" strokeLinejoin="round" strokeWidth={4} rx={6} />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M12 43a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm24 0a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M30 21a6 6 0 0 0-12 0m12 10a6 6 0 0 0-12 0"
      />
    </svg>
  );
};

TelescopeIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TelescopeIcon = withWrapper(TelescopeIconComponent);
export default TelescopeIcon;
