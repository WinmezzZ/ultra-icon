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

const PagodaIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          fill="null"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M18 16h12s2.424 2.672 4.5 3.429c1.301.474 3.5.571 3.5.571s-1.242.775-2.1 1.143C34.815 21.608 33 22 33 22H15s-1.815-.392-2.9-.857C11.242 20.775 10 20 10 20s2.199-.098 3.5-.571C15.576 18.673 18 16 18 16Zm-1 12h14s2.627 2.672 5 3.429c1.487.474 4 .571 4 .571s-1.42.775-2.4 1.143C36.36 33.608 34 34 34 34H14s-2.36-.392-3.6-.857C9.42 32.775 8 32 8 32s2.513-.098 4-.571C14.373 30.673 17 28 17 28Zm1-20.571C20.45 6.299 24 4 24 4s3.55 2.298 6 3.429c.772.356 2 .857 2 .857s-.726.556-1.2.857C30.183 9.535 29 10 29 10H19s-1.183-.465-1.8-.857c-.474-.301-1.2-.857-1.2-.857s1.228-.501 2-.857Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M21 10v6m6-6v6m-8 6v6m10-6v6m-13 6v10h16V34"
        />
      </svg>
    </span>
  );
};

PagodaIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default PagodaIcon;
