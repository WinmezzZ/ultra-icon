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
const UnionSelectionIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M32 16h9a2 2 0 0 1 2 2v23a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2v-9"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M32 16V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v23a2 2 0 0 0 2 2h9m25-16L17 40M32 7 7 32m25-16L16 32m27-8L24 43m0-38L5 24m38 10-9 9M14 5l-9 9"
      />
    </svg>
  );
};

UnionSelectionIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const UnionSelectionIcon = withWrapper(UnionSelectionIconComponent);
export default UnionSelectionIcon;
