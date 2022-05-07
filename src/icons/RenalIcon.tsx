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

const RenalIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M16 44c-1.462-4.349-1.934-8.016-1.415-11 .518-2.985 2.13-4.936 4.836-5.852-2.013 6.106-1.188 10.568 2.475 13.385 5.495 4.224 18.738 2.282 19.455-12.01.718-14.292-6.156-24.61-16.32-24.61-10.165 0-11.685 11-4.526 14.734-6.334 1.38-10.353 4.214-12.058 8.5C6.742 31.434 6.61 37.052 8.05 44"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M30.6 15c-2.898 1.727-3.948 3.31-3.15 4.746.797 1.437 2.605 1.437 5.424 0m.373 6.494c-3.74-.762-5.99-.486-6.748.828-1.137 1.97 3.87 4.826 5.686 5.183"
        />
      </svg>
    </span>
  );
};

RenalIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default RenalIcon;
