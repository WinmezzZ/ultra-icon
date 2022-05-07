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

const PureNaturalIcon = (p: SVGComponentProps) => {
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
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="M11 41c4.167-1.79 8.092-2.757 11.775-2.898 3.682-.142 8.424.49 14.225 1.898"
        />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M23.045 44c-.767-9.44-.449-16.773.955-22" />
        <path
          fill="null"
          fillRule="evenodd"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24 23.176c1.59-6.018 4.39-9.607 8.4-10.766 4.009-1.16 7.876-.629 11.6 1.594.019 4.892-2.105 8.476-6.37 10.751-4.266 2.276-8.81 1.75-13.63-1.579Zm-.208-1.062c.833-7.187-.837-12.248-5.01-15.185C14.61 3.992 9.776 3.336 4.284 4.96c-.959 6.63.508 11.643 4.399 15.039 3.892 3.396 8.928 4.101 15.109 2.114Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
};

PureNaturalIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default PureNaturalIcon;
