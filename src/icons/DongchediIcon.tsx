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

const DongchediIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          fill="#000"
          fillRule="evenodd"
          d="M38.16 33.56c-4.316-1.52-8.95-2.315-13.718-2.315-5.06 0-9.967.895-14.502 2.6a15.53 15.53 0 0 0 1.557 3.142L6.455 40.24A21.69 21.69 0 0 1 3 28.45C3 16.619 12.385 7 24 7s21 9.62 21 21.449a21.68 21.68 0 0 1-3.753 12.24l-4.959-3.378a15.548 15.548 0 0 0 1.873-3.751Zm.44-8.676C37.034 18.061 31.08 13 24 13c-7.172 0-13.188 5.192-14.657 12.15-.237 1.33.123 2.486 1.11 2.181a47.457 47.457 0 0 1 13.989-2.086c4.657 0 9.212.665 13.532 1.949.854.253.981-.817.641-2.226a.82.82 0 0 1-.016-.084Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
};

DongchediIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default DongchediIcon;
