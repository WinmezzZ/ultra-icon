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
const WebcamLineIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M11 21v-1.07A7.002 7.002 0 0 1 5 13V8a7 7 0 1 1 14 0v5a7.002 7.002 0 0 1-6 6.93V21h4v2H7v-2h4zm1-18a5 5 0 0 0-5 5v5a5 5 0 0 0 10 0V8a5 5 0 0 0-5-5zm0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
    </svg>
  );
};

WebcamLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const WebcamLineIcon = withWrapper(WebcamLineIconComponent);
export default WebcamLineIcon;
