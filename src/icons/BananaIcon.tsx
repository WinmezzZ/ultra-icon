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

const BananaIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <g stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} clipPath="url(#prefix__a)">
          <path d="M16 32c-2.8-.933-6.034-3.173-7.476-5.425a1.716 1.716 0 0 1-.244-1.043l.245-3.75c.053-.81 1.01-1.24 1.671-.77C12.33 22.529 16.229 25 19 25c7 0 13-2.5 16-8" />
          <path
            fill="null"
            d="M26 43c10-2 19.243-12.485 16.867-23.059L42 16V8l-6-1c0 12.941-3 23-16 25-5.976.92-11.705-.386-16.13-2.922L5 36c2 5 11 9 21 7Z"
          />
        </g>
        <defs>
          <clipPath id="prefix__a">
            <path fill="#fff" d="M0 0h48v48H0z" />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
};

BananaIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default BananaIcon;
