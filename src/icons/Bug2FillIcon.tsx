/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const Bug2FillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M5.07 16A7.06 7.06 0 0 1 5 15v-1H3v-2h2v-1c0-.34.024-.673.07-1H3V8h2.674a7.03 7.03 0 0 1 2.84-3.072l-1.05-1.05L8.88 2.465l1.683 1.684a7.03 7.03 0 0 1 2.876 0l1.683-1.684 1.415 1.415-1.05 1.05A7.03 7.03 0 0 1 18.326 8H21v2h-2.07c.046.327.07.66.07 1v1h2v2h-2v1c0 .34-.024.673-.07 1H21v2h-2.674a7 7 0 0 1-12.652 0H3v-2h2.07zM9 10v2h6v-2H9zm0 4v2h6v-2H9z" />
    </svg>
  );
};

Bug2FillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const Bug2FillIcon = withWrapper(Bug2FillIconComponent);
export default Bug2FillIcon;
