/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}
const WechatLineIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <g fillRule="evenodd">
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          fillRule="nonzero"
          d="M10 14.676v-.062c0-2.508 2.016-4.618 4.753-5.233C14.389 7.079 11.959 5.2 8.9 5.2 5.58 5.2 3 7.413 3 9.98c0 .969.36 1.9 1.04 2.698.032.038.083.094.152.165a3.568 3.568 0 0 1 1.002 2.238 3.612 3.612 0 0 1 2.363-.442c.166.026.302.046.405.06A7.254 7.254 0 0 0 10 14.675zm.457 1.951a9.209 9.209 0 0 1-2.753.055 19.056 19.056 0 0 1-.454-.067 1.612 1.612 0 0 0-1.08.212l-1.904 1.148a.806.806 0 0 1-.49.117.791.791 0 0 1-.729-.851l.15-1.781a1.565 1.565 0 0 0-.439-1.223 5.537 5.537 0 0 1-.241-.262C1.563 12.855 1 11.473 1 9.979 1 6.235 4.537 3.2 8.9 3.2c4.06 0 7.403 2.627 7.85 6.008 3.372.153 6.05 2.515 6.05 5.406 0 1.193-.456 2.296-1.229 3.19-.051.06-.116.13-.195.21a1.24 1.24 0 0 0-.356.976l.121 1.423a.635.635 0 0 1-.59.68.66.66 0 0 1-.397-.094l-1.543-.917a1.322 1.322 0 0 0-.874-.169c-.147.023-.27.04-.368.053a7.72 7.72 0 0 1-.969.062c-2.694 0-4.998-1.408-5.943-3.401zm6.977 1.31a3.325 3.325 0 0 1 1.676.174 3.25 3.25 0 0 1 .841-1.502c.05-.05.087-.09.106-.112.489-.565.743-1.213.743-1.883 0-1.804-1.903-3.414-4.4-3.414-2.497 0-4.4 1.61-4.4 3.414s1.903 3.414 4.4 3.414c.241 0 .48-.016.714-.046.08-.01.188-.025.32-.046z"
        />
      </g>
    </svg>
  );
};

WechatLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const WechatLineIcon = withWrapper(WechatLineIconComponent);
export default WechatLineIcon;
