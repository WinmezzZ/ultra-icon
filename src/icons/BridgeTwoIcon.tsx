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
const BridgeTwoIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path stroke="#000" strokeWidth={4} d="M8 13s6 10 16 10 16-10 16-10" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M8 10v28m32-28v28" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="M4 30.5s12.188-.597 20-.5c7.82.098 20 1 20 1M16 21v9m8-7v7m8-9v9M8 13l-4 5m40 0-4-5"
      />
    </svg>
  );
};

BridgeTwoIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BridgeTwoIcon = withWrapper(BridgeTwoIconComponent);
export default BridgeTwoIcon;
