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
const Key2FillIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="m10.313 11.566 7.94-7.94 2.121 2.121-1.414 1.414 2.121 2.121-3.535 3.536-2.121-2.121-2.99 2.99a5.002 5.002 0 0 1-7.97 5.849 5 5 0 0 1 5.848-7.97zm-.899 5.848a2 2 0 1 0-2.828-2.828 2 2 0 0 0 2.828 2.828z" />
    </svg>
  );
};

Key2FillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const Key2FillIcon = withWrapper(Key2FillIconComponent);
export default Key2FillIcon;
