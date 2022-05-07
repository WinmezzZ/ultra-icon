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

const OpenIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m27.947 16.828 12.81-9.09a1.832 1.832 0 0 1 2.451 2.686L41 13l-5.276 7.035a2 2 0 0 0-.207 2.056l7.13 15.053A2 2 0 0 1 40.84 40h-8.204a2 2 0 0 1-1.96-1.604L27.52 22.774l-.406-4.119a2 2 0 0 1 .833-1.827ZM28 23l7-2m-15.064-3.897L7.209 8.196a1.812 1.812 0 0 0-2.405 2.675L7 13.39l5.232 6.636a2 2 0 0 1 .237 2.095L5.353 37.144A2 2 0 0 0 7.16 40h8.162a2 2 0 0 0 1.97-1.652L20 23l.753-3.878a2 2 0 0 0-.817-2.02ZM13 21l7 2"
        />
      </svg>
    </span>
  );
};

OpenIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default OpenIcon;
