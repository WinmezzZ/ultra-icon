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

const TopbuzzIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          fill="null"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m18.905 18.168-8.58-1.824a1.032 1.032 0 0 1-.795-1.224l1.931-9.087a1.032 1.032 0 0 1 1.225-.795l29.281 6.224c.558.118.914.666.795 1.224l-1.931 9.087a1.032 1.032 0 0 1-1.225.795L31.1 20.76c-.387-.082-.617.046-.69.385L26.442 39.82a1.032 1.032 0 0 1-1.224.795l-9.087-1.931a1.032 1.032 0 0 1-.795-1.225l3.97-18.681c.072-.335-.062-.539-.4-.61Z"
        />
      </svg>
    </span>
  );
};

TopbuzzIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default TopbuzzIcon;
