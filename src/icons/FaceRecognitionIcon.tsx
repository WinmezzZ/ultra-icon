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

const FaceRecognitionIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M6 15V6h9M6 33v9h9m27-9v9h-9m0-36h9v9"
        />
        <path
          stroke="#000"
          strokeWidth={4}
          d="M24 38c6.627 0 12-6.268 12-14s-5.373-14-12-14-12 6.268-12 14 5.373 14 12 14Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="M6 24h36m-21.93 6.106c1.268.937 2.578 1.406 3.93 1.406 1.353 0 2.699-.47 4.039-1.406"
        />
      </svg>
    </span>
  );
};

FaceRecognitionIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default FaceRecognitionIcon;
