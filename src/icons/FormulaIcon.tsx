/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const FormulaIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path
        fill="currentColor"
        d="M17.085 4.401C15.498 3.145 13.151 4.173 13 6.192l-.21 2.804H17a1 1 0 1 1 0 2h-4.362L11.486 26.31c-.288 3.831-4.918 5.583-7.67 2.902l-.514-.5a1 1 0 0 1 1.396-1.433l.513.5c1.536 1.497 4.12.52 4.281-1.62l1.14-15.163H8a1 1 0 1 1 0-2h2.783l.222-2.954c.272-3.618 4.477-5.46 7.322-3.209l.794.629a1 1 0 1 1-1.242 1.568l-.794-.629Zm-.88 11.87a1.115 1.115 0 0 1 1.75.38l1.863 4.113-5.525 5.525a1 1 0 0 0 1.414 1.414l4.992-4.992 1.574 3.476c.905 1.998 3.535 2.46 5.067.892l.375-.385a1 1 0 1 0-1.43-1.397l-.376.384a1.115 1.115 0 0 1-1.814-.319L22.21 21.2l5.497-5.497a1 1 0 0 0-1.414-1.414l-4.964 4.964-1.552-3.427a3.115 3.115 0 0 0-4.887-1.062l-.548.479a1 1 0 0 0 1.316 1.506l.548-.478Z"
      />
    </svg>
  );
};

FormulaIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const FormulaIcon = withWrapper(FormulaIconComponent);
export default FormulaIcon;
