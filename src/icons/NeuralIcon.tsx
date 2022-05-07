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

const NeuralIcon = (p: SVGComponentProps) => {
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
          fill="null"
          fillRule="evenodd"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M20.5 33c1.966 0 2.79-3.538 4.5-4.247 1.772-.735 4.417 1.336 5.753 0 1.336-1.335-.306-4.302.43-6.074C31.89 20.969 35 20.466 35 18.5c0-1.966-3.538-2.44-4.247-4.15-.735-1.773 1.336-4.767 0-6.103-1.336-1.336-4.487.735-6.26 0C22.783 7.538 22.466 4 20.5 4c-1.966 0-2.496 3.965-4.206 4.674-1.772.735-4.711-1.763-6.047-.427-1.336 1.336.735 3.98 0 5.753C9.538 15.71 6 16.534 6 18.5c0 1.966 3.538 2.47 4.247 4.179.735 1.772-1.336 4.739 0 6.074 1.336 1.336 4.275-.735 6.047 0 1.71.71 2.24 4.247 4.206 4.247Z"
          clipRule="evenodd"
        />
        <path
          fill="null"
          stroke="#333"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M20 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="M16.57 30c-1.209 6.8-.494 11.054 2.144 12.766 3.958 2.568 6.734.561 8.183-.91 1.448-1.472 6.153-7.912 10.18-7.912 4.026 0 5.238 3.88 4.856 6-.254 1.413-.911 2.458-1.97 3.136"
        />
      </svg>
    </span>
  );
};

NeuralIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default NeuralIcon;
