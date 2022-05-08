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
const GameConsoleOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <rect width={28} height={40} x={10} y={4} stroke="#000" strokeWidth={4} rx={2} />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M16 12h16v10H16z"
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M16 32h8m-4 4v-8" />
      <rect width={4} height={4} x={27} y={33} fill="#000" rx={2} />
      <rect width={4} height={4} x={30} y={26} fill="#000" rx={2} />
    </svg>
  );
};

GameConsoleOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const GameConsoleOneIcon = withWrapper(GameConsoleOneIconComponent);
export default GameConsoleOneIcon;
