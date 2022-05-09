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
const OpenArmFillIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm6 5v5h-2v-5c0-4.451 2.644-8.285 6.447-10.016l.828 1.82A9.002 9.002 0 0 0 18 17zM8 17v5H6v-5A9.002 9.002 0 0 0 .725 8.805l.828-1.821A11.002 11.002 0 0 1 8 17z" />
    </svg>
  );
};

OpenArmFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const OpenArmFillIcon = withWrapper(OpenArmFillIconComponent);
export default OpenArmFillIcon;
