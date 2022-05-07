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

const PaperclipIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg
        fill="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        {...props}
      >
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m26.122 37.435 14.142-14.142c2.828-2.829 4.243-9.9-.707-14.85-4.95-4.95-12.02-3.535-14.85-.706L5.617 26.828c-1.414 1.415-3.536 6.364.707 10.607 4.242 4.243 9.192 2.121 10.607.707l18.384-18.385c1.414-1.414 2.122-4.95 0-7.07-2.121-2.122-5.657-1.415-7.07 0L14.807 26.12"
        />
      </svg>
    </span>
  );
};

PaperclipIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default PaperclipIcon;
