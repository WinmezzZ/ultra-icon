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
const ChatSettingsLineIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M22 12h-2V5H4v13.385L5.763 17H12v2H6.455L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v8zm-7.855 7.071a4.004 4.004 0 0 1 0-2.142l-.975-.563 1-1.732.976.563A3.996 3.996 0 0 1 17 14.126V13h2v1.126a3.99 3.99 0 0 1 1.854 1.071l.976-.563 1 1.732-.975.563a4.004 4.004 0 0 1 0 2.142l.975.563-1 1.732-.976-.563c-.501.51-1.14.887-1.854 1.071V23h-2v-1.126a3.996 3.996 0 0 1-1.854-1.071l-.976.563-1-1.732.975-.563zM18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    </svg>
  );
};

ChatSettingsLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ChatSettingsLineIcon = withWrapper(ChatSettingsLineIconComponent);
export default ChatSettingsLineIcon;
