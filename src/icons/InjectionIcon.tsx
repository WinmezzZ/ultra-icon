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

const InjectionIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          fill="null"
          fillRule="evenodd"
          d="M38.168 22.262 19.077 41.354 6.349 28.626 25.44 9.534"
          clipRule="evenodd"
        />
        <path
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M38.168 22.262 19.077 41.354 6.349 28.626 25.44 9.534"
        />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="m21.905 5.999 19.8 19.799" />
        <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="m14.834 28.626 4.243 4.243" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="m6.35 41.353 6.363-6.363m19.092-19.092 3.534-3.535"
        />
      </svg>
    </span>
  );
};

InjectionIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default InjectionIcon;
