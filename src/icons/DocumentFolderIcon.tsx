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

const DocumentFolderIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          fill="null"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M32 6H22v36h10V6Zm10 0H32v36h10V6ZM10 6l8 1-3.5 35L6 41l4-35Z"
        />
        <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M37 18v-3m-10 3v-3" />
      </svg>
    </span>
  );
};

DocumentFolderIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default DocumentFolderIcon;
