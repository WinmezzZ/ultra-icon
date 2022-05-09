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
const CoreosFillIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.671-9.696c-.04.85.037 1.697.118 2.544.005.06.027.074.08.08.406.054.813.102 1.222.127.964.061 1.928.139 2.896.085.55-.03 1.1-.048 1.648-.095a20.59 20.59 0 0 0 2.33-.312c.958-.194 1.907-.425 2.8-.845.406-.19.79-.415 1.114-.736.238-.235.408-.507.41-.86a8.92 8.92 0 0 0-.045-.94 9.022 9.022 0 0 0-.481-2.18c-.584-1.618-1.51-2.989-2.826-4.07a8.87 8.87 0 0 0-3.851-1.863c-.5-.105-1.006-.144-1.514-.18-.573-.041-1.064.12-1.488.514-.495.457-.837 1.024-1.122 1.633-.667 1.427-.973 2.954-1.166 4.508a15.215 15.215 0 0 0-.125 2.59zm3.57-5.03c.959.03 1.77.324 2.494.856a4.326 4.326 0 0 1 1.714 2.612c.068.304.097.612.103.922.005.209-.11.362-.262.49-.307.258-.67.401-1.05.508-.74.207-1.496.326-2.265.366-.5.026-1 .035-1.5.01-.192-.01-.385-.024-.577-.032-.06-.002-.08-.02-.084-.081-.023-.434-.057-.868-.05-1.302.016-1.026.094-2.045.397-3.034.1-.329.223-.65.42-.936.173-.25.378-.437.66-.38z" />
    </svg>
  );
};

CoreosFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CoreosFillIcon = withWrapper(CoreosFillIconComponent);
export default CoreosFillIcon;
