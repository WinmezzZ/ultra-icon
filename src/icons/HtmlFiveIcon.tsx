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

const HtmlFiveIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          fill="null"
          stroke="#000"
          strokeWidth={4}
          d="M37.804 5H10.196a2 2 0 0 0-1.991 2.187l2.688 28.666a2 2 0 0 0 1.153 1.63l11.116 5.13a2 2 0 0 0 1.676 0l11.116-5.13a2 2 0 0 0 1.154-1.63l2.687-28.666A2 2 0 0 0 37.804 5Z"
        />
        <path
          stroke="#333"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M32 12H16l1 9h14l-1 11-6 3-6-3-.5-5"
        />
      </svg>
    </span>
  );
};

HtmlFiveIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default HtmlFiveIcon;
