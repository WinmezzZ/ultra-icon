/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const CodepenFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M12 10.202 9.303 12 12 13.798 14.697 12 12 10.202zm4.5.596L19.197 9 13 4.869v3.596l3.5 2.333zm3.5.07L18.303 12 20 13.131V10.87zm-3.5 2.334L13 15.535v3.596L19.197 15 16.5 13.202zM11 8.465V4.869L4.803 9 7.5 10.798 11 8.465zM4.803 15 11 19.131v-3.596l-3.5-2.333L4.803 15zm.894-3L4 10.869v2.262L5.697 12zM2 9a1 1 0 0 1 .445-.832l9-6a1 1 0 0 1 1.11 0l9 6A1 1 0 0 1 22 9v6a1 1 0 0 1-.445.832l-9 6a1 1 0 0 1-1.11 0l-9-6A1 1 0 0 1 2 15V9z" />
    </svg>
  );
};

CodepenFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CodepenFillIcon = withWrapper(CodepenFillIconComponent);
export default CodepenFillIcon;
