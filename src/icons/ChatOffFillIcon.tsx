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
const ChatOffFillIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="m2.808 1.393 19.799 19.8-1.415 1.414-3.608-3.608L6.455 19 2 22.5V4c0-.17.042-.329.116-.469l-.723-.723 1.415-1.415zM21 3a1 1 0 0 1 1 1v13.785L7.214 3H21z" />
    </svg>
  );
};

ChatOffFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ChatOffFillIcon = withWrapper(ChatOffFillIconComponent);
export default ChatOffFillIcon;