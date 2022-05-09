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
const FlashlightLineIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M13 9h8L11 24v-9H4l9-15v9zm-2 2V7.22L7.532 13H13v4.394L17.263 11H11z" />
    </svg>
  );
};

FlashlightLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const FlashlightLineIcon = withWrapper(FlashlightLineIconComponent);
export default FlashlightLineIcon;
