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

const PregnantWomenIcon = (p: SVGComponentProps) => {
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
          strokeLinejoin="round"
          strokeWidth={4}
          d="M33 4v7.519c7.312 4.194 10.614 9.775 9.906 16.742-.708 6.967-4.01 12.214-9.906 15.74M13.772 4c-2.138.37-3.677 1.622-4.616 3.758C7.746 10.96 5 21.964 5 23.726c0 1.762 3.568 6.509 12.052 13.71 3.931 3.336 6.255 3.166 7.513.928s-.407-3.674-2.515-5.327c-3.863-3.029-8.948-7.822-8.948-9.926 0-1.403 1.317-5.677 3.95-12.824"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="M8.201 28.941a95.275 95.275 0 0 0 2.8 15M33 19.945c1.547 1.027 2.547 2.364 3 4.012.453 1.647.585 3.149.396 4.506"
        />
      </svg>
    </span>
  );
};

PregnantWomenIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default PregnantWomenIcon;
