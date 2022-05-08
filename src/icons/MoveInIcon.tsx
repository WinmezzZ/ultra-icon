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
const MoveInIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m20 12 4 4 4-4m-4 4V4m-4 32 4-4 4 4m-4-4v12m12-24-4 4 4 4m-4-4h12m-32-4 4 4-4 4m4-4H4"
      />
      <circle cx={24} cy={24} r={2} stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
};

MoveInIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const MoveInIcon = withWrapper(MoveInIconComponent);
export default MoveInIcon;
