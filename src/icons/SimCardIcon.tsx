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
const SimCardIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeWidth={4}
        d="M10 44h28a2 2 0 0 0 2-2V14.885a2 2 0 0 0-.655-1.48L29.572 4.52A2 2 0 0 0 28.227 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2Z"
      />
      <circle cx={17} cy={14} r={3} fill="#000" />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M16 23h16v14H16z"
      />
    </svg>
  );
};

SimCardIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SimCardIcon = withWrapper(SimCardIconComponent);
export default SimCardIcon;
