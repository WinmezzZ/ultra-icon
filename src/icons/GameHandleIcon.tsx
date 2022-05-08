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
const GameHandleIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <g fill="none" fillRule="evenodd" strokeLinejoin="round">
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <g strokeWidth={4} transform="translate(4 4)">
          <rect width={40} height={24} y={14} fill="null" fillRule="nonzero" stroke="#000" rx={12} />
          <path stroke="#FFF" strokeLinecap="round" d="M12 22v8m-4-4h8" />
          <path stroke="#000" strokeLinecap="round" d="M20 12V5.714h8V0" />
          <circle cx={28} cy={26} r={4} fill="null" fillRule="nonzero" stroke="#FFF" />
        </g>
      </g>
    </svg>
  );
};

GameHandleIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const GameHandleIcon = withWrapper(GameHandleIconComponent);
export default GameHandleIcon;
