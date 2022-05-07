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

const FileHidingIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M10 44h28a2 2 0 0 0 2-2V14L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M16 23a8.64 8.64 0 0 0 1.255 2.517C18.783 27.63 21.235 29 24 29s5.217-1.37 6.745-3.483A8.64 8.64 0 0 0 32 23m-10.479 6.068-1.035 3.864m6-3.864 1.036 3.864m2.832-5.578 2.828 2.828M15 30.01l2.828-2.828M30 4v10h10"
        />
      </svg>
    </span>
  );
};

FileHidingIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default FileHidingIcon;
