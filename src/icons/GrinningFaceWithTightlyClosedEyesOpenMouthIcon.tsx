/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import iconStyle from '../styles';
import merge from '../utils/merge';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}
const defaultProps = {
  size: 24,
};

const GrinningFaceWithTightlyClosedEyesOpenMouthIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          fill="null"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
        />
        <path
          stroke="#333"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24 35c5 0 7-4 7-4H17s2 4 7 4Zm8-18-3 3 3 3m-16-6 3 3-3 3"
        />
      </svg>
    </span>
  );
};

GrinningFaceWithTightlyClosedEyesOpenMouthIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default GrinningFaceWithTightlyClosedEyesOpenMouthIcon;
