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

const AvocadoOneIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M7 32c3 5 8 8 13 9s10.808.144 15-3c6-4.5 8-12 8-17s-2-10.5-3-12-3-2-3-2"
        />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M21 13c-4.355 1.605-9 0-13 3-4.696 3.523-6 9-3 14 2.352 3.92 6 6 12 6s9.764-1.765 14-6c6-6 8-15.5 8-19s-2.5-5.5-6-5-6.427 4.947-12 7Z"
        />
        <path
          fill="null"
          stroke="#333"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M21.945 20.117c-1.223.48-2.527 0-3.65.898-1.32 1.054-1.686 2.693-.843 4.19.66 1.172 1.685 1.795 3.37 1.795s2.742-.528 3.931-1.796C26.438 23.41 27 20.566 27 19.52c0-1.047-.702-1.646-1.685-1.496-.983.15-1.805 1.48-3.37 2.094Z"
        />
      </svg>
    </span>
  );
};

AvocadoOneIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default AvocadoOneIcon;
