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

const ChestIcon = (p: SVGComponentProps) => {
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
          d="M16.997 3.5v5.149c0 1.75-.964 2.425-4.595 3.358-3.63.932-4.706 1.482-5.554 3.093C6.283 16.172 6 17.83 6 20.072V37.5"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M34.942 21.509c.237 2.877-.25 5.39-1.463 7.537-1.212 2.148-3.353 3.457-6.422 3.926M13.059 21.509c-.239 2.877.25 5.39 1.469 7.537 1.218 2.148 3.376 3.457 6.474 3.926"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="M13 43.512c1.333-1.555 2-3.245 2-5.072v-8.363m20 13.435c-1.333-1.555-2-3.245-2-5.072v-8.363M31 3.5v5.149c0 1.75.964 2.425 4.595 3.358 3.63.932 4.706 1.482 5.554 3.093.565 1.073.848 2.73.848 4.972V37.5"
        />
      </svg>
    </span>
  );
};

ChestIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default ChestIcon;
