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
const JoystickIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <g fill="none" fillRule="evenodd" strokeLinejoin="round">
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <g stroke="#000" strokeWidth={4} transform="translate(4 4)">
          <path fill="null" fillRule="nonzero" d="M0 29h40v10H0z" />
          <path strokeLinecap="round" d="M22 22h12v7H22z" />
          <circle cx={14} cy={5} r={5} fill="null" fillRule="nonzero" />
          <path strokeLinecap="round" d="M12 10 5 29" />
        </g>
      </g>
    </svg>
  );
};

JoystickIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const JoystickIcon = withWrapper(JoystickIconComponent);
export default JoystickIcon;
