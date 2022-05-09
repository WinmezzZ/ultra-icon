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
const Building4FillIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M21 20h2v2H1v-2h2V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v17zM8 11v2h3v-2H8zm0-4v2h3V7H8zm0 8v2h3v-2H8zm5 0v2h3v-2h-3zm0-4v2h3v-2h-3zm0-4v2h3V7h-3z" />
    </svg>
  );
};

Building4FillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const Building4FillIcon = withWrapper(Building4FillIconComponent);
export default Building4FillIcon;
