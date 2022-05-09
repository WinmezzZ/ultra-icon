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
const CollageFillIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M11.189 13.157 12.57 21H4a1 1 0 0 1-1-1v-5.398l8.189-1.445zM20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-5.398L11.428 3H20zM9.397 3l1.444 8.188L3 12.57V4a1 1 0 0 1 1-1h5.397z" />
    </svg>
  );
};

CollageFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CollageFillIcon = withWrapper(CollageFillIconComponent);
export default CollageFillIcon;
