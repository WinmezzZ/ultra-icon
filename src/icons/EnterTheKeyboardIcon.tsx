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
const EnterTheKeyboardIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M42 7H6a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M12 19h2m7 0h2m6 0h7m-24 9h24"
      />
    </svg>
  );
};

EnterTheKeyboardIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const EnterTheKeyboardIcon = withWrapper(EnterTheKeyboardIconComponent);
export default EnterTheKeyboardIcon;
