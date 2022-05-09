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
const SpectrumFillIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M13.2 2.006C21.24 2.093 22 3.25 22 12l-.006 1.2C21.907 21.24 20.75 22 12 22l-1.2-.006c-7.658-.083-8.711-1.136-8.794-8.795L2 11.691l.006-.89c.085-7.85 1.19-8.76 9.382-8.8l1.811.005zM8.25 7h-.583a.667.667 0 0 0-.66.568L7 7.667v3.666c0 .335.247.612.568.66l.099.007h.583a3.75 3.75 0 0 1 3.745 3.55l.005.2v.583c0 .335.247.612.568.66l.099.007h3.666a.667.667 0 0 0 .66-.568l.007-.099v-.583a8.75 8.75 0 0 0-8.492-8.746L8.25 7z" />
    </svg>
  );
};

SpectrumFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SpectrumFillIcon = withWrapper(SpectrumFillIconComponent);
export default SpectrumFillIcon;
