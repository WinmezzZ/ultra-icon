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

const DragIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          fill="#000"
          fillRule="evenodd"
          d="M19 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-4 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm22-32a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-4 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
};

DragIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default DragIcon;
