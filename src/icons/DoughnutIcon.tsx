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
const DoughnutIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <circle cx={24} cy={24} r={19} stroke="#000" strokeWidth={4} />
      <circle cx={24} cy={24} r={7} fill="null" stroke="#000" strokeWidth={4} />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M6 28s3.389-2.958 6-1c4 3 6 1 6 1m11 1c.667-1 4-4.286 7-3 4 1.714 7 0 7-1"
      />
    </svg>
  );
};

DoughnutIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const DoughnutIcon = withWrapper(DoughnutIconComponent);
export default DoughnutIcon;
