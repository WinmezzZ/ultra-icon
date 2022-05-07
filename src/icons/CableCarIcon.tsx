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

const CableCarIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          fill="null"
          stroke="#000"
          strokeLinejoin="bevel"
          strokeWidth={4}
          d="M13.28 42a2 2 0 0 1-1.816-1.162l-5.077-11a2 2 0 0 1 0-1.676l5.077-11A2 2 0 0 1 13.28 16h21.44a2 2 0 0 1 1.816 1.162l5.077 11a2 2 0 0 1 0 1.676l-5.077 11A2 2 0 0 1 34.72 42H13.28Z"
        />
        <path
          stroke="#333"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M9 23h9v10H8m31-10H25v9h15"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M38 4s-9.5 3.5-17.436 4.394C12.628 9.288 8 9 8 9m18-1v8l-9-7m-6.385 10-4.228 9.162a2 2 0 0 0 0 1.676L9 35.5"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="bevel"
          strokeWidth={4}
          d="m37.385 19 4.228 9.162a2 2 0 0 1 0 1.676L39 35.5"
        />
      </svg>
    </span>
  );
};

CableCarIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default CableCarIcon;
